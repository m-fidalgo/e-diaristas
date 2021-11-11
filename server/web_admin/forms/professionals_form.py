from django import forms
from ..models import Professionals

class ProfessionalsForm(forms.ModelForm):
  # aplicando máscaras
  cpf = forms.CharField(widget=forms.TextInput(attrs={'data-mask': '000.000.000-00'}))
  zip_code = forms.CharField(widget=forms.TextInput(attrs={'data-mask': '00.000-000'}))
  phone = forms.CharField(widget=forms.TextInput(attrs={'data-mask': '(00) 00000-0000'}))
  class Meta:
    model = Professionals
    # renderizar todos os campos
    fields = '__all__'
    
  def clean_cpf(self):
    cpf = self.cleaned_data["cpf"]
    return cpf.replace('.','').replace('-','')
  
  def clean_zip_code(self):
    zip_code = self.cleaned_data["zip_code"]
    return zip_code.replace('.','').replace('-','')
  
  def clean_phone(self):
    phone = self.cleaned_data["phone"]
    return phone.replace('(','').replace(')','').replace(' ','').replace('-','')