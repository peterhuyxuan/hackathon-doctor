from django.urls import path, include
from rest_framework.routers import DefaultRouter

from meetings import views


router = DefaultRouter()
router.register('tags', views.TagViewSet)
router.register('BookingEvent', views.BookingEventViewSet)

app_name = 'BookingEvent'

urlpatterns = [
    path('', include(router.urls))
]
