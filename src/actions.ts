import { Image } from './models';

export const action = '';

export const FETCH_IMAGES_REQUESTED = 'FETCH_IMAGES_REQUESTED';
export type FETCH_IMAGES_REQUESTED = typeof FETCH_IMAGES_REQUESTED;

export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export type FETCH_IMAGES_SUCCESS = typeof FETCH_IMAGES_SUCCESS;

export interface FetchImagesRequested {
  type: FETCH_IMAGES_REQUESTED;
}

export interface FetchImagesSuccess {
  type: FETCH_IMAGES_SUCCESS;
  payload: Image[];
}

export const fetchImages = {
  type: FETCH_IMAGES_REQUESTED,
};

export type Action = FetchImagesRequested | FetchImagesSuccess;
