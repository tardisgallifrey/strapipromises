import React, { useState, useEffect } from "react";


export function GetIds(props) {
    const [myBlog, setData] = useState({});
    let blogids = [];

    useEffect( ()=>{

                fetch(props.url)
                .then((result) => result.json())
                .then((jsonObject) => {
                    //console.log(jsonObject);
                    setData(jsonObject);
                })
                .catch( (error)=> console.log(error));
            },[])

    if(myBlog.data !== undefined){
        console.log(myBlog.data);
        blogids = myBlog.data.map((item)=><li key={item.id}>{item.id}</li>)
    }

    return (
        <div>
        Blog Ids in functional component<br />
        <ul>
        {blogids}
        </ul>
        </div>
    );
  }