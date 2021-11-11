from rest_framework import serializers
from web_admin.models import Professionals

class ProfessionalCitySerializer(serializers.ModelSerializer):
  class Meta:
    model = Professionals
    fields = ("full_name", "user_picture", "city")