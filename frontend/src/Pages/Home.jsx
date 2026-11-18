import Counter from "../Counter";
import ControlledComponent from "../ControlledComponent";

function Home(){
    return(
        <div>
            <p>Welcome to my portfolio!</p>
            <Counter />
            <ControlledComponent />
        </div>
    );
}

export default Home;