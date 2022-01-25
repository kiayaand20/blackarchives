from django.db import models

# Create your models here.


class Director(models.Model):
    name = models.CharField(max_length=256)
    roles = models.CharField(max_length=256)
    biography = models.CharField(max_length=512, blank=True, null=True)
    image = models.CharField(max_length=256)


class Film(models.Model):
    title = models.CharField(max_length=256)
    year = models.DateField(max_length=256)
    description = models.CharField(max_length=512, blank=True, null=True)
    image = models.CharField(max_length=256)
    director = models.ForeignKey(
        Director, on_delete=models.CASCADE, related_name='films')