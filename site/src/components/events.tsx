import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { now } from "moment";
import Button from "./button/button";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { EventType } from "../types/common";

const Events = () => {
  const data = useStaticQuery(graphql`
    query eventsQuery {
      allSanityEvent(sort: { fields: startDate }) {
        edges {
          node {
            endDate
            id
            image {
              asset {
                url
              }
            }
            name
            slug {
              current
            }
            startDate
            summary
          }
        }
      }
    }
  `);

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl font-pj">
            Upcoming Events
          </h2>
          <p className="mt-5 font-normal text-gray-600 font-pj mb-4">
            Check out the upcoming events for Concorida Classical Academy. Click
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

        <div className="w-full grid auto-cols-max gap-8 mt-8">
          {data.allSanityEvent.edges
            .filter(
              (event: any) => event.node.startDate > new Date().toISOString()
            )
            .slice(0, 3)
            .map((event: any) => {
              const e: EventType = event.node;
              return (
                <div className="relative group mt-8">
                  <div className="flex overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
                    <img
                      className="object-cover h-56 shadow transition-all duration-300 transform group-hover:scale-125"
                      src={e.image.asset.url}
                      alt={e.slug.current}
                    />
                  </div>
                  <p className="mt-6 text-center text-sm font-normal text-gray-600">
                    <span>
                      {moment(e.startDate).format("MMM. DD, YYYY | h:mma")}
                    </span>
                    <span> - {moment(e.endDate).format("h:mma")}</span>
                  </p>
                  <p className="text-xl text-center font-bold text-primary my-1">
                    {e.name}
                  </p>
                  <p className="text-center">{e.summary}</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Events;
