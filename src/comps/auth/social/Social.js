import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Social() {
  const Style = {
    backgroundImage: `url('/signup/bg-img.svg')`,
    backgroundSize: `cover`,
    backgroundPosition: `center center`,
    backgroundRepeat: `no-repeat`,
  };

  // social-links
  const SOCIAL = [
    {
      icon: <FaLinkedinIn size={18} />,
      href: "#!",
      name: "Sign up with linkedIn",
    },
    {
      icon: <FaTwitter size={18} />,
      href: "#!",
      name: "Sign up with Twitter",
    },
    {
      icon: <FaFacebookF size={18} />,
      href: "#!",
      name: "Sign up with Facebook",
    },
  ];

  const SocialLink = ({ item }) => {
    return (
      <li className="mb-6 last:mb-0">
        <Link href={item.href}>
          <a
            className="flex space-x-2 py-4 rounded-sm text-sm px-8 bg-gray-50 group  hover:bg-hoverbgColor hover:text-gray-50 transition-all"
            target="_blank"
          >
            <div className="text-sm group-hover:text-gray-100 text-hoverbgColor">
              {item.icon}
            </div>
            <div>{item.name}</div>
          </a>
        </Link>
      </li>
    );
  };
  return (
    <div
      className="relative h-full p-4 flex flex-col items-center justify-center "
      style={Style}
    >
      <ul>
        {SOCIAL.map((item, index) => (
          <SocialLink key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
