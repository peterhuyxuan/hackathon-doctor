from faker import Faker
fake = Faker()
from core.models import BookingEvent, BookingRequest

def run(*args):
    requests = BookingRequest.object.create(
        email=fake.email(),
        first_name=fake.name(),
        last_name=fake.name(),
    )