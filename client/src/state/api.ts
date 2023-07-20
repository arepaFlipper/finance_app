import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  reducerPath: 'main',
  tagTypes: [],
  endpoints: (build) => ({
    getkpis: build.query<void, void>({
      query: () => 'kpi/kpis/',
      // @ts-ignore
      providesTags: ["Kpis"],
    })
  })
})

export const { useGetkpisQuery } = api;
