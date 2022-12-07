import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const randomUser = createApi({
  reducerPath: 'randomUser',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/api' }),
  endpoints: (builder) => ({
    getRandomUser: builder.query<{results: String[]}, void>({
        query: () => `?results=10&inc=name,location,login,seed`,
      }),
    getUserBySeed: builder.query({
      query: (seed) => `?seed=${seed}&inc=name,location,seed`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRandomUserQuery, useGetUserBySeedQuery} = randomUser