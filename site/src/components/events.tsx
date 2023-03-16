import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Button from './button/button';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { EventType } from '../types/common';
import EventsCard from './eventsCard';

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
              gatsbyImageData(height: 500)
            }
          }
          name
          slug {
            current
          }
        }
      }
    }
  `);

  return (
    <section className='py-12 bg-white sm:py-16 lg:py-20'>
      <div className='px-6 mx-auto max-w-screen-xl sm:px-6 lg:px-8'>
        <div className='max-w-md mx-auto text-center'>
          <h2 className='text-3xl font-bold text-primary sm:text-4xl font-pj'>
            Upcoming Events
          </h2>
          <p className='mt-5 font-normal text-gray-600 font-pj mb-4'>
            Check out the upcoming events for Concordia Classical Academy. Click
            below to view our full calendar of events.
          </p>
          <Button
            label='Events Calendar'
            size='small'
            theme='primary'
            startIcon={faCalendarDays}
            link='/events'
          />
        </div>
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8'>
          {data.events.nodes
            .filter((event: any) => event.startDate > new Date().toISOString())
            .slice(0, 3)
            .map((event: EventType) => (
              <EventsCard
                key={event.id}
                id={event.id}
                startDate={event.startDate}
                endDate={event.endDate}
                name={event.name}
                image={event.image}
                slug={event.slug}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
