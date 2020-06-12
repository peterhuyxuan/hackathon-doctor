from rest_framework import serializers

from core.models import Tag, Symptom


class TagSerializer(serializers.ModelSerializer):
    """Serializer for tag objects"""

    class Meta:
        model = Tag
        fields = ('id', 'name',)
        read_only_fields = ('id',)


class SymptomSerializer(serializers.ModelSerializer):

    class Meta:
        model = Symptom
        fields = ('id', 'name')
        read_only_fields = ('id',)
