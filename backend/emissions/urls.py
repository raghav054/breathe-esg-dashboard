from django.urls import path
from .views import EmissionRecordListView

urlpatterns = [
    path(
        '',
        EmissionRecordListView.as_view()
    ),
]