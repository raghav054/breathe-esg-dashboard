from rest_framework import serializers
from .models import ReviewLog


class ReviewLogSerializer(serializers.ModelSerializer):

    class Meta:
        model = ReviewLog
        fields = '__all__'