import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Logo from "../assets/images/Logo.png";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Discover", href: "#", current: false },
  { name: "Special Deals", href: "#", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white sticky top-0 z-20">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <a href="/">
                  <img className="h-8 w-auto" src={Logo} alt={`${Logo}`} />
                </a>
                <div className="flex flex-shrink-0 items-center lg:ml-auto" />
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? " text-black"
                            : "text-dark-gray hover:text-gray-700 ",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    <div className="flex items-center gap-6 ">
                      <button className="lex items-center gap-4 bg-slate-100 py-3 px-6 rounded-xl text-[#F85E9F] font-bold text-sm">
                        Log In
                      </button>
                      <button className="lex items-center gap-4 bg-slate-100 py-3 px-6 rounded-xl text-[#F85E9F] font-bold text-sm">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-dark-gray hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="flex flex-col">
                <div className="flex flex-col items-start gap-4">
                  <button className="bg-[#F85E9F] rounded-lg py-2 px-4 text-white">
                    Log In
                  </button>
                  <button className="bg-[#F85E9F] rounded-lg py-2 px-4 text-white">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
