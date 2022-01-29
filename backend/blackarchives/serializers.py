from rest_framework import serializers
from blackarchives.models import Director, Film


class FilmSerializer(serializers.ModelSerializer):
    director = serializers.StringRelatedField()
  
    class Meta:
        model = Film
        fields = ['id', 'title', 'release', 'description', 'image', 'director']

class DirectorSerializer(serializers.ModelSerializer):
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
      
    def update(self, instance, validated_data):
        films_data = validated_data.pop('films')
        films = (instance.films).all()
        films = list(films)
        instance.name = validated_data.get('name', instance.name)
        instance.roles = validated_data.get('roles', instance.roles)
        instance.biography = validated_data.get('biography', instance.biography)
        instance.image = validated_data.get('image', instance.image)
        instance.save()

        for films_data in films_data:
            films = films.pop(0)
            films.title = films_data.get('name', films.name)
            films.release = films_data.get('release', films.release)
            films.description = films_data.get('description', films.description)
            films.image = films_data.get('image', films.image)
            films.save()
        return instance