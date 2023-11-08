import { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AppHeader from './components/Header/appHeader'
import Hero from './components/Hero/Hero'
import Service from './components/Service/Service'
import WhyUs from './components/WhyUs/WhyUs'
import CounterArea from './components/CounterArea/CounterArea'
import TopDeals from './components/TopDeals/TopDeals'
import Package from './components/Package/Package'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import CardFooter from './components/Footer/CardFooter'
import Partner from './components/Partner/Partner'
import Gallery from './components/Gallery/Gallery'
import Testimonials from './components/Testimonials/Testimonials'


function App() {
  const [count, setCount] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0 && !isScrolled) {
      setIsScrolled(true);
    } else if (window.scrollY === 0 && isScrolled) {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <>
        <div className='App'>
          <header id='header'>
            <AppHeader isScrolled={isScrolled} />
          </header>
          <main>
            <Hero />
            <Service />
            <WhyUs />
            <CounterArea />
            <TopDeals />
            <Package />
            <Partner />
            <Gallery />
            <Blog />
            <Testimonials />
            <Contact />
          </main>
          <footer id='footer'>
            <CardFooter />
          </footer>
        </div>
    </>
  )
}

export default App
