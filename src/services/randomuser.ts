import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const randomUser = createApi({
  reducerPath: 'randomUser',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/api' }),
  endpoints: (builder) => ({
    getRandomUser: builder.query<{ results: String[] }, void>({
      query: () => `?results=10&inc=name,location,login`,
    }),
  }),
})

export const { useGetRandomUserQuery } = randomUser