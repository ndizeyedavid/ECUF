import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    FileText,
    Image,
    Calendar,
    Users,
    Settings,
    LogOut,
    Video,
    Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

// Content Management Components
import ContentEditor from "./components/ContentEditor";
import GalleryManager from "./components/GalleryManager";
import EventManager from "./components/EventManager";
import UserManager from "./components/UserManager";
import SettingsPanel from "./components/SettingsPanel";
import Sidebar from "./components/Sidebar";
import pb from "@/lib/pb";
import VideoManager from "./components/VideoManager";
import { fetchGalleries } from "@/services/gallery.service";
import { fetchVideos } from "@/services/video.service";
import { fetchEvents } from "@/services/event.service";
import MessagesPanel from "./components/MessagesPanel";

interface IStats {
    galleryItems: number;
    videoItems: number;
    upcomingEvents: number;
}

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [loading, setLoading] = useState<boolean>(true);
    const [statsCount, setStatsCount] = useState<IStats>({} as IStats);
    const navigate = useNavigate();

    useEffect(() => {
        if (pb.authStore.isValid) return;
        navigate("/admin/login");
    }, []);

    useEffect(() => {
        (async () => {
            const galleryItems = await fetchGalleries();
            const videoItems = await fetchVideos();
            const upcomingEvents = await fetchEvents();
            setStatsCount({
                galleryItems: galleryItems.length,
                videoItems: videoItems.length,
                upcomingEvents: upcomingEvents.length,
            });
            setLoading(false);
        })();
    }, [activeTab == "overview"]);

    const stats = [
        {
            title: "Gallery Items",
            value: statsCount.galleryItems,
            description: "Images saved",
            icon: <Image className="h-6 w-6 text-primary" />,
        },
        {
            title: "Total Videos",
            value: statsCount.videoItems,
            description: "Videos saved",
            icon: <Video className="h-6 w-6 text-primary" />,
        },
        {
            title: "Upcoming Events",
            value: statsCount.upcomingEvents,
            description: "Scheduled events",
            icon: <Calendar className="h-6 w-6 text-primary" />,
        },
    ];

    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar */}
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    onClick={() =>
                        document
                            .getElementById("mobile-sidebar")
                            ?.classList.toggle("translate-x-[0px]")
                    }
                >
                    <Menu className="size-7" />
                </Button>
                <div className="p-4 sm:p-6 lg:p-8">
                    <Tabs value={activeTab} className="space-y-4 sm:space-y-6">
                        <TabsContent value="overview" className="space-y-4 sm:space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl sm:text-3xl font-bold">
                                    Dashboard Overview
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {stats.map((stat, index) => (
                                    <Card key={index}>
                                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                {stat.title}
                                            </CardTitle>
                                            {stat.icon}
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-xl sm:text-2xl font-bold">
                                                {loading ? "Loading..." : stat.value}
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                {stat.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="team">
                            <UserManager />
                        </TabsContent>
                        <TabsContent value="gallery">
                            <GalleryManager />
                        </TabsContent>
                        <TabsContent value="events">
                            <EventManager />
                        </TabsContent>
                        <TabsContent value="videos">
                            <VideoManager />
                        </TabsContent>
                        <TabsContent value="users"></TabsContent>
                        <TabsContent value="settings">
                            <SettingsPanel />
                        </TabsContent>
                        <TabsContent value="messages">
                            <MessagesPanel />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
