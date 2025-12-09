import * as Yup from 'yup';

export const flightDataSchema = Yup.object({
  buyed_with_wonder: Yup.string().required(),
  destination_airline: Yup.string(),
  destination_country: Yup.string(),
  destination_city: Yup.string(),
  destination_date: Yup.string().nullable(),
  destination_flight_number: Yup.string(),
  origin_airline: Yup.string(),
  origin_country: Yup.string(),
  origin_city: Yup.string(),
  origin_date: Yup.string().nullable(),
  origin_flight_number: Yup.string(),
});
