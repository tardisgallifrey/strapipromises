import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import { FindPostswithCategory } from '../functions/findpostswithcategory';

//This is the same as GetIds component, but in class component form
export default class GetPostCats extends Component{
    
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

    render(){
        return(
            <div>
                <hr/>
                <h3>Posts with {this.props.category}</h3>
                <ul>
                    <FindPostswithCategory myObject={this.state.posts} category={this.props.category} />
                </ul>
            </div>
        );
    }
}