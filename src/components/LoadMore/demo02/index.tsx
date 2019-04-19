import * as React from 'react';
import { ListComponents } from '../interface';

import { List,ListGet} from '../list';
import { List2,List2Get} from '../list2';

const withLoadMore = <T extends any> ( List: ListComponents<T>, fn: ( page: number ) => Promise<T[]> ) =>
{
    interface loadMoreState<T>
    {
        items: T[]
    }
    return class extends React.Component<{}, loadMoreState<T>>{
        private _count = 0;

        constructor ( props: any )
        {
            super( props );
            this.state = {
                items: []
            }
        }
        private async load ()
        {
            ++this._count;
            const rest = await fn( this._count );
            this.setState( {
                items: this.state.items.concat( rest )
            } )
        }
        async componentWillMount ()
        {
            console.log( "will Mount" )
            await this.load()
            console.log( "will Mount over" )

        }
        render ()
        {
            
            return (
                <div>
                    <List
                        items={ this.state.items }
                    />

                    <div onClick={ () => { this.load() } } className="loadMoreBtn">
                        load more
                </div>
                </div>
            )
        }
    }
}

const LoadMore1ComponentsDemo2 = withLoadMore(List,ListGet);
const LoadMore2ComponentsDemo2 = withLoadMore(List2,List2Get);

export {
    LoadMore1ComponentsDemo2,
    LoadMore2ComponentsDemo2
}

