import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button/Button";

const FormLogin = () => {
  return (
    <form action="">
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
      <Button classname="bg-blue-600 w-full mt-4">Login</Button>
    </form>
  );
};

export default FormLogin;
