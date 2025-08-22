import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Trash2, Upload, Image as ImageIcon } from "lucide-react";
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
import { Gallery } from "@/types/gallery";
import { createGallery, deleteGallery, fetchGalleries } from "@/services/gallery.service";
import pb from "@/lib/pb";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    image: z.any(),
});

type FormValues = z.infer<typeof formSchema>;

const GalleryManager = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [gallarys, setGallarys] = useState<Gallery[]>([]);
    const { toast } = useToast();

    useEffect(() => {
        (async () => {
            const res: any = await fetchGalleries();
            setGallarys(res as Gallery[]);
            setIsLoading(false);
        })();
    }, []);

    const form = useForm();

    const onSubmit = async (data: FormValues) => {
        setIsLoading(true);
        try {
            console.log("Uploading image:", data);

            const res: any = await createGallery(data as any);
            setGallarys([...gallarys, res]);

            toast({
                title: "Success",
                description: "Image uploaded successfully",
            });
            form.reset();
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Failed to upload image",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        console.log("Deleting gallery:", id);

        await deleteGallery(id, setGallarys, gallarys);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Gallery Manager</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Upload New Image</CardTitle>
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
                                                    placeholder="Title for the gallery image"
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
                                                    placeholder="Descibe the gallery image"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="image"
                                    render={({
                                        field: { onChange, value, ...field },
                                    }) => (
                                        <FormItem>
                                            <FormLabel>Profile Image</FormLabel>
                                            <FormControl>
                                                <div
                                                    className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
                                                    onClick={() => {
                                                        document
                                                            .getElementById("image")
                                                            ?.click();
                                                    }}
                                                >
                                                    <Input
                                                        id="image"
                                                        type="file"
                                                        accept="image/*"
                                                        className="hidden"
                                                        onChange={(e) => {
                                                            const file =
                                                                e.target.files?.[0];
                                                            if (file) {
                                                                const reader =
                                                                    new FileReader();
                                                                reader.onload = (e) => {
                                                                    const preview =
                                                                        document.getElementById(
                                                                            "imagePreview"
                                                                        ) as HTMLImageElement;
                                                                    if (
                                                                        preview &&
                                                                        e.target
                                                                    ) {
                                                                        preview.src = e
                                                                            .target
                                                                            .result as string;
                                                                        preview.style.display =
                                                                            "block";
                                                                    }
                                                                };
                                                                reader.readAsDataURL(
                                                                    file
                                                                );
                                                            }
                                                            onChange(file);
                                                        }}
                                                        {...field}
                                                    />
                                                    {value ? (
                                                        <img
                                                            id="imagePreview"
                                                            alt="Preview"
                                                            className="mx-auto mb-2 max-h-32 rounded-lg"
                                                        />
                                                    ) : (
                                                        <>
                                                            <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                                                            <p className="text-sm text-muted-foreground">
                                                                Click to upload or drag
                                                                and drop
                                                            </p>
                                                        </>
                                                    )}
                                                </div>
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
                                    {isLoading ? "Loading..." : "Add Image"}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Gallery Items</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4 overflow-auto h-[500px]">
                            {isLoading && "Loading..."}

                            {gallarys.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between p-4 border rounded-lg"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="size-24 bg-muted rounded-lg flex items-center justify-center">
                                            <img
                                                src={pb.files.getURL(item, item.image)}
                                                width={80}
                                                height={80}
                                                className="rounded-lg size-full object-cover"
                                                alt="Profile"
                                            />
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

export default GalleryManager;
