import React from "react";
import { useLocation } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

interface PageTitleProps {
  title: string;
  subTitle?: string;
}

const PageTitle = ({ title, subTitle }: PageTitleProps): JSX.Element => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="my-12">
      <div className="flex">
        <Link to="/" className="self-center">
          <FontAwesomeIcon icon={faHouse} className="text-primary" />
        </Link>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="mx-4 text-primary self-center text-sm"
        />
        <div className="flex">
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;

            return last ? (
              <p key={to} className="text-primary self-center capitalize">
                {value}
              </p>
            ) : (
              <div className="flex" key={to}>
                <Link
                  to={to}
                  key={to}
                  className="text-primary self-center capitalize underline"
                >
                  {value}
                </Link>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="mx-4 text-primary self-center text-sm"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center mt-12">
        <h2 className="text-5xl font-bold text-primary text-center lg:text-left">{title}</h2>
        <h6 className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 text-center">
          {subTitle}
        </h6>
      </div>
    </div>
  );
};

export default PageTitle;
