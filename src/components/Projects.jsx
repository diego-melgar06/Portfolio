import { useEffect, useState } from "react"
import { getRepo } from "../service/getRepo"
import RenderCard from "./RenderCard"

const Projects = () => {
  const [repos, setRepos] = useState(null)

  const getRepositories = async () => {
    const newRepos = await getRepo(
      "https://api.github.com/users/diego-melgar06/repos"
    )
    console.log(newRepos)
    setRepos(newRepos)
  }

  useEffect(() => {
    getRepositories()
  }, [])

  return (
    <section
      className="projects min-w-[272px] w-[272px] max-w-[467px] min-h-[100vh] pt-4 text-2xl"
      id="projects"
    >
      <h2>Projects</h2>
      <section id="frontend">
        <h3>Frontend</h3>
        <RenderCard repos={repos} type="frontend" />
      </section>
      <section id="backend">
        <h3>Backend</h3>
        <RenderCard repos={repos} type="backend" />
      </section>
      <section id="others">
        <h3>Others</h3>
        <RenderCard repos={repos} />
      </section>
    </section>
  )
}

export default Projects
