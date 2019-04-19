import * as React from 'react';
import { ListComponents } from './interface';

const Item2: React.FC<{ value: string }> = ( { value } ) => <p> Special Item { value }</p>;

const List2: ListComponents<{ value: string }> = ( { items } ) =>
{
    return (
        <div>
            <p> Special List </p>
            { items.map( item =>
            {
                return <Item2 value={ item.value } key={ item.value + Math.random() } />
            } ) }
        </div>
    )
}

const List2Get = (page:number) =>{
    return Promise.resolve([
       { value: "11" },
       { value: "12" },
       { value: "13" },
       { value: "14" },
       { value: "15" },
    ])
}

export
{
    Item2,
    List2,
    List2Get
}