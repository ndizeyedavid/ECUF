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
  MessagesSquare,
  Settings,
  User,
  Users,
  Users2,
  Video,
  X,
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
    <div
      id="mobile-sidebar"
      className="fixed lg:relative w-64 bg-card border-r flex flex-col justify-between h-full -translate-x-full lg:translate-x-[0px] transition-transform duration-300 z-50"
    >
      <div>
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-primary">
                ECUF Admin
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Content Management
              </p>
            </div>
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
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <nav className="px-3 sm:px-4 space-y-2">
          <div className="w-full">
            <div className="flex flex-col w-full space-y-1.5 sm:space-y-2">
              <div
                id="overview"
                className={`flex items-center p-2 border rounded-sm transition-all hover:bg-gray-200 cursor-pointer w-full justify-start gap-2 px-3 sm:px-4 text-sm sm:text-base ${
                  activeTab === "overview" ? "bg-gray-200" : ""
                }`}
                onClick={() => {
                  handleTabClick("overview");
                  document
                    .getElementById("mobile-sidebar")
                    ?.classList.toggle("translate-x-[0px]");
                }}
              >
                <LayoutDashboard className="h-4 w-4 sm:h-5 sm:w-5" />
                Overview
              </div>
              <div
                id="content"
                className={`flex items-center p-2 border rounded-sm transition-all hover:bg-gray-200 cursor-pointer w-full justify-start gap-2 px-3 sm:px-4 text-sm sm:text-base ${
                  activeTab === "team" ? "bg-gray-200" : ""
                }`}
                onClick={() => {
                  handleTabClick("team");
                  document
                    .getElementById("mobile-sidebar")
                    ?.classList.toggle("translate-x-[0px]");
                }}
              >
                <Users2 className="h-4 w-4 sm:h-5 sm:w-5" />
                Team
              </div>
              <div
                id="gallery"
                className={`flex items-center p-2 border rounded-sm transition-all hover:bg-gray-200 cursor-pointer w-full justify-start gap-2 px-3 sm:px-4 text-sm sm:text-base ${
                  activeTab === "gallery" ? "bg-gray-200" : ""
                }`}
                onClick={() => {
                  handleTabClick("gallery");
                  document
                    .getElementById("mobile-sidebar")
                    ?.classList.toggle("translate-x-[0px]");
                }}
              >
                <Image className="h-4 w-4 sm:h-5 sm:w-5" />
                Gallery
              </div>
              <div
                id="events"
                className={`flex items-center p-2 border rounded-sm transition-all hover:bg-gray-200 cursor-pointer w-full justify-start gap-2 px-3 sm:px-4 text-sm sm:text-base ${
                  activeTab === "events" ? "bg-gray-200" : ""
                }`}
                onClick={() => {
                  handleTabClick("events");
                  document
                    .getElementById("mobile-sidebar")
                    ?.classList.toggle("translate-x-[0px]");
                }}
              >
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                Events
              </div>
              <div
                id="videos"
                className={`flex items-center p-2 border rounded-sm transition-all hover:bg-gray-200 cursor-pointer w-full justify-start gap-2 px-3 sm:px-4 text-sm sm:text-base ${
                  activeTab === "videos" ? "bg-gray-200" : ""
                }`}
                onClick={() => {
                  handleTabClick("videos");
                  document
                    .getElementById("mobile-sidebar")
                    ?.classList.toggle("translate-x-[0px]");
                }}
              >
                <Video className="h-4 w-4 sm:h-5 sm:w-5" />
                Videos
              </div>
              <div
                id="messages"
                className={`flex items-center p-2 border rounded-sm transition-all hover:bg-gray-200 cursor-pointer w-full justify-start gap-2 px-3 sm:px-4 text-sm sm:text-base ${
                  activeTab === "messages" ? "bg-gray-200" : ""
                }`}
                onClick={() => {
                  handleTabClick("messages");
                  document
                    .getElementById("mobile-sidebar")
                    ?.classList.toggle("translate-x-[0px]");
                }}
              >
                <MessagesSquare className="h-4 w-4 sm:h-5 sm:w-5" />
                Messages
              </div>
              <div
                id="account"
                className={`flex items-center p-2 border rounded-sm transition-all hover:bg-gray-200 cursor-pointer w-full justify-start gap-2 px-3 sm:px-4 text-sm sm:text-base ${
                  activeTab === "account" ? "bg-gray-200" : ""
                }`}
                onClick={() => {
                  handleTabClick("account");
                  document
                    .getElementById("mobile-sidebar")
                    ?.classList.toggle("translate-x-[0px]");
                }}
              >
                <User className="h-4 w-4 sm:h-5 sm:w-5" />
                Account
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="p-2">
        <Button
          variant="outline"
          size="sm"
          className="w-full border-red-300 hover:bg-red-600 hover:text-white justify-start gap-2 text-sm sm:text-base"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4 sm:h-5 sm:w-5" />
          Logout
        </Button>
      </div>
    </div>
  );
}
