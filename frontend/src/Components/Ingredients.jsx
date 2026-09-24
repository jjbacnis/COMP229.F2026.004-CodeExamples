function Ingredients() {

    const items = [
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
        <div>
            <div>
                <h1>Ingredients</h1>
                <p>Ingredients List</p>
                <ul>
                    {items.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Ingredients;