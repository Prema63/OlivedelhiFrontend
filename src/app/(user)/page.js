'use client';

import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import ChatPopup from "./global/chatPopUp/ChatPopUP";
import Scroll from "./global/scroll/Scroll";
import Section1 from "./components/home/Section1";
import Section2 from './components/home/Section2';
import { App } from "./components/home/Section3";
import Section4 from "./components/home/Section4";
import Section5 from "./components/home/Section5";
import { App2 } from "./components/home/Section6";
import { LoadingMutatingDots } from "./global/loading/Loadings";
import { url } from './lib/lib';

export default function HomePage() {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(`${url}`, {
        //   withCredentials: true,
        // });

        // setFormData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <LoadingMutatingDots />;
  }

  return (
    <div className="bg-white">
      <div className="bg-[#f9f9f9] mx-24 ">
        <Head>
          <meta charSet="utf-8" />
          <title>{formData.metaTitle || "BluO - Serviced Apartments"}</title>
          <meta name="description" content={formData.metaDescription || ""} />
          <meta name="keywords" content={formData.metaKeywords || ""} />
        </Head>

        <Section1 />
        <Section2 />
        <App />
        <Section4 />
        <Section5 />
        <App2 />
        <ChatPopup />
        <Scroll />
      </div>
    </div>
  );
}
