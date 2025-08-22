import { Clock, MapPin, Users2, BookOpen, Music, Gamepad2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
    const services = [
        {
            icon: <BookOpen className="h-12 w-12 text-primary" />,
            title: "Sunday Worship",
            time: "9:00 AM - 12:00 PM",
            description:
                "Join us for inspiring worship, biblical teaching, and fellowship with the ECUF community.",
            location: "Main Chapel",
        },
        {
            icon: <Users2 className="h-12 w-12 text-primary" />,
            title: "Bible Study",
            time: "Wednesday 7:00 PM",
            description:
                "Dive deeper into God's Word with interactive discussions and practical applications.",
            location: "Main Chapel",
        },
        {
            icon: <Music className="h-12 w-12 text-primary" />,
            title: "Youth Ministry",
            time: "Mon - Sat 5:00 PM",
            description:
                "Dynamic programs for teenagers focusing on faith, friendship, and fun activities.",
            location: "Main chapel",
        },
    ];

    const programs = [
        "Academic Excellence Programs",
        "Spiritual Formation Classes",
        "Community Service Projects",
        "Family Life Education",
        "Leadership Development",
        "Music & Arts Ministry",
    ];

    return (
        <section id="services" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        Our Services & Programs
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Discover opportunities to grow in faith, connect with community,
                        and make a difference
                    </p>
                </div>

                {/* Main Services */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-elegant transition-all duration-300 hover:scale-105"
                        >
                            <CardHeader className="text-center pb-4">
                                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <CardTitle className="text-lg sm:text-xl text-primary">
                                    {service.title}
                                </CardTitle>
                                <div className="flex items-center justify-center text-xs sm:text-sm text-muted-foreground">
                                    <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                                    {service.time}
                                </div>
                            </CardHeader>
                            <CardContent className="text-center px-3 sm:px-6">
                                <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="flex items-center justify-center text-xs sm:text-sm text-primary hidden">
                                    <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                                    {service.location}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Additional Programs */}
                <div className="bg-hero-gradient rounded-xl sm:rounded-2xl p-4 sm:p-8 lg:p-12 text-white">
                    <div className="text-center mb-8 sm:mb-12">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                            Educational Excellence
                        </h3>
                        <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
                            Comprehensive programs that integrate faith and learning
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
                        {programs.map((program, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center hover:bg-white/20 transition-colors duration-300"
                            >
                                <h4 className="font-semibold text-base sm:text-lg">{program}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="text-center hidden">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="text-lg px-8 py-6"
                        >
                            Explore All Programs
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
