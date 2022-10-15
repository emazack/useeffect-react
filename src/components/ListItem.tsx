import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ListItemProps, Post } from '../modules/Modules';


export const ListItem: React.FC<ListItemProps> = (props) => {

    const [posts, setPosts] = useState<Post[]>([])


    useEffect(() => {
        axios.get<Post[]>(`https://jsonplaceholder.typicode.com/users/${props.user.id}/posts`)
            .then(res => setPosts(res.data));
    }, [props.user.id]);


    return (
        <li className="list-group-item" key={props.user.id}>
            {props.user.name}
            <ul className="container mt-2">
                {posts.map(post => {
                    return <li key={post.id}> {post.title} </li>
                })}
            </ul>
        </li>
    )
}