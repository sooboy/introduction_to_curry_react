import * as React from 'react';

const Item: React.FC<{ text: string }> = ( { text } ) => <p>{ text }</p>;

const List: React.FC<{
    items: { text: string }[]
}> = ( { items } ) =>
    {
        return (
            <div>
                { items.map( item =>
                {
                   return  <Item text={ item.text } key={ item.text + Math.random() } />
                } ) }
            </div>
        )
    }

export
{
    Item,
    List
}