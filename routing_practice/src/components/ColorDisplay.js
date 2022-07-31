import { useParams } from "react-router";

const ColorDisplay = () => {
    const {word, fontColor, backgroundColor} = useParams();
    if (isNaN(word)) {
    return (
        <h1 style={{textAlign: "center", color: fontColor, backgroundColor: backgroundColor, word: word}}>The Word is: {word} </h1>
    );
}   else {
    return <h1 style={{textAlign: "center", color: fontColor, backgroundColor: backgroundColor, word: word}}>I'm actually a number: {word} </h1>;
    };
};

export default ColorDisplay;