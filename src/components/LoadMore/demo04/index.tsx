import * as React from 'react';
import { ListComponents } from '../interface';

import { List } from '../list';
import { List2 } from '../list2';
import Btn from '../Btn';
import Btn2 from '../Btn2';


type loadMoreFn<T> = ( page: number ) => Promise<T[]>;

const withLoadMore = <T extends any> ( List: ListComponents<T>, Btn: React.ComponentType, fn?: loadMoreFn<T> ) =>
{
    interface loadMoreState<T>
    {
        items: T[]
    }
    interface LoadMoreProps<T>
    {
        fn?: loadMoreFn<T>
    }

    return class extends React.Component<LoadMoreProps<T>, loadMoreState<T>>{
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
            const fns = this.props.fn || fn
            if ( !fns ) return;
            const rest = await fns( this._count );
            this.setState( {
                items: this.state.items.concat( rest )
            } )
        }
        async componentWillMount ()
        {
            await this.load()
        }
        render ()
        {

            return (
                <div>
                    <List
                        items={ this.state.items }
                    />

                    <div onClick={ () => { this.load() } } className="loadMoreBtn">
                        <Btn />
                    </div>
                </div>
            )
        }
    }
}

const LoadMore1ComponentsDemo4 = withLoadMore( List, Btn );
const LoadMore2ComponentsDemo4 = withLoadMore( List2, Btn2 );

export
{
    LoadMore1ComponentsDemo4,
    LoadMore2ComponentsDemo4,
    withLoadMore
}

