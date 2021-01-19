import React from 'react'
import { Route } from 'react-router-dom'
import AppLayout from './components/Layout/AppLayout'
import ProductList from './components/Product/list'

const Router = () => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Route exact path="/" component={ProductList} />
      </div>
    </AppLayout>
  );
}

export default Router
