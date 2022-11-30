import React from 'react'
// import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Component/Registration.css'
import { useState } from 'react';
const Registration = () => {
    const [user,setUser]=useState([])
    const [values, setValue] = useState({
        fullName:"",
        pasNum:"",
        age:"",
        phoneNumber:"",
        email:"",
        simpton:"",
    })
    const handleInput = (e) =>{
        setValue({...values, [e.target.name] : e.target.value});
        // console.log(values);
      }
      const saveData = (e) =>{
        e.preventDefault();
        setUser([...user, values]);
        alert("Kart qeydiyyatdan keçdi")
        alert("Full name : "+user[(user.length)-1].fullName+"\n"+
        "Seria No : "+user[(user.length)-1].pasNum+"\n"+
        "Age : "+user[(user.length)-1].age+"\n"+
        "Phone number : "+user[(user.length)-1].phoneNumber+"\n"+
        "Simptones : "+user[(user.length)-1].simpton
        )
        setValue({
            fullName:"",
            pasNum:"",
            age:"",
            phoneNumber:"",
            email:"",
            simpton:"",
        });
      }
    return (
        <div className='registrationForm'>
            <form autoComplete='on' id='registration'>
                <label htmlFor="fullName">Xəstənin tam adı:  </label><br />
                <input  value={values.fullName} onChange={handleInput} type="text" name='fullName' id='fullName' /><br />
                <label htmlFor="pasNum">Seriya və pasport nömrəsi:</label><br />
                <input value={values.pasNum} onChange={handleInput} type="pasNum" name='pasNum' id='pasNum' /><br />
                <label htmlFor="cins">Cinsiyyət: </label><br />
                <select name="cins" id="cins">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select><br />
                <label htmlFor="age">Age: </label><br />
                <input value={values.age} onChange={handleInput} type="number" name='age' id='age' pattern='[0-9]' /><br />
                <label htmlFor="email">Email: </label><br />
                <input value={values.email} onChange={handleInput} type="email" name='email' id='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"></input><br />
                <label htmlFor="phoneNumber">Telefon nömrəsi: </label><br />
                <input value={values.phoneNumber} onChange={handleInput} type="number" name='phoneNumber' id='phoneNumber' /><br />
                <textarea value={values.simpton} onChange={handleInput} name="simpton" id="simpton" cols="30" rows="3">Simptomların təsviri</textarea><br />
                <label htmlFor="check">Təkrar qəbul</label>
                <input onChange={handleInput} type="checkbox" name='check' id='check' /><br />
                <button onClick={saveData} className='btn btn-primary registered_btn'>Göndər</button>
             </form>
             
        </div>
    )
}

export default Registration
