'use server';

export const getFieldsForm = (t: (text: string) => string) => {
  return [
    {
      inputLabel: t('tailor-form.destination'),
      type: 'text',
      name: 'destination',
    },
    {
      inputLabel: t('tailor-form.persons'),
      type: 'number',
      name: 'number-persons',
    },
    {
      inputLabel: t('tailor-form.dates'),
      type: 'text',
      name: 'dates',
    },
  ];
};
