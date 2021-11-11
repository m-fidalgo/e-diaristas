from django.urls import path
from .views import ProfessionalsCityList

urlpatterns = [
  path('diaristas-cidade', ProfessionalsCityList.as_view(), name="professionals_city_list"),
]