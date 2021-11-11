from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from api.serializers.professionals_city_serializer import ProfessionalsCitySerializer
from .services.cities_service import get_professionals_by_city
from .pagination import professionals_city_paginator

# classe que permite a criação de acordo com o método da req
class ProfessionalsCityList(APIView, professionals_city_paginator.ProfessionalsCityPaginator):
  def get(self, request, format=None):
    zip_code = self.request.query_params.get('cep', None)
    professionals = get_professionals_by_city(zip_code)
    result = self.paginate_queryset(professionals, request)
    serializer = ProfessionalsCitySerializer(result, many=True, context={"request": request})
    return self.get_paginated_response(serializer.data)