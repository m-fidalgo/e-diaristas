from django.shortcuts import redirect, render
from .forms import professionals_form
from .models import Professionals

def insert_professionals(request):
  if request.method == 'POST':
    form = professionals_form.ProfessionalsForm(request.POST, request.FILES)
    
    if form.is_valid():
      # se os dados inseridos forem válidos, serão persistidos no bd
      form.save()
      return redirect("get_professionals")
  else:
    form = professionals_form.ProfessionalsForm()
  return render(request, 'professionals_form.html', {'professionals_form': form})

def get_professionals(request):
  professionals = Professionals.objects.all()
  return render(request, 'professionals_list.html', {'professionals': professionals})

def update_professionals(request, id):
  professional = Professionals.objects.get(id=id)
  if request.method == 'POST':
    form = professionals_form.ProfessionalsForm(request.POST or None, request.FILES, instance=professional)
    if form.is_valid():
        form.save()
        return redirect("get_professionals")
  else:
    form = professionals_form.ProfessionalsForm(instance=professional)
  return render(request, 'professionals_form.html', {'professionals_form': form})

def delete_professionals(request, id):
  professional = Professionals.objects.get(id=id)
  professional.delete()
  return redirect("get_professionals")
