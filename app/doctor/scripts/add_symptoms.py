from core.models import Symptom

syms = ['fever', 'cold', 'cough', 'sneeze', 'wet dream']

def run():
    # Fetch all symptoms
    symptoms = Symptom.objects.all()
    for i in range(0, len(syms)):
        symptoms = Symptom.objects.create(name=syms[i])

    # Delete symptoms
    # symptoms.delete()