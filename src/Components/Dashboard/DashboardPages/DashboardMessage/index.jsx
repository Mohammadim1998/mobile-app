"use client";
import { useEffect, useState } from "react";
import Tabbar from "./TabbarCtrl";
import Messages from "./Tabs/Messages";
import ChatOnline from "./Tabs/ChatOnline";
import Tickets from "./Tabs/Tickets";

const DashboardMessage = () => {
    const [detail, setDetail] = useState(<Messages />);
    const [content, setContent] = useState("messages");

    useEffect(() => {
        if (content === "messages") {
            setDetail(<Messages />)
        } else if (content === "chatOnline") {
            setDetail(<ChatOnline />)
        } else if (content === "tickets") {
            setDetail(<Tickets />)
        }
    }, [content])

    return (
        <main className="w-screen">
            <div className="w-full bg-[#2B39A1] p-[16px_16px_6px_16px] rounded-[0_0_14px_14px]">
                <div className="w-full flex justify-between items-center mb-11">
                    <span className="text-[#FFFFFF] text-sm font-semibold leading-5">پیام‌های شما</span>

                    <div className="w-4 h-4 cursor-pointer"><img src="/images/svg/tabbar/search.svg" className="w-full h-full" /></div>
                </div>

                <Tabbar setContent={setContent} />
            </div>

            <section className="w-full">{detail}</section>
        </main>
    );
}

export default DashboardMessage;