import { toast } from "@/hooks/use-toast";
import pb from "@/lib/pb";
import { Video } from "@/types/video";

export async function fetchVideos() {
    const res = await pb.collection("videos").getFullList({
        sort: "-created",
    });
    return res;
}

export async function createVideo(params: Video) {
    console.log(params);
    const res = await pb.collection("videos").create({
        youtubeLink: params.youtubeLink,
        title: params.title,
        description: params.description,
    });
    return res;
}

export async function deleteVideo(id: string, setVideos: any, videos: Video[]) {
    if (!confirm("Are you sure you want to delete this video?")) return;
    try {
        await pb.collection("videos").delete(id);
        toast({
            title: "Success",
            description: "Video deleted successfully",
        });
        setVideos(videos.filter((video) => video.id !== id));
    } catch (error) {
        toast({
            title: "Error",
            description: "Failed to delete video",
        });
    }
}
