import { log } from "console";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { SEO } from "../../components/seo";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface MenuImage {
  asset: string;
}

interface LunchItem {
  id: string;
  title: string;
  date: string;
  menuImage: any;
}

const Lunch = ({ data }: any): JSX.Element => {
  console.log(data);

  return (
    <>
      <SEO title="Lunch Menus" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle
            title="Lunch Menus"
            subTitle="CCA has begun preparing our own lunches. To view a menu, click below."
          />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-24">
            {data.lunch.nodes.map((l: LunchItem) => (
              <a
                href={l.menuImage.asset.url}
                target="_blank"
                rel="noopener noreferrer"
                key={l.id}
                className="p-6 shadow border border-gray-100 rounded text-center"
              >
                <h2 className="mb-3 text-primary underline">{l.date}</h2>
                <div className="flex justify-center text-gray-700">
                  <span>View Menu</span>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="self-center ml-2"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const data = graphql`
  query LunchQuery {
    lunch: allSanityLunch(sort: { date: DESC }) {
      nodes {
        id
        date(formatString: "MMM - YYYY")
        menuImage {
          asset {
            url
            path
          }
        }
      }
    }
  }
`;

export default Lunch;
