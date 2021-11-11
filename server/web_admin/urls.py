from django.urls import path
from .views import insert_professionals, get_professionals, update_professionals, delete_professionals

urlpatterns = [
  path('cadastrar-diaristas', insert_professionals, name="insert_professionals"),
  path('listar-diaristas', get_professionals, name="get_professionals"),
  path('editar-diaristas/<int:id>', update_professionals, name="update_professionals"),
  path('apagar-diaristas/<int:id>',delete_professionals, name="delete_professionals"),
]