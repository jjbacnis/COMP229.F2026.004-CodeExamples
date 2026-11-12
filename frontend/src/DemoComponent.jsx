import { useState } from 'react';
import Ingredients from './Components/Ingredients';

function DemoComponent() {

    const data = [
        "1 cup unsalted butter",
        "1 cup crunchy peanut butter",
        "1 cup brown sugar",
        "1 cup white sugar",
        "2 eggs",
        "2.5 cups all purpose flour",
        "1 teaspoon baking powder",
        "0.5 teaspoon salt",
    ];

    return (

        <>
            <p>Hello World!</p>
            <div>
                <p>Description</p>
                <Ingredients items={data} />
            </div>
        </>
    );
}

export default DemoComponent;