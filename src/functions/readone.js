import React, { useState, useEffect } from "react";

export function ReadOne(props) {
    const [myBlog, setData] = useState([]);

    useEffect( ()=>{
            fetch(props.url)
                .then((result) => result.json())
                .then((jsonObject) => {
                    //console.log(json);
                    setData(jsonObject.data.attributes.tags.cats);
                })
                .catch( (error)=> console.log(error));
            },[props.url]
    );


    const categories = myBlog.map( (item) => <li key={item}>{item}</li> );

    return (
        <div>
        My Categories<br />
        <ul>
        {categories}
        </ul>
        </div>
    );
  }