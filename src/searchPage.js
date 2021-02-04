import React from "react";
import "./searchPage.css";
import {Button} from "@material-ui/core"


function SearchPage() {


    return(

        <>
        <div className="searchPage">
        <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
    
        </div>
    
       
        </div>
    

        </>
    )

}

export default SearchPage;