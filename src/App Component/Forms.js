import React, { useState } from 'react'

export default function Forms() {
    const [input, setInput] = useState({
        fName:'',
        lName:'',
        email:'',
        password:'',
        retypePassword:'',
    });
    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value});
        console.log(input);
    };

    const handleSubmit=(e)=>{
        e.preventDefault(e);
        if(input.fName === input.lName === input.email === input.password === input.retypePassword){
            alert('Please fill in the appropriate field'); 
        }
        else{
           alert(`Thank you  ${input.fName}`);
        }
    };



    return (
        <div>
            <form>
            <input type="text" style={{border: '2px solid green'}}
            onChange= {(e) => handleChange(e)}
            placeholder="firstname"
            name="fName"
            /><br />
            <input type="text" style={{border: '2px solid green'}}
            onChange= {(e) => handleChange(e)}
            placeholder="lastname"
            name="lName"
            /><br />
            <input type="email" style={{border: '2px solid green'}}
            onChange= {(e) => handleChange(e)}
            placeholder="email"
            name="email"
            /><br />
            <input type="password" style={{border: '2px solid green'}}
            onChange= {(e) => handleChange(e)}
            placeholder="password"
            name="password"
            /><br />
            <input type="password" style={{border: '2px solid green'}}
            onChange= {(e) => handleChange(e)}
            placeholder="retype password"
            name="retypePaswword"
            /><br />

        <button onClick={handleSubmit}>Submit</button>

        <br />
        <br />
            </form>
            

        </div>
    )
}
