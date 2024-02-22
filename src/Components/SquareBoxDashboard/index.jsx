const SquareBoxDashboard = ({ img, title }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-[70px] h-[70px] flex justify-center items-center bg-[#2B39A114] rounded-[8px] mb-2">
                <img src={img} alt="daicon-1" className="w-[26px] h-[34px]" />
            </div>
            <span className="text-[#818181]  font-medium text-[11px] leading-4 text-center ">{title}</span>
        </div>
    );
}

export default SquareBoxDashboard;