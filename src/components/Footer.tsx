'use client';

import { Footer } from 'flowbite-react';

export const FooterSitemapLinks = (): JSX.Element => {
  return (
    <Footer bgDark className="flex flex-col">
      <div className="flex flex-row w-full bg-primary-200 grid-cols-2">
        <div className="grid w-1/3 grid-cols-1 px-6 py-8">
          <Footer.Title title="Get in touch with us" className="text-white text-lg"></Footer.Title>
          <p className="text-gray-400">
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual
            form of a document or a
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Categories" className="text-white text-xl" />
            <Footer.LinkGroup col className="text-gray-400">
              <Footer.Link href="#">Mobile Phones</Footer.Link>
              <Footer.Link href="#">Mobile Accessories</Footer.Link>
              <Footer.Link href="#">Handsfree</Footer.Link>
              <Footer.Link href="#">Charger</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Top Searches" className="text-white text-xl" />
            <Footer.LinkGroup col className="text-gray-400">
              <Footer.Link href="#">iPhone 13 Pro</Footer.Link>
              <Footer.Link href="#">Samsung S10</Footer.Link>
              <Footer.Link href="#">Samsung Z Fold</Footer.Link>
              <Footer.Link href="#">One Plus 11</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Top Cities" className="text-white text-xl" />
            <Footer.LinkGroup col className="text-gray-400">
              <Footer.Link href="#">Lahore</Footer.Link>
              <Footer.Link href="#">Islamabad</Footer.Link>
              <Footer.Link href="#">Karachi</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="About Us" className="text-white text-xl" />
            <Footer.LinkGroup col className="text-gray-400">
              <Footer.Link href="#">Who are we</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms of use</Footer.Link>
              <Footer.Link href="#">Help</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <div className="w-full text-gray-300 bg-primary-100 px-4 py-4 flex items-center justify-center">
        <Footer.Copyright
          className="text-gray-400 text-center"
          by="Copyright Classified Ads - All Rights Reserved"
          href="#"
          year={2023}
        />
      </div>
    </Footer>
  );
};
