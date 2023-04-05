import React, { FC } from 'react'
import Layout from '../../layout/Layout'
import Header from './Header'
import Accounts from './accounts/Accounts'
import Stories from './Stories'
import ApplyNewProduct from './apply-new-product/ApplyNewProduct'

const Home: FC = () => {

  return (
    <Layout>
      <Header />
      <Stories />
      <Accounts />
      <ApplyNewProduct />
    </Layout>
  )
}

export default Home