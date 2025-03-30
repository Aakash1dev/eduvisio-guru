
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  BarChart3, 
  BrainCircuit, 
  FileUp, 
  Home, 
  Library, 
  LogOut, 
  Settings, 
  GraduationCap,
  Brain
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isCollapsed, toggleSidebar }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast({
      title: "Logged out successfully",
      description: "See you soon!",
    });
    navigate("/login");
  };

  const sidebarItems = [
    {
      title: "Dashboard",
      icon: Home,
      href: "/dashboard",
    },
    {
      title: "Learning Materials",
      icon: Library,
      href: "/materials",
    },
    {
      title: "Upload Content",
      icon: FileUp,
      href: "/upload",
    },
    {
      title: "My Quizzes",
      icon: BookOpen,
      href: "/quizzes",
    },
    {
      title: "Generate Quiz",
      icon: Brain,
      href: "/generate-quiz",
    },
    {
      title: "Progress Analytics",
      icon: BarChart3,
      href: "/analytics",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/settings",
    },
  ];

  return (
    <aside
      className={cn(
        "bg-sidebar border-r border-gray-200 flex flex-col justify-between transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="px-3 py-4">
        <div className="flex items-center mb-8 justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <BrainCircuit className="h-8 w-8 text-brand-600" />
              <span className="text-xl font-bold text-brand-600">EduVisio</span>
            </div>
          )}
          {isCollapsed && (
            <div className="flex justify-center w-full">
              <BrainCircuit className="h-8 w-8 text-brand-600" />
            </div>
          )}
        </div>
        <ScrollArea className="h-[calc(100vh-10rem)]">
          <div className="space-y-1 py-2">
            {sidebarItems.map((item) => (
              <Button
                key={item.href}
                variant={location.pathname === item.href ? "default" : "ghost"}
                size={isCollapsed ? "icon" : "default"}
                className={cn(
                  "w-full justify-start",
                  location.pathname === item.href
                    ? "bg-brand-600 text-white hover:bg-brand-700"
                    : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
                onClick={() => navigate(item.href)}
              >
                <item.icon className={cn("h-5 w-5", isCollapsed ? "" : "mr-2")} />
                {!isCollapsed && <span>{item.title}</span>}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="p-3 pt-0">
        <Button
          variant="ghost"
          size={isCollapsed ? "icon" : "default"}
          className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut className={cn("h-5 w-5", isCollapsed ? "" : "mr-2")} />
          {!isCollapsed && <span>Logout</span>}
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
