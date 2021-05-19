import { Avatar,Button } from '@material-ui/core'
import React, { Component } from 'react'
import axios from 'axios';
import Commentaire from './Commentaire'
import './Post.css'
import {v1 as uuid} from 'uuid';


export default class Post extends Component {
   state = {
       commentaire:""
   }
    
  
    render() {

        const comhand = (e)=>{
            this.setState({commentaire:e.target.value});
        }
        
       const onsub = (e)=>{
         e.preventDefault();
         console.log(this.props.id);  
        const  item = {
              "com": this.state.commentaire,
              "id": this.props.id
          }
          const headers = {
            "Access-Control-Allow-Origin": "http://localhost:5000", 
            "Content-Type": "application/json"
        };
          axios.put('http://localhost:5000/',item, { headers } ).then(res=>console.log(res)).catch(err=>console.log(err)); 
        }
     
        
        return (
            <div className='post'>
                <div className="post_top">
                   <Avatar/>
                   <p>{this.props.user}</p>
                </div>
                <div className="post_bottom">
                   <p>{this.props.statu}</p>
                   <img src={require(`../uploads/${this.props.img}`).default} alt=''/>
                </div>
                <div className="comments">
                   
                </div>
                <div className="addcomm">
                    <Avatar/>
                    <form onSubmit={onsub}>
                        <input placeholder="write a comment" value={this.state.commentaire} onChange={comhand}/>
                        <Button variant="contained" color="primary" type="submit">add</Button>
                    </form>
                </div>
                <div className="comment">
                    {this.props.comments.map(com=><Commentaire key={uuid()} user="user" com={com}/>)}
                </div>
                
            </div>
        )
    }
}
