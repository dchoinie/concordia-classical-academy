import React from 'react'
import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";
import { SEO } from "../components/seo";
import Constants from '../constants/constants';

const Login = (): JSX.Element => {
    return (
        <div>
          <SEO title="Family Login" />
          <Layout>
            <div className="max-w-screen-xl mx-6 lg:mx-auto">
              <PageTitle title="Family Login" />
              <div className="my-12">
                <iframe
                  src={Constants.LOGIN}
                  width="100%"
                  height="800"
                ></iframe>
              </div>
            </div>
          </Layout>
        </div>
      );
}

export default Login