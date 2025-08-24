import { useEffect, useState } from "react";
import { X, ZoomIn, Calendar, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// @ts-ignore
import { Gallery } from "@/types/gallery";
import { fetchGalleries } from "@/services/gallery.service";
import pb from "@/lib/pb";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [galleryItems, setGalleryItems] = useState<Gallery[]>([] as Gallery[]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const res: any = await fetchGalleries();
      setGalleryItems(res as Gallery[]);
      setLoading(false);
    })();
  }, []);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Photo Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing moments of faith, fellowship, and learning in our ECUF
            community
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {loading && "Loading...."}
          {galleryItems.length == 0 && <p>No images present at this moment</p>}
          {galleryItems.map((item, index) => (
            <Card
              key={item.id}
              className="group hover:shadow-elegant transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={pb.files.getURL(item, item.image)}
                  alt={item.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
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
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center text-xs sm:text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                  {new Date(item.created).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal for Full Image View */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl h-[90vh] overflow-hidden rounded-lg">
              <img
                src={pb.files.getURL(
                  galleryItems[selectedImage],
                  galleryItems[selectedImage].image
                )}
                alt={galleryItems[selectedImage].title}
                className="w-full h-full object-cover"
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
                  {galleryItems[selectedImage].title}
                </h3>
                <p className="text-white/90">
                  {galleryItems[selectedImage].description}
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
