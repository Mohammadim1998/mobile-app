const messageBox = () => {
    return (
        <div className="w-full flex justify-start items-center gap-x-4 border-b-[#0000000D] border-b-[1px] py-4">
            <div className="w-12 h-12"><img className="w-full h-full" src="/images/svg/tabbar/letter.svg" alt="letter" /></div>
            <div className="flex flex-col gap-y-[6px]">
                <h2 className="text-[#3A3A3A] font-medium text-xs leading-5">پیگیری ثبت فعالیت تبلیغی</h2>
                <div className="flex justify-center items-center text-[#616161D9] font-normal text-[11px] leading-4">
                    <span className="ml-[6px]">۱۵:۳۶</span> - <span className="mr-[6px]">۱۴۰۲/۰۵/۱۴</span>
                </div>
            </div>
        </div>
    );
}

export default messageBox;