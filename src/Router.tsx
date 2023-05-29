import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './defaultLayout'
import { HomePage } from './pages/Home'
import { CompleteOrderPage } from './pages/CompleteOrder'
import { Success } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
