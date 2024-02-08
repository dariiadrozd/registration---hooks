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
            if (!inp.password || !inp.email || !inp.confirm)
                throw new Error('есть незаполненные поля')
            if (!/^[\w\d]+@[\w]+\.[\w]{2,4}$/gm.test(inp.email))
                throw new Error('Email введен неверно');
            if (inp.password != inp.confirm)
                throw new Error('Пароли не совпадают')
            console.log(inp);
            setInp({ email: "", password: "", confirm: "" })
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <h1>Login</h1>
            <div>
                <TextField
                    onChange={checkVal}
                    name="email"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value={inp.email}>
                </TextField>
            </div>

            <div>
                <TextField
                    onChange={checkVal}
                    name="password"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    value={inp.password}>

                </TextField>
            </div>

            <div>
                <TextField
                    onChange={checkVal}
                    name="confirm"
                    id="outlined-basic"
                    label="ConfirmPassword"
                    variant="outlined"
                    value={inp.confirm}>
                </TextField>
            </div>

            <Button onClick={saveData} variant="outlined">Login</Button>
        </>
    )
}
export default RegistartionPage