import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo4 from "../../public/eablack.png";
import Logo5 from "../../public/eawhite.png";
import Socials from "../socials";

export default function Header() {
  return (
    <header className="xl:h-90 absolute z-30 flex w-full items-center px-16 xl:h-[110px] xl:px-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-y-6 py-8 pl-16 lg:flex-row">
        <span className="inline-block dark:hidden">
          <Link href={"/"}>
            <Image width={50} height={48} alt="" priority={true} src={Logo4} />
          </Link>
        </span>
        <span className="hidden dark:inline-block">
          <Link href={"/"}>
            <Image width={50} height={48} alt="" priority={true} src={Logo5} />
          </Link>
        </span>
        <Socials />
      </div>
    </header>
  );
}
