import React from "react";
import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";
import { SEO } from "../components/seo";

const Events = () => {
  return (
    <div>
      <SEO title="Events Calendar" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle title="Events Calendar" />
          <div className="my-12">
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showPrint=0&showTabs=1&showTz=1&src=MDRkMWp2Nmk5ZGI2b2Y0Y3E0a2FnNjQ4N3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000&color=%23E67C73"
              width="100%"
              height="800"
            ></iframe>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Events;
