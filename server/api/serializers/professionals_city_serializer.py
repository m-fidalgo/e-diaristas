from rest_framework import serializers
from web_admin.models import Professionals
import random

class ProfessionalsCitySerializer(serializers.ModelSerializer):
  rating = serializers.SerializerMethodField()
    
  class Meta:
    model = Professionals
    fields = ("full_name", "user_picture", "city", "rating")
    
  # o painel n permite cadastrar avaliações - gerar random
  def get_rating(self, obj):
    return random.randint(0, 5)