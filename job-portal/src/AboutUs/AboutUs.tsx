// src/Pages/AboutUs.tsx

import {
  IconUsers,
  IconBriefcase,
  IconTargetArrow,
  IconRocket,
  IconBrandGithub,
  IconBrandLinkedin,
  IconCode,
  IconMail,
} from "@tabler/icons-react";

const AboutUs = () => {

  return (

    <div className="min-h-screen bg-[#0a0a0a] text-white px-6 lg:px-16 py-16 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-[140px] rounded-full"></div>

      {/* MAIN */}
      <div className="relative z-10">

        {/* HERO SECTION */}
        <div className="text-center max-w-5xl mx-auto">

          <div className="
            inline-flex
            items-center
            gap-3
            px-5
            py-2
            rounded-full
            bg-yellow-500/10
            border border-yellow-500/20
            text-yellow-300
            text-sm
            tracking-wide
          ">

            <IconRocket size={18} />

            ABOUT HIRENEST

          </div>

          <h1 className="text-5xl lg:text-7xl mt-8 leading-tight">

            Building The Future Of{" "}

            <span className="text-yellow-300">
              Recruitment
            </span>

          </h1>

          <p className="text-gray-400 text-lg mt-8 leading-relaxed max-w-3xl mx-auto">

            HireNest is a modern hiring platform designed to connect
            talented professionals with top companies worldwide.
            We simplify recruitment with a fast, elegant and smart
            experience for both recruiters and job seekers.

          </p>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">

          {/* CARD 1 */}
          <div className="
            bg-[#121212]/80
            backdrop-blur-xl
            border border-[#242424]
            rounded-[32px]
            p-8
            text-center
            hover:border-yellow-500/20
            transition-all duration-300
          ">

            <div className="
              h-16
              w-16
              rounded-2xl
              bg-yellow-500/10
              flex
              items-center
              justify-center
              mx-auto
            ">

              <IconUsers
                size={32}
                className="text-yellow-300"
              />

            </div>

            <div className="text-4xl text-yellow-200 mt-6">
              20K+
            </div>

            <div className="text-gray-400 mt-3">
              Active Candidates
            </div>

          </div>

          {/* CARD 2 */}
          <div className="
            bg-[#121212]/80
            backdrop-blur-xl
            border border-[#242424]
            rounded-[32px]
            p-8
            text-center
            hover:border-orange-500/20
            transition-all duration-300
          ">

            <div className="
              h-16
              w-16
              rounded-2xl
              bg-orange-500/10
              flex
              items-center
              justify-center
              mx-auto
            ">

              <IconBriefcase
                size={32}
                className="text-orange-300"
              />

            </div>

            <div className="text-4xl text-orange-200 mt-6">
              5K+
            </div>

            <div className="text-gray-400 mt-3">
              Companies Hiring
            </div>

          </div>

          {/* CARD 3 */}
          <div className="
            bg-[#121212]/80
            backdrop-blur-xl
            border border-[#242424]
            rounded-[32px]
            p-8
            text-center
            hover:border-blue-500/20
            transition-all duration-300
          ">

            <div className="
              h-16
              w-16
              rounded-2xl
              bg-blue-500/10
              flex
              items-center
              justify-center
              mx-auto
            ">

              <IconTargetArrow
                size={32}
                className="text-blue-300"
              />

            </div>

            <div className="text-4xl text-blue-200 mt-6">
              98%
            </div>

            <div className="text-gray-400 mt-3">
              Hiring Success Rate
            </div>

          </div>

        </div>

        {/* MISSION SECTION */}
        <div className="
          mt-20
          bg-[#121212]/80
          backdrop-blur-xl
          border border-[#242424]
          rounded-[40px]
          p-10 lg:p-16
        ">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div>

              <div className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-yellow-500/10
                text-yellow-300
                text-sm
              ">

                <IconRocket size={16} />

                OUR MISSION

              </div>

              <h2 className="text-4xl mt-6 leading-tight">

                Connecting Talent With{" "}

                <span className="text-yellow-300">
                  Opportunity
                </span>

              </h2>

              <p className="text-gray-400 leading-relaxed mt-6 text-lg">

                Our mission is to empower recruiters and candidates
                with a modern hiring ecosystem that is fast,
                transparent, and efficient.

                We aim to remove hiring friction and create
                opportunities for everyone.

              </p>

            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-5">

              <div className="
                bg-[#181818]
                border border-[#262626]
                rounded-3xl
                p-6
              ">

                <div className="text-yellow-300 text-lg">
                  Smart Hiring
                </div>

                <div className="text-gray-500 text-sm mt-3">
                  AI powered recruitment experience
                </div>

              </div>

              <div className="
                bg-[#181818]
                border border-[#262626]
                rounded-3xl
                p-6
              ">

                <div className="text-orange-300 text-lg">
                  Secure Platform
                </div>

                <div className="text-gray-500 text-sm mt-3">
                  Safe and trusted recruitment
                </div>

              </div>

              <div className="
                bg-[#181818]
                border border-[#262626]
                rounded-3xl
                p-6
              ">

                <div className="text-blue-300 text-lg">
                  Fast Process
                </div>

                <div className="text-gray-500 text-sm mt-3">
                  Quick and efficient job matching
                </div>

              </div>

              <div className="
                bg-[#181818]
                border border-[#262626]
                rounded-3xl
                p-6
              ">

                <div className="text-green-300 text-lg">
                  Global Reach
                </div>

                <div className="text-gray-500 text-sm mt-3">
                  Connect worldwide opportunities
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-20">

          {/* TITLE */}
          <div className="text-center max-w-3xl mx-auto">

            <div className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-yellow-500/10
              border border-yellow-500/20
              text-yellow-300
              text-sm
            ">

              WHY HIRENEST

            </div>

            <h2 className="text-4xl lg:text-5xl mt-6">

              Why Companies Choose{" "}

              <span className="text-yellow-300">
                HireNest
              </span>

            </h2>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">

              Built with modern recruitment needs in mind —
              fast hiring, smart matching, and professional experience.

            </p>

          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

            {/* CARD */}
            <div className="
              bg-[#121212]/80
              backdrop-blur-xl
              border border-[#242424]
              rounded-[32px]
              p-8
              hover:border-yellow-500/20
              transition-all duration-500
            ">

              <div className="
                h-16
                w-16
                rounded-2xl
                bg-yellow-500/10
                flex
                items-center
                justify-center
              ">

                <IconRocket
                  size={32}
                  className="text-yellow-300"
                />

              </div>

              <div className="text-2xl mt-8 text-gray-100">
                Faster Hiring
              </div>

              <p className="text-gray-500 mt-4 leading-relaxed">

                Reduce hiring time with optimized workflows
                and seamless recruiter experience.

              </p>

            </div>

            {/* CARD */}
            <div className="
              bg-[#121212]/80
              backdrop-blur-xl
              border border-[#242424]
              rounded-[32px]
              p-8
              hover:border-blue-500/20
              transition-all duration-500
            ">

              <div className="
                h-16
                w-16
                rounded-2xl
                bg-blue-500/10
                flex
                items-center
                justify-center
              ">

                <IconUsers
                  size={32}
                  className="text-blue-300"
                />

              </div>

              <div className="text-2xl mt-8 text-gray-100">
                Top Talent
              </div>

              <p className="text-gray-500 mt-4 leading-relaxed">

                Access thousands of verified developers,
                designers and professionals worldwide.

              </p>

            </div>

            {/* CARD */}
            <div className="
              bg-[#121212]/80
              backdrop-blur-xl
              border border-[#242424]
              rounded-[32px]
              p-8
              hover:border-orange-500/20
              transition-all duration-500
            ">

              <div className="
                h-16
                w-16
                rounded-2xl
                bg-orange-500/10
                flex
                items-center
                justify-center
              ">

                <IconTargetArrow
                  size={32}
                  className="text-orange-300"
                />

              </div>

              <div className="text-2xl mt-8 text-gray-100">
                Smart Matching
              </div>

              <p className="text-gray-500 mt-4 leading-relaxed">

                AI powered matching helps recruiters
                connect with ideal candidates faster.

              </p>

            </div>

          </div>

        </div>

        {/* CTA SECTION */}
        <div className="
          mt-20
          relative
          overflow-hidden
          rounded-[40px]
          border border-yellow-500/10
          bg-gradient-to-br
          from-yellow-500/10
          via-[#121212]
          to-orange-500/10
          p-10 lg:p-16
        ">

          {/* CONTENT */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">

            <div className="
              inline-flex
              px-4
              py-2
              rounded-full
              bg-yellow-500/10
              text-yellow-300
              text-sm
              border border-yellow-500/10
            ">

              START HIRING TODAY

            </div>

            <h2 className="text-4xl lg:text-6xl mt-8 leading-tight">

              Transform Your{" "}

              <span className="text-yellow-300">
                Hiring Experience
              </span>

            </h2>

            <p className="text-gray-400 text-lg mt-8 leading-relaxed">

              HireNest helps recruiters and candidates connect
              with speed, trust and simplicity.

            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center gap-5 mt-10">

              <button onClick={() => window.location.href = "/upload-jobs"}
              className="
                px-8
                py-4
                rounded-2xl
                bg-yellow-300
                text-black
                hover:opacity-90
                transition-all duration-300
              ">

                Start Hiring

              </button>

              <button  onClick={() => window.location.href = "/find-jobs"}
              className="
                px-8
                py-4
                rounded-2xl
                border border-[#2c2c2c]
                bg-[#181818]
                text-gray-200
                hover:bg-[#1d1d1d]
                transition-all duration-300
              ">

                Explore Jobs

              </button>

            </div>

          </div>

        </div>

        {/* DEVELOPER SECTION */}
        <div className="
          mt-20
          bg-[#121212]/80
          backdrop-blur-xl
          border border-[#242424]
          rounded-[40px]
          p-10 lg:p-14
        ">

          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* IMAGE */}
            <div className="
              h-44
              w-44
              rounded-full
              border-4
              border-yellow-500/20
              overflow-hidden
              flex-shrink-0
            ">

              <img
                src="/Working/pic.png"
                alt="Rahul"
                className="h-full w-full object-cover"
              />

            </div>

            {/* INFO */}
            <div className="flex-1">

              <div className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-yellow-500/10
                text-yellow-300
                text-sm
              ">

                <IconCode size={16} />

                DEVELOPER

              </div>

              <h2 className="text-4xl mt-6">
                Rahul Kumar
              </h2>

              <div className="text-yellow-200 mt-2">
                Software Developer
              </div>

              <p className="text-gray-400 mt-6 leading-relaxed max-w-3xl">

                Ambitious Full Stack Developer with expertise in building modern, scalable, and user-centric web applications. Proficient in frontend and backend development with hands-on experience
                in React.js, Node.js, Java, MongoDB, HTML, CSS, Tailwind CSS, Javascript, and SQL.
                Passionate about developing high-performance solutions, writing clean and maintainable code, and delivering seamless digital experiences.
                Strong problem-solving mindset with a commitment to continuous learning, innovation, and professional growth in software development.

              </p>

              {/* SOCIALS */}
              <div className="mt-10">

                <div className="text-sm tracking-[3px] uppercase text-gray-500 mb-5">
                  Connect With Me
                </div>

                <div className="flex flex-wrap gap-5">

                  {/* GITHUB */}
                  <a
                    href="https://github.com/Rahul12886"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-4
                      px-6
                      py-4
                      rounded-2xl
                      bg-[#181818]
                      border border-[#2a2a2a]
                      hover:border-yellow-500/20
                      hover:bg-[#1d1d1d]
                      transition-all duration-300
                    "
                  >

                    <div className="
                      h-12
                      w-12
                      rounded-xl
                      bg-yellow-500/10
                      flex
                      items-center
                      justify-center
                    ">

                      <IconBrandGithub
                        size={24}
                        className="text-yellow-200"
                      />

                    </div>

                    <div>

                      <div className="text-gray-200">
                        GitHub
                      </div>

                      <div className="text-sm text-gray-500">
                        github.com/Rahul12886
                      </div>

                    </div>

                  </a>

                  {/* LINKEDIN */}
                  <a
                    href="https://www.linkedin.com/in/rahulkumar14/"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-4
                      px-6
                      py-4
                      rounded-2xl
                      bg-[#181818]
                      border border-[#2a2a2a]
                      hover:border-blue-500/20
                      hover:bg-[#1d1d1d]
                      transition-all duration-300
                    "
                  >

                    <div className="
                      h-12
                      w-12
                      rounded-xl
                      bg-blue-500/10
                      flex
                      items-center
                      justify-center
                    ">

                      <IconBrandLinkedin
                        size={24}
                        className="text-blue-200"
                      />

                    </div>

                    <div>

                      <div className="text-gray-200">
                        LinkedIn
                      </div>

                      <div className="text-sm text-gray-500">
                        linkedin.com/in/rahulkumar14
                      </div>

                    </div>

                  </a>

                  {/* EMAIL */}
                  <a
                    href="mailto:rahulrathore844@gmail.com"
                    className="
                      flex
                      items-center
                      gap-4
                      px-6
                      py-4
                      rounded-2xl
                      bg-[#181818]
                      border border-[#2a2a2a]
                      hover:border-orange-500/20
                      hover:bg-[#1d1d1d]
                      transition-all duration-300
                    "
                  >

                    <div className="
                      h-12
                      w-12
                      rounded-xl
                      bg-orange-500/10
                      flex
                      items-center
                      justify-center
                    ">

                      <IconMail
                        size={24}
                        className="text-orange-200"
                      />

                    </div>

                    <div>

                      <div className="text-gray-200">
                        Email
                      </div>

                      <div className="text-sm text-gray-500">
                        rahulrathore844124@gmail.com
                      </div>

                    </div>

                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AboutUs;