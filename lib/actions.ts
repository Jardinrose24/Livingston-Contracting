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
    // Validate environment variables
    if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
      console.error("Missing required environment variables")
      return {
        success: false,
        message: "Server configuration error. Please try again later.",
      }
    }

    // Validate required fields
    if (!formData.name || !formData.email || !formData.job) {
      return {
        success: false,
        message: "Please fill in all required fields",
      }
    }

    // Initialize Google Sheets API
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      })

      const sheets = google.sheets({ version: "v4", auth })

      // Log successful authentication
      console.log("Successfully authenticated with Google Sheets API")

      // Prepare the data row
      const timestamp = new Date().toISOString()
      const row = [
        formData.name,
        formData.email,
        formData.job,
        formData.comments || "", // Handle empty comments
        timestamp,
      ]

      // Append data to the sheet
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "Sheet1!A:E", // Assuming first sheet with columns A-E
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [row],
        },
      })

      // Log successful submission
      console.log("Successfully appended data to sheet:", response.data.updates)

      return {
        success: true,
        message: "Thank you! Your message has been submitted successfully.",
      }
    } catch (error) {
      // Log the specific Google Sheets API error
      console.error("Google Sheets API Error:", error)
      throw error
    }
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error submitting to Google Sheets:", error)
    return {
      success: false,
      message: "An error occurred while submitting the form. Please try again later.",
    }
  }
}

