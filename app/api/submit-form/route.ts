import { NextResponse } from "next/server"
import { google } from "googleapis"

// This function would authenticate with Google Sheets API
async function getGoogleSheetsAuth() {
  try {
    // In a real implementation, you would use environment variables for these credentials
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    return auth
  } catch (error) {
    console.error("Error authenticating with Google:", error)
    throw new Error("Failed to authenticate with Google")
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, job, comments } = data

    // Validate required fields
    if (!name || !email || !job) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Get Google Sheets authentication
    const auth = await getGoogleSheetsAuth()
    const sheets = google.sheets({ version: "v4", auth })

    // The ID of your Google Sheet - would come from environment variable
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    // Append the data to the sheet
    // Format: [name, email, job, comments, timestamp]
    const timestamp = new Date().toISOString()
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:E", // Assuming first sheet with columns A-E
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, email, job, comments, timestamp]],
      },
    })

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    })
  } catch (error) {
    console.error("Error submitting form:", error)
    return NextResponse.json({ success: false, message: "Failed to submit form" }, { status: 500 })
  }
}

