"use client";

const tab = ({ title, content, setContent, active, setActive }) => {
    return (
        <button
            onClick={() => {
                setContent(content);
                setActive(content);
            }}
            className={active === content
                ? "text-[#FFFFFF] font-semibold text-xs text-center border-b-[#FFFFFF8C] border-b-[2.5px] pb-[10px] px-[10.5px]"
                : "text-[#FFFFFF] font-semibold text-xs pb-[12.5px] text-center px-[10.5px]"
            }
        >{title}</button>
    );
}

export default tab;