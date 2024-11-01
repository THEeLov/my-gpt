import useAuthData from "@/hooks/useAuthData";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { signOut } = useAuthData();
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col text-center font-size text-5xl select-none flex-grow justify-center items-center">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <p className="text-background font-black m-0 text-xl">MY</p>
          <p className="text-background font-black m-0 -mt-3">GPT</p>
        </div>
      </div>
      <div className="absolute right-4">
        <Button type="button" onClick={signOut} variant="secondary">
          SIGN OUT
        </Button>
      </div>
    </>
  );
};

export default Navbar;
