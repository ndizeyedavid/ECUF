import { Play, Calendar, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Videos = () => {
  const videoList = [
    {
      id: 1,
      title: "Sunday Service - Faith in Action",
      embedId: "dQw4w9WgXcQ", // Example YouTube ID
      description: "Join us for an inspiring Sunday service focusing on putting our faith into action in daily life.",
      duration: "45:30",
      date: "March 10, 2024",
      category: "Worship",
      views: "1.2K"
    },
    {
      id: 2,
      title: "Educational Excellence Seminar",
      embedId: "dQw4w9WgXcQ",
      description: "Discover how we integrate Christian values with academic excellence in our educational programs.",
      duration: "32:15",
      date: "February 28, 2024",
      category: "Education",
      views: "850"
    },
    {
      id: 3,
      title: "Youth Ministry - Building Strong Foundations",
      embedId: "dQw4w9WgXcQ",
      description: "Our youth pastor shares insights on building strong spiritual foundations for young people.",
      duration: "28:45",
      date: "February 15, 2024",
      category: "Youth",
      views: "920"
    },
    {
      id: 4,
      title: "Community Outreach Impact Story",
      embedId: "dQw4w9WgXcQ",
      description: "See how our community outreach programs are making a difference in local neighborhoods.",
      duration: "15:20",
      date: "January 30, 2024",
      category: "Service",
      views: "650"
    },
    {
      id: 5,
      title: "Christmas Concert 2023 Highlights",
      embedId: "dQw4w9WgXcQ",
      description: "Relive the beautiful moments from our annual Christmas concert celebration.",
      duration: "52:10",
      date: "December 20, 2023",
      category: "Events",
      views: "2.1K"
    },
    {
      id: 6,
      title: "Bible Study - Living with Purpose",
      embedId: "dQw4w9WgXcQ",
      description: "Weekly Bible study session exploring how to live with purpose according to God's plan.",
      duration: "40:30",
      date: "March 5, 2024",
      category: "Study",
      views: "750"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Worship': 'bg-primary text-primary-foreground',
      'Education': 'bg-secondary text-secondary-foreground',
      'Youth': 'bg-ecuf-sage text-white',
      'Service': 'bg-accent text-accent-foreground',
      'Events': 'bg-ecuf-gold text-ecuf-dark',
      'Study': 'bg-ecuf-navy text-white'
    };
    return colors[category] || 'bg-muted text-muted-foreground';
  };

  return (
    <section id="videos" className="py-20 bg-subtle-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Video Library
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch our sermons, educational content, and community events from anywhere
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-elegant">
            <div className="aspect-video relative">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoList[0].embedId}?rel=0`}
                title={videoList[0].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <CardContent className="p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className={getCategoryColor(videoList[0].category)}>
                  {videoList[0].category}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {videoList[0].date}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  {videoList[0].duration}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  {videoList[0].views} views
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {videoList[0].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {videoList[0].description}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoList.slice(1).map((video) => (
            <Card key={video.id} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="relative aspect-video">
                <img 
                  src={`https://img.youtube.com/vi/${video.embedId}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full p-4"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${video.embedId}`, '_blank')}
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
                <Badge className={`absolute top-3 left-3 ${getCategoryColor(video.category)}`}>
                  {video.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-3 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {video.description}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {video.date}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    {video.views} views
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-hero-gradient rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Subscribe to Our Channel
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't miss our latest sermons, educational content, and community events. 
              Subscribe to stay connected with ECUF.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6"
              onClick={() => window.open('https://youtube.com/@ecuf', '_blank')}
            >
              Subscribe on YouTube
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;