// src/UploadJobs/UploadJobs.tsx

import {
  TextInput,
  Textarea,
  Select,
  NumberInput,
  Button,
} from "@mantine/core";

import {
  IconBriefcase,
  IconMapPin,
  IconCurrencyRupee,
  IconFileDescription,
  IconUsers,
  IconWorld,
  IconCalendarDue,
  IconSparkles,
  IconUpload,
} from "@tabler/icons-react";

const UploadJobs = () => {

  return (

    <div className="min-h-screen bg-[#0a0a0a] text-white px-6 lg:px-16 py-14 relative overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-[140px] rounded-full"></div>

      {/* MAIN */}
      <div className="relative z-10">

        {/* TOP BADGE */}
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

          <IconSparkles size={18} />

          AI POWERED RECRUITMENT

        </div>

        {/* HEADER */}
        <div className="mt-8 flex flex-col lg:flex-row justify-between gap-10">

          {/* LEFT */}
          <div>

            <h1 className="text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl">

              Find Your Next{" "}

              <span className="text-yellow-300">
                Top Employee
              </span>

            </h1>

            <p className="text-gray-400 text-lg mt-6 leading-relaxed max-w-2xl">

              Create premium job postings and connect with highly
              skilled developers, designers, and professionals from
              across the globe.

            </p>

          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-5 min-w-[320px]">

            <div className="
              bg-[#151515]
              border border-[#252525]
              rounded-3xl
              p-5
            ">

              <div className="text-3xl text-yellow-300">
                20K+
              </div>

              <div className="text-gray-500 mt-2 text-sm">
                Active Candidates
              </div>

            </div>

            <div className="
              bg-[#151515]
              border border-[#252525]
              rounded-3xl
              p-5
            ">

              <div className="text-3xl text-orange-300">
                5K+
              </div>

              <div className="text-gray-500 mt-2 text-sm">
                Companies Hiring
              </div>

            </div>

          </div>

        </div>

        {/* LAYOUT */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_350px] gap-8 mt-14">

          {/* LEFT FORM */}
          <div
            className="
              bg-[#121212]/90
              backdrop-blur-xl
              border border-[#242424]
              rounded-[36px]
              p-8 lg:p-12
              shadow-[0_0_50px_rgba(0,0,0,0.45)]
            "
          >

            {/* SECTION TITLE */}
            <div className="mb-10">

              <h2 className="text-3xl text-yellow-200">
                Job Information
              </h2>

              <p className="text-gray-500 mt-2">
                Fill all details carefully to attract top candidates.
              </p>

            </div>

            {/* JD UPLOAD */}
            <div className="mb-10">

              <div className="text-sm text-gray-300 mb-4">
                Upload Job Description (PDF/DOC)
              </div>

              <label
                htmlFor="jdUpload"
                className="
                  border-2
                  border-dashed
                  border-[#2d2d2d]
                  rounded-3xl
                  p-10
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  bg-[#161616]
                  hover:border-yellow-500/30
                  transition-all duration-300
                  cursor-pointer
                "
              >

                {/* ICON */}
                <div className="
                  h-16
                  w-16
                  rounded-2xl
                  bg-yellow-500/10
                  flex
                  items-center
                  justify-center
                  mb-4
                ">

                  <IconUpload
                    size={30}
                    className="text-yellow-300"
                  />

                </div>

                {/* TITLE */}
                <div className="text-lg text-gray-200">
                  Drag & Drop JD File
                </div>

                {/* SUBTEXT */}
                <div className="text-gray-500 text-sm mt-2">
                  Upload PDF, DOC or DOCX up to 10MB
                </div>

                {/* BUTTON */}
                <div className="
                  mt-5
                  px-5
                  py-2
                  rounded-full
                  bg-yellow-500/10
                  border border-yellow-500/20
                  text-yellow-200
                  text-sm
                ">

                  Browse Files

                </div>

                {/* REAL INPUT */}
                <input
                  id="jdUpload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />

              </label>

            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <TextInput
                label="Job Title"
                placeholder="Senior Frontend Developer"
                radius="xl"
                size="lg"
                leftSection={<IconBriefcase size={18} />}
                classNames={{
                  input:
                    "!bg-[#1a1a1a] !border-[#2d2d2d] !text-white h-14",
                  label:
                    "!text-gray-300 mb-2 text-sm",
                }}
              />

              <TextInput
                label="Company Name"
                placeholder="Google"
                radius="xl"
                size="lg"
                leftSection={<IconUsers size={18} />}
                classNames={{
                  input:
                    "!bg-[#1a1a1a] !border-[#2d2d2d] !text-white h-14",
                  label:
                    "!text-gray-300 mb-2 text-sm",
                }}
              />

              <TextInput
                label="Location"
                placeholder="Bangalore, India"
                radius="xl"
                size="lg"
                leftSection={<IconMapPin size={18} />}
                classNames={{
                  input:
                    "!bg-[#1a1a1a] !border-[#2d2d2d] !text-white h-14",
                  label:
                    "!text-gray-300 mb-2 text-sm",
                }}
              />

              <Select
                label="Job Type"
                placeholder="Select job type"
                radius="xl"
                size="lg"
                data={[
                  "Full Time",
                  "Part Time",
                  "Remote",
                  "Internship",
                ]}
                classNames={{
                  input:
                    "!bg-[#1a1a1a] !border-[#2d2d2d] !text-white h-14",
                  label:
                    "!text-gray-300 mb-2 text-sm",
                }}
              />

              <NumberInput
                label="Salary Package (LPA)"
                placeholder="18"
                radius="xl"
                size="lg"
                leftSection={<IconCurrencyRupee size={18} />}
                classNames={{
                  input:
                    "!bg-[#1a1a1a] !border-[#2d2d2d] !text-white h-14",
                  label:
                    "!text-gray-300 mb-2 text-sm",
                }}
              />

              <Select
                label="Experience"
                placeholder="Choose level"
                radius="xl"
                size="lg"
                data={[
                  "Fresher",
                  "1-2 Years",
                  "3-5 Years",
                  "Senior Level",
                ]}
                classNames={{
                  input:
                    "!bg-[#1a1a1a] !border-[#2d2d2d] !text-white h-14",
                  label:
                    "!text-gray-300 mb-2 text-sm",
                }}
              />

              <TextInput
                label="Company Website"
                placeholder="https://company.com"
                radius="xl"
                size="lg"
                leftSection={<IconWorld size={18} />}
                classNames={{
                  input:
                    "!bg-[#1a1a1a] !border-[#2d2d2d] !text-white h-14",
                  label:
                    "!text-gray-300 mb-2 text-sm",
                }}
              />

              <TextInput
                label="Application Deadline"
                placeholder="30 June 2026"
                radius="xl"
                size="lg"
                leftSection={<IconCalendarDue size={18} />}
                classNames={{
                  input:
                    "!bg-[#1a1a1a] !border-[#2d2d2d] !text-white h-14",
                  label:
                    "!text-gray-300 mb-2 text-sm",
                }}
              />

            </div>

            {/* SKILLS */}
            <div className="mt-8">

              <TextInput
                label="Required Skills"
                placeholder="React, Node.js, TypeScript, MongoDB"
                radius="xl"
                size="lg"
                classNames={{
                  input:
                    "!bg-[#1a1a1a] !border-[#2d2d2d] !text-white h-14",
                  label:
                    "!text-gray-300 mb-2 text-sm",
                }}
              />

            </div>

            {/* DESCRIPTION */}
            <div className="mt-8">

              <Textarea
                label="Job Description"
                placeholder="Describe responsibilities, requirements, benefits and expectations..."
                minRows={8}
                radius="2xl"
                leftSection={<IconFileDescription size={18} />}
                classNames={{
                  input:
                    "!bg-[#1a1a1a] !border-[#2d2d2d] !text-white pt-4",
                  label:
                    "!text-gray-300 mb-2 text-sm",
                }}
              />

            </div>

            {/* BENEFITS */}
            <div className="mt-10">

              <div className="text-xl text-yellow-200 mb-5">
                Perks & Benefits
              </div>

              <div className="flex flex-wrap gap-4">

                {[
                  "Remote Work",
                  "Health Insurance",
                  "Flexible Hours",
                  "Bonus",
                  "Free Lunch",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="
                      px-5
                      py-3
                      rounded-full
                      bg-yellow-500/10
                      border border-yellow-500/10
                      text-sm
                      text-yellow-100
                    "
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5 mt-12">

              <Button
                size="lg"
                radius="xl"
                className="
                  !h-14
                  !px-10
                  !bg-yellow-300
                  !text-black
                  hover:opacity-90
                "
              >

                Publish Job

              </Button>

              <Button
                variant="outline"
                size="lg"
                radius="xl"
                className="
                  !h-14
                  !px-10
                  !border-[#333]
                  !text-gray-300
                  hover:!bg-[#1a1a1a]
                "
              >

                Save Draft

              </Button>

            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="flex flex-col gap-6">

            {/* LIVE PREVIEW */}
            <div className="
              sticky
              top-28
              bg-[#121212]
              border border-[#242424]
              rounded-[30px]
              p-6
              shadow-xl
            ">

              <div className="flex items-center justify-between">

                <div>

                  <div className="text-sm text-gray-500">
                    Live Preview
                  </div>

                  <div className="text-xl text-yellow-100 mt-1">
                    Senior Frontend Developer
                  </div>

                </div>

                <div className="
                  h-14
                  w-14
                  rounded-2xl
                  bg-yellow-500/10
                  flex
                  items-center
                  justify-center
                  text-yellow-200
                  text-xl
                  border border-yellow-500/20
                ">
                  G
                </div>

              </div>

              <div className="mt-6 flex flex-wrap gap-3">

                <div className="px-4 py-2 rounded-full bg-yellow-500/10 text-sm text-yellow-100">
                  React
                </div>

                <div className="px-4 py-2 rounded-full bg-orange-500/10 text-sm text-orange-100">
                  TypeScript
                </div>

                <div className="px-4 py-2 rounded-full bg-blue-500/10 text-sm text-blue-100">
                  Remote
                </div>

              </div>

            </div>

            {/* HIRING TIPS */}
            <div className="
              bg-[#121212]
              border border-[#242424]
              rounded-[28px]
              p-6
            ">

              <div className="text-lg text-yellow-100">
                Hiring Tips
              </div>

              <div className="mt-5 flex flex-col gap-4 text-sm text-gray-400">

                <div>
                  ✔ Add clear responsibilities
                </div>

                <div>
                  ✔ Mention salary range
                </div>

                <div>
                  ✔ Keep description concise
                </div>

                <div>
                  ✔ Add required skills
                </div>

              </div>

            </div>

            {/* PREVIOUS UPLOADS */}
            <div className="
              bg-[#121212]
              border border-[#242424]
              rounded-[28px]
              p-6
            ">

              <div className="flex items-center justify-between mb-6">

                <div>

                  <div className="text-lg text-yellow-100">
                    Previous Uploads
                  </div>

                  <div className="text-sm text-gray-500 mt-1">
                    Recently posted jobs
                  </div>

                </div>

                <div className="
                  px-3
                  py-1
                  rounded-full
                  bg-yellow-500/10
                  text-xs
                  text-yellow-100
                  border border-yellow-500/10
                ">
                  12 Jobs
                </div>

              </div>

              {/* JOBS */}
              <div className="flex flex-col gap-4">

                <div className="
                  bg-[#181818]
                  border border-[#262626]
                  rounded-2xl
                  p-4
                ">

                  <div className="flex items-start justify-between">

                    <div>

                      <div className="text-yellow-100">
                        Frontend Developer
                      </div>

                      <div className="text-sm text-gray-500 mt-1">
                        Google • Remote
                      </div>

                    </div>

                    <div className="
                      text-xs
                      px-3
                      py-1
                      rounded-full
                      bg-green-500/10
                      text-green-200
                    ">
                      Active
                    </div>

                  </div>

                  <div className="flex items-center justify-between mt-4 text-sm">

                    <span className="text-gray-500">
                      Posted 2 days ago
                    </span>

                    <span className="text-gray-400">
                      120 Applicants
                    </span>

                  </div>

                </div>

                <div className="
                  bg-[#181818]
                  border border-[#262626]
                  rounded-2xl
                  p-4
                ">

                  <div className="flex items-start justify-between">

                    <div>

                      <div className="text-orange-100">
                        Backend Engineer
                      </div>

                      <div className="text-sm text-gray-500 mt-1">
                        Microsoft • Bangalore
                      </div>

                    </div>

                    <div className="
                      text-xs
                      px-3
                      py-1
                      rounded-full
                      bg-red-500/10
                      text-red-200
                    ">
                      Closed
                    </div>

                  </div>

                  <div className="flex items-center justify-between mt-4 text-sm">

                    <span className="text-gray-500">
                      Posted 1 week ago
                    </span>

                    <span className="text-gray-400">
                      86 Applicants
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default UploadJobs;