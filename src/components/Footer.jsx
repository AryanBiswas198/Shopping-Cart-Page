import React from "react";

const Footer = () => {

    return(
        <div className="bg-black flex justify-center items-center gap-y-14">
            <p className="text-white font-semibold text-md tracking-wide py-10">
                Made with ❤️ By {" "} 
                <a href="https://drive.google.com/file/d/17ZFIwP5JafRdSx9NX_EDXtTCQ1d2kwc_/view?usp=sharing" className="underline"> 
                    Aryan Biswas
                </a>
            </p>
        </div>
    );
};

export default Footer;