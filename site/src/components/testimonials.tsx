import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    text: "I love knowing my children's teachers know them well because the class sizes are small. The 15 student per room capacity is reassuring.",
    date: "April 16th, 2021",
  },
  {
    text: "We are so happy for our three children. Faith is taught throughout each subject matter and in regular daily life. The teachers are veterans who devote themselves to educating our children and helping form their character.",
    date: "October 13th, 2019",
  },
  {
    text: "Our children excel academically and learn God's Word to apply to their life every day.",
    date: "January 9th, 2021",
  },
  {
    text: "What a blessing this school has been to so many our daughter. I thank God for this school!  At CCA we are blessed to receive a great education and to get to know Jesus.  The staff is amazing.",
    date: "July 26, 2022",
  },
  {
    text: "What a blessing this school has been to so many students and to our daughter. I praise God for a school that encourages us to know Christ and his word and to hear His great love for us!  What good is a marvelous education if we don't also learn about Christ and receive his innumerable gifts?  At CCA we are blessed to receive both a great education in  the matters of this world and the one to come!  The staff are all well trained and gifted in music and all the areas of classical education.   Amazing and gifted people!",
    date: "March 26th, 2021",
  },
  {
    text: "A school to grow closer to Christ and share Him with others.",
    date: "February 2nd, 2018",
  },
];

const Testimonials = () => {
  return (
    <div className="my-24">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">
          Testimonials
        </h2>
        <p className="mt-5 font-normal text-gray-600 font-pj mb-4">
          We value the feedback of our school community and strive to provide
          the best educational experience that prepares our students to thrive
          in life in the world and the next, by developing all of their
          God-given talents.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-12 my-12">
        {testimonials.map((testimonial: Record<string, string>) => (
          <div className="flex flex-col p-8 bg-gray-50 shadow rounded border border-gray-200">
            <p className="text-text mb-2">{`"${testimonial.text}"`}</p>
            <p className="text-accent italic">- {testimonial.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
