import articles_1 from "../assets/img-1.png"
import articles_2 from "../assets/img-2.png"
import articles_3 from "../assets/img-3.png"
import author_1 from "../assets/img(1).png"
import author_2 from "../assets/img(2).png"
import author_3 from "../assets/img(3).png"
import RecentCard from "./RecentCard"


const data = [
    {
        id:1,
        img: articles_1,
        title: "Where Should I Buy Next?",
        authorImage: author_1,
        authorName: "Carter Rosser",
        date: "24/08/2021",
        description: `From romantic getaways to adventurous hikes, find your next...`
    },
    {
        id:2,
        img: articles_2,
        title: "Malesuada Fermentum Tortor",
        authorImage: author_2,
        authorName: "Carter Rosser",
        date: "24/08/2021",
        description: `From romantic getaways to adventurous hikes, find your next...`
    },
    {
        id:3,
        img: articles_3,
        title: "Where Should I Buy Next?",
        authorImage: author_3,
        authorName: "Carter Rosser",
        date: "24/08/2021",
        description: `From romantic getaways to adventurous hikes, find your next...`
    },
]


const RecentArticles = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="container">
                <h2 class="text-[40px] font-bold text-center text-gray-800 mb-16">Recent News & Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                   {data.map((item)=> {
                    const {date,authorName,authorImage,title,description, img} = item
                    return <RecentCard img={img} date={date} authorImage={authorImage} authorName={authorName} title={title} description={description} />
                   })}

                </div>
            </div>
        </section>
    )
}

export default RecentArticles