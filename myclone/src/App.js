import Addpost from "./components/Addpost";
import Post from "./components/Post";
import axios from 'axios';
import {useState,useEffect} from 'react';
import {v1 as uuid} from 'uuid';

function App() {
  const [posts, setPosts] = useState([]);
  const [val,setVal] = useState("");
  useEffect(() => {
    axios.get('http://localhost:5000/').then(res=>{
      setPosts(res.data);
      console.log(res);
    })
  },[])
  return (
    <div className="App">
      <Addpost/>
      {posts.map(item=>
        <Post key={uuid()} id={item._id} user={item.user} statu={item.statu} img={item.postimage} comments={item.comments}/>
        
      )}
    </div>
  );
}

export default App;


