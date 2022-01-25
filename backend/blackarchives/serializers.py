from rest_framework import serializers
from blackarchives.models import Director, Film


class FilmSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Film
        fields = ['title', 'year', 'description', 'image', 'director']


class DirectorSerializer(serializers.HyperlinkedModelSerializer):
    films = serializers.StringRelatedField(many=True)

    class Meta:
        model = Director
        fields = ['name', 'roles', 'biography', 'image', 'films']
