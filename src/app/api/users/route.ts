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

    return NextResponse.json(
      { success: "User added successfully", userId: result.recordset[0].id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to save user" }, { status: 500 });
  }
}
