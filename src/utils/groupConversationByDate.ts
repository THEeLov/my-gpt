import { Conversation, GroupedConversations } from "@/types";
import { format, isToday, isYesterday } from "date-fns";

export function groupConversationsByDate(
  conversations: Conversation[]
): GroupedConversations {
  const grouped: GroupedConversations = new Map<string, Conversation[]>();

  conversations.forEach((conversation) => {
    const date = new Date(conversation.createdAt);
    let label: string;

    if (isToday(date)) {
      label = "Today";
    } else if (isYesterday(date)) {
      label = "Yesterday";
    } else {
      label = format(date, "MMMM d, yyyy");
    }
    if (!grouped.has(label)) {
      grouped.set(label, []);
    }
    grouped.get(label)?.push(conversation);
  });

  return grouped;
}
