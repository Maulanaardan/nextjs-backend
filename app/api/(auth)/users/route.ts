import connect from "@/lib/db"
import User from "@/lib/modals/user"
import { NextResponse } from "next/server";

export const GET = async () => {
    try{
        await connect();
        const users = await User.find();
        return new NextResponse(JSON.stringify(users), {status: 200});
    }catch (error: any) {
        return new NextResponse("error while fetching" + error, {status: 500});
    }
}