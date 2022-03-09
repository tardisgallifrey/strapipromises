//This is it.  The component to find blogs with a specific
//category.  
import DisplayPostonCard from "../classes/displaypostoncard";

export function SearchPostswithCategory(props){
    //I chose function here because I just write them easier.

    //We need a category array to hold a list of extracted categories
    //and a post array that matches our categories
    var cat_array = [];
    var post_category_array = [];

    //myObject is passed in with props from parent component
    //Search through each post and do what is in the callback function
    props.myObject.forEach( (post) => {
        //Take the category object array and make a text array of categories
        //in THIS post
        cat_array = post.attributes.tags.cats.map( item => { return item});
        
        //Now, search through each to see if that matches 
        //the one in props.category
        //If it has a matching category, push the whole post into
        //a post array that matches the categories
        //Otherwise, do nothing, go to next post
        cat_array.forEach( (cat, index)=>{
            // eslint-disable-next-line eqeqeq
            if( cat.toLowerCase() == props.category.toLowerCase()){
                
                post_category_array.push(post);
            
            }
        })
    });

    //Now, take the post array and map it into an output
    //array formatted for display
    const output = post_category_array.map( (post, index)=>
    
        <DisplayPostonCard   index={index} 
                                name={post.attributes.name} 
                                title={post.attributes.title} 
                                publisheddate={post.attributes.publishedAt} 
                                author={post.attributes.author} 
                                content={post.attributes.content}
                                />
    )

    return(
        <div>
            {output.reverse()}
        </div>
    );
}