import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Trash2, UserPlus, Mail, Phone, Upload } from "lucide-react";
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import {
    createTeamMember,
    deleteTeamMember,
    fetchTeamMembers,
} from "@/services/team.service";
import { TeamMember } from "@/types/teamMeber";
import pb from "@/lib/pb";

const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    role: z.string().min(1, "Role is required"),
    image: z.any(),
});

type FormValues = z.infer<typeof formSchema>;

const UserManager = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState<TeamMember[]>([]);
    const { toast } = useToast();

    useEffect(() => {
        (async () => {
            const res: any = await fetchTeamMembers();
            setUsers(res as TeamMember[]);
        })();
    }, []);

    const form = useForm();

    const onSubmit = async (data: FormValues) => {
        setIsLoading(true);
        try {
            console.log("Creating user:", data);

            const res: any = await createTeamMember(data as TeamMember);
            setUsers([...users, res]);

            toast({
                title: "Success",
                description: "User created successfully",
            });
        } catch (error) {
            console.error(error);
            toast({
                variant: "destructive",
                title: "Error",
                description: "Failed to create user",
            });
        } finally {
            form.reset();

            setIsLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        console.log("Deleting user:", id);

        await deleteTeamMember(id, setUsers, users);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Team Manager</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Add New Member</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-4"
                            >
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter full name"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone Number</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="tel"
                                                    placeholder="Enter phone number"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="role"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Role</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    placeholder="Enter member's role"
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
                                    <UserPlus className="h-5 w-5" />
                                    {isLoading ? "Adding..." : "Add User"}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Team List</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4 overflow-auto h-[500px]">
                            {users.map((user) => (
                                <div
                                    key={user.id}
                                    className="flex items-center justify-between p-4 border rounded-lg"
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={pb.files.getURL(user, user.image)}
                                            width={80}
                                            height={80}
                                            className="rounded-lg size-[100px] object-cover"
                                            alt="Profile"
                                        />

                                        <div className="space-y-1">
                                            <h4 className="font-medium capitalize">
                                                {user.name}
                                            </h4>
                                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                                <Phone className="h-4 w-4" />
                                                <span>{user.phone}</span>
                                            </div>
                                            <div className="mt-1">
                                                <span className=" capitalize text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                                    {user.role}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleDelete(user.id)}
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

export default UserManager;
