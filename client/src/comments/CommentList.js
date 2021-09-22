import React from 'react';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ comments }) => {
    const renderComments = Object.values(comments).map(comment => {
        let content;

        if(comment.status === 'approved') {
            content = comment.content;
        } else if(comment.status === 'pending') {
            content = 'This comment is awaiting moderation';
        }  else if(comment.status === 'rejected') {
            content = 'This comment has been rejected';
        }

        return <li key={comment.id}> {content} </li>
    })


    return <ul>{ renderComments }</ul>;
};