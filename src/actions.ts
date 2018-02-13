import { Image } from './models';

export const action = '';

export const FETCH_IMAGES = 'FETCH_IMAGES';
export type FETCH_IMAGES = typeof FETCH_IMAGES;

export interface FetchImagesTypes {
  type: FETCH_IMAGES;
  payload: Image[];
}

export const fetchImages = {
  type: FETCH_IMAGES,
  payload: [{ url: 'bla' }, { url: 'blub' }],
};

export type Action = FetchImagesTypes;
