import { toast } from "@/hooks/use-toast";
import pb from "@/lib/pb";
import { Event } from "@/types/event";

export async function fetchEvents() {
    const res = await pb.collection("events").getFullList();
    return res;
}

export async function createEvent(params: Event) {
    const res = await pb.collection("events").create(params);
    return res;
}

export async function deleteEvent(id: string, setEvents: any, events: Event[]) {
    if (!confirm("Are you sure you want to delete this event?")) return;
    try {
        await pb.collection("events").delete(id);
        toast({
            title: "Success",
            description: "Event deleted successfully",
        });
        setEvents(events.filter((event) => event.id !== id));
    } catch (error) {
        toast({
            title: "Error",
            description: "Failed to delete event",
        });
    }
}
