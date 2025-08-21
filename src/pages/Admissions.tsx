import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar, FileText, Users, GraduationCap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Admissions = () => {
  const requirements = [
    "Completed application form",
    "Academic transcripts",
    "Character reference letters",
    "Health and immunization records",
    "Statement of faith (for older students)"
  ];

  const programs = [
    {
      title: "Early Childhood (Ages 3-5)",
      description: "Nurturing foundation in a Christ-centered environment",
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      title: "Elementary School (Grades K-6)",
      description: "Building strong academic and spiritual foundations",
      icon: <GraduationCap className="h-8 w-8 text-primary" />
    },
    {
      title: "Secondary School (Grades 7-12)",
      description: "Preparing leaders for college and life",
      icon: <FileText className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our Family
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Begin your journey of faith-based education at ESSA Christian Unity Fellowship
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Educational Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive programs for every stage of your child's development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {program.icon}
                  </div>
                  <CardTitle className="text-xl text-primary">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Admission Requirements
              </h3>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button size="lg" className="mr-4">
                  Download Application
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Visit
                </Button>
              </div>
            </div>
            
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center text-primary">
                  <Calendar className="h-6 w-6 mr-2" />
                  Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Application Opens</h4>
                  <p className="text-muted-foreground">November 1st</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold">Application Deadline</h4>
                  <p className="text-muted-foreground">March 15th</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold">School Year Begins</h4>
                  <p className="text-muted-foreground">September 1st</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;