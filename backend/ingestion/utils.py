import pandas as pd

from emissions.models import EmissionRecord


def process_csv_upload(data_source):

    file_path = data_source.uploaded_file.path

    df = pd.read_csv(file_path)

    for _, row in df.iterrows():

        category = ''
        scope = ''
        activity_value = 0
        unit = ''

        if data_source.source_type == 'SAP':

            category = row.get('fuel_type', 'Fuel')
            scope = 'Scope 1'
            activity_value = row.get('quantity', 0)
            unit = row.get('unit', 'L')

        elif data_source.source_type == 'UTILITY':

            category = 'Electricity'
            scope = 'Scope 2'
            activity_value = row.get('kwh', 0)
            unit = 'kWh'

        elif data_source.source_type == 'TRAVEL':

            category = row.get('travel_mode', 'Travel')
            scope = 'Scope 3'
            activity_value = row.get('distance', 0)
            unit = 'km'

        is_flagged = False

        # Negative or zero values

        if activity_value <= 0:

            is_flagged = True


        # Extremely high values

        if activity_value > 10000:

            is_flagged = True


        # Missing unit

        if pd.isna(unit) or unit == '':
            is_flagged = True


        record_status = 'PENDING'

        if is_flagged:

            record_status = 'REVIEW'

        EmissionRecord.objects.create(
            company=data_source.company,
            data_source=data_source,
            category=category,
            scope=scope,
            activity_value=activity_value,
            unit=unit,
            normalized_unit=unit,
            is_flagged=is_flagged,
            status=record_status
        )