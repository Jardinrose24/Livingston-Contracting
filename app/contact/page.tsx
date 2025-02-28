"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, AlertCircle, CheckCircle, Loader2 } from "lucide-react"
import { submitToGoogleSheets } from "@/lib/actions"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    job: "",
    comments: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({})

    try {
      console.log("Submitting form data:", formData) // Debug log

      const result = await submitToGoogleSheets(formData)
      console.log("Submission result:", result) // Debug log

      setFormStatus(result)

      if (result.success) {
        setFormData({
          name: "",
          email: "",
          job: "",
          comments: "",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error) // Debug log
      setFormStatus({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our team to discuss your project needs or request a quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-lg border shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {formStatus.message && (
                  <div
                    className={`p-4 rounded-md ${
                      formStatus.success
                        ? "bg-green-50 border border-green-200 text-green-700"
                        : "bg-red-50 border border-red-200 text-red-700"
                    }`}
                  >
                    <div className="flex items-start">
                      {formStatus.success ? (
                        <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                      )}
                      <p>{formStatus.message}</p>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      disabled={isSubmitting}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                      disabled={isSubmitting}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="job" className="block text-sm font-medium mb-1">
                      Project Type <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="job"
                      name="job"
                      value={formData.job}
                      onChange={handleChange}
                      placeholder="Type of project (e.g., Kitchen Remodel, New Construction)"
                      required
                      disabled={isSubmitting}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="comments" className="block text-sm font-medium mb-1">
                      Project Details
                    </label>
                    <Textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      placeholder="Tell us more about your project requirements and timeline"
                      rows={5}
                      disabled={isSubmitting}
                      className="w-full"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your information will be securely stored and never shared with third parties.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Construction Ave
                      <br />
                      Building City, ST 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Monday-Friday, 8am-5pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@loganlivingstoncontracting.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="bg-muted rounded-lg overflow-hidden h-[400px] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted-foreground">Map would be embedded here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

