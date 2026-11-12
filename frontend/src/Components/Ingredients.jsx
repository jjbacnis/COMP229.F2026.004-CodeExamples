function Ingredients({items}) {

    return (
        <div>
            <div>
                <h1>Ingredients</h1>
                <p>Ingredients list</p>
                <ul>
                    {items.map((ingredient, i) => (
                        <li key={i}>{ingredient}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Ingredients;