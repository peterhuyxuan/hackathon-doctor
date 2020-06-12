from rest_framework import serializers

from core.models import Tag, Symptom, BookingRequest, BookingEvent


class TagSerializer(serializers.ModelSerializer):
    """Serializer for tag objects"""

    class Meta:
        model = Tag
        fields = ('id', 'name',)
        read_only_fields = ('id',)


class SymptomSerializer(serializers.ModelSerializer):
    tags = serializers.StringRelatedField(source='tag_set', many=True)

    class Meta:
        model = Symptom
        fields = ('id', 'name', 'tags')
        read_only_fields = ('id',)


class BookingRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookingRequest
        fields = ('id', 'email', 'first_name', 'last_name', 'age', 'gender', 'symptoms')
        read_only_fields = ('id',)


class BookingRequestDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookingRequest
        fields = ('id', 'email', 'first_name', 'last_name', 'age', 'gender', 'symptoms', 'bookingevent_set')
        read_only_fields = ('id',)


class BookingEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookingEvent
        fields = ('id', 'doctors', 'request', 'start_date', 'end_date', 'url')
        read_only_fields = ('id',)
