import React, { Component } from 'react';
import axios from 'axios';

export class PostList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            posts: [],
            errorMsg: ""
        };
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                console.log(response);
                this.setState({posts: response.data});
            })
            .catch(error => {
                console.log(error);
                this.setState({errorMsg: "Error Retreiving data"})
            });
    }

    render() {
        const { posts, errorMsg } = this.state;
        return (
            <div>
                List of posts
                {
                    posts.length ?
                    posts.map(post => {
                      return (
                        <div key={post.id}>
                            <h1>{post.title}</h1>
                        </div>
                        );
                    }) :
                    null
                }
                {errorMsg? <div>{errorMsg}</div> : null}
            </div>
        );
    }
}

export default PostList;