from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

class ProfessionalsCityPaginator(PageNumberPagination):
  page_size = 4
  
  def get_paginated_response(self, data):
      return Response({
        'professionals_quantity': (self.page.paginator.count - self.page_size) if self.page.paginator.count > self.page_size else 0,
        'professionals': data
      })