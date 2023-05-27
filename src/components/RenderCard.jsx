import Card from "./Card"

const RenderCard = ({ repos, type = "others" }) => {
  return (
    <>
      {repos
        ?.filter((project) => project.topics.includes(type))
        .map(({ title, desc, topics, url }) => (
          <Card
            key={title}
            title={title}
            description={desc}
            technologies={topics}
            url={url}
          />
        ))}
    </>
  )
}

export default RenderCard
