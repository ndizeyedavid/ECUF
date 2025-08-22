import { useState, useEffect } from "react";
import { Message } from "@/types/message";
import { fetchMessages, deleteMessage } from "@/services/message.service";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MessagesPanel() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadMessages();
    }, []);

    async function loadMessages() {
        try {
            const data = await fetchMessages();
            setMessages(data as any);
            if (data.length > 0 && !selectedMessage) {
                setSelectedMessage(data[0] as any);
            }
        } catch (error) {
            console.error("Failed to load messages:", error);
        } finally {
            setLoading(false);
        }
    }

    const handleDelete = async (id: string) => {
        await deleteMessage(id, setMessages, messages);
        if (selectedMessage?.id === id) {
            setSelectedMessage(messages.find((m) => m.id !== id) || null);
        }
    };

    if (loading) {
        return <div className="p-4">Loading messages...</div>;
    }

    return (
        <div className="flex h-[calc(100vh-8rem)] gap-4 p-4">
            {/* Messages Sidebar */}
            <div className="w-80 flex flex-col bg-card rounded-lg border">
                <div className="p-4 border-b">
                    <h2 className="text-lg font-semibold">Messages</h2>
                    <p className="text-sm text-muted-foreground">
                        {messages.length} total
                    </p>
                </div>
                <ScrollArea className="flex-1">
                    <div className="space-y-1 p-2">
                        {messages.length === 0 ? (
                            <p className="text-sm text-muted-foreground p-2">
                                No messages found.
                            </p>
                        ) : (
                            messages.map((message) => (
                                <button
                                    key={message.id}
                                    onClick={() => setSelectedMessage(message)}
                                    className={cn(
                                        "w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors",
                                        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                                        selectedMessage?.id === message.id &&
                                            "bg-gray-200"
                                    )}
                                >
                                    <div className="flex flex-col gap-1">
                                        <div className="flex justify-between items-start">
                                            <span className="font-medium">
                                                {message.firstName} {message.lastName}
                                            </span>
                                            <span className="text-xs text-muted-foreground">
                                                {new Date(
                                                    message.created
                                                ).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground truncate">
                                            {message.message}
                                        </p>
                                    </div>
                                </button>
                            ))
                        )}
                    </div>
                </ScrollArea>
            </div>

            {/* Message Content */}
            <div className="flex-1 bg-card rounded-lg border">
                {selectedMessage ? (
                    <div className="h-full flex flex-col">
                        <div className="p-4 border-b flex justify-between items-center">
                            <div>
                                <h2 className="text-xl font-semibold">
                                    {selectedMessage.firstName} {selectedMessage.lastName}
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    {new Date(selectedMessage.created).toLocaleString()}
                                </p>
                            </div>
                            <Button
                                variant="destructive"
                                size="icon"
                                onClick={() => handleDelete(selectedMessage.id)}
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                        <ScrollArea className="flex-1 p-4">
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Mail className="h-4 w-4 text-primary" />
                                        <a
                                            href={`mailto:${selectedMessage.email}`}
                                            className="text-primary hover:underline"
                                        >
                                            {selectedMessage.email}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Phone className="h-4 w-4 text-primary" />
                                        <a
                                            href={`tel:${selectedMessage.phone}`}
                                            className="text-primary hover:underline"
                                        >
                                            {selectedMessage.phone}
                                        </a>
                                    </div>
                                </div>
                                <div className=" rounded-lg p-4">
                                    <p className="text-sm whitespace-pre-wrap">
                                        {selectedMessage.message}
                                    </p>
                                </div>
                            </div>
                        </ScrollArea>
                    </div>
                ) : (
                    <div className="h-full flex items-center justify-center text-muted-foreground">
                        No message selected
                    </div>
                )}
            </div>
        </div>
    );
}
