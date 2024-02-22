"use client";
import { useState } from "react";
import Tab from "./tab";

const Tabbar = ({ setContent }) => {
    const [active, setActive] = useState("messages");

    return (
        <div className="w-full flex justify-start items-center gap-x-10">
            <Tab title="درخواست های باز" content="messages" setContent={setContent} active={active} setActive={setActive} />
            <Tab title="بسته شده" content="chatOnline" setContent={setContent} active={active} setActive={setActive} />
            <Tab title="لغو شده" content="tickets" setContent={setContent} active={active} setActive={setActive} />
        </div>
    );
}

export default Tabbar;