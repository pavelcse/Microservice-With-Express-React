import React from 'react';
import PostCreate from './posts/PostCreate';
import PostList from './posts/PostList';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
    return <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h1>Create a Post</h1>
                <PostCreate />
            </div>
            <div className="col-md-6">
                <h1>Post List</h1>
                <PostList />
            </div>

        </div>
    </div>;
};