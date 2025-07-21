"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHotel } from "react-icons/fa";
import { FaChevronRight, FaDatabase } from "react-icons/fa6";
import { VscSignOut } from "react-icons/vsc";

import axios from "axios";
import { ToastContainer } from "react-toastify";
import { url } from "../../lib/lib";

export default function AdminLayout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeDrop, setActiveDrop] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const verifyAdmin = async () => {
    try {
      const res = await axios.get("http://localhost:5000/admin/verify-admin", {
        withCredentials: true,
      });

      if (!res.data.status) {
        router.push("/admin/login");
      }
      setIsVerifying(false);
    } catch (error) {
      console.error("Admin verification failed:", error);
      router.push("/admin/login");
      setIsVerifying(false);
    }
  };

  useEffect(() => {
    // verifyAdmin();
  }, [router]);

  useEffect(() => {
    setActiveDrop(pathname);
    setIsNavOpen(false);
  }, [pathname]);

  if (isVerifying && pathname !== "/admin/login") return null;

  return (
    <>
      <ToastContainer />
      <main className="flex min-h-[100vh] max-w-[100vw] overflow-x-hidden text-[14px]">
        <aside
          className={`md:w-[250px] md:min-w-[250px] md:min-h-[100vh] h-auto w-full left-0 bg-[#5db64c] text-white shadow-md font-[600] md:static absolute transition-all duration-500 z-50 ${
            isNavOpen ? "top-[60px]" : "-top-full"
          }`}
        >
          <Link
            href="/admin/locations"
            className="w-[180px] mx-auto my-4 md:block hidden overflow-hidden bg-white"
          >
           <img  
                src="https://www.oliveapartmentsdelhi.com/assets/Olive-Service-Apartments-Delhi-logo-BSRsqSW1.png" 
                alt="Olive Serviced Apartments" 
                width={150} 
                height={50} 
              />
          </Link>
          <nav className="list-none">
            {links.map((item, i) => (
              <NavItem
                key={i}
                data={item}
                activeDrop={activeDrop}
                setActiveDrop={setActiveDrop}
                pathname={pathname}
              />
            ))}
          </nav>
        </aside>

        <section className="md:w-[calc(100vw-250px)] w-[100vw] flex-grow flex flex-col">
          <header className="w-full h-[60px] shadow shadow-gray-200 flex items-center justify-between md:px-8 sm:px-4 px-2 relative md:z-[49] z-[51] bg-white">
            <div className="flex items-center md:gap-6 gap-3 h-full">
              <p className="md:hidden relative top-[7px]">
                 <img  
                src="https://www.oliveapartmentsdelhi.com/assets/Olive-Service-Apartments-Delhi-logo-BSRsqSW1.png" 
                alt="Olive Serviced Apartments" 
                width={150} 
                height={50} 
              />
              </p>
              <p className="md:block hidden font-[600] text-gray-500 relative top-[10px] px-3">
                Admin
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsNavOpen((prev) => !prev)}
              className="p-2 md:hidden w-[35px] sm:h-[20px] flex flex-col justify-between relative bg-transparent border-0"
            >
              <div
                className={`mx-auto w-[80%] h-[3px] absolute left-2/4 -translate-x-2/4 bg-tl_primary rounded-md transition-all duration-300 ${
                  isNavOpen
                    ? "rotate-[135deg] top-2/4 -translate-y-2/4"
                    : "rotate-0 top-0"
                }`}
              />
              <div
                className={`mx-auto w-[80%] h-[3px] absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 bg-tl_primary rounded-md transition-all duration-300 ${
                  isNavOpen ? "scale-0" : "scale-100"
                }`}
              />
              <div
                className={`mx-auto w-[80%] h-[3px] absolute left-2/4 -translate-x-2/4 bg-tl_primary rounded-md transition-all duration-300 ${
                  isNavOpen
                    ? "-rotate-[135deg] bottom-2/4 translate-y-2/4"
                    : "rotate-0 bottom-0"
                }`}
              />
            </button>
          </header>
          <section className="w-full md:p-8 p-4 text-gray-600 bg-gray-100 min-h-[calc(100dvh-60px)]">
            {children}
          </section>
        </section>
      </main>
    </>
  );
}

