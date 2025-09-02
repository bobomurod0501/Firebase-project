import React, { Suspense } from 'react'
import MainLayout from '../layouts/MainLayout'
import { Outlet } from 'react-router-dom'

const Route = () => {
  return (
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
         <Outlet/>
      </Suspense>
    </MainLayout>
  )
}

export default Route
