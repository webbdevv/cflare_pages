import './App.css';
import { useState, useEffect } from 'react';
import Card from './card'
import PostForm from './post_form'
function App() {
  const [posts, setPosts] = useState([])
  const images = [
    "https://images.unsplash.com/photo-1635831505716-fa6861a8e8c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80", 
    "https://images.unsplash.com/photo-1635959565667-aeb00a4297ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=830&q=80"]
  const url = "https://worker_project.kyle-xu4.workers.dev/posts"
  useEffect(() => {
    //fetch posts on page launch
    fetch(url).then(response => response.json())
      .then(data => {
        setPosts(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [])
  const postElements = posts.map((p, i) => {
    return <Card imgUrl={images[i] ? images[i] : ""} p={p} i={i}/>
  })
  return (
    <div className="app">
      <div className="container">
        <h1 className="flare">Flare</h1>
        <div className="divider"></div>
        <div className="posts">
          {postElements}
        </div>
        <PostForm/>
      </div>
    </div>
  );
}

export default App;
