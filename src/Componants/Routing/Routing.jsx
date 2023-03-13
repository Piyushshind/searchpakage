import React from 'react'
import { Route,Routes } from 'react-router-dom'
import FavoriteList from '../../Pages/FavoritePackageList/FavoriteList'
import IndexPage from '../../Pages/IndexPage/IndexPage'
const Routing = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<IndexPage />}/>
      <Route path='/favorite' element={<FavoriteList />}/>
     </Routes>
    </>
  )
}

export default Routing