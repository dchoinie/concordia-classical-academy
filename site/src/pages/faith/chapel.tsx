import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../../components/layout'
import PageTitle from '../../components/pageTitle'
import { SEO } from '../../components/seo'

const Chapel = (): JSX.Element => {
  return (
    <>
    <SEO title="Chapel" />
    <Layout>
      <div className="max-w-screen-xl mx-auto">
        <PageTitle
          title="Chapel"
        />
        <div className="my-24 flex gap-12">
            <div className="flex w-1/2">
                <StaticImage src="../../assets/images/promo_thumbnail.png" alt="chapel" className="rounded shadow-lg" />
            </div>
            <div className="flex flex-col w-1/2">
                <p className="text-gray-700">
                Chapel services are held each Wednesday at 9:15 a.m. giving our students and teachers the opportunity to worship together. Students are encouraged to bring a chapel offering each week, which is sent to a Christian mission. We encourage friends, family, and congregational members to join us for chapel.
                </p>
            </div>
        </div>
      </div>
    </Layout>
  </>
  )
}

export default Chapel