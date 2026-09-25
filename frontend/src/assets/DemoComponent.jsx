import React from 'react';
import Ingredients from '../Components/Ingredients.jsx';

function DemoComponent() {

    const data = [
        "1 cup unsalted butter",
        "1 cup crunchy peanut butter",
        "1 cup granulated sugar",
        "1 cup packed brown sugar",
        "2 large eggs",
        "1 teaspoon vanilla extract",
        "2.5 cups all-purpose flour",
        "1 teaspoon baking soda",
        "0.5 teaspoon salt",
    ];
    
    return (
        <>
        <div>
            <p>Hello, world!</p>
        </div>
        <div>
            <p>Description</p>
            <Ingredients items={data} />
        </div>
        </>
    );
}

export default DemoComponent;