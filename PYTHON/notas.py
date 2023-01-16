import pandas as pd

info = pd.read_excel('RELATORIO NOTAS.xlsx')
notas = pd.read_excel('NOTAS COMUNICAÇAO PROFISSIONAL.xlsx')

merged = pd.merge(info, notas, on="RA")


merged.to_excel('merged.xlsx')