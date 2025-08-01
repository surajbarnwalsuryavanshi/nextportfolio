import connectToDB from "@/database";
import Experience from "@/models/Experience";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const extractData = await Experience.find({});

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
