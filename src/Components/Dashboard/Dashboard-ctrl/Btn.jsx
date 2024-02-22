"use client";

const Btn = ({ img, img1, setContent, content, active, setActive }) => {

    return (
        <button
            onClick={() => {
                setContent(content);
                setActive(content);
            }}
        >
            {active == content
                ? <img src={img1} alt="" className="active:scale-50 w-6 h-6 transition-all duration-200" />
                : <img src={img} alt="" className="w-6 h-6" />
            }
        </button>
    );
}

export default Btn;
