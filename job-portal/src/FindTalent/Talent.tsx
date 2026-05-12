// src/FindTalent/Talent.tsx

import {
  Badge,
  ActionIcon,
} from "@mantine/core";

import {
  IconBookmark,
  IconMapPin,
  IconBriefcase,
  IconCurrencyRupee,
  IconStar,
  IconMessageCircle,
} from "@tabler/icons-react";

import { talents } from "../Data/TalentData";

/* TALENT IMAGES */

const talentImages = [
  "/Working/pic.png",
  "/avatar1.png",
  "/avatar2.png",
  "/avtar01.png",
  "/Boy.png",
];

const FindTalent = () => {
  return (

    <div className="min-h-screen bg-[#0b0b0b] text-white px-6 md:px-12 py-10">

      {/* BACKGROUND EFFECTS */}
      <div className="fixed top-0 left-0 w-[350px] h-[350px] bg-yellow-500/10 blur-[150px] rounded-full"></div>

      <div className="fixed bottom-0 right-0 w-[300px] h-[300px] bg-orange-500/10 blur-[150px] rounded-full"></div>

      {/* HERO SECTION */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#151515] via-[#1d1d1d] to-[#111111] rounded-[35px] border border-[#2d2d2d] p-10 shadow-2xl">

        <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-yellow-500/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT */}
          <div>

            <div className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm mb-6">
              #1 Hiring Platform
            </div>

            <h1 className="text-6xl leading-tight font-extrabold max-w-3xl">

              Find The Best

              <span className="text-yellow-400">
                {" "}Talent{" "}
              </span>

              For Your Company

            </h1>

            <p className="text-gray-400 text-lg leading-8 mt-8 max-w-2xl">
              Connect with highly skilled developers,
              designers and professionals ready to work on
              your next big product.
            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-10 mt-10">

              <div>

                <h2 className="text-4xl font-bold text-yellow-400">
                  5K+
                </h2>

                <p className="text-gray-500 mt-2">
                  Talented Professionals
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-yellow-400">
                  1200+
                </h2>

                <p className="text-gray-500 mt-2">
                  Hiring Companies
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div>

            <img
              src="/Working/Get hired.png"
              alt="talent"
              className="w-[470px] drop-shadow-[0_0_40px_rgba(255,193,7,0.25)]"
            />

          </div>

        </div>

      </div>

      {/* SECTION HEADER */}
      <div className="mt-20 mb-12">

        <h2 className="text-5xl font-bold">
          Featured Talents
        </h2>

        <p className="text-gray-500 mt-4 text-lg">
          Discover skilled professionals ready to join your team.
        </p>

      </div>

      {/* TALENT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {talents.map((talent: any, index: number) => (

          <div
            key={index}
            className="
              group
              relative
              bg-[#171717]/90
              backdrop-blur-xl
              border border-[#2b2b2b]
              hover:border-yellow-500
              rounded-[32px]
              p-7
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-[0_0_40px_rgba(255,193,7,0.12)]
              overflow-hidden
            "
          >

            {/* CARD GLOW */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-yellow-500/5 blur-[80px] rounded-full"></div>

            {/* TOP */}
            <div className="relative z-10 flex justify-between items-start">

              <div className="flex items-center gap-5">

                {/* IMAGE */}
                <div className="w-[82px] h-[82px] rounded-3xl overflow-hidden border-2 border-yellow-500 shadow-lg">

                  <img
                    src={talentImages[index % talentImages.length]}
                    alt="talent"
                    className="w-full h-full object-cover"
                  />

                </div>

                {/* INFO */}
                <div>

                  <h2 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-all duration-300">
                    {talent.name}
                  </h2>

                  <p className="text-yellow-400 mt-1">
                    {talent.role}
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    {talent.company}
                  </p>

                </div>

              </div>

              {/* BOOKMARK */}
              <ActionIcon
                variant="subtle"
                color="yellow"
                radius="xl"
                size="lg"
                className="hover:bg-yellow-500/10"
              >
                <IconBookmark size={22} />
              </ActionIcon>

            </div>

            {/* TAGS */}
            <div className="relative z-10 flex flex-wrap gap-3 mt-7">

              <Badge
                color="green"
                size="lg"
                radius="xl"
                variant="light"
              >
                Available
              </Badge>

              <Badge
                color="blue"
                size="lg"
                radius="xl"
                variant="light"
              >
                Expert
              </Badge>

              <Badge
                color="violet"
                size="lg"
                radius="xl"
                variant="light"
              >
                Full Time
              </Badge>

            </div>

            {/* DETAILS */}
            <div className="relative z-10 mt-8 space-y-5 text-gray-300">

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-xl bg-[#232323] flex items-center justify-center">
                  <IconMapPin size={20} />
                </div>

                <span className="text-base">
                  {talent.location}
                </span>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-xl bg-[#232323] flex items-center justify-center">
                  <IconBriefcase size={20} />
                </div>

                <span className="text-base">
                  {talent.topSkills.join(", ")}
                </span>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-xl bg-[#232323] flex items-center justify-center">
                  <IconCurrencyRupee size={20} />
                </div>

                <span className="text-yellow-400 font-bold text-lg">
                  {talent.expectedCtc}
                </span>

              </div>

            </div>

            {/* ABOUT */}
            <div className="relative z-10 mt-7 text-gray-400 leading-8 line-clamp-4">

              {talent.about}

            </div>

            {/* PREMIUM FOOTER */}
            <div className="relative z-10 mt-8 pt-6 border-t border-[#2a2a2a]">

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                {/* LEFT */}
                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shadow-lg">

                    <IconStar
                      size={22}
                      className="text-yellow-400"
                    />

                  </div>

                  <div>

                    <h3 className="text-lg font-semibold text-yellow-400">
                      Top Rated Talent
                    </h3>

                    <p className="text-sm text-gray-500">
                      Verified professional profile
                    </p>

                  </div>

                </div>

                {/* RIGHT */}
                <div className="flex flex-wrap gap-4">

                  {/* MESSAGE BUTTON */}
                  <button
                    className="
                      group
                      bg-[#1f1f1f]
                      hover:bg-[#272727]
                      border border-[#333]
                      hover:border-yellow-500
                      px-5 py-3
                      rounded-2xl
                      flex items-center gap-3
                      transition-all duration-300
                      shadow-lg
                    "
                  >

                    <IconMessageCircle
                      size={20}
                      className="text-gray-300 group-hover:text-yellow-400 transition-all duration-300"
                    />

                    <span className="font-medium text-white">
                      Message
                    </span>

                  </button>

                  {/* HIRE BUTTON */}
                  <button
                    className="
                      bg-gradient-to-r
                      from-yellow-500
                      to-yellow-400
                      hover:from-yellow-400
                      hover:to-yellow-300
                      text-black
                      px-7 py-3
                      rounded-2xl
                      font-bold
                      transition-all duration-300
                      hover:scale-105
                      shadow-[0_0_25px_rgba(255,193,7,0.35)]
                    "
                  >

                    Hire Now

                  </button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default FindTalent;