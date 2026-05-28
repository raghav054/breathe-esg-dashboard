from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from emissions.models import EmissionRecord
from .models import ReviewLog


class ApproveEmissionView(APIView):

    def post(self, request, record_id):

        try:
            record = EmissionRecord.objects.get(id=record_id)

            record.status = 'APPROVED'
            record.locked_for_audit = True
            record.save()

            ReviewLog.objects.create(
                emission_record=record,
                action='APPROVED',
                comment='Approved by analyst'
            )

            return Response(
                {
                    'message': 'Record approved successfully'
                },
                status=status.HTTP_200_OK
            )

        except EmissionRecord.DoesNotExist:

            return Response(
                {
                    'error': 'Record not found'
                },
                status=status.HTTP_404_NOT_FOUND
            )


class RejectEmissionView(APIView):

    def post(self, request, record_id):

        try:
            record = EmissionRecord.objects.get(id=record_id)

            record.status = 'REJECTED'
            record.save()

            ReviewLog.objects.create(
                emission_record=record,
                action='REJECTED',
                comment='Rejected by analyst'
            )

            return Response(
                {
                    'message': 'Record rejected successfully'
                },
                status=status.HTTP_200_OK
            )

        except EmissionRecord.DoesNotExist:

            return Response(
                {
                    'error': 'Record not found'
                },
                status=status.HTTP_404_NOT_FOUND
            )