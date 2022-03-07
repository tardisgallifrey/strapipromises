//This is it.  The component to find blogs with a specific
//category.  

export function FindPostswithCategory(props){
    var cat_array = [];
    var post_category_array = [];

    props.myObject.forEach( (post) => {
        cat_array = post.attributes.tags.cats.map( item => { return item});
        

        cat_array.forEach( (cat, index)=>{
            // eslint-disable-next-line eqeqeq
            if( cat.toLowerCase() == props.category.toLowerCase()){
                
                post_category_array.push(post);
            
            }
        })
    });

    const output = post_category_array.map( (post, index)=>
    
        <div key={index} className="bg-white
                    shadow-md 
                    border 
                    border-gray-700 
                    rounded-lg 
                    max-w-md my-6 p-6 ">
            <div className="p-5">
                <a href="https://tardisgallifrey.com">
                    <h5 className="text-gray-900 
                                font-bold 
                                text-2xl 
                                tracking-tight 
                                mb-2">{post.attributes.title}</h5></a>
                <span className="text-sm">date published: {post.attributes.publishedAt.split('T', 1)}</span>                
                <span className="font-normal 
                        text-gray-700 
                        mb-3" dangerouslySetInnerHTML={ {__html:post.attributes.content } } />
                <span className="font-style: italic text-sm">{post.attributes.author}<br/></span>        
            </div>
        </div>

    )

    return(
        <div>
            {output.reverse()}
        </div>
    );
}