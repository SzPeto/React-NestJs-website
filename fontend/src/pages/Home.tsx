import "./Home.css";
import TextInput from "../components/text-input/TextInput";
import { useState } from "react";

function Home(){

    const [value, setValue] = useState("Hello here!");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setValue(e.target.value);
        console.log(value);
    }

    return(
        <div>
            <TextInput value={ value } onChange={ handleChange } />
        </div>
    );
}

export default Home;