import RowComponent from '../Components/RowComponent.jsx';
import JB_logo from '../assets/JB_logo.png';

function Services() {
    const data = [
        {
            imagePath: JB_logo,
            text: 'This is the first service description.',
        },
        { imagePath: JB_logo, text: 'This is the second service description.' },
        { imagePath: JB_logo, text: 'This is the third service description.' },
    ];
    
    return (
        <>
            <div>
                <h1>Services</h1>
                <p>This is the Services page.</p>
                {data.map((element, i) => (
                    <RowComponent key={i} item={element} />
                ))}
            </div>
        </>
    );
}

export default Services;