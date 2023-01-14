import React from "react";
import LongPromo from "../assets/videos/promo_long.mp4";
import Thumbnail from "../assets/images/promo_thumbnail4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const educ = [
  {
    title: "Christ-Centered",
    text: "Jesus Christ, Redeemer and Savior, is the center of all teaching, learning and living.",
  },
  {
    title: "Teacher Views",
    text: "Teachers view all students as redeemed children of God.",
  },
  {
    title: "Respect",
    text: "Students are urged daily to view themselves, their classmates and their teachers with respect, esteem and dignity.",
  },
  {
    title: "Purpose",
    text: "Teachers help students know and understand themselves, their needs, their talents and their purpose as disciples of Christ within their community, church and their society as a whole.",
  },
  {
    title: "Community",
    text: "Lutheran classrooms are communities where children learn to care for and help one another learn, grow and apply what they believe. Appropriate classroom behavior, based on self-discipline is the goal of the caring community. Christian love and forgiveness is operative in all relationships.",
  },
  {
    title: "Individualized",
    text: "Because children grow and mature in different ways, lessons are designed to allow for individual differences and growth patterns. Measurement of performance is based on individual progress and growth, as well as comparison to a grade-appropriate standard of performance.",
  },
  {
    title: "Values",
    text: "The curriculum is designed to include not only academic subjects, but all aspects of a comprehensive education. Learning and living Christian values and lifestyles is an important aspect of daily Christian nurture.",
  },
  {
    title: "Family Oriented",
    text: "Because fathers and mothers are viewed as the child’s primary teachers, classroom teachers intentionally involve them as partners in the teaching/learning process. This involves more than simply reporting to parents the child’s performance and progress.",
  },
];

const WhyCCAComponent = () => {
  return (
    <div className="my-12">
      <div className="flex w-full gap-12">
        <div className="flex w-1/2">
          <div className="flex flex-col">
            <h2 className="font-bold text-primary mb-3">
              Concorida Classical Academy: A Ministry of Good Shepherd Lutheran
              Church
            </h2>
            <h6 className="text-gray-600">
              Lutheran schools are dedicated to providing academic excellence
              within a Christian environment. Our goal is to equip students with
              skills that will help them become productive citizens with a
              Christian world-vew. This is accomplished by a traditional
              classical curriculum which educates the whole child: academically,
              physically, socially and spiritually.
            </h6>
          </div>
        </div>
        <div className="flex w-1/2">
          <video
            controls
            width="100%"
            autoPlay={false}
            poster={Thumbnail}
            className="rounded shadow-lg"
          >
            <source src={LongPromo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="my-36">
        <h5 className="text-primary mb-6 underline">
          Qualities of Lutheran Education:
        </h5>
        <div className="grid grid-cols-4 gap-x-12 gap-y-6">
          {educ.map((e: any) => (
            <div className="flex mb-4">
              <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" />
              <div className="flex flex-col">
                <h6 className="text-text font-bold leading-4 mb-2">
                  {e.title}
                </h6>
                <p className="text-text">{e.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyCCAComponent;
