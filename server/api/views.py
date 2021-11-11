from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from api.serializers.professional_city_serializer import ProfessionalCitySerializer
from .services.cities_service import get_professionals_by_city

# classe que permite a criação de acordo com o método da req
class ProfessionalsCityList(APIView):
  def get(self, request, format=None):
    zip_code = self.request.query_params.get('cep', None)
    professionals = get_professionals_by_city(zip_code)
    serializer = ProfessionalCitySerializer(professionals, many=True, context={"request": request})
    return Response(serializer.data)