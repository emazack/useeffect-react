import React from 'react';
import { ListProps } from '../modules/Modules';
import { ListItem } from './ListItem';

export const List: React.FC<ListProps> = (props) => {
    return (<div>
        {
            props.users?.map((user) => {
                return <ListItem user={user} key={user.id} />
            })
        }
    </div>)
}