import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import pb from "@/lib/pb";
import {
    Calendar,
    FileText,
    Image,
    LayoutDashboard,
    LogOut,
    Settings,
    Users,
    Users2,
    Video,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({
    activeTab,
    setActiveTab,
}: {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}) {
    const navigate = useNavigate();

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const handleLogout = () => {
        if (!confirm("Are you sure you want to logout?")) return;

        pb.authStore.clear();

        toast({
            title: "Logged out",
            description: "You have been successfully logged out",
        });
        navigate("/admin/login");
    };
    return (
        <div className="w-64 bg-card border-r flex flex-col justify-between">
            <div>
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-primary">ECUF Admin</h2>
                    <p className="text-sm text-muted-foreground">Content Management</p>
                </div>

                <nav className="px-4 space-y-2">
                    <div className="w-full">
                        <div className="flex flex-col w-full space-y-2">
                            <div
                                id="overview"
                                className={`flex items-center p-2 border rounded-sm transition-all hover:bg-gray-200 cursor-pointer w-full justify-start gap-2 px-4 ${
                                    activeTab === "overview" ? "bg-gray-200" : ""
                                }`}
                                onClick={() => handleTabClick("overview")}
                            >
                                <LayoutDashboard className="h-5 w-5" />
                                Overview
                            </div>
                            <div
                                id="content"
                                className={`flex items-center p-2 border rounded-sm transition-all hover:bg-gray-200 cursor-pointer w-full justify-start gap-2 px-4 ${
                                    activeTab === "team" ? "bg-gray-200" : ""
                                }`}
                                onClick={() => handleTabClick("team")}
                            >
                                <Users2 className="h-5 w-5" />
                                Team
                            </div>
                            <div
                                id="gallery"
                                className={`flex items-center p-2 border rounded-sm transition-all hover:bg-gray-200 cursor-pointer w-full justify-start gap-2 px-4 ${
                                    activeTab === "gallery" ? "bg-gray-200" : ""
                                }`}
                                onClick={() => handleTabClick("gallery")}
                            >
                                <Image className="h-5 w-5" />
                                Gallery
                            </div>
                            <div
                                id="events"
                                className={`flex items-center p-2 border rounded-sm transition-all hover:bg-gray-200 cursor-pointer w-full justify-start gap-2 px-4 ${
                                    activeTab === "events" ? "bg-gray-200" : ""
                                }`}
                                onClick={() => handleTabClick("events")}
                            >
                                <Calendar className="h-5 w-5" />
                                Events
                            </div>
                            <div
                                id="users"
                                className={`flex items-center p-2 border rounded-sm transition-all hover:bg-gray-200 cursor-pointer w-full justify-start gap-2 px-4 ${
                                    activeTab === "videos" ? "bg-gray-200" : ""
                                }`}
                                onClick={() => handleTabClick("videos")}
                            >
                                <Video className="h-5 w-5" />
                                Videos
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="p-2">
                <Button
                    variant="outline"
                    className="w-full border-red-300 hover:bg-red-600 hover:text-white justify-start gap-2"
                    onClick={handleLogout}
                >
                    <LogOut className="h-5 w-5" />
                    Logout
                </Button>
            </div>
        </div>
    );
}
