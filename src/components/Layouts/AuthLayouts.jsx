import { Link } from "react-router-dom";

const AuthLayouts = ({ children, title, type }) => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        {type === "login" ? (
          <p className="text-center text-sm mt-2">
            Don't have an account?{" "}
            <Link to="/register" className=" font-bold text-blue-600">
              register here
            </Link>
          </p>
        ) : (
          <p className="text-center mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              login here
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthLayouts;
