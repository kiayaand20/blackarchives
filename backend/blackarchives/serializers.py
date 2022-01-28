from rest_framework import serializers
from blackarchives.models import Director, Film


class FilmSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Film
        fields = ['id', 'title', 'year', 'description', 'image', 'director']


class DirectorSerializer(serializers.HyperlinkedModelSerializer):
    films = serializers.FilmSerializer(many=True)

    class Meta:
        model = Director
        fields = ['id', 'name', 'roles', 'biography', 'image', 'films']
        
    
    def create(self, validated_data):
        films_data = validated_data.pop('films')
        director = Director.objects.create(**validated_data)
        for film_data in films_data:
            Film.objects.create(director=director, **film_data)
        return director