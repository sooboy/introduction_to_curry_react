import * as React from 'react';

// import { Item, List } from './list';
// import { Item2 } from './list2';
import { ListComponents } from './interface';

// const LoadMore =()

interface loadMoreProps<T>
{
    fn: ( page: number ) => Promise<T[]>
    component: ListComponents<T>
}

interface loadMoreState<T>
{
    items: T[]
}

class LoadMore<T> extends React.Component<loadMoreProps<T>, loadMoreState<T>>
{
    private _count = 0;

    constructor ( props: loadMoreProps<T> )
    {
        super( props );
        this.state = {
            items: []
        }
    }
    async componentWillMount ()
    {
        console.log( "will Mount" )
        await this.load()
        console.log( "will Mount over" )

    }
    private async load ()
    {
        ++this._count;
        const rest = await this.props.fn( this._count );
        this.setState( {
            items: this.state.items.concat( rest )
        } )
    }
    render ()
    {
        const List = this.props.component
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


// const OneList: React.FC = () =>
// {
//     return (
//         <div>
//             <List1More 
//                 component={List}

//                 fn={}
//             />
//         </div>
//     )
// }

type LoadMoreType<T> = new() => LoadMore<T>


export
{
    LoadMore,
    // List1More
    LoadMoreType
}