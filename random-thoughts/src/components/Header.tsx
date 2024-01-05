import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { OrganizationSwitcher, SignedIn, UserButton } from "@clerk/nextjs";

interface HeaderProps {
  profileImage?: string;
  username?: string;
  logo?: string;
}

const Header: FC<HeaderProps> = ({ profileImage, username, logo }) => {
  return (
    <header className="flex items-center h-20 gap-4 px-4 border-b border-black border-solid sm:px-8 border-opacity-20">
    <Link href="/" className="flex items-center h-20 gap-2 sm:gap-4">
      <Image
        src="/vercel.svg"
        alt="Clerk Logo"
        width={102}
        height={32}
        priority
      />
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={90}
        height={18}
        priority
      />
    </Link>
    <div className="grow" />
    <SignedIn >
      <div className="hidden sm:block">
        <OrganizationSwitcher afterCreateOrganizationUrl="/dashboard" />
      </div>
      <div className="block sm:hidden">
        <OrganizationSwitcher
          afterCreateOrganizationUrl="/dashboard"
          appearance={{
            elements: {
              organizationSwitcherTriggerIcon: `hidden`,
              organizationPreviewTextContainer: `hidden`,
              organizationSwitcherTrigger: `pr-0`,
            },
          }}
        />
      </div>
      <UserButton afterSignOutUrl="/" />
    </SignedIn>
  </header>



  );
};

export default Header;
