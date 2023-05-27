import { TypeAnimation } from "react-type-animation"
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"
import { Link } from "react-scroll"
const Home = () => {
  return (
    <section className="grid place-content-center h-[105vh] " id="home">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col place-items-center ">
          <h1 className="text-3xl font-semibold text-gray-400">Diego Melgar</h1>
          <div className="text-4xl  font-bold  leading-[1] text-gray-500 ">
            <span className="mr-3">I am a</span>
            <TypeAnimation
              sequence={["FrontEnd", 2000, "Backend", 2000]}
              speed={20}
              deletionSpeed={10}
              wrapper="span"
              className="gradientText"
              repeat={Infinity}
            />
          </div>
          <p className=" mt-9 max-w-[17rem] text-center">
            I'm from Guatemala, I'm studying Software Engineering. I'm in my
            first year of university
          </p>
        </div>

        <div className="flex flex-col item-center gap-11">
          <div className="flex-row">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              activeClass="active"
              className="btn rounded-full  min-w-[50px] bg-indigo-900"
            >
              Download CV
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              activeClass="active"
              className="rounded-full p-5 min-w-[50px]"
            >
              Projects
            </Link>
          </div>

          <div className=" text-gray-400  flex item-center justify-around mt-5  ">
            <a
              href="https://instagram.com/diego_melgar06?igshid=MzNlNGNkZWQ4Mg=="
              target="__blank"
            >
              <BsInstagram className="text-3xl text-fnSecondary" />
            </a>
            <a
              href="https://www.linkedin.com/in/diego-melgar/"
              target="__blank"
            >
              <BsLinkedin className="text-3xl text-fnSencond" />
            </a>
            <a href="https://github.com/diego-melgar06" target="__blank">
              <BsGithub className="text-3xl text-fnSencond" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
