import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {useRoutes} from '../routes/routes'
export const RoutesProvider = () => {
  return (
   <Suspense fallback={<div>Loading</div>}>
      <RouterProvider router={createBrowserRouter(useRoutes())}/>
   </Suspense>
  )
}
