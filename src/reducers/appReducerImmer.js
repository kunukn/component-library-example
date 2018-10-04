import produce from 'immer';

import {
  NAME_UPDATED,
  COUNT_UPDATED,
  LOADDATA_STARTED,
  LOADDATA_SUCCEEDED,
  LOADDATA_FAILED,
} from 'src/actions/actionTypes';

const appReducer = (state, { type, payload } = {}) =>
  produce(state, draft => {
    switch (type) {
      case NAME_UPDATED:
        draft.name = payload;
        return;
      case COUNT_UPDATED:
        draft.count = payload;
        return;
      case LOADDATA_STARTED:
        draft.loadingData = true;
        return;
      case LOADDATA_SUCCEEDED:
        draft.loadedData = payload;
        draft.loadingData = false;
        return;
      case LOADDATA_FAILED:
        draft.loadedError = payload;
        draft.loadingData = false;
        return;
      // no default
    }
  });

export default appReducer;
