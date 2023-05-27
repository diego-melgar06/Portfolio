import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <main className="bg-bgPrimary font-fnGaramond flex justify-center ">
      <div className="min-w-[272px] w-auto max-w-[457px] grid place-items-center overflow-hidden">
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}

export default App
