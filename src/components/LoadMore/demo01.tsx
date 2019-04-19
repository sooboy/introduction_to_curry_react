import * as React from 'react';

import { List } from './list';

// const LoadMore =()

interface loadMoreProps
{
    fn: ( page: number ) => Promise<{ text: string }[]>
}

interface loadMoreState
{
    items: { text: string }[]
}

class LoadMore extends React.Component<loadMoreProps, loadMoreState>
{
    private _count = 0;

    constructor ( props: loadMoreProps )
    {
        super( props );
        this.state={
            items:[]
        }
    }
    async componentWillMount(){
        console.log("will Mount")
        await this.load()
        console.log("will Mount over")

    }
    private async load ()
    {
        ++this._count;
        const rest = await this.props.fn(this._count);
        this.setState({
            items: this.state.items.concat(rest)
        })
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

export
{
    LoadMore
}