import * as React from 'react';
import { ListComponents } from './interface';


const Item: React.FC<{ text: string }> = ( { text } ) => <p>{ text }</p>;

const List: ListComponents<{ text: string }> = ( { items } ) =>
{
    return (
        <div>
            { items.map( item =>
            {
                return <Item text={ item.text } key={ item.text + Math.random() } />
            } ) }
        </div>
    )
}

const ListGet = (page:number) =>{
     return Promise.resolve([
        { text: "11" },
        { text: "12" },
        { text: "13" },
        { text: "14" },
        { text: "15" },
     ])
}

export
{
    Item,
    List,
    ListGet
}