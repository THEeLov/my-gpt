import useAuthData from "@/hooks/useAuthData";
import { Navigate, Outlet } from "react-router-dom";

const SigningLayout = () => {
  const { user } = useAuthData();

  if (user) {
    return <Navigate to="/conversations" />;
  }

  return (
    <div className="min-h-screen bg-foreground flex justify-center items-center">
      <Outlet />;
    </div>
  );
};

export default SigningLayout;
