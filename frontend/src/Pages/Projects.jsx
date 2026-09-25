import RowComponent from '../Components/RowComponent.jsx';
import hero from '../assets/hero.png';

function Projects() {
    const data = [
        {
            imagePath: hero,
            title: 'Item 1',
            text: 'Description of Item 1',
        },
        { imagePath: hero, title: 'Item 2', text: 'Description of Item 2' },
        { imagePath: hero, title: 'Item 3', text: 'Description of Item 3' },
    ];
    
    return (
        <>
            <div>
                <h1>Projects</h1>
                <p>This is the Projects page.</p>
                {data.map((element, i) => (
                    <RowComponent key={i} item={element} />
                ))}
            </div>
        </>
    );
}

export default Projects;