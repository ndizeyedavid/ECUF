import { useState } from "react";
import { X, ZoomIn, Calendar, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Import gallery images
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const galleryItems = [
    {
      id: 1,
      image: gallery1,
      title: "Fellowship Gathering",
      category: "Community",
      date: "March 2024",
      description: "Our vibrant community coming together in fellowship and worship."
    },
    {
      id: 2,
      image: gallery2,
      title: "Graduation Ceremony",
      category: "Education",
      date: "June 2024",
      description: "Celebrating our students' academic achievements and spiritual growth."
    },
    {
      id: 3,
      image: gallery3,
      title: "Youth Ministry Event",
      category: "Youth",
      date: "February 2024",
      description: "Engaging our young people in faith-building activities and fellowship."
    },
    {
      id: 4,
      image: gallery4,
      title: "Community Service",
      category: "Service",
      date: "January 2024",
      description: "Living out our faith through service to the local community."
    },
    {
      id: 5,
      image: gallery5,
      title: "Christmas Celebration",
      category: "Events",
      date: "December 2023",
      description: "Celebrating the birth of our Savior with joy and thanksgiving."
    },
    {
      id: 6,
      image: gallery6,
      title: "Sunday School",
      category: "Education",
      date: "March 2024",
      description: "Teaching our children about God's love through engaging activities."
    }
  ];

  const categories = ["All", "Community", "Education", "Youth", "Service", "Events"];

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Community': 'bg-primary text-primary-foreground',
      'Education': 'bg-secondary text-secondary-foreground',
      'Youth': 'bg-ecuf-sage text-white',
      'Service': 'bg-accent text-accent-foreground',
      'Events': 'bg-ecuf-gold text-ecuf-dark'
    };
    return colors[category] || 'bg-muted text-muted-foreground';
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Photo Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing moments of faith, fellowship, and learning in our ECUF community
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card key={item.id} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setSelectedImage(index)}
                    className="flex items-center gap-2"
                  >
                    <ZoomIn className="h-4 w-4" />
                    View Full
                  </Button>
                </div>
                <Badge className={`absolute top-3 left-3 ${getCategoryColor(item.category)}`}>
                  {item.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal for Full Image View */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-lg">
              <img 
                src={filteredItems[selectedImage].image}
                alt={filteredItems[selectedImage].title}
                className="w-full h-full object-contain"
              />
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4"
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {filteredItems[selectedImage].title}
                </h3>
                <p className="text-white/90">
                  {filteredItems[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;