import React, { useState } from "react";
import cx from "classnames";
import { Link } from "gatsby";
import OutsideClickHandler from "react-outside-click-handler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { NavItemType, SubMenuItem } from "../types/common";

const NavItem = ({ id, label, link, subLinks }: NavItemType) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <li key={id}>
        {subLinks && subLinks.length > 0 ? (
          <>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex cursor-pointer text-primary"
            >
              {label}
              <FontAwesomeIcon
                icon={isOpen ? faAngleUp : faAngleDown}
                className="ml-2 self-center"
              />
            </div>
            {isOpen && (
              <div className={cx('absolute mt-2 p-4 rounded shadow-md border border-grey-500 z-50 bg-white', 'navDropdown')}>
                <ul className="flex flex-col">
                  {subLinks.map((subItem: SubMenuItem) => (
                    <Link
                      key={subItem._key}
                      to={subItem.link}
                      className="mb-2 last:mb-0 whitespace-nowrap text-text hover:text-yellow-500"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <Link to={link} className="text-text">
            {label}
          </Link>
        )}
      </li>
    </OutsideClickHandler>
  );
};

export default NavItem;
