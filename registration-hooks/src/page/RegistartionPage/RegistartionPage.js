import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function RegistartionPage() {
    // const [inp1, setInp1] = useState('')
    // const [inp2, setInp2] = useState('')
    // const [inp3, setInp3] = useState('')
    const [inp, setInp] = useState({ email: "", password: "", confirm: "" })

    function checkVal(e) {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }

    function saveData() {
        try {
            if (!/^[\w\d]+@[\w]+\.[\w]{2,4}$/gm.test(inp.email)) 
            throw new Error('Email введен неверно');
            if (inp.password != inp.confirm) throw new Error('Пароли не совпадают')
            console.log(inp);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <h1>Registration</h1>
            <div>
                <TextField
                    onChange={collectionInfo1}
                    name="email"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined">
                </TextField>
            </div>

            {/* <div>
                <TextField
                    onChange={collectionInfo2}
                    name="password"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined">
                </TextField>
            </div>

            <div>
                <TextField
                    onChange={collectionInfo3}
                    namr=""
                    id="outlined-basic" label="ConfirmPassword" variant="outlined"></TextField>
            </div> */}

            <Button onClick={doClick} variant="outlined">Login</Button>
        </>
    )
}
export default RegistartionPage