const NavItem = ({
  data,
  styles = {},
  classNames = "",
  activeDrop,
  setActiveDrop,
  pathname,
}) => {
  const router = useRouter();

  function handleLogout(e) {
    e.preventDefault();
    axios
      .post(`${url}auth/admin/logout`, null, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          router.replace("/");
        } else {
          console.error("Logout failed.");
        }
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  }

  return data.type === "dropdown" ? (
    <>
      <button
        onClick={() =>
          setActiveDrop((prev) =>
            prev.includes(data.to)
              ? prev.includes("area-management")
                ? "masters"
                : ""
              : data.to
          )
        }
        className="w-full bg-transparent text-white font-[600] border-0"
      >
        <li
          className={`flex items-center gap-3 px-4  hover:bg-tl_primary_shade/30 transition-all duration-500 md:justify-start justify-center h-[60px] mb-0 ${
            data.to &&
            (activeDrop.includes(data.to) || pathname.includes(data.to))
              ? "bg-tl_primary_shade/30"
              : ""
          } ${classNames}`}
          style={{ ...styles }}
        >
          {data.icon && <NavItemIcon icon={data.icon} />} {data.name}
          <FaChevronRight
            className={`transition-all duration-300 md:ms-auto ${
              activeDrop.includes(data.to) ? "rotate-90" : "rotate-0"
            }`}
          />
        </li>
      </button>
      <div
        className="transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: activeDrop.includes(data.to)
            ? data.links.length * 60 + "px"
            : "0px",
        }}
      >
        {data.links.map((item, i) => (
          <NavItem
            key={i}
            data={item}
            classNames="!ps-12"
            activeDrop={activeDrop}
            setActiveDrop={setActiveDrop}
            pathname={pathname}
          />
        ))}
      </div>
    </>
  ) : (
    <Link
      href={data.name !== "Log out" ? `/admin/${data.to}` : "#"}
      onClick={data.name === "Log out" ? handleLogout : undefined}
      className="no-underline text-white font-[600]"
    >
      <li
        className={`flex items-center gap-3 px-6 h-[60px]  hover:bg-tl_primary_shade/30 transition-all duration-500 md:justify-start justify-center mb-0 ${
          data.to && pathname.includes(data.to)
            ? "bg-tl_primary_shade/30 active-admin-panel-nav-link"
            : ""
        } ${classNames}`}
        style={{ ...styles }}
      >
        {data.icon && <NavItemIcon icon={data.icon} />} {data.name}
      </li>
    </Link>
  );
};

const NavItemIcon = ({ icon }) => <span className="text-[18px]">{icon}</span>;

const links = [
  {
    name: "Locations",
    to: "locations",
    icon: <FaHotel />,
    type: "link",
  },
  {
    name: "Site Content",
    to: "masters",
    icon: <FaDatabase />,
    type: "dropdown",
    links: [
      { name: "Homepage", to: "masters/homepage-content", type: "link" },
      { name: "About Us", to: "masters/about-content", type: "link" },
      { name: "FAQs", to: "masters/faqs", type: "link" },
      { name: "Offers", to: "masters/offers", type: "link" },
      { name: "Pricing", to: "masters/pricing", type: "link" },
      { name: "Contact Information", to: "masters/contact-info", type: "link" },
      { name: "Blog", to: "masters/blog", type: "link" },
      { name: "Booking Scripts", to: "masters/booking-scripts", type: "link" },
      { name: "Footer", to: "masters/footer", type: "link" },
    ],
  },
    {
    name: "Landing Pages",
    to: "landing-pages",
    icon: <FaDatabase />,
    type: "dropdown",
    links: [
      { name: "Delhi", to: "landing-pages/delhi", type: "link" },
      { name: "Greater Kailash", to: "landing-pages/greater-kailash", type: "link" },
      { name: "Green Park", to: "landing-pages/green-park", type: "link" },
    ]
  },
  {
    name: "Log out",
    to: "login",
    icon: <VscSignOut />,
    type: "link",
  },
];
