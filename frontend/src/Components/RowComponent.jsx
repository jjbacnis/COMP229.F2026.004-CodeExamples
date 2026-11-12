import React from "react";

function RowComponent({item}){
    return(
        <div className='row'>
            <img src={item.imagePath} alt="image example" />
            <div className='text-content'>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </div>
        </div>
    );
}

export default RowComponent;