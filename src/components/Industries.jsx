import img_1 from "../assets/img_1.png"
import img_2 from "../assets/img_2.png"
import img_3 from "../assets/img_3.png"
import img_4 from "../assets/img_4.png"
import img_5 from "../assets/img_5.png"
import img_6 from "../assets/img_6.png"
import IndustriesCard from "./IndustriesCard"

const data = [
    {
        img: img_1,
        title: "FinTech",
        description: `Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`
    },
    {
        img: img_2,
        title: "Telecom",
        description: `Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`
    },
    {
        img: img_3,
        title: "Retail",
        description: `Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`
    },
    {
        img: img_4,
        title: "Transportation",
        description: `Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`
    },
    {
        img: img_5,
        title: "eLearning",
        description: `Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`
    },
    {
        img: img_6,
        title: "Artificial Intelligence",
        description: `Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`
    }
]



const Industries = () => {
    return (
        <section className="py-16 px-4">
            <div className="max-w-300 mx-auto">
                {/* Section Title */}
                <h2 className="text-[40px] font-bold text-center text-gray-800 mb-16">Industries in focus</h2>
                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                   {data.map((item)=> {
                    const {img,title, description } = item
                    return <IndustriesCard title={title} image={img} description={description} />
                   })}
                </div>
            </div>
        </section>  

    )
}

export default Industries