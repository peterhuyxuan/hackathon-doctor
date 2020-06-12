from core.models import Symptom

syms = ['fever', 'cold', 'cough', 'sneeze', 'wet dream']

def run():
    for i in range(0, len(syms)):
        Symptom.objects.create(name=syms[i])

    # Delete symptoms
    # symptoms.delete()