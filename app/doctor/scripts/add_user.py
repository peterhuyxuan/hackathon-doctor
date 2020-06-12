from faker import Faker
fake = Faker()
from core.models import User
import random
import time

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

def run(*args):
    for i in range(0, 1000):
        User.object.create(
            email=fake.email(),
            name=.fake.name(),
            registration_number= ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(N)),
            registration_expiry_date=random_date("1/1/1980 1:30 PM", "1/1/2020 4:50 AM", random.random()),
            profesion=None,
            is_staff=True
        )
        User.object.create(
            email=fake.email(),
            name=.fake.name(),
            registration_number=None,
            registration_expiry_date=random_date("1/1/1980 1:30 PM", "1/1/2020 4:50 AM", random.random()),
            profesion=None,
            is_staff=False
        )

