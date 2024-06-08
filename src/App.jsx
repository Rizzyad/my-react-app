import React from "react";
import Button from "./components/Elements/Button/Button";
import Input from "./components/Elements/Input";

const App = () => {
  return (
    <>
      <div className="flex justify-center bg-blue-600 min-h-screen items-center">
        <div className="flex gap-x-3">
          <Button variant="bg-red-700">Login</Button>
          <Button variant="bg-slate-700">Logout</Button>
        </div>
      </div>
    </>
  );
};

export default App;
