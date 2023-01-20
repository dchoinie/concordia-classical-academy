import React from 'react'
import Layout from '../components/layout'
import PageTitle from '../components/pageTitle'
import { SEO } from '../components/seo'

const Resources = () => {
  return (
    <>
    <SEO title="Resources" />
    <Layout>
      <div className="max-w-screen-xl mx-6 lg:mx-auto">
        <PageTitle title="Resources" />
      </div>
    </Layout>
  </>
  )
}

export default Resources