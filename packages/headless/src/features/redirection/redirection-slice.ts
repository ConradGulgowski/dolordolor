import {createReducer} from '@reduxjs/toolkit';
import {checkForRedirection} from './redirection-actions';
import {getRedirectionInitialState} from './redirection-state';

/**
 * @deprecated - Please use `standaloneSearchBoxSetReducer` instead.
 */
export const redirectionReducer = createReducer(
  getRedirectionInitialState(),
  (builder) =>
    builder.addCase(checkForRedirection.fulfilled, (state, action) => {
      state.redirectTo = action.payload;
    })
);
