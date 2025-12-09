import { ModalProfileShareModel } from '@components/ModalProfileShare/ModalProfileShare.model';
import { ReactNode } from 'react';

export interface IShareModel extends ModalProfileShareModel {
  children: ReactNode;
  variant?: 'center';
}
