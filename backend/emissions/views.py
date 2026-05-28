from rest_framework.views import APIView
from rest_framework.response import Response

from .models import EmissionRecord
from .serializers import EmissionRecordSerializer


class EmissionRecordListView(APIView):

    def get(self, request):

        records = EmissionRecord.objects.all().order_by('-created_at')

        serializer = EmissionRecordSerializer(
            records,
            many=True
        )

        return Response(serializer.data)