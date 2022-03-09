import React from 'react';


export default class DisplayPostonCard extends React.Component{
    constructor(props){
            super(props)

            this.state = {
                postindex : props.index,
                postname : props.name,
                posttitle : props.title,
                postauthor : props.author,
                postdate : props.publisheddate.split('T', 1),
                posthtmlcontent : props.content

            }
    }

    render(){

        return(
            <div key={this.state.postindex} className="bg-white 
                    shadow-md 
                    border 
                    border-gray-700 
                    rounded-lg 
                    sm:w-full lg:w-1/2 my-6 p-6 ">
            <div className="p-5">
                <a href="https://tardisgallifrey.com">
                    <h5 className="text-gray-900 
                                font-bold 
                                text-2xl 
                                tracking-tight 
                                mb-2">{this.state.posttitle}</h5></a>
                <span className="text-sm">date published: {this.postdate}</span>                
                <span className="font-normal 
                        text-gray-700 
                        mb-3" dangerouslySetInnerHTML={ {__html:this.state.posthtmlcontent } } />
                <span className="font-style: italic text-sm">{this.state.postauthor}<br/></span>        
            </div>
        </div>
        );
    }
}