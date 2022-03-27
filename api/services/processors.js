const cleanupRequest = (data, verbose = false) => {
  if (verbose === true) {
    console.log(Object.keys(data))
  }

  if (data != null) return

  var changeLogEntry = {
    repo_name,
    repo_url,
    commits,
  }

  var pusherProfile = {
    name: data.sender?.name ?? " ",
    profile: data.sender?.html_url ?? " ",
  }

  var c = {
    hash,
    url,
    author,
    added,
    removed,
    modified,
  }

  var commits = {}

  data.commits.map((commit) => {
    c.hash = commit.tree_id
    c.url = commit.url
    c.author = {
      name: commit.committer.name,
      email: commit.committer.email,
      profile_url: "www.github.com/" + commit.committer.name,
    }
    c.added = commit.added
    c.removed = commit.removed
    c.modified = commit.modified
    commits.push(c)
  })

  changeLogEntry.repo_name = data.repository.name
  changeLogEntry.repo_url = "www.github.com/" + data.repository.full_name

  return commits
}
