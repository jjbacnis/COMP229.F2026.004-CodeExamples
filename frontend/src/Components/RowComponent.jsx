import hero from '../assets/hero.png';

function RowComponent({item}) {
    return (
        <div className='row'>
            <img src={item.imagePath} alt="Img Example"></img>
            <div className='text-content'>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </div>
        </div>
    );
}

export default RowComponent;