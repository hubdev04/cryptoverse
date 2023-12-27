import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoNewsHeaders=  {
    
        'X-RapidAPI-Key': '6f06f2d601mshf16a6badf9b2145p143e4djsnc236bb1345ef',
        'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
      
}

const baseUrl= 'https://cryptocurrency-news2.p.rapidapi.com/v1'
const createRequest=(url)=>({ url,headers:cryptoNewsHeaders});

export const cryptoNewsApi =createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({
        baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),
});
export const {
    useGetCryptoNewsQuery
}=cryptoNewsApi;

