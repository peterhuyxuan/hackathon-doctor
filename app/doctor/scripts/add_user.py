from faker import Faker
fake = Faker()
from core.models import User, Tag
import random
import time
import string

def str_time_prop(start, end, format, prop):
    """Get a time at a proportion of a range of two formatted times.

    start and end should be strings specifying times formated in the
    given format (strftime-style), giving an interval [start, end].
    prop specifies how a proportion of the interval to be taken after
    start.  The returned time will be in the specified format.
    """

    stime = time.mktime(time.strptime(start, format))
    etime = time.mktime(time.strptime(end, format))

    ptime = stime + prop * (etime - stime)

    return time.strftime(format, time.localtime(ptime))


def random_date(start, end, prop):
    return str_time_prop(start, end, '%m/%d/%Y %I:%M %p', prop)

tags = [
    'Cardiology ',
    'Clinical genetics ',
    'Clinical pharmacology ',
    'Endocrinology ',
    'Gastroenterology and hepatology ',
    'General medicine ',
    'Geriatric medicine ',
    'Haematology ',
    'Immunology and allergy ',
    'Infectious diseases ',
    'Medical oncology ',
    'Nephrology ',
    'Neurology ',
    'Nuclear medicine ',
    'Respiratory and sleep medicine ',
    'Rheumatology'
]

def run(*args):
    N = 10
    for i in range(0, 100):
        user = User.objects.create(
            email=fake.email(),
            name=fake.name(),
            registration_number= ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(N)),
            registration_expiry_date=random_date("1/1/1980 1:30 PM", "1/1/2020 4:50 AM", random.random()),
            profession=fake.job(),
            is_staff=True
        )
        user.set_password("Pass123")
        user.save()

    user = User.objects.create(
        email="test@email.com",
        name=fake.name(),
        registration_number= ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(N)),
        registration_expiry_date=random_date("1/1/1980 1:30 PM", "1/1/2020 4:50 AM", random.random()),
        profession=fake.job(),
        is_staff=True
    )
    user.set_password("Pass1144")
    user.save()
        
    for j in range(0, len(tags)):
        Tag.objects.create(name=tags[j], user_id=int(random.random() * 100))
