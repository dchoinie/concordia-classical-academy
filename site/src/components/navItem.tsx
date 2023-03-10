import React, { useState } from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import OutsideClickHandler from 'react-outside-click-handler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { NavItemType, SubMenuItem } from '../types/common';

const NavItem = ({ id, label, link, subLinks, external }: NavItemType) => {
  const [isOpen, setIsOpen] = useState(false);
  const getMainNavType = (): JSX.Element => {
    if (external) {
      return (
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='text-text fontHeader'
        >
          {label}
        </a>
      );
    }
    return (
      <Link to={link} className='text-text fontHeader'>
        {label}
      </Link>
    );
  };
  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <div key={id}>
        {subLinks && subLinks.length > 0 ? (
          <>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className='flex cursor-pointer text-primary fontHeader'
            >
              {label}
              <FontAwesomeIcon
                icon={faAngleUp}
                className={cx(
                  'ml-2 self-center transform transition-all duration-300 ease-in-out',
                  isOpen ? 'rotate-0' : 'rotate-180'
                )}
              />
            </div>
            {isOpen && (
              <div
                className={cx(
                  'absolute mt-2 p-4 rounded shadow-md border border-grey-500 z-50 bg-white',
                  'navDropdown'
                )}
              >
                <ul className='flex flex-col'>
                  {subLinks.map((subItem: SubMenuItem) => {
                    if (subItem.external) {
                      return (
                        <li
                          key={subItem._key}
                          className='mb-2 last:mb-0 fontHeader'
                        >
                          <a
                            key={subItem._key}
                            href={subItem.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='mb-2 last:mb-0 whitespace-nowrap text-text hover:text-yellow-500'
                          >
                            {subItem.label}
                          </a>
                        </li>
                      );
                    }
                    return (
                      <li
                        key={subItem._key}
                        className='mb-2 last:mb-0 fontHeader'
                      >
                        <Link
                          key={subItem._key}
                          to={subItem.link}
                          className='mb-2 last:mb-0 whitespace-nowrap text-text hover:text-yellow-500'
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </>
        ) : (
          getMainNavType()
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default NavItem;
