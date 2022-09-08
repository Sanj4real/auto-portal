import Link from "next/link";
import { useState } from "react";

const BottomMenu = () => {
  const [active, setActive] = useState(false);

  const handleToggleClick = () => {
    setActive(!active);
  };
  return (
    <div className="bg-[#f1f6fb] py-3 relative hidden lg:block">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium">
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block mr-2"
            >
              <path
                d="M15.364 15.3639L9 21.7279L2.636 15.3639C1.37734 14.1052 0.520187 12.5016 0.172928 10.7558C-0.17433 9.00995 0.00390685 7.20035 0.685099 5.55582C1.36629 3.91129 2.51984 2.50569 3.99988 1.51677C5.47992 0.527838 7.21998 0 9 0C10.78 0 12.5201 0.527838 14.0001 1.51677C15.4802 2.50569 16.6337 3.91129 17.3149 5.55582C17.9961 7.20035 18.1743 9.00995 17.8271 10.7558C17.4798 12.5016 16.6227 14.1052 15.364 15.3639ZM9 10.9999C9.53044 10.9999 10.0391 10.7892 10.4142 10.4141C10.7893 10.0391 11 9.53035 11 8.99992C11 8.46949 10.7893 7.96078 10.4142 7.58571C10.0391 7.21064 9.53044 6.99992 9 6.99992C8.46957 6.99992 7.96086 7.21064 7.58579 7.58571C7.21072 7.96078 7 8.46949 7 8.99992C7 9.53035 7.21072 10.0391 7.58579 10.4141C7.96086 10.7892 8.46957 10.9999 9 10.9999Z"
                fill="#C63617"
              />
            </svg>
            SatdoBato, Kathmandu
          </div>
          <div className="submenu">
            <div className="md:hidden nav-icon" onClick={handleToggleClick}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={`submenu__list ${active ? "active" : "inactive"}`}>
              <ul className="md:flex space-x-5 text-sm font-medium">
                <li>
                  <Link href="#">
                    <a>Request Loans</a>
                  </Link>
                </li>
                <li>
                  <Link href="/list">
                    <a>Sell/Exchange</a>
                  </Link>
                </li>
                <li>
                  <Link href="/finderVehicle">
                    <a>Vehicle Finder</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>How we works?</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomMenu;
