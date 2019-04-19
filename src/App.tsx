import * as React from 'react';
import './App.css';

import { FCComponents } from './components/FC';
import { List } from './components/LoadMore/list';
import { List2 } from './components/LoadMore/list2';

import { LoadMoreList1Component,LoadMoreList2Component} from './components/LoadMore/demo01-1';

import logo from './logo.svg';



class App extends React.Component<{}, { count: number }> {
    public state = { count: 0 };
    public render ()
    {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={ logo } className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
                <FCComponents
                    label={ `Increment` }
                    count={ this.state.count }
                    onIncrease={ () =>
                    {
                        this.setState( {
                            count: this.state.count + 1
                        } )
                    } }
                />

                {/* <LoadMore 
                    fn={(page)=>{
                        return  Promise.resolve([
                            {text:"1"},
                            {text:"12"},
                            {text:"13"},
                            {text:"14"},
                            {text:"15"},
                        ])
                    }}
                    component
                /> */}
                {/* <List1More
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
                /> */}
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
            </div>
        );
    }
}

export default App;
