from faker import Faker
fake = Faker()
from core.models import User
import random
import time

def run(*args):
    for i in range(0, 1000):
        User.object.create(
            email=fake.email(),
            name=.fake.name(),
            registration_number= None,
            registration_expiry_date=None,
            profesion=None,
            is_staff=False
        )

