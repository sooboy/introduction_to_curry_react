import * as React from 'react';
import './App.css';

// import { FCComponents } from './components/FC';
import { List, ListGet } from './components/LoadMore/list';
import { List2, List2Get } from './components/LoadMore/list2';

import { LoadMoreList1Component, LoadMoreList2Component } from './components/LoadMore/demo01-1';

import { LoadMore1ComponentsDemo2, LoadMore2ComponentsDemo2, withLoadMore } from './components/LoadMore/demo02';

import { LoadMore1ComponentsDemo3, LoadMore2ComponentsDemo3 } from './components/LoadMore/demo03';
import { LoadMore1ComponentsDemo4, LoadMore2ComponentsDemo4 } from './components/LoadMore/demo04';


// with curry

import { _curry } from './utils/curry';

const CurryLoadMore1 = _curry( withLoadMore, List )

const CurryLoadMore1Components = CurryLoadMore1( ListGet )


class App extends React.Component<{}, { count: number }> {
    public state = { count: 0 };
    public render ()
    {
        return (
            <div className="App">
                <LoadMoreList1Component
                    component={ List }
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
                    component={ List2 }
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

                <br />
                <h1> demo 03 </h1>

                <LoadMore1ComponentsDemo3
                    fn={ ( page: number ) =>
                    {
                        return Promise.resolve( [
                            { text: "Demo3 11" },
                            { text: "Demo3 12" },
                            { text: "Demo3 13" },
                            { text: "Demo3 14" },
                            { text: "Demo3 15" },
                        ] )
                    } }
                />

                <LoadMore2ComponentsDemo3
                    fn={ List2Get }
                />

                <br />

                <h1>  Demo 04</h1>
                <LoadMore1ComponentsDemo4
                    fn={ ListGet }
                />
                <LoadMore2ComponentsDemo4
                    fn={ List2Get }
                />
            </div>
        );
    }
}

export default App;
