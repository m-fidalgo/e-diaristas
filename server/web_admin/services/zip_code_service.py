import requests

def validate_zip_code(zip_code):
  response = requests.get(
    f"https://viacep.com.br/ws/{zip_code}/json/"
  )
  return response
