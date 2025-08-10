import "./TextArea.css";

function TextArea({ value, onChange }: TextAreaProps){

    return(
        <textarea 
            value={ value }
            onChange={ (e) => onChange(e) }
            rows={ 7 }
        />
    );
}

type TextAreaProps = {
    value: string,
    onChange: (...args: any[]) => any
};

export default TextArea;