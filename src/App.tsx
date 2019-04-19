import * as React from 'react';
import './App.css';

// import { FCComponents } from './components/FC';
import { List,ListGet } from './components/LoadMore/list';
import { List2 } from './components/LoadMore/list2';

import { LoadMoreList1Component,LoadMoreList2Component} from './components/LoadMore/demo01-1';

import { LoadMore1ComponentsDemo2,LoadMore2ComponentsDemo2,withLoadMore} from './components/LoadMore/demo02'


// with curry

import {_curry} from './utils/curry';

const CurryLoadMore1 = _curry(withLoadMore,List)

const CurryLoadMore1Components = CurryLoadMore1(ListGet)


class App extends React.Component<{}, { count: number }> {
    public state = { count: 0 };
    public render ()
    {
        return (
            <div className="App">
                <LoadMoreList1Component 
                    component={List}
                    fn={ ( page ) =>
                        {
                            return Promise.resolve( [
                                { text: "11" },
                                { text: "12" },
                                { text: "13" },
                                { text: "14" },
                                { text: "15" },
                            ] )
                        } }
                />
                 <LoadMoreList2Component 
                    component={List2}
                    fn={ ( page ) =>
                        {
                            return Promise.resolve( [
                                { value: "11" },
                                { value: "12" },
                                { value: "13" },
                                { value: "14" },
                                { value: "15" },
                            ] )
                        } }
                />
                <LoadMore1ComponentsDemo2 />
                <LoadMore2ComponentsDemo2 />
                <div> load Curry Componnets</div>
                <CurryLoadMore1Components />
            </div>
        );
    }
}

export default App;
