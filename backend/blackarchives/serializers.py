from rest_framework import serializers
from blackarchives.models import Director, Film


class FilmSerializer(serializers.HyperlinkedModelSerializer):
    director = serializers.StringRelatedField()
  
    class Meta:
        model = Film
        fields = ['id', 'title', 'year', 'description', 'image', 'director']

class DirectorSerializer(serializers.HyperlinkedModelSerializer):
    films = FilmSerializer(many=True)

    class Meta:
        model = Director
        fields = ['id', 'name', 'roles', 'biography', 'image', 'films']
        
    
    def create(self, validated_data):
        films_data = validated_data.pop('films')
        director = Director.objects.create(**validated_data)
        for films_data in films_data:
            Film.objects.create(director=director, **films_data)
        return director