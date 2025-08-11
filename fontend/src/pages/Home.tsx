import "./Home.css";
import TextInput from "../components/text-input/TextInput";
import { useState } from "react";

function Home(){

    const [value, setValue] = useState("Hello here!");

    function handleChange(e: any){
        setValue(e.target.value);
        console.log(value);
    }

    return(
        <div>
            <TextInput value={ value } onChange={ (e) => handleChange(e) } />
        </div>
    )
}

export default Home;