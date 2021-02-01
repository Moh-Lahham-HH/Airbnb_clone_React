import React, { useState } from 'react';
import "./banner.css";
import {Button} from "@material-ui/core";
import Search from "./search";

function Banner() {

    const [showSearch,setShowsearch] = useState (false);
            
    
        return (
            <div className="banner"> 
            <div className="banner_search">
                {showSearch && <Search /> }
                <Button  onClick={() =>
                  setShowsearch(!showSearch) }
                 className="banner_searchButton" variant="outlined">search Date</Button>
            </div>

             
                <div className="banner_info">
                    <h1>get out and stretch your imagiation</h1>
                    <h5>Plan different  kind of  getway  to uncover  the hidden  gems near you</h5>
                    <Button variant="outlined" >Explore  Nearby</Button>    
                </div>
                
            </div>
        );
    

}
    


   

   


export default Banner;