import { http, HttpResponse } from 'msw'

import { RegisterRastaurantBody } from '../register-restaurant'

export const registerRestaurantMock = http.post<never, RegisterRastaurantBody>(
  '/restaurants',
  async ({ request }) => {
    const { restaurantName } = await request.json()

    if (restaurantName === 'Pizza Shop') {
      return new HttpResponse(null, {
        status: 201,
      })
    }

    return new HttpResponse(null, { status: 400 })
  },
)
