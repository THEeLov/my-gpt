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

const SignUpForm = () => {
  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpSchemaType) => {
    console.log(data);
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
              <FormLabel className="text-background">Confirm Password</FormLabel>
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

        <Button className="w-full" variant="secondary">
          Submit
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
