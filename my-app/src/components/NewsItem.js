import React from "react";


function NewsItem(props) {
    console.log(props);
    const {id, title, body} = props.newsItem;
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <hr/>
        </div>
    )
}


export default NewsItem;