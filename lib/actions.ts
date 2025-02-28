"use server"

import { google } from "googleapis"

type FormData = {
  name: string
  email: string
  job: string
  comments: string
}

export async function submitToGoogleSheets(formData: FormData) {
  console.log("Starting form submission...")

  try {
    // First, let's check if we have all required environment variables
    if (!process.env.GOOGLE_CLIENT_EMAIL) {
      console.error("Missing GOOGLE_CLIENT_EMAIL")
      throw new Error("Missing Google client email configuration")
    }

    if (!process.env.GOOGLE_PRIVATE_KEY) {
      console.error("Missing GOOGLE_PRIVATE_KEY")
      throw new Error("Missing Google private key configuration")
    }

    if (!process.env.GOOGLE_SHEET_ID) {
      console.error("Missing GOOGLE_SHEET_ID")
      throw new Error("Missing Google Sheet ID configuration")
    }

    console.log("Environment variables verified")

    // Log the first few characters of each credential (for debugging)
    console.log("Client Email starts with:", process.env.GOOGLE_CLIENT_EMAIL.substring(0, 5))
    console.log("Sheet ID starts with:", process.env.GOOGLE_SHEET_ID.substring(0, 5))

    // Format the private key correctly
    // The key from Vercel might have literal \n strings that need to be converted to actual newlines
    const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")

    console.log("Initializing Google Auth...")

    // Initialize the Google Auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    console.log("Google Auth initialized, creating sheets client...")

    // Create the sheets client
    const sheets = google.sheets({ version: "v4", auth })

    console.log("Preparing data for submission...")

    // Prepare the data row
    const row = [formData.name, formData.email, formData.job, formData.comments || "", new Date().toISOString()]

    console.log("Attempting to append data to sheet...")

    // Attempt to append the data
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1", // This will append to the first empty row
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [row],
      },
    })

    console.log("Successfully appended data:", response.data)

    return {
      success: true,
      message: "Thank you! Your message has been submitted successfully.",
    }
  } catch (error) {
    // Log the full error for debugging
    console.error("Error in submitToGoogleSheets:", error)

    // Check for specific error types
    if (error instanceof Error) {
      if (error.message.includes("invalid_grant")) {
        console.error("Authentication error - check credentials")
        return {
          success: false,
          message: "Server configuration error (invalid_grant). Please contact support.",
        }
      }
      if (error.message.includes("insufficient permission")) {
        console.error("Permission error - check sheet permissions")
        return {
          success: false,
          message: "Server configuration error (permissions). Please contact support.",
        }
      }
    }

    return {
      success: false,
      message: "An error occurred while submitting the form. Please try again later.",
    }
  }
}

