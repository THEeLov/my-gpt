import { Button } from "@/components/ui/button";
import { FormField, Form, FormItem, FormControl } from "@/components/ui/form";
import {
  useSendMessageToConversation,
  useSendMessageToNewMessage,
} from "@/hooks/useMessages";
import { messageSchema, MessageSchemaType } from "@/validation/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { TypingIndicator } from "@minchat/react-chat-ui";
import { Textarea } from "@/components/ui/textarea"
import { BsSend } from "react-icons/bs";

const MessageForm = () => {
  const { conversationId: openConversationId } = useParams();
  const navigate = useNavigate();

  const { mutateAsync: sendMessageToConversation, isPending } =
    useSendMessageToConversation(openConversationId!);
  const { mutateAsync: sendMessageToNewConversation, isPending: pending } =
    useSendMessageToNewMessage();

  const form = useForm<MessageSchemaType>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = async (data: MessageSchemaType) => {
    try {
      const result = openConversationId === undefined
        ? await sendMessageToNewConversation(data)
        : await sendMessageToConversation(data);
      navigate(`/${result}`)
    } catch (error) {
      console.log(error);
    }
    form.reset();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      form.handleSubmit(onSubmit)();
    }
  };

  return (
    <Form {...form}>
      {(pending || isPending) && (
        <div className="h-fit w-3/4">
          <TypingIndicator content="MyGPT is writing" themeColor="white" />
        </div>
      )}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-3/4 items-center justify-center space-x-2 relative"
      >
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Textarea
                  placeholder="Message MyGPT"
                  {...field}
                  className="text-background flex-grow"
                  autoComplete="off"
                  onKeyDown={handleKeyDown}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" variant="ghost" className="absolute right-3" disabled={!form.formState.isValid || form.formState.isSubmitting}>
          <BsSend style={{width: "24px", height: "24px"}}/>
        </Button>
      </form>
    </Form>
  );
};

export default MessageForm;
