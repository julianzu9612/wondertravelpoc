'use client';
import { FormEvent } from 'react';
import { whatsappUrl } from '../../../../constants';

export const goToUrlWhatsapp = (eventForm: FormEvent<HTMLFormElement>) => {
  eventForm.preventDefault();

  const form = eventForm.target as HTMLFormElement;
  const formData = new FormData(form);
  const destination = formData.get('destination');
  const numberPersons = formData.get('number-persons');
  const dates = formData.get('dates');

  const message = `Hola Wonder!!, estoy interesado en que que me ayudes a crear mi viaje para ${destination} para ${numberPersons} persona(s), para las fechas ${dates}`;
  const urlWhatsapp = whatsappUrl(message, true);

  window.open(urlWhatsapp, '_blank', 'noopener,noreferrer');
};
