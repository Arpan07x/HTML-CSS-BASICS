from django.db import models

# Create your models here.

class Vehicle(models.Model):
    name = models.CharField(max_length=100)
    photo = models.ImageField(upload_to = 'vehicles/')
    description = models.TextField()

    def __str__(self):
        return self.name
    