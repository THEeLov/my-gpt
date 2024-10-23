import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, SignInSchemaType } from "@/validation/zodSchemas";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useSignIn } from "@/hooks/useAuth";
import useAuthData from "@/hooks/useAuthData";
import { isAxiosError } from "axios";
import { useToast } from "@/hooks/use-toast";

const SignInForm = () => {
  const { mutateAsync: signInUser } = useSignIn();
  const { signIn } = useAuthData();
  const { toast } = useToast();

  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInSchemaType) => {
    try {
      const response = await signInUser(data);
      signIn(response);
      toast({
        title: "Sign in successfull",
      });
      console.log("Helo");
      // navigate("/chats");
    } catch (error) {
      if (isAxiosError(error)) {
        const statusCode = error.response?.status;
        console.log();
        form.setError("root", {
          message:
            statusCode === 401
              ? "Invalid email or password"
              : "Server is probably down try again later",
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-background">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  {...field}
                  className="text-background"
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-background">Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Password"
                  {...field}
                  type="password"
                  className="text-background"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.formState.errors.root && (
          <p className="text-yellow-400 text-center">
            {form.formState.errors.root.message}
          </p>
        )}

        <Button
          type="submit"
          className="w-full"
          variant="secondary"
          onClick={() => form.handleSubmit(onSubmit)}
          disabled={form.formState.isSubmitting}
        >
          SIGN IN
        </Button>

        <p className="text-white">
          Don't have an accout ?{" "}
          <Link to="/signup" className="underline">
            Sign up
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default SignInForm;
