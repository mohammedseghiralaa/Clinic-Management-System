import Link from "next/link";
import React, { JSX } from "react";

interface Page {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface NavLinkProps {
  page: Page;
  currentPage: string;
  setIsOpen: (IsOpen: boolean) => void;
}

export default function NavLink({
  page,
  setIsOpen,
  currentPage,
}: NavLinkProps): JSX.Element {
  const isActive =
    currentPage === page.href || currentPage.startsWith(page.href + "/");
  return (
    <li>
      <Link
        href={page.href}
        onClick={() => {
          setIsOpen(false);
        }}
        className={`
                    group flex items-center gap-4 px-4 py-3.5 rounded-xl
                    transition-all duration-300 ease-out
                    ${
                      isActive
                        ? "bg-white text-cyan-600 shadow-lg scale-105"
                        : "text-white hover:bg-white/10 hover:translate-x-1"
                    }
                  `}
      >
        <span
          className={`
                    transition-all duration-300
                    ${
                      // activeIndex === index
                      "scale-110 rotate-0"
                      //   : "group-hover:scale-110 group-hover:rotate-12"
                    }
                  `}
        >
          {page.icon}
        </span>
        <span className="font-semibold text-base">{page.name}</span>
      </Link>
    </li>
  );
}
