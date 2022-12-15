import "./Form.css"
import {useForm} from "react-hook-form"
import firebase from "../firebase/firebase"
import { useNavigate } from "react-router-dom/dist";
import { useDispatch } from "react-redux";
import { LogOut } from "../slices/LoginSlice";
import Swal from 'sweetalert2'

export const Login = () => {


const {register,handleSubmit} = useForm()
const navigate = useNavigate()
const dispatch = useDispatch()

  const login =async (data)=>{
   try{
    const signIn = await firebase.auth().signInWithEmailAndPassword(data.email,data.password)
    Swal.fire(
      'Login correctly',
      '',
      'success'
    )
   localStorage.setItem("loged", true)
    navigate("/")

   }catch(e){
    Swal.fire(
      'Error',
      'incorrect email or password',
      'error'
    )
   }

  }

  const close =()=>{
    dispatch(LogOut())
  }
  
  return (
    <div className="modal-cont">
    <div className="Login-container">
      <div className="close-container">
        <div></div>
      <h1>Login</h1>
      <p onClick={close}>X</p>
      </div>
      <form onSubmit={handleSubmit(login)}>
      <div className="input-container">
        <label>email</label>
        <input type="text" {...register("email")}/>
      </div>
      <div className="input-container">
        <label>password</label>
        <input type="password" {...register("password")}  />
      </div>
      <button>Done!</button>
      </form>
      
    </div>
   
    </div>
  );
};
