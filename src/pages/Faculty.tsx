import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, GraduationCap, Award, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Faculty = () => {
  const leadership = [
    {
      name: "Dr. Sarah Johnson",
      title: "Principal & Director of Education",
      education: "Ph.D. Education Administration, M.A. Theology",
      experience: "15 years in Christian education",
      email: "sarah.johnson@ecuf.edu.ng",
      phone: "+234 9 123 4567"
    },
    {
      name: "Rev. Michael Chen",
      title: "Chaplain & Bible Department Head",
      education: "M.Div. Theology, B.A. Biblical Studies",
      experience: "12 years in ministry and education",
      email: "michael.chen@ecuf.edu.ng",
      phone: "+234 9 123 4568"
    },
    {
      name: "Prof. Grace Adebayo",
      title: "Academic Director",
      education: "Ph.D. Curriculum Development, M.Ed. Pedagogy",
      experience: "20 years in academic leadership",
      email: "grace.adebayo@ecuf.edu.ng",
      phone: "+234 9 123 4569"
    }
  ];

  const departments = [
    {
      name: "Mathematics & Sciences",
      head: "Dr. James Okafor",
      faculty: 8,
      icon: <GraduationCap className="h-8 w-8 text-primary" />
    },
    {
      name: "Languages & Literature",
      head: "Mrs. Rebecca Smith",
      faculty: 6,
      icon: <BookOpen className="h-8 w-8 text-primary" />
    },
    {
      name: "Arts & Creative Studies",
      head: "Mr. David Williams",
      faculty: 5,
      icon: <Award className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Faculty & Staff
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Dedicated educators committed to excellence in Christian education
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced leaders guiding our educational mission
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {leadership.map((leader, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <GraduationCap className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{leader.name}</h3>
                  <p className="text-lg font-semibold text-accent mb-4">{leader.title}</p>
                  <p className="text-sm text-muted-foreground mb-2">{leader.education}</p>
                  <p className="text-sm text-muted-foreground mb-6">{leader.experience}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{leader.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{leader.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Academic Departments
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized departments fostering excellence in every field
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    {dept.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{dept.name}</h3>
                  <p className="text-muted-foreground mb-2">Department Head</p>
                  <p className="font-semibold text-accent mb-4">{dept.head}</p>
                  <p className="text-sm text-muted-foreground">
                    {dept.faculty} Faculty Members
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faculty;