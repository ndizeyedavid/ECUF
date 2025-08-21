import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    const contactInfo = [
        {
            icon: <MapPin className="h-6 w-6 text-primary" />,
            title: "Address",
            details: ["259G+7R7, Kigali, Rwanda", "Kanombe, Kwa Dodo"],
        },
        {
            icon: <Phone className="h-6 w-6 text-primary" />,
            title: "Phone",
            details: ["+250 788 312 231", "+250 788 312 232"],
        },
        {
            icon: <Mail className="h-6 w-6 text-primary" />,
            title: "Email",
            details: ["ecuf@gmail.com", "essanyarugunga@yahoo.fr"],
        },
        {
            icon: <Clock className="h-6 w-6 text-primary" />,
            title: "Office Hours",
            details: ["Mon - Fri: 5:00 AM - 5:30 PM", "Sun: 9:00 AM - 12:00 PM"],
        },
    ];

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        We'd love to hear from you. Reach out to us for any questions
                        about our programs, services, or community.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-8">
                            Contact Information
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            {contactInfo.map((info, index) => (
                                <Card
                                    key={index}
                                    className="hover:shadow-elegant transition-shadow duration-300"
                                >
                                    <CardHeader className="pb-3">
                                        <div className="flex items-center space-x-3">
                                            {info.icon}
                                            <CardTitle className="text-lg">
                                                {info.title}
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        {info.details.map((detail, idx) => (
                                            <p
                                                key={idx}
                                                className="text-muted-foreground text-sm"
                                            >
                                                {detail}
                                            </p>
                                        ))}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-muted rounded-xl h-64 flex items-center justify-center overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1676.508352265191!2d30.17657240055669!3d-1.982023530952334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19db59de7566b09f%3A0xf01aadaba921b2bc!2sKwa%20Dodo-Kanombe!5e0!3m2!1sen!2srw!4v1755771531440!5m2!1sen!2srw"
                                width="600"
                                height="450"
                                style={{ border: "0" }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <Card className="shadow-elegant">
                            <CardHeader>
                                <CardTitle className="text-2xl text-primary">
                                    Send Us a Message
                                </CardTitle>
                                <p className="text-muted-foreground">
                                    Fill out the form below and we'll get back to you as
                                    soon as possible.
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="firstName"
                                            className="block text-sm font-medium text-foreground mb-2"
                                        >
                                            First Name
                                        </label>
                                        <Input
                                            id="firstName"
                                            placeholder="Your first name"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="lastName"
                                            className="block text-sm font-medium text-foreground mb-2"
                                        >
                                            Last Name
                                        </label>
                                        <Input
                                            id="lastName"
                                            placeholder="Your last name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Email Address
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Phone Number
                                    </label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="+250 XXX XXX XXXX"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="Please share your message or questions..."
                                        rows={6}
                                    />
                                </div>

                                <Button size="lg" className="w-full">
                                    Send Message
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
