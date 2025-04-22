import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from '../layout/uiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { accountApi } from '../../features/account/accountApi';
import { requestsApi } from '../../features/requests/requestsApi';
import { requestSlice } from '../../features/requests/requestSlice';
import { lookupApi } from '../shared/api/lookupApi';
import { teamApi } from '../../features/team/teamApi';

export const store = configureStore({
  reducer: {
    [accountApi.reducerPath]: accountApi.reducer,
    [requestsApi.reducerPath]: requestsApi.reducer,
    [lookupApi.reducerPath]: lookupApi.reducer,
    [teamApi.reducerPath]: teamApi.reducer,
    ui: uiSlice.reducer,
    request: requestSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      accountApi.middleware,
      requestsApi.middleware,
      lookupApi.middleware,
      teamApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
