export const getRepo = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  const repos = data.map((repo) => ({
    title: repo.name,
    url: repo.svn_url,
    desc: repo.description,
    topics: repo.topics,
  }))

  return repos
}
