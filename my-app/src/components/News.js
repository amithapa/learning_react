import React from "react";
import NewsItem from "./NewsItem";

class News extends React.Component {
    render() {
        const newsData = [
            {
                "id": 1,
                "title": "Adani stocks",
                "body": "Adani stocks are doing very well. Wow, good time to purchase."
            },
            {
                "id": 2,
                "title": "Tata Power stocks",
                "body": "Tata Power stocks are doing very well. Wow, good time to purchase."
            },
            {
                "id": 3,
                "title": "Zomato stocks",
                "body": "Zomato stocks are doing very well. Wow, good time to purchase."
            }
        ];

        const newsItems = newsData.map((newsItem) => <NewsItem key={newsItem.id} newsItem={newsItem} />);
        // const newsItems = newsData.map((newsItem) => {
        //     // const {id, title, body} = newsItem;
        //     return <NewsItem key={newsItem.id} newsItem={newsItem} />;
        //     // return (
        //     //     <div>
        //     //         <h2>{title}</h2>
        //     //         <h2>{body}</h2>
        //     //     </div>
        //     // )
        // });
        return (
            <div>
                <h1>News for today</h1>
                {newsItems}
            </div>
        );
    }
}

export default News;