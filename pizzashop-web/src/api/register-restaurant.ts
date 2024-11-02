import { api } from '@/lib/axios'

export interface RegisterRastaurantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRastaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRastaurantBody) {
  await api.post('/restaurants', {
    restaurantName,
    managerName,
    email,
    phone,
  })
}
