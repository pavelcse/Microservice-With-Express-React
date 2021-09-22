import React, {useState} from 'react';
import axios from 'axios';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
    const [title, setTitle] = useState('');

    const onSubmit = async event => {
        event.preventDefault();

        await axios.post('http://localhost:4000/posts', {
            title
        });

        setTitle('');
    }

    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Title</label>
                <input 
                onChange={e => setTitle(e.target.value)}
                value={title}
                className="form-control form-control-sm" 
                />
            </div>
            <button className="btn btn-primary mt-2">Submit</button>
        </form>
    </div>;
};