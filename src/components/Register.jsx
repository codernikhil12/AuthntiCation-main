import React,{useState} from 'react'

const Register = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[mobile,setMobile]=useState("")
    const[password,setPassword]=useState("")
    const[first_school,setFirst_school]=useState("")
    const[image,setImage]=useState("")
    async function register(){
        let item ={name,email,mobile,password,first_school,image}

        let result = await fetch("https://webskitters-student.onrender.com/register",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
       result=await result.json();
       console.warn("result",result);
    }
  return (
    <div className='col-sm-6 offset-sm-3'>

        <h1>Register</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder='Name' />
        <br />
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder='Email' />
        <br />
        <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} className="form-control" placeholder='mobile' />
        <br />
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder='Paswword' />
        <br />
        <input type="text" value={first_school} onChange={(e)=>setFirst_school(e.target.value)} className="form-control" placeholder='FirstName' />
        <br />
        <input type="text" value={image} onChange={(e)=>setImage(e.target.value)} className="form-control" placeholder='image '/>
        <br />
        <button onClick={register} className='btn btn-succes'>Register</button>
    </div>
  )
}

export default Register