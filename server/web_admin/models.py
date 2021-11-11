from django.db import models

class Professionals(models.Model):
  full_name = models.CharField(max_length=100, null=False, blank=False)
  cpf = models.CharField(max_length=11, null=False, blank=False, unique=True)
  email = models.EmailField(null=False, blank=False, unique=True)
  phone = models.CharField(max_length=11, null=False, blank=False)
  address = models.CharField(max_length=60, null=False, blank=False)
  number = models.IntegerField(null=False, blank=False)
  county = models.CharField(max_length=30, null=False, blank=False)
  complement = models.CharField(max_length=100, null=False, blank=True)
  zip_code = models.CharField(max_length=8, null=False, blank=False)
  state = models.CharField(max_length=2, null=False, blank=False)
  city = models.CharField(max_length=30, null=False, blank=False)
  ibge_code = models.IntegerField(null=False, blank=False)
  user_picture = models.ImageField(null=False)
  