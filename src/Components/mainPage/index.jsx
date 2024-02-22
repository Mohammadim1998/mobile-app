import Link from "next/link";

const MainPage = () => {
    return (
        <div className="bg-[#26328D] max-sm:w-full h-dvh max-sm:flex flex-col justify-center items-center hidden  font-bold ">
            <img src="/images/svg/godlogo2.svg" className="w-[48px] h-[66px]" alt="godlogo2" />
            <Link href={"/sliderPage"}>
                <h1 className="text-white text-base leading-6 mt-5 mb-[17px]">سامانه شمع</h1>
            </Link>
            <h2 className="text-white text-xs leading-4">شبکه مبلغان و عملیات‌های تبلیغی</h2>
        </div>
    );
}

export default MainPage;