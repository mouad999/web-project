import React, { Component } from 'react'
import './Addpost.css'
import { Avatar,Button } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import axios from 'axios'
export default class Addpost extends Component {
    
    state = {
        stat:"",
        img:""
    }
    


    render() {

    const meshand = (e)=>{
        this.setState({stat: e.target.value});
    }
    const imghand = (e)=>{
        this.setState({img: e.target.files[0]});
    }
    const onsub = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("statu",this.state.stat);
        formData.append("postimage",this.state.img);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        const item = {
            statu: this.state.stat,
            postimage: this.state.img
        };
        axios.post('http://localhost:5000/',formData,config).then((res)=>console.log(res));
    }

        return (
            <div>
                <div className='headbar'>
                    <Avatar/>
                    <form onSubmit={onsub}>
                    <input type='text' placeholder='  what do you think?' value={this.state.stat} onChange={meshand}/>
                    <div className="icon">
                    <label htmlFor="file-input">
                    <ImageIcon/>
                    </label>
                    <input id="file-input" type="file" onChange={imghand}/>
                    </div>
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                    </form>
                </div>
                
            </div>
        )
    }
}
