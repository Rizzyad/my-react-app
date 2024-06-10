import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button/Button";
import { useNavigate } from "react-router-dom";


const FormLogin = () => {
    
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const newLogin = {"email": e.target.email.value, "password": e.target.password.value};
        const existingLogins = JSON.parse(localStorage.getItem("login")) || [];
        existingLogins.push(newLogin);
        localStorage.setItem("login", JSON.stringify(existingLogins));
        navigate('/products');
    }
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="example@mail.com"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="*****"
      />
      <Button classname="bg-blue-600 w-full mt-4" type="submit">Login</Button>
    </form>
  );
};

export default FormLogin;
