from rest_framework import serializers
from .models import DataSource
from companies.models import Company

class DataSourceSerializer(serializers.ModelSerializer):

    class Meta:
        model = DataSource
        fields = '__all__'

    def create(self, validated_data):

        company, created = Company.objects.get_or_create(
            name="Tata Steel",
            defaults={
                "industry": "Steel",
                "country": "India"
            }
        )

        validated_data['company'] = company

        return super().create(validated_data)