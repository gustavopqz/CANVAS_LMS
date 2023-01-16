import requests
import os
from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())

secret = os.getenv('TOKEN_FAN')

page = 1
url = f'https://unifan.instructure.com/api/v1/users/175/files?per_page=1000&page={page}&access_token={secret}'
i = '0'
menu = 1
# Quando chegar a 100 talvez o código tenha de ser alterado para mudar de página
# print(len(response))
while i != menu:
    res = requests.get(url)
    response = res.json()
    i = '0'
    j = 0 
    iconName = input('Digite o nome do ícone incluindo a extensão: ')
    while j < len(response):
        if response[j]['display_name'] == iconName:
            iconHTML = f'<img id="{response[j]["id"]}" src="https://unifan.instructure.com/users/175/files/{response[j]["id"]}/preview?verifier={response[j]["uuid"]}" alt="{iconName}" />'
            print(iconHTML)
        j += 1
    menu = input('Digite 0 para sair e 1 para gerar outro ícone: ')

