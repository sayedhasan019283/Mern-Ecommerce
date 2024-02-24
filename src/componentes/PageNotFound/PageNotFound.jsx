import {  NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-red-500">404</h1>
          <h2 className="text-2xl mt-4 mb-8">Oops! Page Not Found</h2>
          <NavLink
            to="/"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Go Back
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
