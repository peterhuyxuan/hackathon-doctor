from django.urls import path, include
from rest_framework.routers import DefaultRouter

from doctor import views


router = DefaultRouter()
router.register('tags', views.TagViewSet)
router.register('symptoms', views.SymptomViewSet)
router.register('booking-request', views.BookingRequestViewSet)

app_name = 'doctor'

urlpatterns = [
    path('', include(router.urls))
]
