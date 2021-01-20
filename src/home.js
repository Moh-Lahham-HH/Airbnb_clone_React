import React, { Component } from 'react';
import "./home.css"
import Banner from "./banner"
import { Facebook } from '@material-ui/icons';

class Home extends Component {
    render() {
   
           return (
            <div  className="home" > 
                <h1>Home Component</h1>
                <Banner/>
            </div>
        );
    }
}

export default Home;



