import * as React from 'react';
import './App.css';

import {FCComponents} from './components/FC';
import { LoadMore } from './components/LoadMore/demo01';

import logo from './logo.svg';

class App extends React.Component<{},{count:number}> {
    public state ={count:0};
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
                <FCComponents
                    label={`Increment`}
                    count={this.state.count}
                    onIncrease={()=>{
                         this.setState({
                             count:this.state.count + 1
                         })
                    }}
                />

                <LoadMore 
                    fn={(page)=>{
                        return  Promise.resolve([
                            {text:"1"},
                            {text:"12"},
                            {text:"13"},
                            {text:"14"},
                            {text:"15"},
                        ])
                    }}
                />
            </div>
        );
    }
}

export default App;
