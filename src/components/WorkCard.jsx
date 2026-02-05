
const WorkCard = ({ title, description, img }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 px-7.5 py-10 ">
            <div className="relative overflow-hidden size-16.5">
                <img src={img} alt="Where Should I Buy Next?" className="w-full h-full object-cover" />
            </div>
            <div className="">
                <h3 className="text-[22px] pt-5 font-bold text-gray-800 mb-4 hover:text-cyan-600 transition-colors cursor-pointer">{title}</h3>
                {/* Description */}
                <p className="text-gray-600 text-[16px] leading-[26px] mb-6">{description}</p>
                {/* See More Link */}
                <a href="#" className="text-cyan-500 hover:text-cyan-600 font-semibold text-[16px] inline-flex items-center">
                    See More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>

    )
}

export default WorkCard