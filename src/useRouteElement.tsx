// import * as React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Business from './pages/Business'
import Confirm from './pages/Confirm'

const useRouteElements = () => {
  const routeElements = useRoutes([

    {
      path: '/',
      index: true,
      element: <Home />
    },
    {
      path: '/business',
      element: <Business />
    },
    {
      path: '/confirm/01hfv4kaw7kaf5th91vdaqhcw3',
      element: <Confirm />
    },

  ])

  return routeElements
}
export default useRouteElements
