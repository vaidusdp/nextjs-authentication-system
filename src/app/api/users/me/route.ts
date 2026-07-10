import { getDataFromToken } from "@/helpers/getDataFromToken";

import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModels"
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            messgae: "User Found",
            data: user
        });
    } catch (error:any) {
        return NextResponse.json({message: error.message}, {status: 500});
    }
}