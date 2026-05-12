import {
  RangeSlider,
  Badge,
  ActionIcon,
  Modal,
} from "@mantine/core";

import {
  IconMapPin,
  IconBriefcase,
  IconCurrencyRupee,
  IconClockHour4,
  IconBookmark,
  IconExternalLink,
  IconBolt,
} from "@tabler/icons-react";

import { dropdownData, jobList } from "../Data/JobsData";
import { MaxInput } from "./MultiSelectCreatable";
import { useState } from "react";

/* COMPANY LOGOS */

const companyLogos = [
  "/Icons/Meta.png",
  "/Icons/Netflix.png",
  "/Icons/Microsoft.png",
  "/Icons/Adobe.png",
  "/Icons/Google.png",
  "/Icons/Spotify.png",
  "/Icons/Amazon.png",
  "/Icons/Apple.png",
];

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([20, 80]);

  const [opened, setOpened] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-6 md:px-12 py-10">

      {/* MODAL */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <div className="text-xl font-bold">
            {selectedJob?.jobTitle}
          </div>
        }
        centered
        size="lg"
        radius="xl"
      >

        {selectedJob && (

          <div className="space-y-5">

            <div className="flex items-center gap-4">

              <img
                src={
                  companyLogos[
                    jobList.findIndex(
                      (j: any) => j.jobTitle === selectedJob.jobTitle
                    ) % companyLogos.length
                  ]
                }
                alt="logo"
                className="w-16 h-16 bg-white rounded-xl p-2"
              />

              <div>

                <h2 className="text-2xl font-bold">
                  {selectedJob.company}
                </h2>

                <p className="text-gray-500">
                  {selectedJob.location}
                </p>

              </div>

            </div>

            <div className="flex flex-wrap gap-3">

              <Badge color="green">
                {selectedJob.jobType}
              </Badge>

              <Badge color="blue">
                {selectedJob.experience}
              </Badge>

              <Badge color="yellow">
                {selectedJob.package}
              </Badge>

            </div>

            <div>

              <h3 className="text-lg font-bold mb-2">
                Job Description
              </h3>

              <p className="text-gray-700 leading-8">
                {selectedJob.description}
              </p>

            </div>

            <div className="pt-4">

              <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold">
                Apply Now
              </button>

            </div>

          </div>
        )}

      </Modal>

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-[#1b1b1b] to-[#242424] border border-[#2f2f2f] rounded-[30px] p-10 shadow-2xl">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

          {/* LEFT */}
          <div>

            <h1 className="text-5xl font-extrabold leading-tight">
              Find Your
              <span className="text-yellow-400"> Dream Job </span>
              Today
            </h1>

            <p className="text-gray-400 mt-5 text-lg max-w-2xl leading-8">
              Explore premium opportunities from top companies and
              accelerate your career journey.
            </p>

          </div>

          {/* SEARCH PANEL */}
          <div className="bg-[#171717] border border-[#2e2e2e] rounded-3xl p-6 w-full lg:w-[450px]">

            <h2 className="text-2xl font-bold mb-6">
              Search Filters
            </h2>

            <div className="grid grid-cols-1 gap-5">

              {dropdownData.map((item, index) => (
                <div key={index}>
                  <MaxInput {...item} />
                </div>
              ))}

              {/* SALARY */}
              <div className="bg-[#222] rounded-2xl p-5">

                <div className="flex justify-between mb-4">

                  <span className="font-semibold">
                    Salary Range
                  </span>

                  <span className="text-yellow-400 font-bold">
                    ₹{value[0]}L - ₹{value[1]}L
                  </span>

                </div>

                <RangeSlider
                  color="yellow"
                  size="sm"
                  value={value}
                  onChange={setValue}
                />

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* HEADER */}
      <div className="mt-16 mb-10">

        <h2 className="text-4xl font-bold">
          Featured Opportunities
        </h2>

        <p className="text-gray-400 mt-2">
          Handpicked jobs from top recruiters
        </p>

      </div>

      {/* JOB CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {jobList.map((job: any, index: number) => (

          <div
            key={index}
            className="group bg-[#171717] border border-[#2b2b2b] rounded-[28px] p-7 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300 shadow-xl relative overflow-hidden"
          >

            {/* TOP */}
            <div className="flex justify-between items-start">

              <div className="flex items-center gap-4">

                {/* LOGO */}
                <div className="bg-white rounded-2xl p-3 w-[70px] h-[70px] flex items-center justify-center shadow-lg">

                  <img
                    src={companyLogos[index % companyLogos.length]}
                    alt="company-logo"
                    className="w-full h-full object-contain"
                  />

                </div>

                <div>

                  <h2 className="text-2xl font-bold text-white">
                    {job.jobTitle}
                  </h2>

                  <p className="text-gray-400">
                    {job.company}
                  </p>

                </div>
              </div>

              <ActionIcon
                variant="subtle"
                color="yellow"
              >
                <IconBookmark size={22} />
              </ActionIcon>

            </div>

            {/* BADGES */}
            <div className="flex gap-3 mt-6 flex-wrap">

              {job.postedDaysAgo <= 2 && (
                <Badge color="yellow">
                  New
                </Badge>
              )}

              <Badge color="green">
                {job.jobType}
              </Badge>

              {job.applicants >= 20 && (
                <Badge color="red">
                  Urgent Hiring
                </Badge>
              )}

            </div>

            {/* DETAILS */}
            <div className="mt-8 space-y-4 text-gray-300">

              <div className="flex items-center gap-3">
                <IconMapPin size={20} />
                <span>{job.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <IconBriefcase size={20} />
                <span>{job.experience}</span>
              </div>

              <div className="flex items-center gap-3">
                <IconClockHour4 size={20} />
                <span>{job.jobType}</span>
              </div>

              <div className="flex items-center gap-3">
                <IconCurrencyRupee size={20} />
                <span className="text-yellow-400 font-bold">
                  {job.package}
                </span>
              </div>

            </div>

            {/* FOOTER */}
            <div className="flex justify-between items-center mt-8">

              <div>

                <p className="text-gray-500 text-sm">
                  Posted {job.postedDaysAgo} days ago
                </p>

                <div className="flex items-center gap-2 text-green-400 text-sm mt-1">
                  <IconBolt size={16} />
                  {job.applicants} Applicants
                </div>

              </div>

              {/* BUTTONS */}
              <div className="flex gap-3">

                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setOpened(true);
                  }}
                  className="bg-[#242424] hover:bg-[#2e2e2e] border border-[#3a3a3a] px-4 py-2 rounded-xl text-white flex items-center gap-2"
                >
                  Details
                  <IconExternalLink size={18} />
                </button>

                <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-xl font-bold">
                  Apply
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default SearchBar;