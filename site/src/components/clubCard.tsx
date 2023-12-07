import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

export interface Club {
  ages: string;
  meetingDays: string;
  details?: any;
  endTime: string;
  id: string;
  image: any;
  clubName: string;
  startTime: string;
}

const ClubCard = ({
  ages,
  meetingDays,
  details,
  endTime,
  id,
  image,
  clubName,
  startTime,
}: Club): JSX.Element => {
  return (
    <div className="shadow rounded border border-gray-50">
      <GatsbyImage
        image={image}
        alt={clubName}
        className="rounded-tr rounded-tl h-64"
      />
      <div className="flex flex-col items-center p-12">
        <h2 className="text-primary mb-3 underline">{clubName}</h2>
        <p className="text-gray-700 text-lg mb-1">{meetingDays}</p>
        <p className="text-gray-700 text-lg mb-1">{`${startTime} - ${endTime}`}</p>
        <p className="text-gray-700 text-lg">{ages}</p>
        {details ? (
          <>
            <hr className="border border-gray-300 my-2 w-2/3" />
            <p className="text-gray-500">{details}</p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ClubCard;
