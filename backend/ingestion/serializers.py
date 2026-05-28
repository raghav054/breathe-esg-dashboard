from rest_framework import serializers
from .models import DataSource
from emissions.models import Company


class DataSourceSerializer(serializers.ModelSerializer):

    class Meta:
        model = DataSource
        fields = '__all__'

    def create(self, validated_data):
        company, created = Company.objects.get_or_create(
            id=1,
            defaults={"name": "Breathe ESG"}
        )

        validated_data['company'] = company

        return super().create(validated_data)