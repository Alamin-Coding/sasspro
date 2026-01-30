import React from 'react'
import bannerBG from "../assets/banner-img.png"
import heroImage from "../assets/hero-img.png" 

import professionals from "../assets/professionals.png" 
import customers from "../assets/customers.png" 
import years from "../assets/years.png" 

const Banner = () => {
    const bannerStyle = {
        background: `url(${bannerBG})`,
        backgroundCover: "cover",
        backgroundPosition: "center",
         backgroundRepeat: "no-repeat"
    }
    return (

        <div className="wrapper overflow-x-clip pb-12.5" style={bannerStyle}>
            <div className="sectionContent h-screen flex items-center justify-center">
                <div className="w-full">
                    <p className="font-raleway font-bold text-white text-lg tracking-[0.9px] leading-[22.3px] mb-[11px]">
                        Business &amp; Technologies</p>
                    <h1 className="font-raleway text-white font-bold text-[52px] leading-[62px] mb-[44px]">We help
                        tech<br />companies deliver<br />great software</h1>
                    <p className="font-raleway text-[16px] text-white leading-[27.2px] mb-[44px]">
                        Since 1999. For millions of users. We transform businesses with powerful and<br />
                        adaptable digital solutions that satisfy the needs of today and unlock the<br />
                        opportunities of tomorrow.
                    </p>
                    <form className="w-full flex items-center justify-start h-[60px]">
                        <input type="text" className="bg-white border-0 outline-0 rounded-tl-[8px] rounded-bl-[8px] h-full w-[100%]" />
                        <button className="font-raleway text-white font-semibold text-[16px] leading-[60px] px-[25px] bg-primarySkyblue h-full border-0 outline-0 rounded-tr-[8px] rounded-br-[8px] max-w-[200px] w-[100%]">Request
                            for Demo</button>
                    </form>
                </div>
                <div className="relative h-full w-full">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-[30%] -translate-y-1/2 w-[756px] h-auto">
                        <img src={heroImage} alt="dashboard screenshot" />
                    </div>
                </div>
            </div>
            <div className="sectionContent flex flex-col w-full pb-12.5 rounded-xl bg-white shadow-[0px_7px_40px_rgba(0,0,0,0.1)] p-12.5">
                <div className="flex justify-between items-center pb-10 border-b border-[#112f421f]">
                    <div>
                        <p className="font-raleway text-primarySkyblue text-[14px] leading-[17.3px] tracking-[0.28px] font-bold mb-4.25">
                            Who we are?</p>
                        <h2 className="font-raleway text-textBlue font-bold text-[36px] leading-12">
                            More than 5,000 users around the world are<br />already
                            using STDEV actively
                        </h2>
                    </div>
                    <div className="bg-[#CFDDDB] p-9 rounded-2.5 flex flex-col items-center justify-center gap-2.5 w-44.5 h-46.5">
                        <h2 className="font-inter text-textBlue font-bold leading-25.25 tracking-[2.5px] text-[50px]">4.8</h2>
                        <div className="flex gap-1">
                            <img src="/star.png" alt />
                            <img src="/star.png" alt />
                            <img src="/star.png" alt />
                            <img src="/star.png" alt />
                            <img src="/star.png" alt />
                        </div>
                        <p className="font-inter text-[16px] leading-[27.2px] text-[#495E6C]">35 Reviews</p>
                    </div>
                </div>
                <div className="flex justify-between mt-[25px]">
                    <div className="flex items-center gap-[20px]">
                        <img src={professionals} alt width={75} height={75} />
                        <div>
                            <h2 className="font-inter text-primarySkyblue font-bold text-[30px] leading-10 tracking-[1.5px]">
                                70+</h2>
                            <p className="font-inter text-[16px] leading-[27.2px] text-[#495E6C] font-medium">Professionals
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <img src={years} alt width={75} height={75} />
                        <div>
                            <h2 className="font-inter text-primarySkyblue font-bold text-[30px] leading-[40px] tracking-[1.5px]">
                                22 Years</h2>
                            <p className="font-inter text-[16px] leading-[27.2px] text-[#495E6C] font-medium">Year of
                                experience</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <img src={customers} alt width={75} height={75} />
                        <div>
                            <h2 className="font-inter text-primarySkyblue font-bold text-[30px] leading-[40px] tracking-[1.5px]">
                                $40+ M</h2>
                            <p className="font-inter text-[16px] leading-[27.2px] text-[#495E6C] font-medium">Fundraised by
                                customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner