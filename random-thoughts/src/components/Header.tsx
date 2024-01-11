import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const mockUser = {
  name: "Maidelin R",
};

const Header: FC = () => {
  const isUserSignedIn = mockUser != null;

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
    {isUserSignedIn && (
        <div>
          <p>{mockUser.name}</p>
        </div>
      )}
  </header>
  );
};

export default Header;
