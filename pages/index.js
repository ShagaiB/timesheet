import React, { useEffect } from "react";
import { useRouter } from "next/router";
import firebase from "../lib/firebase/initFirebase"

import AdminNavbar from "../component/Navbars/AdminNavbar";
import Sidebar from "../component/Sidebar/Sidebar";
import HeaderStats from "../component/Headers/HeaderStats";
import FooterAdmin from "../component/Footers/FooterAdmin";


import fire from 'firebase/compat/app'
import 'firebase/compat/auth'
export default function Home() {

  const router = useRouter()
  useEffect(() => {
    
    if (firebase.isLoggedIN()) {
      console.log(fire.auth().currentUser.uid)
      
    }else{
      router.push("/login");
     
    }
  }, []);


  return (
    <>
    <Sidebar />
    <div className="relative md:ml-64 bg-blueGray-100">
      <AdminNavbar />
      {/* Header */}
      <HeaderStats />
      <div className="px-4 md:px-10 mx-auto w-full -m-24">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-full px-4">
         gege
        </div>
        
      </div>
        <FooterAdmin />
      </div>
    </div>
  </>
  )
}
