import { useState } from 'react'
//Title
export function SignUpPage() {
    return <h1>Sign Up</h1>
}
//File Input
export function FileInput() {
    const[file, setFile] = useState();
    function HandleChange(event) {
        setFile(event.target.files);
    }
    return (
        <label>Upload your profile picture
        <div className="FileInput">
            <form>
                <input type="file" onChange={HandleChange}/>
                <button type="submit">Upload</button>
            </form>
        </div>
        </label>
    );
}
//Text Input
export function TextInput() {
    return (
        <label>
            Name: <input name="myInput"/>
        </label>
    )
}
//PasswordInput
export function PasswordInput() {
    return (
        <label>
            Password: <input type="number" name="password"/>
        </label>
    )
}
//Checkbox
export function Checkbox() {
    return (
        <label>
            I have filled all the input fields: <input type="checkbox" name="myCheckbox"/>
        </label>
    )
}
//RadioButton
export function RadioButton() {
    return (
        <p>
            Select one of the following:
            <label>
                <input type="radio" name="myRadio" value="Male"/>
                Male
            </label>
            <label>
                <input type="radio" name="myRadio" value="Female"/>
                Female
            </label>
        </p>
    )
}
//Dropdown
export function Dropdown() {
    const [selectAccount, setSelectAccount] = useState('');
    const handleSelectChange = (event) => {
        setSelectAccount(event.target.value);
    };
    return (
        <div className="Dropdown">
            <p>What are you planning to use this for: {selectAccount}
            <select onChange = {handleSelectChange}>
                <option value = "business">Business</option>
                <option value = "personal">Personal</option>
                <option value = "education">Education</option>
                <option value = "other">Other</option>
            </select>
            </p>
        </div>
    )
}
