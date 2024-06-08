import Input from "./Input";
import Label from "./Label";

const InputForm = ({ label, type, name, placeholder }) => {
  return (
    <>
      <div className="mb-2">
        <Label htmlFor={name}>{label}</Label>
        <Input name={name} type={type} placeholder={placeholder} />
      </div>
    </>
  );
};

export default InputForm;
