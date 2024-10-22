import Headline from "@/components/app/Headline";
import SignInForm from "@/forms/SignInForm";

const SignIn = () => {
  return (
    <div className="w-max relative min-h-screen flex flex-col justify-center overflow">
      <Headline />
      <div className="p-10 rounded-xl border-2 border-background shadow-white">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
