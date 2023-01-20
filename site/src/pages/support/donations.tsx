import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import DonateCard from "../../components/donateCard";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";

const generalUrl = "https://donate.stripe.com/test_28o9CCbiy4vi7nOaEE";

const donations = [
  {
    amount: "$10",
    url: "https://buy.stripe.com/test_28o7uudqGf9WaA07sz",
  },
  {
    amount: "$20",
    url: "https://buy.stripe.com/test_eVa4ii2M29PCaA014c",
  },
  {
    amount: "$50",
    url: "https://buy.stripe.com/test_3csbKK9aqd1OcI86ox",
  },
  {
    amount: "$100",
    url: "https://buy.stripe.com/test_5kA4ii3Q66Dq6jK28i",
  },
  {
    amount: "$250",
    url: "https://buy.stripe.com/test_cN216672ibXKfUkdR1",
  },
  {
    amount: "$500",
    url: "https://buy.stripe.com/test_eVa02272i1j6fUk3co",
  },
];

const Donate = (): JSX.Element => {
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi molestiae quis fuga! Maiores consectetur ex eaque neque possimus debitis at recusandae dolorem ipsum voluptatum accusamus quod dignissimos eos, architecto laudantium praesentium officia!
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                {donations.map((item: any) => (
                  <DonateCard
                    title={`Donate ${item.amount}`}
                    link={item.url}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Donate;
