import { NextRequest, NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";
import sql from "mssql";

export async function PATCH(req: NextRequest) {
  try {
    // Parse request body and route param
    const { confirmed, declined, userId: id } = await req.json();
    const userId = parseInt(id, 10);

    if (isNaN(userId)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    if (confirmed === undefined && declined === undefined) {
      return NextResponse.json(
        { error: "No valid update fields provided" },
        { status: 400 }
      );
    }

    const pool = await getDbConnection();
    const request = pool.request().input("id", sql.Int, userId);

    // Conditionally update confirmed or declined
    if (confirmed !== undefined) {
      request.input("confirmed", sql.Bit, confirmed);
      await request.query(
        "UPDATE users SET confirmed = @confirmed WHERE id = @id"
      );
    } else if (declined !== undefined) {
      request.input("declined", sql.Bit, declined);
      await request.query(
        "UPDATE users SET declined = @declined WHERE id = @id"
      );
    }

    return NextResponse.json(
      { success: "User status updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}
