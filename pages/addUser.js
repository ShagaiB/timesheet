import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase from "../lib/firebase/initFirebase"

import AdminNavbar from "../component/Navbars/AdminNavbar";
import Sidebar from "../component/Sidebar/Sidebar";
import HeaderStats from "../component/Headers/HeaderStats";
import FooterAdmin from "../component/Footers/FooterAdmin";
import { useForm } from "react-hook-form";
import Select from 'react-select';
import fire from 'firebase/compat/app'
import 'firebase/compat/auth'
export default function addUser() {

    const router = useRouter()
    const [selectedOption, setSelectedOption] = useState([{ value: 'select', label: 'Select' }]);
    const test= []
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        try {

            console.log(departState, selectedOption.value)
            const areaselected = selectedOption.value
            await firebase.register(data, departState, areaselected);
            console.log(data)
            reset()

            // router.push("/");
        } catch (error) {
            console.log(error);
        }

    };
    useEffect(() => {

        if (firebase.isLoggedIN()) {
            console.log(fire.auth().currentUser.uid)

        } else {
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
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                                <div className="rounded-t bg-white mb-0 px-6 py-6">
                                    <div className="text-center flex justify-between">
                                        <h6 className="text-blueGray-700 text-xl font-bold">?????????????? ??????????</h6>
                                    </div>
                                </div>
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                            ???????????????? ????????????????
                                        </h6>
                                        <div className="flex flex-wrap">
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        ??????
                                                    </label>
                                                    <input required
                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        {...register("firstname")}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        ????????
                                                    </label>
                                                    <input required
                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        {...register("lastname")}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        ?????????? ????????
                                                    </label>
                                                    <input required
                                                        type="email"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        {...register("email")}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        ???????? ????
                                                    </label>
                                                    <input required
                                                        type="password"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        {...register("password")}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        ????????
                                                    </label>
                                                    <input required
                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        {...register("phone")}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        ?????????? ????????????
                                                    </label>
                                                    <select {...register("position")} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                                        <option disabled selected value> -- select an option -- </option>
                                                        <option value="???????????????? ??????????">???????????????? ??????????</option>
                                                        <option value="???????????????? ???????????????????????? ??????????????">???????????????? ???????????????????????? ??????????????</option>
                                                        <option value="????????????">????????????</option>
                                                        <option value="??????????">??????????</option>
                                                        <option value="???????????????? ?????????? ????????????????">???????????????? ?????????? ????????????????</option>
                                                        <option value="?????????? ?????????? ????????????????">?????????? ?????????? ????????????????</option>
                                                        <option value="?????????????? ?????????? ????????????????">?????????????? ?????????? ????????????????</option>
                                                        <option value="???? ?????????????????? ???????????? ?????????? ????????????????">???? ?????????????????? ???????????? ?????????? ????????????????</option>
                                                        <option value="?????????????? ?????????????????? ?????????? ????????????????">?????????????? ?????????????????? ?????????? ????????????????</option>
                                                        <option value="?????????????? ?????????? ????????????????">?????????????? ?????????? ????????????????</option>
                                                        <option value="?????????? ?????????????? ??????????????">?????????? ?????????????? ??????????????</option>
                                                        <option value="????????????">????????????</option>



                                                    </select>
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        ????????????
                                                    </label>
                                                    <select onChange={(e) => {
                                                        setDefartState(e.target.value)

                                                    }} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                                        <option disabled selected value> -- select an option -- </option>
                                                        <option value="???????????????? ????????????">???????????????? ????????????</option>
                                                        <option value="???????????????????????????? ????????????">???????????????????????????? ????????????</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Area
                                                    </label>
                                                    <Select className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        defaultValue={selectedOption}
                                                        onChange={setSelectedOption}
                                                        options={test}
                                                    />
                                                    {/* <select className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    <option>test</option>
                    <option>test</option>
                    <option>test</option>
                    <option>test</option>
                  </select> */}
                                                </div>
                                            </div>

                                        </div>
                                        <div className="text-center mt-6">
                                            <button
                                                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                                type="submit"
                                            >
                                                Create Account
                                            </button>
                                        </div>


                                    </form>
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
