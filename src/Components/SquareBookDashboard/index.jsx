const SquareBookDashboard = ({ img, title }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-[70px] h-[70px] flex justify-center shadow-[0px_1px_4px_0px_#00000033] items-center rounded-2 mb-2 bg-[#B9976C1C]">
                <img src={img} alt="daicon-1" className="w-[38px] h-[54px] rounded-[6px]" />
            </div>
            <span className="text-[#818181]  font-medium text-[12px] leading-4 text-center ">{title}</span>
        </div>
    );
}

export default SquareBookDashboard;