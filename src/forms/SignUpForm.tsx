import { signUpSchema, SignUpSchemaType } from "@/validation/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useAuthData from "@/hooks/useAuthData";
import { signUpUser } from "@/api/authApi";
import { useToast } from "@/hooks/use-toast";
import { isAxiosError } from "axios";

const SignUpForm = () => {
  const { signUp } = useAuthData();
  const { toast } = useToast();

  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpSchemaType) => {
    try {
      const result = await signUpUser(data);
      signUp(result);
      toast({
        title: "Hello user",
      });
    } catch (error) {
      if (isAxiosError(error)) {
        const statusCode = error.response?.status;
        console.log();
        form.setError("root", {
          message:
            statusCode === 409
              ? "Email is already taken"
              : "Internal server error",
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-background">Username</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Username"
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-background">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  type="email"
                  className="text-background"
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

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-background">
                Confirm Password
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Confirm Password"
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
          className="w-full"
          variant="secondary"
          disabled={form.formState.isSubmitting}
          onClick={() => form.handleSubmit(onSubmit)}
        >
          SIGN UP
        </Button>

        <p className="text-white">
          Already have an accout ?{" "}
          <Link to="/signin" className="underline">
            Sign in
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default SignUpForm;
