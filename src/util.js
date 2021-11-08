async function getPosts(url = "https://worker_project.kyle-xu4.workers.dev/posts"){
  let res = await fetch(url, {method: "GET", mode: "no-cors"});
  return res.json();
}

export default getPosts;