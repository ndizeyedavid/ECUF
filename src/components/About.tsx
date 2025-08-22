import { Book, Users, Heart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { TeamMember } from "@/types/teamMeber";
import { fetchTeamMembers } from "@/services/team.service";
import pb from "@/lib/pb";

const About = () => {
    const [teams, setTeams] = useState<TeamMember[]>([] as TeamMember[]);
    useEffect(() => {
        (async () => {
            const res: any = await fetchTeamMembers();
            setTeams(res as TeamMember[]);
        })();
    }, []);

    const values = [
        {
            icon: <Book className="h-8 w-8 text-primary" />,
            title: "Biblical Foundation",
            description:
                "Grounded in God's Word, we build our faith on the solid foundation of Scripture.",
        },
        {
            icon: <Users className="h-8 w-8 text-primary" />,
            title: "Unity in Fellowship",
            description:
                "Embracing diversity while maintaining unity in Christ across our educational community.",
        },
        {
            icon: <Heart className="h-8 w-8 text-primary" />,
            title: "Love in Action",
            description:
                "Demonstrating Christ's love through service, compassion, and care for one another.",
        },
    ];

    return (
        <section id="about" className="py-20 bg-subtle-gradient">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        About ECUF
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        ESSA Christian Unity Fellowship is a vibrant community where faith
                        meets education, creating an environment where students, families,
                        and faculty grow together in Christ.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {values.map((value, index) => (
                        <Card
                            key={index}
                            className="text-center p-6 shadow-elegant hover:shadow-gold transition-all duration-300 hover:scale-105"
                        >
                            <CardContent className="pt-6">
                                <div className="flex justify-center mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-primary mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {value.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Teams Section */}
                <div className="mb-16">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                            Meet the church leaders
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            A wonderful team of younglings who put all there effort and
                            heart in doing God's work and delivering seamless worshipping
                            to ECUF.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teams.map((team, index) => (
                            <Card
                                key={index}
                                className="text-center p-6 shadow-elegant hover:shadow-gold transition-all duration-300 hover:scale-105"
                            >
                                <CardContent className="pt-6">
                                    <div className="flex justify-center mb-4">
                                        <img
                                            src={pb.files.getURL(team, team.image)}
                                            alt={team.name}
                                            className="w-24 h-24 rounded-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-primary mb-3">
                                        {team.name}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-2">
                                        {team.role}
                                    </p>
                                    <p className="text-muted-foreground text-sm">
                                        {team.phone}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-elegant">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-primary mb-6">
                                Our Mission
                            </h3>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                To create a Christ-centered learning environment where
                                students develop academically, spiritually, and socially,
                                preparing them to be faithful servants and leaders in
                                their communities and beyond.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We believe that education and faith go hand in hand,
                                forming the complete person God intends each of us to be.
                            </p>
                        </div>
                        <div className="border shadow rounded-xl p-8 text-center">
                            <h4 className="text-2xl font-bold text-primary mb-4">
                                Join Our Family
                            </h4>
                            <p className="text-muted-foreground mb-6">
                                Experience the warmth of Christian fellowship and the
                                excellence of faith-based education.
                            </p>
                            <div className="flex justify-center">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary">
                                        15+
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Years of Service
                                    </div>
                                </div>
                                <div className="mx-8 text-center">
                                    <div className="text-3xl font-bold text-primary">
                                        1,200+
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Students Served
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary">
                                        50+
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Teachers & Staff
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
