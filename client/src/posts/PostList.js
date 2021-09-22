import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CommentCreate from '../comments/CommentCreate';
import CommentList from '../comments/CommentList';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        await axios.get('http://localhost:4002/posts')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderPosts = Object.values(posts).map(post => {
        return (
            <div
            className="card"
            style={{marginBottom: '20px'}}
            key={post.id}
            >
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentList comments={post.comments} />
                    <CommentCreate postId={post.id} />
                </div>
            </div>
        )
    })


    return renderPosts;
};