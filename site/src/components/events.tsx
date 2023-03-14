import React, { ReactNode } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { now } from "moment";
import Button from "./button/button";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { EventType } from "../types/common";
import { GatsbyImage } from "gatsby-plugin-image";

const Events = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query EventsQuery {
      events: allSanityEvent(sort: { startDate: ASC }) {
        nodes {
          endDate
          startDate
          id
          image {
            asset {
              gatsbyImageData(width: 350)
            }
          }
          name
          slug {
            current
          }
          summary
        }
      }
    }
  `);

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-6 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl font-pj">
            Upcoming Events
          </h2>
          <p className="mt-5 font-normal text-gray-600 font-pj mb-4">
            Check out the upcoming events for Concordia Classical Academy. Click
            below to view our full calendar of events.
          </p>
          <Button
            label="Events Calendar"
            size="small"
            theme="primary"
            startIcon={faCalendarDays}
            link="/events"
          />
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
          {data.events.nodes
            .filter((event: any) => event.startDate > new Date().toISOString())
            .slice(0, 3)
            .map((event: EventType) => {
              return (
                <div key={event.id} className="relative group mt-8">
                  <div className="flex justify-center overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
                    <GatsbyImage
                      image={event.image.asset.gatsbyImageData}
                      alt={event.name}
                      className="transition-all duration-300 transform group-hover:scale-125"
                      style={{ maxHeight: "225px" }}
                    />
                  </div>
                  <p className="mt-6 text-center text-sm font-normal text-gray-600">
                    <span>
                      {moment(event.startDate).format("MMM. DD, YYYY | h:mma")}
                    </span>
                    <span> - {moment(event.endDate).format("h:mma")}</span>
                  </p>
                  <p className="text-xl text-center font-bold text-primary my-1">
                    {event.name}
                  </p>
                  <p className="text-center">{event.summary}</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Events;
