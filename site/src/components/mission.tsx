import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const MissionComponent = () => {
  const data = useStaticQuery(graphql`
    query MissionQuery {
      mission: allSanityMission {
        nodes {
          missionStatement
        }
      }
      image: file(relativePath: { eq: "mission.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 700)
        }
      }
    }
  `);

  return (
    <div className="my-24">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex flex-col w-full lg:w-1/2">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-primary">Mission</h2>
            <hr className="my-3 border-border-gray-200 w-2/3" />
            <h5>{data.mission.nodes[0].missionStatement}</h5>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 justify-center">
          <GatsbyImage
            image={data.image.childImageSharp.gatsbyImageData}
            alt="Kids At School"
            className="rounded shadow-lg self-start"
          />
        </div>
      </div>
      <div className="my-24 grid grid-cols-1 lg:grid-cols-3 gap-24">
        <div className="flex flex-col">
          <h4>
            <span className="text-accent underline">Body:</span> Washed clean by
            Christ's death and resurrection
          </h4>
          <hr className="my-3 border-border-gray-200 w-2/3" />
          <div className="flex flex-col">
            <h6 className="underline">Truth:</h6>
            <p className="mb-4">
              “Or do you not know that your body is a temple of the Holy Spirit
              within you, whom you have from God? You are not your own, for you
              were bought with a price. So glorify God in your body.” 1
              Corinthians 6:19-20
            </p>
            <p>
              “Let us draw near with a true heart in full assurance of faith,
              with our hearts sprinkled clean from an evil conscience and our
              bodies washed with pure water.” Hebrews 10:22
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <h4>
            <span className="text-accent underline">Mind:</span> Transformed by
            Christ
          </h4>
          <hr className="my-3 border-border-gray-200 w-2/3" />
          <div className="flex flex-col">
            <h6 className="underline">Goodness:</h6>
            <p className="mb-4">
              “Set your minds on things that are above, not on things that are
              on earth.” Colossians 3:2
            </p>
            <p>
              “Do not be conformed to this world, but be transformed by the
              renewal of your mind, that by testing you may discern what is the
              will of God, what is good and acceptable and perfect.” Romans 12:2
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <h4>
            <span className="text-accent underline">Spirit:</span> Rejoicing in
            Christ for eternity
          </h4>
          <hr className="my-3 border-border-gray-200 w-2/3" />
          <div className="flex flex-col">
            <h6 className="underline">Beauty:</h6>
            <p className="mb-4">
              “My soul magnifies the Lord, and my spirit rejoices in God my
              Savior.” Luke 1:46-47
            </p>
            <p>
              “Go therefore and make disciples of all nations, baptizing them in
              the name of the Father and of the Son and of the Holy Spirit,
              teaching them to observe all that I have commanded you. And
              behold, I am with you always, to the end of the age.” Matthew
              28:19-20
            </p>
          </div>
        </div>
      </div>
      <hr className="my-12 border-border-gray-200 w-2/3 mx-auto" />
      <div className="my-24 text-center max-w-3xl mx-auto">
        <h3 className="mb-6">
          As we grow in body, mind, and spirit, we foster a life of faith in
          service to Christ and to one’s neighbor, now and for eternity.
        </h3>
        <p>
          2 Peter 3:18 “But grow in the grace and knowledge of our Lord and
          Savior Jesus Christ. To Him be the glory both now and to the day of
          eternity.”
        </p>
      </div>
    </div>
  );
};

export default MissionComponent;
