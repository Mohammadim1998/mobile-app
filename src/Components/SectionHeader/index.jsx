const SectionHeader = ({ title, btnTitle }) => {
    return (
        <div className="w-full flex justify-between items-center  px-4">
            <span className=" font-medium text-[13px] leading-5 text-right text-[#3A3A3A]">{title}</span>
            <div className="flex justify-between items-center gap-x-[5px] cursor-pointer">
                <span className=" font-medium text-xs leading-[18px] text-right text-[#3A3A3ACC]">{btnTitle}</span>
                <img src="/images/svg/rightArrow.svg" alt="rightArrow" className="text-[#3A3A3ACC] w-1 h-2" />
            </div>
        </div>
    );
}

export default SectionHeader;