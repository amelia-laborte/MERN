import { useParams } from "react-router";

const DisplayIntOrStr = () => {
    const {int} = useParams();
    return(
        <h1 style ={{textAlign: "center"}}>The number is :{int} </h1>
    );
};

export default DisplayIntOrStr;