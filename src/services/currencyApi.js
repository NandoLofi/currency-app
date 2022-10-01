import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const apiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const createRequest = (url)=>({url, headers: apiHeaders})

const BASE_URL = "https://coinranking1.p.rapidapi.com/coins"

export const currencyApi = createApi({
    reducerPath: 'currencyApi',
    baseQuery: fetchBaseQuery({ BASE_URL }),
    endpoints: (builder) => ({
        getCurrency: builder.query({
            query: ()=> createRequest('/coins')
        })
    })
})

export const {
    useGetCurrencyQuery,
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