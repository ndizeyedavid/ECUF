import { useEffect, useState } from "react";
import { Calendar as BigCalendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar as CalendarIcon, Clock, MapPin, Users, Plus } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Event } from "@/types/event";
import { fetchEvents } from "@/services/event.service";

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [view, setView] = useState(Views.MONTH);
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState<Event[]>([] as Event[]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            const res: any = await fetchEvents();
            setEvents(
                res.map((event: Event) => ({
                    ...event,
                    start: new Date(event.date),
                    end: new Date(event.date),
                }))
            );
            setLoading(false);
        })();
    }, []);

    const eventStyleGetter = (event) => {
        const colors = {
            worship: { backgroundColor: "hsl(var(--primary))", color: "white" },
            study: { backgroundColor: "hsl(var(--accent))", color: "white" },
            service: { backgroundColor: "hsl(var(--secondary))", color: "white" },
            children: { backgroundColor: "hsl(var(--primary)/0.7)", color: "white" },
            prayer: { backgroundColor: "hsl(var(--accent)/0.8)", color: "white" },
            meeting: {
                backgroundColor: "hsl(var(--muted))",
                color: "hsl(var(--foreground))",
            },
        };

        return {
            style: colors[event.type] || {
                backgroundColor: "hsl(var(--primary))",
                color: "white",
            },
        };
    };

    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
    };

    return (
        <div className="min-h-screen bg-background">
            <Navigation isCalendar={true} />

            {/* Hero Section */}
            <section className="pt-32 pb-12 bg-hero-gradient text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Event Calendar
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                        Stay connected with all ECUF events, services, and activities
                    </p>
                </div>
            </section>
            {loading ? (
                "Loading..."
            ) : (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Calendar */}
                        <div className="lg:col-span-3">
                            <Card className="p-6">
                                <CardHeader className="flex flex-row items-center justify-between pb-6">
                                    <CardTitle className="text-2xl font-bold text-primary">
                                        ECUF Calendar
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div style={{ height: "600px" }}>
                                        <BigCalendar
                                            localizer={localizer}
                                            events={events}
                                            startAccessor="start"
                                            endAccessor="end"
                                            view={view}
                                            onView={setView}
                                            date={date}
                                            onNavigate={setDate}
                                            onSelectEvent={handleSelectEvent}
                                            eventPropGetter={eventStyleGetter}
                                            className="bg-white rounded-lg"
                                            style={{ height: "100%" }}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Upcoming Events */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg font-semibold text-primary">
                                        Upcoming Events
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {events.map((event) => (
                                        <div
                                            key={event.id}
                                            className="border-l-4 border-primary pl-4 hover:bg-muted/50 transition-colors cursor-pointer rounded-r-md p-2"
                                            onClick={() => setSelectedEvent(event)}
                                        >
                                            <h4 className="font-semibold text-sm">
                                                {event.title}
                                            </h4>
                                            <div className="flex items-center text-xs text-muted-foreground mt-1">
                                                <CalendarIcon className="h-3 w-3 mr-1" />
                                                {moment(event.date).format("MMM D, YYYY")}
                                            </div>
                                            <div className="flex items-center text-xs text-muted-foreground">
                                                <Clock className="h-3 w-3 mr-1" />
                                                {event.time}
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            )}

            {/* Event Detail Modal */}
            {selectedEvent && (
                <Dialog
                    open={!!selectedEvent}
                    onOpenChange={() => setSelectedEvent(null)}
                >
                    <DialogContent className="max-w-md">
                        <DialogHeader>
                            <DialogTitle className="text-xl font-bold text-primary">
                                {selectedEvent.title}
                            </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <p className="text-muted-foreground">
                                {selectedEvent.description}
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <CalendarIcon className="h-5 w-5 text-primary flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold">
                                            {moment(selectedEvent.date).format(
                                                "MMMM D, YYYY"
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold">
                                            {selectedEvent.time}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <Badge variant="secondary" className="mb-2">
                                    {selectedEvent.category.charAt(0).toUpperCase() +
                                        selectedEvent.category.slice(1)}
                                </Badge>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}

            <Footer />
        </div>
    );
};

export default CalendarPage;
