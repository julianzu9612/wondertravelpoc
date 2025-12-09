import { API_ENDPOINTS } from '@services/endpoints';
import { IGetDocumentTypes } from './getDocumentTypes.model';
import { connect } from '@services/connect';

const DOCUMENT_TYPES = API_ENDPOINTS.DOCUMENT_TYPES;

export const getDocumentTypes = async () => {
  const url = `${DOCUMENT_TYPES}`;
  const { data } = await connect.get<IGetDocumentTypes[]>(url);
  return data;
};
