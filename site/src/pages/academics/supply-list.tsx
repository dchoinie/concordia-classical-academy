import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { graphql } from 'gatsby';
import React from 'react';
import Button from '../../components/button/button';
import Layout from '../../components/layout';
import PageTitle from '../../components/pageTitle';
import { SEO } from '../../components/seo';
import SupplyCard from '../../components/supplyCard';
import SupplyListPDF from '../../assets/documents/Supply_List.pdf';

interface ContentChildren {
  text: string;
}

interface SupplyList {
  content: ContentChildren;
  grade: string;
  id: string;
}

const SupplyList = ({ data }: any): JSX.Element => {
  // console.log(data);

  return (
    <>
      <SEO title='Supply List' />
      <Layout>
        <div className='max-w-screen-xl mx-6 lg:mx-auto'>
          <PageTitle title='Supply List' />
          <div className='my-24'>
            <div className='flex justify-center mb-6'>
              <Button
                label='Download Supply List'
                href={SupplyListPDF}
                theme='primary'
                startIcon={faDownload}
                download
              />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              {data.supplyList.nodes.map((supply: SupplyList) => (
                <SupplyCard
                  key={supply.id}
                  grade={supply.grade}
                  content={supply.content}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query SupplyQuery {
    supplyList: allSanitySupplyList(sort: { grade: ASC }) {
      nodes {
        grade
        content {
          _type
          children {
            _key
            _type
            text
            marks
          }
        }
      }
    }
  }
`;

export default SupplyList;
