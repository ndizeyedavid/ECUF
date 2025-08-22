import pb from "@/lib/pb";

export interface loginData {
    email: string;
    password: string;
}

export async function login(data: loginData) {
    const res = await pb
        .collection("_superusers")
        .authWithPassword(data.email, data.password);
    return res;
}
