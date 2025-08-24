import { Play, Calendar, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Video } from "@/types/video";
import { fetchVideos } from "@/services/video.service";

const Videos = () => {
  const [videoList, setVideoList] = useState<Video[]>([] as Video[]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      const res: any = await fetchVideos();
      setVideoList(res as Video[]);
      setLoading(false);
    })();
  }, []);

  return (
    <section id="videos" className="py-20 bg-subtle-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Video Library
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch our sermons, educational content, and community events from
            anywhere
          </p>
        </div>
        {loading ? (
          "loading..."
        ) : (
          <>
            {videoList.length == 0 && <p>No videos uploaded at this moment</p>}
            {videoList.length != 0 && (
              <div className="mb-16">
                <Card className="overflow-hidden shadow-elegant">
                  <div className="aspect-video relative">
                    <div className="relative aspect-video">
                      <img
                        src={`https://img.youtube.com/vi/${
                          videoList[0].youtubeLink.split("v=")[1]
                        }/mqdefault.jpg`}
                        alt={videoList[0].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center  group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="lg"
                          variant="secondary"
                          className="rounded-full p-4"
                          onClick={() =>
                            window.open(`${videoList[0].youtubeLink}`, "_blank")
                          }
                        >
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(videoList[0].created).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
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
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoList.slice(1).map((video) => (
                <Card
                  key={video.id}
                  className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="relative aspect-video">
                    <img
                      src={`https://img.youtube.com/vi/${
                        video.youtubeLink.split("v=")[1]
                      }/mqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="lg"
                        variant="secondary"
                        className="rounded-full p-4"
                        onClick={() =>
                          window.open(`${video.youtubeLink}`, "_blank")
                        }
                      >
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
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
                        {new Date(video.created).toLocaleDateString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-hero-gradient rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Subscribe to Our Channel
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't miss our latest sermons, educational content, and community
              events. Subscribe to stay connected with ECUF.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              onClick={() =>
                window.open("https://youtube.com/@ecufchurch", "_blank")
              }
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
