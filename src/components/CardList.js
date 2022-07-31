
import React from "react";
import Card from "./Card";

const CardList = ({ medabots }) => {
    /*if (true) {
        throw new Error('NOOOOO!')
    }*/
    return (
        <div>
            {
                medabots.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={medabots[i].id} 
                            name={medabots[i].name} 
                            /*type={medabots[i].type} 
                            specially={medabots[i].specially} */
                            email = {medabots[i].email}
                        />
                    )   
                })
            }
        </div>
    )
}

export default CardList;
