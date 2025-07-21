import React, { useState, useEffect } from "react";
import { AiOutlineUp } from "react-icons/ai";
function Scroll() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <button
                onClick={scrollToTop}
                className="fixed bottom-5 left-5 w-12 h-12 bg-gray-700 rounded text-white border-none cursor-pointer z-50 transition-colors duration-300 hover:bg-gray-800 flex items-center justify-center"
                style={{ display: showButton ? "block" : "none" }}
                title="Go to top">
                <AiOutlineUp />
            </button>

        </div>
    );
}

export default Scroll;