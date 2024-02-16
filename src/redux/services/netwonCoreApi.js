import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const netwonCoreApi = createApi({
  reducerPath: 'newtonCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://academics.newtonschool.co/api/v1/',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('projectId', import.meta.env.VITE_NEWTON_PROJECT_ID);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({ query: (loginData) => ({ url: `user/login`, method: 'POST', body: loginData }) }),
    getSongsByMood: builder.query({ query: (mood) => `music/song?filter=${encodeURIComponent(JSON.stringify({ mood }))}` }),
  }),
});

export const {
  useLoginMutation,
  useGetSongsByMoodQuery
} = netwonCoreApi;
