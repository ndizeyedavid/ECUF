import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Trash2, Upload, Image as ImageIcon, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { createVideo, deleteVideo, fetchVideos } from "@/services/video.service";
import pb from "@/lib/pb";
import { Textarea } from "@/components/ui/textarea";
import { Video } from "@/types/video";

const formSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    youtubeLink: z.string().url("Invalid youtube link"),
});

type FormValues = z.infer<typeof formSchema>;

const VideoManager = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [videos, setVideos] = useState<Video[]>([]);
    const { toast } = useToast();

    useEffect(() => {
        (async () => {
            const res: any = await fetchVideos();
            setVideos(res as Video[]);
            setIsLoading(false);
        })();
    }, []);

    const form = useForm();

    const onSubmit = async (data: FormValues) => {
        setIsLoading(true);
        try {
            console.log("Uploading video:", data);

            const res: any = await createVideo(data as any);
            setVideos([...videos, res]);

            toast({
                title: "Success",
                description: "Video uploaded successfully",
            });
            form.reset();
        } catch (error) {
            console.error(error.response);
            toast({
                variant: "destructive",
                title: "Error",
                description: "Failed to upload video",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        console.log("Deleting video:", id);

        await deleteVideo(id, setVideos, videos);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Video Manager</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Upload New Video</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-4"
                            >
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Title for the video"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Descibe the video"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="youtubeLink"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Youtube Link</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Youtube link for the video"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    className="w-full gap-2"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Loading..." : "Add Video"}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Video Items</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4 overflow-auto h-[500px]">
                            {isLoading && "Loading..."}

                            {videos.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between p-4 border rounded-lg"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="relative size-24 bg-muted rounded-lg flex items-center justify-center">
                                            <img
                                                src={`https://img.youtube.com/vi/${
                                                    item.youtubeLink.split("v=")[1]
                                                }/mqdefault.jpg`}
                                                width={80}
                                                height={80}
                                                className="size-full object-cover rounded-lg"
                                                alt="Video thumbnail"
                                            />
                                            <a
                                                href={item.youtubeLink}
                                                className="absolute"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <PlayCircle className="text-white/80 hover:text-white transition-colors" />
                                            </a>
                                        </div>
                                        <div>
                                            <h4 className="font-medium">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        <Trash2 className="h-5 w-5 text-destructive" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default VideoManager;
