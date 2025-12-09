/**
 * in coponent whit server only, the variables only work in the server
 * and the name of this variables don't have in the name NEXT_PUBLIC
 * */
import 'server-only';
import { cleanData } from '../utils/formaters/cleanDataContent';
import { API_ENDPOINTS } from './endpoints';
import { connect } from './connect';
import type { ICmsContentItineraryResponse, IResponseCmsContent, IResponseGetIdWithSlugName } from '@utils/formaters/formaters.model';

const CMS = API_ENDPOINTS.CMS;

async function getIdProductWithSlugName(slug: string): Promise<number | null> {
  try {
    const { data } = await connect.get<IResponseGetIdWithSlugName>(
      `${CMS}/pages?slug=${slug}`,
      {
        // headers: { 'X-Enable-Cache': true },
      }
    );
    
    if (!data || !data.items) throw new Error('no id');

    return data?.items[0]?.id;

  } catch (error) {
    console.error(error, 'error with endpoint: get id with slugName');
    return null;
  }
}

async function getContentPageFromCms(idPage: number, lang: string): Promise<ICmsContentItineraryResponse | null> {
  try {
    const { data } = await connect.get<IResponseCmsContent>(`${CMS}/pages/${idPage}`, {
      headers: { lang: lang.toUpperCase() },
      // headers: { lang: lang.toUpperCase(), 'X-Enable-Cache': true },
    });

    const content: ICmsContentItineraryResponse =  cleanData(data);
    
    return content;

  } catch (error) {
    console.error(error, 'error ocurred in get content page');
    return null;
  }
}

export async function getDataContent({
  code,
  lang,
}: {
  code: string;
  lang: string;
}): Promise<ICmsContentItineraryResponse | null> {
  
  const idPage = await getIdProductWithSlugName(code);
  const dataPage = await getContentPageFromCms(Number(idPage), lang);
  return dataPage;
}
