import Headline from "@/components/app/Headline";
import SignInForm from "@/forms/SignInForm";

const SignIn = () => {
  return (
    <div className="w-max relative flex flex-col justify-center">
      <Headline />
      <div className="p-10 rounded-xl border-2 border-background shadow-white">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
