from rest_framework import serializers
from blackarchives.models import Director, Film


class FilmSerializer(serializers.ModelSerializer):
  
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
        for film_data in films_data:
            Film.objects.create(director=director, **film_data)
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

        for film_data in films_data:
            film = films.pop(0)
            film.title = film_data.get('title', film.title)
            film.release = film_data.get('release', film.release)
            film.description = film_data.get('description', film.description)
            film.image = film_data.get('image', film.image)
            film.save()
        return instance