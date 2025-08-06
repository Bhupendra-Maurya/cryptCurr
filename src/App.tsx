import AppDownload from "./components/AppDownload"
import Faq from "./components/Faq"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <AppDownload/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App
