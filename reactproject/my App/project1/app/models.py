from django.db import models


# Create your models here.
class Employee(models.Model):
    name = models.CharField(max_length=64)
    username = models.CharField(max_length=64)
    email = models.EmailField()
