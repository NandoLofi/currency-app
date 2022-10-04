import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const apiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const createRequest = (url)=>({url, headers: apiHeaders})

const BASE_URL = "https://coinranking1.p.rapidapi.com"

export const currencyApi = createApi({
    reducerPath: 'currencyApi',
    baseQuery: fetchBaseQuery({  baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getCurrency: builder.query({
            query: (count)=> createRequest(`/coins?limit=${count}`)
        }),
        getCurrencyDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        })
    })
})

export const {
    useGetCurrencyQuery, useGetCurrencyDetailsQuery
} = currencyApi

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {

//     }
//   };