"use client";
import { useState } from "react";
import Tab from "./tab";

const Tabbar = ({ setContent }) => {
    const [active, setActive] = useState("messages");

    return (
        <div className="w-full flex justify-start items-center gap-x-10">
            <Tab title="همه پیام ها" content="messages" setContent={setContent} active={active} setActive={setActive} />
            <Tab title="چت آنلاین" content="chatOnline" setContent={setContent} active={active} setActive={setActive} />
            <Tab title="تیکت ها" content="tickets" setContent={setContent} active={active} setActive={setActive} />
        </div>
    );
}

export default Tabbar;