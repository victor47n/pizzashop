import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2024', receipt: 2000 },
    { date: '02/02/2024', receipt: 5345 },
    { date: '03/02/2024', receipt: 456 },
    { date: '04/04/2024', receipt: 8757 },
    { date: '12/04/2024', receipt: 3244 },
    { date: '09/05/2024', receipt: 7533 },
    { date: '05/06/2024', receipt: 2345 },
  ])
})
