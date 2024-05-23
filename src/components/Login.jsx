import {useState,useEffect} from 'react'
import  { useNavigate } from 'react-router-dom'

const Login = ({onLogin}) => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
   const navigate = useNavigate();
    // useEffect(()=>{
    //     if (localStorage.getItem('user-info')){
    //         navigate("/dashboard")
    //     }
    // },[])
    const login = async()=>{
       console.log(email,password);

        let item={email,password};
        

        let result = await fetch("https://webskitters-student.onrender.com/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
       result=await result.json();
       localStorage.setItem("user-info",JSON.stringify(result))
       onLogin(result)
       navigate("/dashboard")
      
    }

  return (
    <div className='col-sm-6 offset-sm-3'>

        <h1>Login</h1>
        
        <input type="text" value={email}  onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder='Email' />
        <br />
        
        <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder='Paswword' />
        <br />
        
        <button onClick={login} className='btn btn-succes'>Login</button>
        
    </div>
  )
}

export default Login