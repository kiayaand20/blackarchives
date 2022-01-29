# Create your views here.
from rest_framework import viewsets, permissions
from blackarchives.serializers import FilmSerializer, DirectorSerializer
from blackarchives.models import Film, Director


class FilmViewSet(viewsets.ModelViewSet):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer
    permission_classes = [permissions.AllowAny]


class DirectorViewSet(viewsets.ModelViewSet):
    queryset = Director.objects.all()
    serializer_class = DirectorSerializer
    permission_classes = [permissions.AllowAny]
