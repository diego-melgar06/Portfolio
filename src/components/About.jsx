import { AiFillHtml5 } from "react-icons/ai"
import {
  SiCss3,
  SiExpress,
  SiFigma,
  SiGit,
  SiGnometerminal,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiWindowsterminal,
} from "react-icons/si"

import Mou from "../assets/Mou.png"
import { Link } from "react-scroll"
const About = () => {
  return (
    <section
      className="about flex flex-col gap-8 items-center break-words w-[272px] overflow-hidden"
      id="about"
    >
      <img src={Mou} />
      <h2 className="text-3xl w-[272px] underline">About</h2>
      <p className="w-[272px] text-xl leading-9  ">
        Hello again. I present myself with more formability I'm a systems
        engineering student, I'm in my first semester of my degree and I'm
        excited, since I'm learning about the technologies that are dominant
        today for the development of tools that make work easier. I have been a
        FullStack junior developer for 6 months in which I have focused on
        learning both Frontend and Backend technologies. Some of the tools that
        I am aware of are.
      </p>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        activeClass="active"
        className="btn rounded-full text-xl"
      >
        Contact me
      </Link>
      <div className="w-[calc(200px * 19)] text-6xl flex gap-12 mt-6 max-phone:translate-x-[2000px] max-phone:animate-carrouselIcon">
        <AiFillHtml5 />
        <SiCss3 />
        <SiJavascript />
        <SiReact />
        <SiNodedotjs />
        <SiExpress />
        <SiMongodb />
        <SiGit />
        <SiWindowsterminal />
        <SiGnometerminal />
        <AiFillHtml5 />
        <SiCss3 />
        <SiJavascript />
        <SiReact />
        <SiNodedotjs />
        <SiExpress />
        <SiMongodb />
        <SiGit />
        <SiWindowsterminal />
        <SiGnometerminal />
        <SiFigma />
      </div>
    </section>
  )
}

export default About
