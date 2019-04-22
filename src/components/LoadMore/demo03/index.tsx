import * as React from 'react';
import { ListComponents } from '../interface';

import { List,ListGet} from '../list';
import { List2,List2Get} from '../list2';


type loadMoreFn<T> = (page:number)=> Promise<T[]>;
interface LoadMoreProps<T> {
    fn?:loadMoreFn<T>
}

const withLoadMore = <T extends any> ( List: ListComponents<T>, fn?: loadMoreFn<T> ) =>
{
    interface loadMoreState<T>
    {
        items: T[]
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
            if(!fns) return ;
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
    LoadMore2ComponentsDemo2,
    withLoadMore
}

