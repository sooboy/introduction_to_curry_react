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

export
{
    Item2,
    List2
}