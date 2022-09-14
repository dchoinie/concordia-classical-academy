import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import AdoptCard from "./adoptCard";

const buyButtons = [
  {
    name: "Adopt-A-Student Level 1",
    url: "https://buy.stripe.com/test_bIYg103Q64vigYo6ou",
  },
  {
    name: "Adopt-A-Student Level 2",
    url: "https://buy.stripe.com/test_7sIg10fyOf9W4bC8wB",
  },
  {
    name: "Adopt-A-Student Level 3",
    url: "https://buy.stripe.com/test_6oEeWWcmC2naeQg004",
  },
  {
    name: "Adopt-A-Student Level 4",
    url: "https://buy.stripe.com/test_dR6aGGbiy4vi0Zq4gj",
  },
  {
    name: "Adopt-A-Student Level 5",
    url: "https://buy.stripe.com/test_00g1660DU0f29vW9AC",
  },
  {
    name: "Adopt-A-Student Level 6",
    url: "https://buy.stripe.com/test_28oaGG2M2bXK6jK5kl",
  },
];

const AdpotAStudentComponent = () => {
  const data = useStaticQuery(graphql`
    query adoptQuery {
      allStripePrice(
        filter: {
          active: { eq: true }
          product: { name: { ne: "General Donation" } }
        }
        sort: { fields: product___name }
      ) {
        edges {
          node {
            id
            product {
              name
              id
            }
            unit_amount
            active
            currency
          }
        }
      }
    }
  `);

  const formatPrice = (price: number) => `$${price / 100}`;

  const getBuyButtonUrl = (name: string): string | undefined => {
    const found = buyButtons.find((b) => name === b.name);
    return found?.url;
  };

  return (
    <div className="my-24">
      <div className="flex gap-12 mb-24">
        <div className="flex w-1/2 self-center">
          <StaticImage
            src="../assets/images/adoptImage.jpg"
            alt="Adopt-A-Student"
            height={350}
            placeholder="blurred"
            className="rounded shadow"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <p className="mb-6">
            The work of God has given us to do here at Good Shepherd and
            Concordia Classical Academy finds its' foundation and focus on the
            gift of the Word of God. The very Word that was incarnate by the
            Holy Spirit, born of the Vigin Mary, was crucified, died, buried,
            and on the third day rose again to life is what we are blessed to
            share with our students each day. This Word of Jesus endures
            forever.
          </p>
          <p className="mb-6">
            Concorida Classical Academy has been greatly blessed by our Lord
            Jesus. Through the COVID-19 pandemic, God has led many new families
            to our ministry. So much so that now we are experiencing some
            growing pains.
          </p>
          <p className="mb-6">
            You are invited to join us in this work our Lord has given us to do
            through our Adopt-A-Student program. Your help is needed to empower
            this ministry of God's word.
          </p>
          <div>
            <p className="mb-6">
              When you adopt a student, you will be introduced to one of our CCA
              students, who they are, and who their family is. You will be asked
              to:
            </p>
            <ul className="list-disc text-text italic">
              <li className="ml-12">
                First and foremost, pray for your adopted student.
              </li>
              <li className="ml-12">
                Write notes of encouragement to your adopted student.
              </li>
              <li className="ml-12">
                Help with your adopted student's education cost.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-text text-center my-12">
        <h5>
          The cost of education at Concordia Classical Academy is $4500. While
          most families pay tuition, this only covers a portion of the total
          cost. CCA subsidizes each child's education through the generous gifts
          of Christian men &amp; women who see the value of a classical
          Chrisitan education.
        </h5>
      </div>
      <div className="grid grid-cols-3 gap-12 mb-6">
        {data.allStripePrice.edges.map((d: any) => {
          console.log(getBuyButtonUrl(d.node.product.name));

          return (
            <AdoptCard
              name={d.node.product.name}
              price={formatPrice(d.node.unit_amount)}
              url={getBuyButtonUrl(d.node.product.name)}
            />
          );
        })}
      </div>
      <p className="max-w-xl mx-auto text-center italic">
        Donations may also be made by cash/check. Please drop off any
        adopt-a-student donations to the main office at Concorida Classical
        Academy
      </p>
    </div>
  );
};

export default AdpotAStudentComponent;
