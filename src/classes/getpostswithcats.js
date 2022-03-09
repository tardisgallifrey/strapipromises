import React from 'react';
import { SearchPostswithCategory } from '../functions/searchpostswithcategory';

//This is the same as GetIds component, but in class component form
export default class GetPostswithCats extends React.Component{
    
    constructor(props) {
        super(props);

        //this establishes that our state has a new item, an array
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
                    //assign the returned object, data section only
                    //to our posts state variable
                    this.setState({posts : jsonObject.data });
                })
                .catch( (error)=> console.log(error));
            
    }

    //posts comes from this components state
    //category is passed through from props received by tthis component
    render(){
        return(
            <div>
                <br/>
                <h3>Posts with {this.props.category} category</h3>
                    <SearchPostswithCategory myObject={this.state.posts} category={this.props.category} />
            </div>
        );
    }
}