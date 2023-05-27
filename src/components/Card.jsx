const Card = ({ title, img, description, technologies, url }) => {
  return (
    <article className=" my-8 grid place-items-center gap-8  max-w-[475px] border-solid border-2 pt-5 rounded-2xl overflow-hidden">
      <img src={img} alt="No se encontro la img" />
      <h3 className="text-3xl font-bold font-fnRobot">{title}</h3>
      <p className="text-xl text-center">{description}</p>
      <h3 className="font-semibold underline">Used Tecnhologies</h3>
      <ol className="columns-2 ">
        {technologies.map((tool) => (
          <li key={tool} className="col-auto">
            {tool}
          </li>
        ))}
      </ol>
      <a className="btn w-full flex justify-center" href={url} target="__blank">
        To project
      </a>
    </article>
  )
}

export default Card
