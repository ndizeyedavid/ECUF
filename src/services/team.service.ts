import { toast } from "@/hooks/use-toast";
import pb from "@/lib/pb";
import { TeamMember } from "@/types/teamMeber";

export async function fetchTeamMembers() {
    const res = await pb.collection("team").getFullList();
    return res;
}

export async function createTeamMember(params: TeamMember) {
    const res = await pb.collection("team").create(params);
    return res;
}

export async function deleteTeamMember(id: string, setUsers: any, users: TeamMember[]) {
    if (!confirm("Are you sure you want to delete this member?")) return;
    try {
        await pb.collection("team").delete(id);
        toast({
            title: "Success",
            description: "User deleted successfully",
        });
        setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
        toast({
            title: "Error",
            description: "Failed to delete user",
        });
    }
}
