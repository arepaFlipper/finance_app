import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetKpisResponse } from './types';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  reducerPath: 'main',
  tagTypes: [],
  endpoints: (build) => ({
    getkpis: build.query<Array<GetKpisResponse>, void>({
      query: () => 'kpi/kpis/',
      // @ts-ignore
      providesTags: ["Kpis"],
    })
  })
})

export const { useGetkpisQuery } = api;
