'use client';
import ListItems from '../../../components/ListItems/ListItems';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { keyRestrictionsAliments } from '../../../../../../../../vars/keyRestrictionsAliments';
//import styles
import styles from './InfoAlimenticia.module.scss';
import { useTranslation } from '@i18n-client';
import { ICommonProps } from '../common';
import { getDataRooming } from '@services/rooming/travellers/getDataRooming';
import patchTravelers from '@services/rooming/travellers/patchTravelers';
import ContentCheck from '../../../components/ContentCheck/ContentCheck';
import Buttons from '../../../components/Buttons/Buttons';
const schema = yup.object().shape({
  allergies: yup.array().nullable(),
  food_restrictions: yup.array().nullable(),
});
const InfoAlimenticia = ({
  bookingId,
  userId,
  onNexButton,
  onPrevButton,
}: ICommonProps) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: async () => {
      const data = await await getDataRooming<{
        allergies: string[] | undefined;
        food_restrictions: string[] | undefined;
      }>({
        section: 'nutritional_data',
        bookingId: bookingId,
        userId: userId,
      });
      if (data && !data?.allergies) {
        data.allergies = [];
      }
      return data;
    },
  });
  const { t } = useTranslation(undefined, 'rooming');
  const trans = (value: string) => t('information_eats.' + value);

  const onSubmit = async (data: any) => {
    data.revised = true;
    const response = await patchTravelers(
      data,
      'nutritional_data',
      userId,
      bookingId
    );
    if (response instanceof Response && response.ok) onNexButton();
  };
  const transCheck = (value: string) =>
    t('information_eats.restrictions.' + value, { defaultValue: value });
  return (
    <FormProvider {...methods}>
      <form
        className={styles['info-alimenticia']}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <ListItems name='allergies' title={trans('allergies.title')} />
        <ContentCheck
          title={trans('allergies.title')}
          items={keyRestrictionsAliments}
          name='food_restrictions'
          trans={transCheck}
        />
        <Buttons onPrevButton={onPrevButton} />
      </form>
    </FormProvider>
  );
};

export default InfoAlimenticia;
