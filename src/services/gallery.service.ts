import { toast } from "@/hooks/use-toast";
import pb from "@/lib/pb";
import { Gallery } from "@/types/gallery";

export async function fetchGalleries() {
    const res = await pb.collection("gallery").getFullList({
        sort: "-created",
    });
    return res;
}

export async function createGallery(params: Gallery) {
    const res = await pb.collection("gallery").create(params);
    return res;
}

export async function deleteGallery(id: string, setGallerys: any, gallerys: Gallery[]) {
    if (!confirm("Are you sure you want to delete this gallery?")) return;
    try {
        await pb.collection("gallery").delete(id);
        toast({
            title: "Success",
            description: "Gallery deleted successfully",
        });
        setGallerys(gallerys.filter((gallery) => gallery.id !== id));
    } catch (error) {
        toast({
            title: "Error",
            description: "Failed to delete gallery",
        });
    }
}
