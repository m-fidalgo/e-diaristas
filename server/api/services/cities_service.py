from requests import api
from web_admin.services import zip_code_service
from web_admin.models import Professionals
from rest_framework import serializers
import json

def get_professionals_by_city(zip_code):
  ibge_code = get_city_zip_code(zip_code)['ibge']
  try:
    professionals = Professionals.objects.filter(ibge_code=ibge_code).order_by('id')
    return professionals
  except Professionals.DoesNotExist:
    return []

def get_city_zip_code(zip_code):
  response = zip_code_service.validate_zip_code(zip_code)
  if response.status_code == 400:
    raise serializers.ValidationError("O CEP informado está incorreto")
  api_response = json.loads(response.content)
  if 'erro' in api_response:
    raise serializers.ValidationError("O CEP informado não foi encontrado")    
  return api_response