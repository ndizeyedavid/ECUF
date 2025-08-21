import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Events = () => {
    const upcomingEvents = [
        {
            date: "2024-03-15",
            time: "6:00 PM",
            title: "Annual Thanksgiving Service",
            description:
                "Join us for a special evening of gratitude, worship, and fellowship as we give thanks for God's blessings.",
            location: "Main Chapel",
            category: "Worship",
            attendees: 150,
        },
        {
            date: "2024-03-20",
            time: "10:00 AM",
            title: "Bible Study",
            description:
                "Discover innovative teaching methods that integrate faith and learning for academic success.",
            location: "Main Chapel",
            category: "Education",
            attendees: 75,
        },
        {
            date: "2024-03-25",
            time: "2:00 PM",
            title: "Community Outreach Day",
            description:
                "Make a difference in our community through various service projects and volunteer opportunities.",
            location: "Celpar",
            category: "Service",
            attendees: 100,
        },
        {
            date: "2024-04-01",
            time: "7:00 PM",
            title: "Youth Leadership Conference",
            description:
                "Empowering young leaders with Christian values and practical leadership skills.",
            location: "Main Chapel",
            category: "Youth",
            attendees: 60,
        },
    ];

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const getCategoryColor = (category: string) => {
        const colors: { [key: string]: string } = {
            Worship: "bg-primary text-primary-foreground",
            Education: "bg-secondary text-secondary-foreground",
            Service: "bg-accent text-accent-foreground",
            Youth: "bg-ecuf-gold text-ecuf-dark",
        };
        return colors[category] || "bg-muted text-muted-foreground";
    };

    return (
        <section id="events" className="py-20 bg-subtle-gradient">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        Upcoming Events
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Join us for inspiring gatherings that strengthen our faith
                        community and educational mission
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {upcomingEvents.map((event, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 overflow-hidden"
                        >
                            <CardHeader className="pb-4">
                                <div className="flex justify-between items-start mb-2">
                                    <Badge className={getCategoryColor(event.category)}>
                                        {event.category}
                                    </Badge>
                                    <div className="text-right text-sm text-muted-foreground">
                                        <div className="flex items-center">
                                            <Users className="h-4 w-4 mr-1" />
                                            {event.attendees} expected
                                        </div>
                                    </div>
                                </div>
                                <CardTitle className="text-xl text-primary group-hover:text-primary/90 transition-colors">
                                    {event.title}
                                </CardTitle>
                                <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                                    <div className="flex items-center">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        {formatDate(event.date)}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="h-4 w-4 mr-2" />
                                        {event.time}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    {event.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-sm text-primary">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        {event.location}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-elegant text-center">
                    <h3 className="text-3xl font-bold text-primary mb-4">
                        Stay Connected
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Don't miss out on our community events and educational programs.
                        Subscribe to our newsletter for the latest updates and
                        announcements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <Button size="lg" variant="outline" className="flex-1" asChild>
                            <a href="/calendar">View Full Calendar</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;
