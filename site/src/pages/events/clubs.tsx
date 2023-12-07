import React from "react";
import { SEO } from "../../components/seo";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { graphql } from "gatsby";
import ClubCard, { Club } from "../../components/clubCard";

const Clubs = ({ data }: any) => {
  console.log(data);
  return (
    <div>
      <SEO title="Clubs" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle title="Clubs" />
          <div className="my-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              {data.clubs.nodes.map((club: Club) => (
                <ClubCard
                  key={club.id}
                  id={club.id}
                  startTime={club.startTime}
                  endTime={club.endTime}
                  meetingDays={club.meetingDays}
                  ages={club.ages}
                  clubName={club.clubName}
                  details={club.details}
                  image={club.image.asset.gatsbyImageData}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export const query = graphql`
  query ClubsQuery {
    clubs: allSanityClubs(sort: { clubName: ASC }) {
      nodes {
        _id
        ages
        clubName
        details
        endTime
        startTime
        image {
          asset {
            gatsbyImageData
          }
        }
        meetingDays
      }
    }
  }
`;

export default Clubs;
