import { Button } from "@/components/ui/button";
import {
  FormField,
  Form,
  FormItem,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { messageSchema, MessageSchemaType } from "@/validation/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const MessageForm = () => {
  const form = useForm<MessageSchemaType>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      message: ""
    }
  });

  const onSubmit = async (data: MessageSchemaType) => {
    console.log(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-3/4 items-center justify-center space-x-2"
      >
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  type="text"
                  placeholder="Message MyGPT"
                  {...field}
                  className="text-background flex-grow"
                  autoComplete="off"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" variant="secondary">
          Send
        </Button>
      </form>
    </Form>
  );
};

export default MessageForm;
