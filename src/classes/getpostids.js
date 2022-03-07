import React from 'react';
import { Component } from 'react/cjs/react.production.min';

//This is the same as GetIds component, but in class component form
export default class GetPostIds extends Component{
    
    constructor(props) {
        super(props);

        //this establishes that are state has a new item, an array
        //that we call categories
        this.state= {
            posts: []
        }
      }

      //Once the component mounts, fetch is called
    componentDidMount(){
        //this.props.url is the same as ReadOne's props.url
        fetch(this.props.url)
                .then((result) => result.json())
                .then((jsonObject) => {
                    this.setState({posts : jsonObject.data });
                })
                .catch( (error)=> console.log(error));
            
    }

    //This is the first time I've been able to write a map function in a Render and 
    //have it actually work
    render(){
        return(
            <div>
                <hr/>
                <h3>Blog Ids in Class Component</h3>
                <ul>
                    {this.state.posts.map((item)=><li key={item.id}>{item.id}</li>)}
                </ul>
            </div>
        );
    }
}