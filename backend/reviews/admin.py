from django.contrib import admin
from .models import ReviewLog


@admin.register(ReviewLog)
class ReviewLogAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'emission_record',
        'action',
        'reviewed_at',
    )

    list_filter = (
        'action',
    )