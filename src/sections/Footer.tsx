import { FC } from "react";
import Button from "@/components/button";

const navItems = [
  {
    href: '#',
    label: 'Home'
  },
  {
    href: '#',
    label: 'Projects'
  },
  {
    href: '#',
    label: 'Faqs'
  },
  {
    href: '#',
    label: 'Experience'
  },
  {
    href: '#',
    label: 'Contact'
  }
]


const Footer: FC = () => {
  return <footer className="bg-stone-900 text-slate-100"id="contact">
    <div className="container py-20">
      <div className="section ">
        <div className="flex items-center gap-3">
          <div className="size-3 rounded-full bg-green-400"></div>
          <span className="uppercase">Currently  seeking  for  full-time  Software  Developer  Role</span>
        </div>
        <div className="grid md:grid-cols-3 md:items-center">
          <div className="md: col-span-2">
            <h2 className="text-4xl md:text-7xl lg:text-8xl mt-8  font-extralight">Enough Talk. Let's make something great together.</h2>
            <Button variant="secondary"
              className="mt-8 md:mt-10 lg:mt-12"
              iconAfter={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              }>
              vikasarya1889@gmail.com
            </Button>
          </div>
          <div>
            <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
              {navItems.map(({ href, label }) => (
                <a href={href} key={label}>
                  <Button variant="text" className="text-lg">
                    {label}
                  </Button>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <p className=" py-16  md:py-20 lg:py-24 text-white/30 text-sm ">Copyright &copy; Vikas ARYA &bull; All rights reserved</p>
    </div>
  </footer>
};

export default Footer;
