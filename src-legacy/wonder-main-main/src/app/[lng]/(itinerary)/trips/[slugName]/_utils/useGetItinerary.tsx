import 'server-only';
import { getDataContent } from '@services/getDataContent';
import { getItinerary } from '@services/trips/getDataItinerary';
import { IDataItinerary } from '../../../../../../global.model';

const useGetDataItinerary = async (
  lng: string,
  slugName: string
): Promise<IDataItinerary> => {
  try {
    
    const backofficeDataResponse = await getItinerary({ slugName, lang: lng });

    const cmsContentDataResponse = await getDataContent({
      code: backofficeDataResponse?.product.code ?? '',
      lang: lng,
    });

    if (!backofficeDataResponse)
      throw new Error('data in backoffice not found');

    if (!cmsContentDataResponse) throw new Error('data in cms not found');

    return {
      infoItinerary: backofficeDataResponse,
      infoCms: cmsContentDataResponse,
    };
  } catch (e) {
    console.error('error in useGetItinerary', e);
    const { notFound } = await import('next/navigation');
    notFound();
    return { infoItinerary: Object.create(null), infoCms: Object.create(null) };
  }
};

export default useGetDataItinerary;
