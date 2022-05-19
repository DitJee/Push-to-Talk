import React from 'react';
import Image from 'next/image';
import {
  GlobeAltIcon,
  MenuIcon,
  OfficeBuildingIcon,
  SearchIcon,
  UserCircleIcon,
  CashIcon,
  BellIcon,
} from '@heroicons/react/solid';
const Footer = () => {
  return (
    <footer className="bg-gray-300 text-center mt-5 inset-x-0 bottom-0 z-50 shadow-md p-5 md:px-10">
      <div className="items-center p-3">
        <div className="grid lg:grid-cols-9   md:grid-cols-4">
          {[
            {
              name: 'About us',
              link: 'https://www.linkedin.com/company/earthshine-games/mycompany/',
            },
            {
              name: 'Jobs',
              link: 'https://www.linkedin.com/company/earthshine-games/mycompany/',
            },
            {
              name: 'Blog',
              link: 'https://www.linkedin.com/company/earthshine-games/mycompany/',
            },
            {
              name: 'Parents',
              link: 'https://www.linkedin.com/company/earthshine-games/mycompany/',
            },
            {
              name: 'Gift Cards',
              link: 'https://www.linkedin.com/company/earthshine-games/mycompany/',
            },
            {
              name: 'Help',
              link: 'https://www.linkedin.com/company/earthshine-games/mycompany/',
            },
            {
              name: 'Terms',
              link: 'https://www.linkedin.com/company/earthshine-games/mycompany/',
            },
            {
              name: 'Accessibility',
              link: 'https://www.linkedin.com/company/earthshine-games/mycompany/',
            },
            {
              name: 'Privacy',
              link: 'https://www.linkedin.com/company/earthshine-games/mycompany/',
            },
          ].map((context) => {
            return (
              <a key={context.name} href={context.link}>
                <h5 className=" font-bold text-gray-600">{context.name}</h5>
              </a>
            );
          })}
        </div>
      </div>
      <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 " />
      <div className="text-gray-700 text-center p-2 bg-gray-300">
        © 2021 Copyright:
        <a className="text-gray-800" href="https://tailwind-elements.com/">
          Jee Entertainment
        </a>
      </div>
    </footer>
  );
};

export default Footer;
