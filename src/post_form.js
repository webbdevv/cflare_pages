import React, {useState} from 'react'
import './post_form.css'
import axios from 'axios'
export default function PostForm(props) {
  const [username, setU] = useState("")
  const [content, setC] = useState("")
  const [title, setT] = useState("")
  const [errors, setErrors] = useState("")
  async function createPost(){
    const url = "https://worker_project.kyle-xu4.workers.dev/posts"
    axios.post(url, {username, title, content})
    let resJson = await res.json()
  }
  return (
    <div className="post-form">
      <h3>Create Post</h3>
      <div className="form-field">
        <label htmlFor="">
          <input placeholder="Title" type="text" value={title} onChange={(e) => setT(e.target.value)}/>
        </label>
      </div>
      <div className="form-field">
        <label htmlFor="">
          <input placeholder="Content" type="text" value={content} onChange={e => setC(e.target.value)}/>
        </label>
      </div>
      <div className="form-field">
        <label htmlFor="">
          <input placeholder="Username" type="text" value={username} onChange={e => setU(e.target.value)}/>
        </label>
      </div>
      <button onClick={createPost} id="create-post">Create</button>
    </div>
  )
}
