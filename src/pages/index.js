import Image from "next/image";
import TopCards from "../components/TopCards";
import BarChart from "../components/BarChart";
import RecentOrders from "../components/RecentOrders";

import Head from "next/head";
import Header from "../components/header";
import Sidebar from "@/components/Sidebar";
import { BsFillPersonPlusFill } from "react-icons/bs";
import Table from "../components/table";
import Form from "../components/form";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);

  const handler = () => {
    setVisible(!visible);
  };
  return (
    <>
      <Head>
        <title> BE </title>
        <meta name="description" content="Trouvez le meilleur employé dans une direction avec notre application." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="meilleur employé, direction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className='bg-gray-100 min-h-screen'>
    <Header />
    <TopCards />
    <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
      <BarChart />
      <RecentOrders />
    </div>
    </main> */}

      <main className="py-5 -ml-20 -mt-7">
        <div className="bg-gray-100 min-h-screen">
          <div>
            <h1 className="text-xl md:text-3xl pt-20 text-center font-bold py-5">
              EMPLOYEES MANAGEMENT
            </h1>
            <div className="container mx-auto flex justify-between py-5 border-b">
              <div className="left flex gap-3">
                <button
                  onClick={handler}
                  className="flex ml-10 bg-purple-700 text-white px-3 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800 "
                >
                  Add Employee{" "}
                  <span className="px-1">
                    <BsFillPersonPlusFill size={23} />
                  </span>
                </button>
              </div>
            </div>

            {/* collapsable form */}
            {visible ? <Form></Form> : <></>}
            {/* table */}
            <div className="container mx-auto">
              <Table></Table>
            </div>

            <Header />
          </div>
        </div>
      </main>
    </>
  );
}
