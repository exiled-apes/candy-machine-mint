import { TextField } from "@material-ui/core";
import { useState } from "react";

export default function InputVars() {
    const initialValues = {
        value1: '',
        value2: ''
    }
    const [values, setValues] = useState(initialValues);

    const handleChange = (e: any) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <>
            <TextField id='value1' name='value1' type="text" value={values.value1} onChange={handleChange} />
            <p>{values.value1}</p>
            <TextField id='value2' name='value2' type="text" value={values.value2} onChange={handleChange} />
            <p>{values.value2}</p>
        </>
    );
}