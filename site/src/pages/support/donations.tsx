import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Button from "../../components/button/button";
import DonateCard from "../../components/donateCard";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";
import { getBuyButtonUrl } from "../../helpers/stripeHelpers";

interface DonationProduct {
  id: string;
  name: string;
}
interface Donation {
  active: string;
  currency: string;
  product: DonationProduct;
  unit_amount: number;
}

const donations = [
  {
    amount: "Donation - 10",
    url: "https://buy.stripe.com/test_28o7uudqGf9WaA07sz",
  },
  {
    name: "Donation - 20",
    url: "https://buy.stripe.com/test_eVa4ii2M29PCaA014c",
  },
  {
    name: "Donation - 50",
    url: "https://buy.stripe.com/test_3csbKK9aqd1OcI86ox",
  },
  {
    name: "Donation - 100",
    url: "https://buy.stripe.com/test_5kA4ii3Q66Dq6jK28i",
  },
  {
    name: "Donation - 250",
    url: "https://buy.stripe.com/test_cN216672ibXKfUkdR1",
  },
  {
    name: "Donation - 500",
    url: "https://buy.stripe.com/test_eVa02272i1j6fUk3co",
  },
  {
    name: "General Donation",
    url: "https://donate.stripe.com/test_28o9CCbiy4vi7nOaEE",
  },
];

const Donate = ({ data }: any): JSX.Element => {
  return (
    <>
      <SEO title="Donate" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle title="Donate" />
          <div className="my-24 flex flex-col lg:flex-row gap-12">
            <div className="flex w-full lg:w-1/2">
              <StaticImage
                src="../../assets/images/luther_rose_glass.JPG"
                alt="Luther Rose Stained Glass"
                className="rounded shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="mb-12">
                <h4 className="text-gray-700 text-2xl mb-6">
                  Make A Donation To Concordia Classical Academy
                </h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sequi molestiae quis fuga! Maiores consectetur ex eaque neque
                  possimus debitis at recusandae dolorem ipsum voluptatum
                  accusamus quod dignissimos eos, architecto laudantium
                  praesentium officia!
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 mb-12">
                {data.donationAmounts.nodes.map((item: Donation) => (
                  <DonateCard
                    name={item.product.name}
                    price={item.unit_amount}
                    url={getBuyButtonUrl(item.product.name, donations) || "/"}
                  />
                ))}
              </div>
              <div>
                <h5 className="mb-3">To donate a custom amount, click below and enter in the amount</h5>
                <Button
                  label="Donate Custom Amount"
                  href={getBuyButtonUrl(
                    data.generalDonation.product.name,
                    donations
                  )}
                  endIcon={faAngleRight}
                  theme="white"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query MyQuery {
    donationAmounts: allStripePrice(
      filter: {
        product: { name: { regex: "/Donation/i", ne: "General Donation" } }
      }
      sort: { fields: unit_amount }
    ) {
      nodes {
        active
        currency
        unit_amount
        product {
          name
          id
        }
      }
    }
    generalDonation: stripePrice(
      product: { name: { eq: "General Donation" } }
    ) {
      active
      id
      unit_amount
      currency
      product {
        name
        id
      }
    }
  }
`;

export default Donate;
