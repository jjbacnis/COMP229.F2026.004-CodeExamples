import RowComponent from "../Components/RowComponent.jsx";
import photo08 from '../assets/photo08.jpg'
import photo09 from '../assets/photo09.jpg'

function Services() {

const data = [
     { imagePath: photo08, text: 'This is the first Service Offered' },
     { imagePath: photo09, text: 'This is the second Service Offered' },
];

    return (
        <div>

            <p>Services</p>
            <div>
                {data.map((item, index) => (
                    <RowComponent key={index} item={item} />
                ))}
            </div>

        </div>
    );
}

export default Services;