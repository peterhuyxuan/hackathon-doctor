from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets, mixins, status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from core.models import Tag, Symptom
from doctor import serializers


class BaseBookingAttrViewSet(
    viewsets.GenericViewSet,
    mixins.ListModelMixin,
    mixins.CreateModelMixin
):
    """Base viewset for user owned attributes"""
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        """Create a new object"""
        serializer.save(user=self.request.user)


class TagViewSet(BaseBookingAttrViewSet):
    """Manage tags in the database"""
    queryset = Tag.objects.all()
    serializer_class = serializers.TagSerializer


class SymptomViewSet(viewsets.ModelViewSet):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    queryset = Symptom.objects.all()
    serializer_class = serializers.SymptomSerializer
