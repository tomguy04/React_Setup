import React from 'react';
import { render } from 'react-dom';

import {Main} from './components/Main';
import {User} from './components/User';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            userName:'Glen'
        };
    }

    changeUserName(newName){
        this.setState({
            userName:newName
        });
    }

    render(){
        return(
            <div className='container'>
            {/* pass a reference to the changeUserName method so we can use it in Main in its button*/}
                <Main changeUserName={this.changeUserName.bind(this)}/>
                <User 
                    initialUserName={this.state.userName}
                />
            </div>
        );
    }
}
render(<App/>, window.document.getElementById('app'));