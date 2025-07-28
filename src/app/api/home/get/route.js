import connectToDB from "@/database";
import Home from "@/models/Home";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const extractData = await Home.find({});

    if (extractData) {
      return NextResponse.json({
        success: true,
        data: extractData,
      });
    } else {
      return NextResponse.jsom({
        success: false,
        message: "Something went wrong ! Please try again",
      });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.jsom({
      success: false,
      message: "Something went wrong ! Please try again",
    });
  }
}
