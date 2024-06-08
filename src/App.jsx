import React from "react";

const Button = ({ variant = "bg-slate-700", children }) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

const App = () => {
  return (
    <>
      <div className="flex justify-center bg-blue-600 min-h-screen items-center">
        <div className="flex gap-x-3">
          <Button variant="bg-slate-700">Login</Button>
          <Button variant="bg-red-700">Sign Up</Button>
          <Button variant="bg-green-700">Hello World</Button>
        </div>
      </div>
    </>
  );
};

export default App;
