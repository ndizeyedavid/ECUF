import { useState } from "react";
import { Calendar as BigCalendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar as CalendarIcon, Clock, MapPin, Users, Plus } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());

  const events = [
    {
      id: 1,
      title: "Sunday Worship Service",
      start: new Date(2024, 7, 25, 10, 0),
      end: new Date(2024, 7, 25, 12, 0),
      location: "Main Chapel",
      type: "worship",
      description: "Weekly worship service with communion and fellowship.",
      attendees: "200+"
    },
    {
      id: 2,
      title: "Youth Bible Study",
      start: new Date(2024, 7, 28, 19, 0),
      end: new Date(2024, 7, 28, 20, 30),
      location: "Youth Center",
      type: "study",
      description: "Interactive Bible study for teenagers and young adults.",
      attendees: "45"
    },
    {
      id: 3,
      title: "Community Service Day",
      start: new Date(2024, 7, 31, 9, 0),
      end: new Date(2024, 7, 31, 15, 0),
      location: "Various Locations",
      type: "service",
      description: "Community outreach and service projects throughout the city.",
      attendees: "150"
    },
    {
      id: 4,
      title: "Children's Ministry",
      start: new Date(2024, 8, 1, 10, 0),
      end: new Date(2024, 8, 1, 11, 30),
      location: "Children's Wing",
      type: "children",
      description: "Fun and engaging activities for children ages 4-12.",
      attendees: "60"
    },
    {
      id: 5,
      title: "Back to School Prayer",
      start: new Date(2024, 8, 5, 18, 0),
      end: new Date(2024, 8, 5, 19, 30),
      location: "Main Chapel",
      type: "prayer",
      description: "Special prayer service for the new academic year.",
      attendees: "300+"
    },
    {
      id: 6,
      title: "Faculty Meeting",
      start: new Date(2024, 8, 10, 14, 0),
      end: new Date(2024, 8, 10, 16, 0),
      location: "Conference Room",
      type: "meeting",
      description: "Monthly faculty and staff meeting.",
      attendees: "50"
    }
  ];

  const eventStyleGetter = (event) => {
    const colors = {
      worship: { backgroundColor: 'hsl(var(--primary))', color: 'white' },
      study: { backgroundColor: 'hsl(var(--accent))', color: 'white' },
      service: { backgroundColor: 'hsl(var(--secondary))', color: 'white' },
      children: { backgroundColor: 'hsl(var(--primary)/0.7)', color: 'white' },
      prayer: { backgroundColor: 'hsl(var(--accent)/0.8)', color: 'white' },
      meeting: { backgroundColor: 'hsl(var(--muted))', color: 'hsl(var(--foreground))' }
    };
    
    return {
      style: colors[event.type] || { backgroundColor: 'hsl(var(--primary))', color: 'white' }
    };
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const upcomingEvents = events
    .filter(event => event.start.getTime() >= new Date().getTime())
    .sort((a, b) => a.start.getTime() - b.start.getTime())
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-3">
            <Card className="p-6">
              <CardHeader className="flex flex-row items-center justify-between pb-6">
                <CardTitle className="text-2xl font-bold text-primary">
                  ECUF Calendar
                </CardTitle>
                <div className="flex space-x-2">
                  <Button 
                    variant={view === Views.MONTH ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setView(Views.MONTH)}
                  >
                    Month
                  </Button>
                  <Button 
                    variant={view === Views.WEEK ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setView(Views.WEEK)}
                  >
                    Week
                  </Button>
                  <Button 
                    variant={view === Views.DAY ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setView(Views.DAY)}
                  >
                    Day
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div style={{ height: '600px' }}>
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
                    style={{ height: '100%' }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Add Event Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full" size="lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Event
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Event</DialogTitle>
                </DialogHeader>
                <p className="text-muted-foreground">
                  Event creation form would go here. Contact the administrator to add new events.
                </p>
              </DialogContent>
            </Dialog>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-primary">
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border-l-4 border-primary pl-4 hover:bg-muted/50 transition-colors cursor-pointer rounded-r-md p-2"
                       onClick={() => setSelectedEvent(event)}>
                    <h4 className="font-semibold text-sm">{event.title}</h4>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      {moment(event.start).format('MMM D, YYYY')}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {moment(event.start).format('h:mm A')}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Event Types Legend */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-primary">
                  Event Types
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(var(--primary))' }}></div>
                  <span className="text-sm">Worship Services</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(var(--accent))' }}></div>
                  <span className="text-sm">Bible Studies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(var(--secondary))' }}></div>
                  <span className="text-sm">Community Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(var(--primary)/0.7)' }}></div>
                  <span className="text-sm">Children's Ministry</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-primary">
                {selectedEvent.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-muted-foreground">{selectedEvent.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CalendarIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      {moment(selectedEvent.start).format('MMMM D, YYYY')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      {moment(selectedEvent.start).format('h:mm A')} - {moment(selectedEvent.end).format('h:mm A')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{selectedEvent.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Expected: {selectedEvent.attendees}</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Badge variant="secondary" className="mb-2">
                  {selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}
                </Badge>
              </div>
              
              <Button className="w-full" size="lg">
                RSVP for Event
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <Footer />
    </div>
  );
};

export default CalendarPage;