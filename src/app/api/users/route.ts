import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";
import sql from "mssql";

export async function POST(req: Request) {
  try {
    const { name, email, phone, company } = await req.json();

    if (!name || !email || !phone || !company) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const pool = await getDbConnection();
    const result = await pool
      .request()
      .input("name", sql.NVarChar, name)
      .input("email", sql.NVarChar, email)
      .input("phone", sql.NVarChar, phone || null)
      .input("company", sql.NVarChar, company).query(`
        INSERT INTO users (name, email, phone, company)
        OUTPUT INSERTED.id
        VALUES (@name, @email, @phone, @company)
      `);

    const userId = result.recordset[0].id;

    // Send confirmation email
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, userId, company }),
    });

    return NextResponse.json(
      { success: "User added and email sent successfully", userId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to save user" }, { status: 500 });
  }
}
