import Banner from "./components/Banner"
import EngageSection from "./components/EngageSection"
import Header from "./components/Header"
import Industries from "./components/Industries"
import ProductWork from "./components/ProductWork"
import RecentArticles from "./components/RecentArticles"
import WeWorkSection from "./components/WeWorkSection"

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Industries/>
      <ProductWork/>
      <EngageSection/>
      <WeWorkSection/>
      <RecentArticles />
    </div>
  )
}

export default App