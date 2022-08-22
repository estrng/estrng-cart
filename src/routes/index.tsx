import { Route, Routes as ReactRouters } from 'react-router-dom'
import { Providers } from '../components/Providers'
import { Home } from '../pages/Home'

export function Routes() {
  return (
    <ReactRouters>
      <Route path="/" element={<Home />} />
    </ReactRouters>
  )
}