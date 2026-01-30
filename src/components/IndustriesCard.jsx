
const IndustriesCard = ({image,title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-[386px] mx-auto">
            <div className="relative h-[240px] bg-orange-50 overflow-hidden">
                <img src={image} alt="eLearning" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
                <h3 className="text-[28px] font-bold text-gray-800 mb-4">{title}</h3>
                <p className="text-gray-600 text-[16px] leading-[26px] mb-6">{description}</p>
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

export default IndustriesCard