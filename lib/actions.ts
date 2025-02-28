"use server"

import { google } from "googleapis"

type FormData = {
  name: string
  email: string
  job: string
  comments: string
}

export async function submitToGoogleSheets(formData: FormData) {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.job) {
      return {
        success: false,
        message: "Please fill in all required fields",
      }
    }

    // In a production environment, you would use environment variables for these credentials
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

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
        values: [[formData.name, formData.email, formData.job, formData.comments, timestamp]],
      },
    })

    return {
      success: true,
      message: "Form submitted successfully",
    }
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error)
    return {
      success: false,
      message: "An error occurred while submitting the form",
    }
  }
}

