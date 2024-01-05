import { FC } from "react";
import Image from "next/image";

interface HeaderProps {
  profileImage: string;
  username: string;
  logo: string;
}

const Header: FC<HeaderProps> = ({ profileImage, username, logo }) => {
  return (
    <section>
      <div>
      <Image
        src={profileImage}
        alt="profile image"
        className="dark:invert"
        priority
      />
      <span>{username}</span>
      </div>
      <div>
        <Image src={logo} alt="RandomThoughts logo"/>
      </div>

    </section>
  );
};

export default Header;
