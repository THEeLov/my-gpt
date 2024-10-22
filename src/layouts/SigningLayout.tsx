import useAuthData from "@/hooks/useAuthData";
import { Navigate, Outlet } from "react-router-dom";
import Light from "../assets/light-lamp-bulb-cartoon-clipart-removebg-preview.png";

const SigningLayout = () => {
  const { user } = useAuthData();

  if (user) {
    return <Navigate to="/conversations" />;
  }

  return (
    <div className="min-h-screen bg-foreground flex justify-center items-center relative truncate">
      <div className="z-20">
        <Outlet />;
      </div>
      <div className="absolute -top-10 w-40 light-image">
        <img src={Light} alt="" />
      </div>
      <div className="absolute bottom-0 w-full h-16 custom-gradient" />
    </div>
  );
};

export default SigningLayout;
