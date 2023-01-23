import React from 'react'
import Layout from '../components/layout'
import PageTitle from '../components/pageTitle'
import { SEO } from '../components/seo'

const Careers = () => {
  return (
    <>
      <SEO title="Careers" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle title="Careers" />
        </div>
      </Layout>
    </>
  )
}

export default Careers