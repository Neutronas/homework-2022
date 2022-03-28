import { ChangeEvent, useRef, useState } from "react";
import debounce from "lodash.debounce";
import "./styles/InputField.scss";

interface inputProps {
    name: string;
    onChange(text: string): void;
    placeholder?: string;
}

const InputField = (props: inputProps) => {
    const [value, setValue] = useState("");
    const setValueDebounced = useRef(debounce(props.onChange, 1000));

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setValueDebounced.current(e.target.value);
    };

    return (
        <input
            name={props.name}
            onChange={(_event: ChangeEvent<HTMLInputElement>) =>
                handleChange(_event)
            }
            value={value}
            placeholder={props.placeholder || ""}
        ></input>
    );
};

export default InputField;
