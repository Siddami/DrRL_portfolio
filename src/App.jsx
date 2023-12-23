import Header from "./components/Header"
import Banner from "./components/Banner"
import NavBar from "./components/NavBar"
import About from "./components/About"
// import Services from "./components/Services"
// import Work from "./components/Work"
// import Contact from "./components/Contact"


function App() {

  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <NavBar />
      <About />
      {/* <Services />
      <Work />
      <Contact /> */}
      <div className="h-[4000px]"></div>
    </div>
  )
}

export default App
