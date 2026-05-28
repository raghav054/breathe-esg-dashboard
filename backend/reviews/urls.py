from django.urls import path

from .views import (
    ApproveEmissionView,
    RejectEmissionView,
)

urlpatterns = [
    path(
        'approve/<int:record_id>/',
        ApproveEmissionView.as_view()
    ),

    path(
        'reject/<int:record_id>/',
        RejectEmissionView.as_view()
    ),
]