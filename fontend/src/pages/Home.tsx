import "./Home.css";
import TextInput from "../components/text-input/TextInput";
import { useState } from "react";

function Home(){

    const [value, setValue] = useState("Hello here!");

    return(
        <div>
            <TextInput value={ value } onChange={ (e) => setValue(e.target.value) } />
        </div>
    );
}

export default Home;