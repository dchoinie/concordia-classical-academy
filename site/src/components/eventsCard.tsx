import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import moment from 'moment';
import React from 'react';
import { EventType } from '../types/common';
import Button from './button/button';

const EventsCard = ({
  id,
  startDate,
  endDate,
  name,
  slug,
  image,
}: EventType) => {
  return (
      <div key={id} className='relative group mt-8 flex flex-col justify-between'>
        <div className='flex justify-center overflow-hidden rounded-lg'>
          <Link to={`/${slug.current}`}>
            <GatsbyImage
              image={image.asset.gatsbyImageData}
              alt={name}
              className='transition-all duration-300 transform group-hover:scale-125'
              style={{ height: '350px' }}
            />
          </Link>
        </div>
        <p className='mt-6 text-center text-sm font-normal text-gray-600'>
          <span>{moment(startDate).format('MMM. DD, YYYY')}</span>
        </p>
        <div className='flex flex-col items-center'>
          <Link
            to={`/${slug.current}`}
            className='text-xl text-center font-bold text-primary my-1 hover:underline'
          >
            {name}
          </Link>
        </div>
        <div className="flex self-center justify-center mt-6">
            <Button link={`/${slug.current}`} label="Learn More" theme="primary" />
        </div>
      </div>
  );
};

export default EventsCard;
