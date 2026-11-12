import Counter from "../counter.jsx";
import IncrementDecrement from "../IncrementDecrement.jsx";
import ControlledComponent from "../ControlledComponent.jsx";

function Home(){
    return(
        <div>
            <p>Welcome to my portfolio example!</p>
            <Counter />
            <IncrementDecrement />
            <ControlledComponent />
        </div>
    );
}


export default Home;