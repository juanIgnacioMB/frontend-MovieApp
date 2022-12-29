import "./Form.css";
import { useForm } from "react-hook-form";
import firebase from "../firebase/firebase";
import { useNavigate } from "react-router-dom/dist";
import { Login } from "./Login";
import { useSelector, useDispatch } from "react-redux";
import { UserLogin } from "../slices/LoginSlice";
import Swal from "sweetalert2";

export const Register = () => {
  const navigate = useNavigate();
  const loginUser = useSelector((state) => state.isLogin.value);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const login = async (data) => {
    try {
      const create = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      localStorage.setItem("loged", true);
      Swal.fire(
        "Account created",
        "You can start search for movies!",
        "success"
      );
      navigate("/");
    } catch (e) {
      Swal.fire(
        "Error",
        "This email is already connected to an account",
        "error"
      );
      
    }
  };

  const SignIn = () => {
    dispatch(UserLogin());
  };

  return (
    <div className="register-cont">
      {loginUser && <Login />}
      <div className="Login-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit(login)}>
          <div className="input-container">
            <label>User name</label>
            <input type="text" {...register("name",{required:true,minLength:3})} 
            className={errors.name?.type == "required" && "errorInput"}/>
            {errors.name?.type == "required" && <p>Name is required</p>}
            {errors.name?.type == "minLength" && <p>Name need at least 3 characters</p>}
          </div>
          <div className="input-container">
            <label>Phone number</label>
            <input type="number" />
          </div>
          <div className="input-container">
            <label>email</label>
            <input type="email" {...register("email",{required:true})} 
             className={errors.email?.type == "required" && "errorInput"}/>
            {errors.email?.type == "required" && <p>email is required</p>}
          </div>
          <div className="input-container">
            <label>password</label>
            <input type="password" {...register("password",{required:true,minLength:6})} 
            className={errors.password?.type == "required" && "errorInput"}/>
            {errors.password?.type == "required" && <p>password is required</p>}
            {errors.password?.type == "minLength" && <p>password has to at least have 6 characters</p>}
          </div>

          <button>Done!</button>
        </form>
        <p onClick={SignIn}>Already have an account? sign in!</p>
      </div>
    </div>
  );
};
