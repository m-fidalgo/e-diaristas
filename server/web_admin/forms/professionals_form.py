from django import forms

from web_admin.services import zip_code_service 
from ..models import Professionals
import json

class ProfessionalsForm(forms.ModelForm):
  # aplicando máscaras
  cpf = forms.CharField(widget=forms.TextInput(attrs={'data-mask': '000.000.000-00'}))
  zip_code = forms.CharField(widget=forms.TextInput(attrs={'data-mask': '00.000-000'}))
  phone = forms.CharField(widget=forms.TextInput(attrs={'data-mask': '(00) 00000-0000'}))
  
  class Meta:
    model = Professionals
    # renderizar todos os campos menos esses 
    exclude = {"address", "complement", "county", "state", "city", "ibge_code",}
    
  def clean_cpf(self):
    cpf = self.cleaned_data["cpf"]
    return cpf.replace('.','').replace('-','')
  
  def clean_zip_code(self):
    zip_code = self.cleaned_data["zip_code"]
    formatted_zip_code = zip_code.replace('.','').replace('-','')
    response = zip_code_service .validate_zip_code(formatted_zip_code)
    if response.status_code == 400:
      raise forms.ValidationError("O CEP informado está incorreto")
    api_response = json.loads(response.content)
    if 'erro' in api_response:
      raise forms.ValidationError("O CEP informado não foi encontrado")    
    return formatted_zip_code
  
  def clean_phone(self):
    phone = self.cleaned_data["phone"]
    return phone.replace('(','').replace(')','').replace(' ','').replace('-','')
  
  def save(self, commit=True):
    instance = super(ProfessionalsForm, self).save(commit=False)
    response = zip_code_service.validate_zip_code(self.cleaned_data.get('zip_code'))
    api_response = json.loads(response.content)
    # pegando o endereço pelo cep
    instance.address = api_response['logradouro']
    instance.complement = api_response['complemento']
    instance.county = api_response['bairro']
    instance.state = api_response['uf']
    instance.city = api_response['localidade']
    instance.ibge_code = api_response['ibge']
    instance.save()
    return instance
    