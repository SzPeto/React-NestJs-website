import "./TextInput.css";

function TextInput({ value, onChange }: TextInputProps){

    return(
        <input 
            value={ value }
            onChange={ (e) => onChange(e) }
        />
    );
}

type TextInputProps = {
    value: string,
    onChange: (...args: any[]) => any
};

export default TextInput;