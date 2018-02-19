import * as actions from '../actions';
import { Image } from '../models';

export interface State {
  images: Image[];
}

const initialState: State = {
  images: [],
};

export default function reducer(
  state: State = initialState,
  action: actions.Action
): State {
  switch (action.type) {
    case actions.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload,
      };
    default:
      return initialState;
  }
}
