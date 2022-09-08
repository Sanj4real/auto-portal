import Link from "next/link";
import { SideBarData } from "./SidebarData";
import { useRouter } from "next/router";

export default function SideBar() {
  const router = useRouter();

  return (
    <>
      <div className="bg-[#f1f6fb] py-6 pt-1 px-3 sticky top-32">
        <ul>
          <li className=" capitalize roboto ">
            <Link href="/userDashboard">
              <a className="py-2 px-5 text-[#000000D9] font-medium capitalize block text-mbase">
                Dashboard
              </a>
            </Link>
          </li>
          {SideBarData.map((item, index) => (
            <li key={index} item={item} className=" font-normal capitalize">
              {item.subMenu ? (
                <>
                  <h5 className="py-2 px-5 text-mbase font-medium capitalize">
                    {item.title}
                  </h5>
                  {item.subMenu.map((submenu, index) => (
                    <div
                      key={index}
                      icon={submenu.icon}
                      style={{
                        marginTop: "0",
                        marginBottom: "0",
                        paddingLeft: "22px",
                      }}
                    >
                      <Link href={submenu.path}>
                        <a
                          className={`text-sm font-normal py-2  capitalize block ${
                            router.pathname === submenu.path
                              ? "text-hoverColor"
                              : "hover:text-hoverColor"
                          }`}
                        >
                          <div className="flex relative space-x-2 items-center">
                            {submenu.icon}
                            <div className="">{submenu.name}</div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  ))}
                </>
              ) : (
                <h5>
                  <Link href={item.path}>
                    <a
                      className={`py-2 px-5 font-medium capitalize text-mbase  ${
                        router.pathname === item.path
                          ? "text-hoverColor"
                          : "hover:text-hoverColor"
                      }`}
                    >
                      {item.title}
                    </a>
                  </Link>
                </h5>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
