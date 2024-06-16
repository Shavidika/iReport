import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";
import { useAppSelector } from "../hooks/redux-hooks";
import { ProfileInfoPopover } from "./profilePopover";
import RequestReporter from "./reporterRequestPopup";
import { useLocation } from "react-router-dom";

// Avatar image URL
const avatarImageUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png";

interface Product {
  name: string;
  description: string;
  href: string;
  icon: React.ElementType;
}

const products: Product[] = [
  { name: "Business News", description: " ", href: "#", icon: ChartPieIcon },
  {
    name: "Social News",
    description: " ",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  { name: "Security News", description: " ", href: "#", icon: FingerPrintIcon },
  { name: "Sport", description: "", href: "#", icon: MdOutlineSportsSoccer },
];

interface CallToAction {
  name: string;
  href: string;
  icon: React.ElementType;
}

const callsToAction: CallToAction[] = [];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
  const userProfileInfo = useAppSelector((state) => state.auth.userProfileData);
  const [dashboardOpened, setDashboardOpened] = useState(true);
  const [navigatorText, setNavigatorText] = useState("Dashboard");
  const location = useLocation();

  const handleDashboardOpen = () => {
    console.log(dashboardOpened);
    setDashboardOpened(!dashboardOpened);
  };

  const handleBeReporter = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if(location.pathname === "/" && basicUserInfo?.roles.includes("ADMIN")){
      setNavigatorText("Admin Dashboard");
    }else if (location.pathname === "/" && basicUserInfo?.roles.includes("REPORTER")){
      setNavigatorText("Reporter Dashboard");
    }else if (location.pathname === "/admin"|| location.pathname === "/reporter"){
      setNavigatorText(" ");
    } else{
      setNavigatorText(" ");
    }
  }, [location]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-10">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">iReport</span>
            <img
              className="h-10 w-auto"
              src="https://i.ibb.co/s56nq9W/i-Report-logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Categories
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            to="/undermaintaince"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Pages
          </Link>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Contact us
          </a>
          <Link
            to="/about"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About us
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          {basicUserInfo?.roles.includes("READER") ? ( // Conditional rendering based on login status
            <Fragment>
              {/* <button
                className=" text-red-500 text- font-semibold leading-6"
                onClick={handleBeReporter}
              >
                Switch to Reporting
              </button> */}
              <RequestReporter />
              {/* <Link to="/profile">
                <img
                  className="h-10 w-10 rounded-full ml-20"
                  src={userProfileInfo?.userImage || avatarImageUrl}
                  alt="Avatar"
                />
              </Link> */}
              <ProfileInfoPopover />
            </Fragment>
          ) : (
            <div>
              {basicUserInfo?.roles.includes("ADMIN") ? (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Link
                    to="/admin"
                    className="text-red-500 text- mt-2 font-semibold leading-6"
                    onClick={handleDashboardOpen}
                  >
                    {navigatorText}
                  </Link>
                  <ProfileInfoPopover />
                </div>
              ) : (
                <div>
                  {basicUserInfo?.roles.includes("REPORTER") ? (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Link
                        to="/reporter"
                        className="text-red-500 text- mt-2 font-semibold leading-6"
                        onAbort={handleDashboardOpen}
                      >
                        {navigatorText}
                      </Link>
                      <ProfileInfoPopover />
                    </div>
                  ) : (
                    <div>
                      <Link
                        to="/login"
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        Log in <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">iReport</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              {/* <div className="py-6">
                {!basicUserInfo?.email ? (
                  <button
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={handleBeReporter}
                  >
                    Log out
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                )}
              </div> */}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
