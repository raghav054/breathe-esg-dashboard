from django.contrib import admin
from .models import DataSource


@admin.register(DataSource)
class DataSourceAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'company',
        'source_type',
        'uploaded_at',
    )

    list_filter = (
        'source_type',
    )