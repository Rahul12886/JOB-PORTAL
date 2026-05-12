import {
  Avatar,
  Indicator,
  ActionIcon,
  Menu,
  Modal,
  Text,
  Badge,
  Divider,
} from "@mantine/core";

import {
  IconBellSchool,
  IconDeviceTabletSearch,
  IconSettings,
  IconUserCircle,
  IconLogout,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMapPin,
  IconCode,
} from "@tabler/icons-react";

import { Link } from "react-router-dom";
import { useState } from "react";

import NavLinks from "./Naviations";

import { Menu as MenuIcon, X } from "lucide-react";

const Header = () => {

  /* PROFILE MODAL */
  const [opened, setOpened] = useState(false);

  /* MOBILE MENU */
  const [mobileMenu, setMobileMenu] = useState(false);

  return (

    <>

      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-[#262626] bg-[#0f0f0f]/90 backdrop-blur-xl">

        <div className="h-24 px-6 lg:px-14 flex items-center justify-between">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-14">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-4 group"
            >

              {/* ICON */}
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
                shadow-[0_0_30px_rgba(255,193,7,0.18)]
                transition-all duration-300
                group-hover:scale-105
              ">

                <IconDeviceTabletSearch
                  size={30}
                  className="text-black"
                  stroke={2.2}
                />

              </div>

              {/* TEXT */}
              <div className="flex flex-col">

                <h1 className="
                  text-3xl
                  font-black
                  tracking-tight
                  text-white
                  transition-all duration-300
                  group-hover:text-yellow-400
                ">

                  HireNest

                </h1>

                <span className="text-xs text-gray-500 tracking-[3px] uppercase">
                  Smart Hiring Platform
                </span>

              </div>

            </Link>

            {/* NAVIGATION */}
            <div className="hidden lg:flex">
              <NavLinks />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* MOBILE HAMBURGER */}
            <div className="lg:hidden">

              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="text-white"
              >
                {mobileMenu ? (
                  <X size={32} />
                ) : (
                  <MenuIcon size={32} />
                )}
              </button>

              {/* MOBILE MENU */}
              {mobileMenu && (
                <div className="absolute top-24 left-0 w-full bg-[#111111] border-t border-[#262626] flex flex-col gap-5 px-6 py-6 z-50">

                  <Link
                    to="/find-jobs"
                    className="text-white text-lg"
                    onClick={() => setMobileMenu(false)}
                  >
                    Find Jobs
                  </Link>

                  <Link
                    to="/find-talent"
                    className="text-white text-lg"
                    onClick={() => setMobileMenu(false)}
                  >
                    Find Talent
                  </Link>

                  <Link
                    to="/upload-jobs"
                    className="text-white text-lg"
                    onClick={() => setMobileMenu(false)}
                  >
                    Upload Jobs
                  </Link>

                  <Link
                    to="/about-us"
                    className="text-white text-lg"
                    onClick={() => setMobileMenu(false)}
                  >
                    About Us
                  </Link>

                  {/* MOBILE NOTIFICATION */}
                  <div className="flex items-center gap-3 text-white text-lg">

                    <IconBellSchool className="text-yellow-400" />

                    Notifications

                  </div>

                </div>
              )}

            </div>

            {/* NOTIFICATION */}
            <div className="hidden lg:block">

              <Indicator
                color="yellow"
                size={8}
                offset={5}
                processing
              >

                <ActionIcon
                  radius="xl"
                  size="xl"
                  variant="light"
                  className="
                    !bg-[#1b1b1b]
                    hover:!bg-[#252525]
                    border border-[#2d2d2d]
                    transition-all duration-300
                  "
                >

                  <IconBellSchool
                    size={21}
                    className="text-yellow-400"
                  />

                </ActionIcon>

              </Indicator>

            </div>

            {/* SETTINGS */}
            <div className="hidden lg:block">

              <ActionIcon
                radius="xl"
                size="xl"
                variant="light"
                className="
                  !bg-[#1b1b1b]
                  hover:!bg-[#252525]
                  border border-[#2d2d2d]
                  transition-all duration-300
                "
              >

                <IconSettings
                  size={21}
                  className="text-gray-300"
                />

              </ActionIcon>

            </div>

            {/* PROFILE MENU */}
            <Menu
              shadow="xl"
              width={220}
              position="bottom-end"
              withArrow
            >

              <Menu.Target>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    bg-[#171717]
                    hover:bg-[#202020]
                    border border-[#2b2b2b]
                    hover:border-yellow-500/30
                    px-3 py-2
                    rounded-2xl
                    cursor-pointer
                    transition-all duration-300
                  "
                >

                  <Avatar
                    src="/Working/pic.png"
                    alt="Rahul"
                    radius="xl"
                    size={42}
                    className="border-2 border-yellow-500"
                  />

                  <div className="hidden md:block">

                    <div className="text-white font-semibold leading-none">
                      Rahul
                    </div>

                    <div className="text-gray-500 text-sm mt-1">
                      Software Developer
                    </div>

                  </div>

                </div>

              </Menu.Target>

              {/* DROPDOWN */}
              <Menu.Dropdown
                className="!bg-[#171717] !border-[#2b2b2b]"
              >

                <Menu.Label className="!text-gray-500">
                  Account
                </Menu.Label>

                {/* PROFILE BUTTON */}
                <Menu.Item
                  leftSection={
                    <IconUserCircle size={18} />
                  }
                  className="hover:!bg-[#222]"
                  onClick={() => setOpened(true)}
                >
                  Profile
                </Menu.Item>

                {/* SETTINGS */}
                <Menu.Item
                  leftSection={
                    <IconSettings size={18} />
                  }
                  className="hover:!bg-[#222]"
                >
                  Settings
                </Menu.Item>

                <Menu.Divider />

                {/* LOGOUT */}
                <Menu.Item
                  color="red"
                  leftSection={
                    <IconLogout size={18} />
                  }
                  className="hover:!bg-[#222]"
                >
                  Logout
                </Menu.Item>

              </Menu.Dropdown>

            </Menu>

          </div>

        </div>

      </header>

      {/* PROFILE MODAL */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        size="lg"
        radius="xl"
        overlayProps={{
          blur: 6,
          backgroundOpacity: 0.55,
        }}
        title={
          <div className="text-2xl font-bold text-white">
            My Profile
          </div>
        }
        classNames={{
          content: "!bg-[#151515] !border !border-[#2b2b2b]",
          header: "!bg-[#151515]",
          title: "!text-white",
          close: "!text-white hover:!bg-[#252525]",
        }}
      >

        <div className="flex flex-col items-center text-center gap-5 py-4">

          {/* AVATAR */}
          <Avatar
            src="/Working/pic.png"
            size={120}
            radius="100%"
            className="border-4 border-yellow-500 shadow-[0_0_30px_rgba(255,193,7,0.25)]"
          />

          {/* NAME */}
          <div>

            <h1 className="text-3xl font-bold text-white">
              Rahul Kumar
            </h1>

            <p className="text-gray-400 text-lg mt-1">
              Software Developer
            </p>

          </div>

          {/* SKILLS */}
          <div className="flex gap-3 flex-wrap justify-center">

            <Badge color="grape" size="lg" radius="xl">
              Java
            </Badge>

            <Badge color="yellow" size="lg" radius="xl">
              React
            </Badge>

            <Badge color="orange" size="lg" radius="xl">
              TypeScript
            </Badge>

            <Badge color="grape" size="lg" radius="xl">
              Node.js
            </Badge>

            <Badge color="cyan" size="lg" radius="xl">
              MongoDB
            </Badge>

          </div>

          <Divider
            w="100%"
            color="#2b2b2b"
            my="sm"
          />

          {/* DETAILS */}
          <div className="w-full flex flex-col gap-4 text-left">

            {/* EMAIL */}
            <div className="flex items-center gap-3 bg-[#1d1d1d] p-4 rounded-xl border border-[#2a2a2a]">

              <IconMail className="text-yellow-400" />

              <Text className="text-gray-300">
                rahulrathore844124@gmail.com
              </Text>

            </div>

            {/* LOCATION */}
            <div className="flex items-center gap-3 bg-[#1d1d1d] p-4 rounded-xl border border-[#2a2a2a]">

              <IconMapPin className="text-yellow-400" />

              <Text className="text-gray-300">
                India
              </Text>

            </div>

            {/* ROLE */}
            <div className="flex items-center gap-3 bg-[#1d1d1d] p-4 rounded-xl border border-[#2a2a2a]">

              <IconCode className="text-yellow-400" />

              <Text className="text-gray-300">
                Frontend + Backend Developer
              </Text>

            </div>

            {/* GITHUB */}
            <a
              href="https://github.com/Rahul12886"
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-3
                bg-[#1d1d1d]
                p-4
                rounded-xl
                border border-[#2a2a2a]
                hover:border-yellow-500/40
                transition-all duration-300
              "
            >

              <IconBrandGithub className="text-yellow-400" />

              <Text className="text-gray-300">
                github.com/Rahul12886
              </Text>

            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/rahulkumar14/"
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-3
                bg-[#1d1d1d]
                p-4
                rounded-xl
                border border-[#2a2a2a]
                hover:border-blue-500/40
                transition-all duration-300
              "
            >

              <IconBrandLinkedin className="text-blue-400" />

              <Text className="text-gray-300">
                linkedin.com/in/rahul-kumar
              </Text>

            </a>

          </div>

        </div>

      </Modal>

    </>
  );
};

export default Header;