from django.db import models

# Create your models here.


class Director(models.Model):
    name = models.CharField(max_length=256)
    roles = models.CharField(max_length=256)
    biography = models.CharField(max_length=512, blank=True, null=True)
    image = models.CharField(max_length=256)

    def __str__(self):
        return self.name


class Film(models.Model):
    title = models.CharField(max_length=256)
    release = models.IntegerField(null=True)
    description = models.CharField(max_length=512, blank=True, null=True)
    image = models.CharField(max_length=256)
    director = models.ForeignKey(
        Director, on_delete=models.CASCADE, related_name='films')

    def __str__(self):
        return self.title
