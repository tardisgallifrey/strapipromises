import React from 'react';
import { Component } from 'react/cjs/react.production.min';

//This is the same as ReadOne component, but in class component form
export default class ReadOne extends Component{
    //We set up a React class constructor,
    //much different than a regular C++/Java constructor.
    //It is a JavaScript ES6 constructor

    //JavaScript functions receive props in a param,
    //the same happens here in the class version,
    //because calling the class component instantiates
    //it the same as using a new GetOne(props)
    constructor(props) {
        //super allows us to use 'this.props' and to modify props
        super(props);

        //this establishes that are state has a new item, an array
        //that we call categories
        this.state= {
            categories: []
        }
      }

      //Once the component mounts, fetch is called
    componentDidMount(){
        //this.props.url is the same as ReadOne's props.url
        fetch(this.props.url)
                .then((result) => result.json())
                .then((jsonObject) => {
                    //we set the categories item to our categories array
                    this.setState({categories : jsonObject.data.attributes.tags.cats });
                })
                .catch( (error)=> console.log(error));
            
    }

    //This is the first time I've been able to write a map function in a Render and 
    //have it actually work
    render(){
        return(
            <div>
                <hr/>
                <h3>Same component, but in a class</h3>
                <ul>
                    {this.state.categories.map((item)=><li key={item}>{item}</li>)}
                </ul>
            </div>
        );
    }
}