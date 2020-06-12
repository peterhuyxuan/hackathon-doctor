from rest_framework import serializers

from core.models import Tag, BookingEvent


class TagSerializer(serializers.ModelSerializer):
    """Serializer for tag objects"""

    class Meta:
        model = Tag
        fields = ('id', 'name',)
        read_only_fields = ('id',)


class BookingEventSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = BookingEvent
        fields = ('id', 'doctor', 'request', 'start_date', 'end_date', 'url')
        read_only_fields = ('id',)
