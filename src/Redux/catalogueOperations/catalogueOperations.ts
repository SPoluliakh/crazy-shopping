import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { mensProducts } from '../../Helpers/intarfaces/products/mensProducts';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/products',
  }),
  tagTypes: ['products'],
  endpoints: builder => ({
    fetchProducts: builder.query<mensProducts[], string>({
      query: (filter = '') => ({
        method: 'GET',
        url: filter === '' ? '/' : `/category/${filter}`,
      }),
      providesTags: ['products'],
    }),
    // fetchMensProducts: builder.query<mensProducts[], string>({
    //   query: () => `/category/men's clothing`,
    //   providesTags: ['products'],
    // }),
    // fetchArticlesById: builder.query<any, any>({
    //   query: (id: string) => `/v3/articles/${id}`,
    //   providesTags: ['articles'],
    // }),
  }),
});

export const { useFetchProductsQuery } = productsApi;
