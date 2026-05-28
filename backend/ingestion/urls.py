from django.urls import path
from .views import DataUploadView

urlpatterns = [
    path('upload/', DataUploadView.as_view()),
]