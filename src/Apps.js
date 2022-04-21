import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import "./style/Apps.scss";
import Login from "./components/Login"
import Header from "./components/Header"


 
export default function Apps(){
    return (

        <BrowserRouter>
            <Header/>
                <main>
                <Switch>
                    <Route path='/login'>
                        <>Hi</>
                    </Route>
                    <Route path='/'>
                        <Login/>
                    </Route>
                </Switch>
                </main>
        </BrowserRouter>
    );
}
 