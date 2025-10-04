import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function GuestLayout() {

  const {userToken} = useStateContext();

  if (userToken) {
    return <Navigate to='/'/>
  }

  return (
    <>
      <div className="flex mt-28 min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-16 w-auto"
            src="/logoutama.png"
            alt="RSU Bunda Thamrin"
          />
          <Outlet/>
        </div>
      </div>
    </>
  );
}
