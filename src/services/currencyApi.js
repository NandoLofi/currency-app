import create from '@ant-design/icons/lib/components/IconFont'
import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiHeaders = {
    'X-RapidAPI-Key': '6c087f1dafmshee4c79cbea1744cp1e4819jsncbb07ebc3b6e',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

}

const BASE_URL = 'https://coinranking1.p.rapidapi.com/coins'

const createRequest = (url) => ({ url, headers: apiHeaders })

export const currencyApi = createApi({
    reducerPath: 'currencyApi',
    baseQuery: fetchBaseQuery({
        BASE_URL
    }),
    endpoints: (builder) => ({
        getCurrency: builder.query({
        query: () => createRequest('/coins')
        })
    })
})

export const {
    useGetCurrencyQuery
} = currencyApi