import Headline from "@/components/app/Headline"
import SignUpForm from "@/forms/SignUpForm"

const SignUp = () => {
  return (
    <div className="w-max relative flex flex-col justify-center">
      {/* <Headline /> */}
      <div className="p-10 rounded-xl border-2 border-background shadow-white">
        <SignUpForm />
      </div>
    </div>
  )
}

export default SignUp