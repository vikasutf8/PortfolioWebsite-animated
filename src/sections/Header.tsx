import { FC } from "react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  return <header>
    <div className="container !max-w-full">
      <div className="flex  justify-between h-20 items-center">
        {/* left logo*/}
      <div>
        <a href="/">
          <span className=" text-xl font-bold uppercase ">vikas&nbsp; arya</span>
        </a>
      </div>
      {/* right buttons */}
      <div className="flex items-center gap-4 ">
        <div className="size-11 border border-stone-400 rounded-full inline-flex justify-center items-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="15" width="18" height="2" fill="currentColor" />
          <rect x="3" y="7" width="18" height="2" fill="currentColor" />
        </svg>
        </div>
        <button className="bg-red-orange-500 h-11 px-6 rounded-lg text-white border border-red-orange-500 uppercase hidden md:inline-flex items-center">
        Contect Me
      </button>
      </div>
      </div>
    </div>
  </header>
};

export default Header;
