
const RecentCard = ({ date, authorName, authorImage, title, description, img }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full  mx-auto p-2.5">
            <div className="relative overflow-hidden">
                <img src={img} alt="Where Should I Buy Next?" className="w-full h-full object-cover rounded-[10px]" />
            </div>
            <div className="p-8">
                <h3 className="text-[18px] font-bold text-gray-800 mb-4 hover:text-cyan-600 transition-colors cursor-pointer">{title}</h3>
                {/* Author & Date */}
                <div className="flex items-center gap-4 mb-4 flex-wrap">
                    <div className="flex items-center gap-2">
                        <img src={authorImage} alt="Carter Rosser" className="w-10 h-10 rounded-full object-cover" />
                        <span className="text-gray-600 text-[14px] font-medium">{authorName}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-[14px]">{date}</span>
                    </div>
                </div>
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

export default RecentCard