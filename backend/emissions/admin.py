from django.contrib import admin
from .models import EmissionRecord


@admin.register(EmissionRecord)
class EmissionRecordAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'company',
        'category',
        'scope',
        'activity_value',
        'unit',
        'status',
        'is_flagged',
        'locked_for_audit',
    )

    list_filter = (
        'scope',
        'status',
        'is_flagged',
    )

    search_fields = (
        'company__name',
        'category',
    )