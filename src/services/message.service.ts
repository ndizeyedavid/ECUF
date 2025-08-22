import { toast } from "@/hooks/use-toast";
import pb from "@/lib/pb";
import { Message } from "@/types/message";

export async function fetchMessages() {
    const res = await pb.collection("messages").getFullList();
    return res;
}

export async function createMessage(params: Message) {
    const res = await pb.collection("messages").create(params);
    return res;
}

export async function deleteMessage(id: string, setMessages: any, messages: Message[]) {
    if (!confirm("Are you sure you want to delete this message?")) return;
    try {
        await pb.collection("messages").delete(id);
        toast({
            title: "Success",
            description: "Message deleted successfully",
        });
        setMessages(messages.filter((message) => message.id !== id));
    } catch (error) {
        toast({
            title: "Error",
            description: "Failed to delete message",
        });
    }
}
