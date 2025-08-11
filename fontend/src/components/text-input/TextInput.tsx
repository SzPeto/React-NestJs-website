import "./TextInput.css";

function TextInput({ value, onChange }: TextInputProps){

    return(
        <input 
            type="text"
            value={ value }
            onChange={ onChange }
        />
    );
}

type TextInputProps = {
    value: string,
    onChange: (...args: any[]) => any
};

export default TextInput;