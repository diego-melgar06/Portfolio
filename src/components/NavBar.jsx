import { BsClipboardData, BsHouseFill, BsPersonFill } from "react-icons/bs"
import { BiChat } from "react-icons/bi"
import { Link } from "react-scroll"

const NavBar = () => {
  return (
    <nav className=" m-1 px-14 mb-2 flex place-content-center  rounded-full text-white bg-bgSecond max-phone:fixed bottom-2 left-0 right-0">
      <div className="flex gap-8">
        <Link
          to="home"
          spy={true}
          smooth={true}
          activeClass="active"
          className="icon cursor-pointer text-2xl "
        >
          <BsHouseFill />
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          activeClass="active"
          className="icon cursor-pointer text-2xl"
        >
          <BsPersonFill />
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          activeClass="active"
          className="icon cursor-pointer text-2xl "
        >
          <BsClipboardData />
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          activeClass="active"
          className="icon cursor-pointer text-2xl "
        >
          <BiChat />
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
