import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Marguerita', amount: 10 },
    { product: 'Portuguesa', amount: 23 },
    { product: '4 Queijos', amount: 15 },
    { product: 'Batata c/ bacon', amount: 20 },
    { product: 'Frango c/ catupiry', amount: 32 },
  ])
})
