import connectToDB from "@/database";
import Education from "@/models/Education";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const saveData = await Education.create(extractData);

    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "Data saved successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something goes wrong ! Please try again",
      });
    }
  } catch (err) {
    console.log(err);

    return NextResponse.json({
      success: false,
      message: "Something goes wrong ! Please try again",
    });
  }
}
