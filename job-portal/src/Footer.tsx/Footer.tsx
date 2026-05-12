import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
  IconArrowUpRight,
  IconDeviceTabletSearch,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

import { Link } from "react-router-dom";

import { footerLinks } from "../Data/Data";

const Footer = () => {
  return (

    <footer className="relative bg-[#0b0b0b] border-t border-[#1f1f1f] text-white overflow-hidden">

      {/* TOP GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-yellow-500/10 blur-[120px] rounded-full"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 px-6 lg:px-16 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 pb-14 border-b border-[#222]">

          {/* BRAND SECTION */}
          <div className="flex flex-col gap-6">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-3 group w-fit"
            >

              <div className="
                h-14
                w-14
                rounded-2xl
                bg-gradient-to-br
                from-yellow-400
                to-yellow-600
                flex
                items-center
                justify-center
                shadow-[0_0_30px_rgba(255,193,7,0.2)]
                transition-all duration-300
                group-hover:scale-105
              ">

                <IconDeviceTabletSearch
                  className="text-black"
                  size={28}
                  stroke={2.2}
                />

              </div>

              <div>

                <h1 className="text-3xl font-black tracking-tight text-white group-hover:text-yellow-400 transition-all duration-300">
                  HireNest
                </h1>

                <p className="text-xs tracking-[3px] uppercase text-gray-500">
                  Smart Hiring Platform
                </p>

              </div>

            </Link>

            {/* DESCRIPTION */}
            <p className="text-gray-400 leading-relaxed text-sm">

              HireNest is a modern recruitment platform helping developers,
              designers, and professionals connect with top companies worldwide.

            </p>

            {/* CONTACT INFO */}
            <div className="flex flex-col gap-3 text-sm">

              <div className="flex items-center gap-3 text-gray-400">
                <IconMail size={18} className="text-yellow-400" />
                rahulrathore844124@gmail.com
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <IconMapPin size={18} className="text-yellow-400" />
                India
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <IconPhone size={18} className="text-yellow-400" />
                +91 XXXXX XXXXX
              </div>

            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-5">

              {/* LEETCODE */}
              <a
                href="https://leetcode.com/u/Rahul12886/"
                target="_blank"
                rel="noreferrer"
                className="
                  h-12
                  w-12
                  rounded-xl
                  bg-[#151515]
                  border border-[#262626]
                  flex items-center justify-center
                  hover:border-yellow-500/40
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >

                <img
                  src="/Working/leetcode.png"
                  alt="leetcode"
                  className="h-6 w-6 object-contain"
                />

              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/r_ahul14/"
                target="_blank"
                rel="noreferrer"
                className="
                  h-12
                  w-12
                  rounded-xl
                  bg-[#151515]
                  border border-[#262626]
                  flex items-center justify-center
                  hover:border-pink-500/40
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >

                <IconBrandInstagram
                  size={22}
                  className="text-pink-400"
                />

              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/Rahul12886"
                target="_blank"
                rel="noreferrer"
                className="
                  h-12
                  w-12
                  rounded-xl
                  bg-[#151515]
                  border border-[#262626]
                  flex items-center justify-center
                  hover:border-white/40
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >

                <IconBrandGithub
                  size={22}
                  className="text-white"
                />

              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/rahulkumar14/"
                target="_blank"
                rel="noreferrer"
                className="
                  h-12
                  w-12
                  rounded-xl
                  bg-[#151515]
                  border border-[#262626]
                  flex items-center justify-center
                  hover:border-blue-500/40
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >

                <IconBrandLinkedin
                  size={22}
                  className="text-blue-400"
                />

              </a>

            </div>

          </div>

          {/* FOOTER LINKS */}
          {footerLinks.map((section, index) => (

            <div key={index}>

              <h2 className="text-xl font-bold text-white mb-6 relative w-fit">

                {section.title}

                <span className="absolute left-0 -bottom-2 h-[3px] w-10 bg-yellow-400 rounded-full"></span>

              </h2>

              <div className="flex flex-col gap-4">

                {section.links.map((link, i) => (

                  <a
                    href="#"
                    key={i}
                    className="
                      flex
                      items-center
                      justify-between
                      text-gray-400
                      hover:text-white
                      transition-all duration-300
                      group
                    "
                  >

                    <span className="group-hover:translate-x-1 transition-all duration-300">
                      {link}
                    </span>

                    <IconArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    />

                  </a>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-8">

          {/* COPYRIGHT */}
          <div className="text-gray-500 text-sm text-center lg:text-left">

            © {new Date().getFullYear()}{" "}

            <span className="text-yellow-400 font-semibold">
              HireNest
            </span>

            . All rights reserved.

          </div>

          {/* MADE BY */}
          <div className="text-sm text-gray-500 text-center">

            Crafted with{" "}

            <span className="text-red-500 animate-pulse">
              ❤
            </span>{" "}

            by{" "}

            <span className="
              font-bold
              bg-gradient-to-r
              from-yellow-300
              via-yellow-400
              to-yellow-500
              bg-clip-text
              text-transparent
            ">
              Rahul Kumar
            </span>

          </div>

          {/* INDIA BADGE */}
          <div className="
            px-4
            py-2
            rounded-full
            bg-[#141414]
            border border-[#262626]
            text-sm
            text-gray-400
          ">

            Made in <span className="text-white font-semibold">India 🇮🇳</span>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;