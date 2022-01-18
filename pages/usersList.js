import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase from "../lib/firebase/initFirebase"

import AdminNavbar from "../component/Navbars/AdminNavbar";
import Sidebar from "../component/Sidebar/Sidebar";
import HeaderStats from "../component/Headers/HeaderStats";
import FooterAdmin from "../component/Footers/FooterAdmin";
import UserTable from "../component/UserTable"

import fire from 'firebase/compat/app'
import 'firebase/compat/auth'

export default function Home() {
    const [users, setUsers] = useState([])
    const router = useRouter()
    const color = "light"
    useEffect(() => {

        if (firebase.isLoggedIN()) {
            console.log(fire.auth().currentUser.uid)

        } else {
            router.push("/login");

        }

        const db = fire.firestore();
        const unsub = db.collection("users").get().then((querySnapshot) => {
            setUsers(querySnapshot.docs.map(doc => ({
                ...doc.data()
            })))
        })
        return unsub;


    }, []);


    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar />
                {/* Header */}
                <HeaderStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <div className="flex flex-wrap mt-4">
                        <div className="w-full mb-12 px-4">
                            <div
                                className={
                                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                                    (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
                                }
                            >
                                <div className="rounded-t mb-0 px-4 py-3 border-0">
                                    <div className="flex flex-wrap items-center">
                                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                            <h3
                                                className={
                                                    "font-semibold text-lg " +
                                                    (color === "light" ? "text-blueGray-700" : "text-white")
                                                }
                                            >
                                                Бүх ажилчдын мэдээлэл
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="block w-full overflow-x-auto">
                                    {/* Projects table */}
                                    <table className="items-center w-full bg-transparent border-collapse">
                                        <thead>
                                            <tr>
                                                <th
                                                    className={
                                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                                        (color === "light"
                                                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                            : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                                                    }
                                                >
                                                    Овог Нэр
                                                </th>
                                                <th
                                                    className={
                                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                                        (color === "light"
                                                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                            : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                                                    }
                                                >
                                                    Утас
                                                </th>
                                                <th
                                                    className={
                                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                                        (color === "light"
                                                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                            : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                                                    }
                                                >
                                                    Албан тушаал
                                                </th>
                                                <th
                                                    className={
                                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                                        (color === "light"
                                                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                            : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                                                    }
                                                >
                                                    Хэлтэс
                                                </th>
                                                <th
                                                    className={
                                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                                        (color === "light"
                                                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                            : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                                                    }
                                                >
                                                    Салбар
                                                </th>
                                                <th
                                                    className={
                                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                                        (color === "light"
                                                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                            : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                                                    }
                                                ></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users.map(user => {
                                                    console.log(user.firstname);
                                                   return <UserTable userData={user} key={user.id} />
                                                })

                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                    </div>
                    <FooterAdmin />
                </div>
            </div>
        </>
    )
}
