import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive contracting solutions for all your construction needs. From residential to commercial
              projects, we deliver quality results.
            </p>
            <Button asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24">
        <div className="container">
          {[
            {
              title: "Residential Construction",
              description:
                "Building custom homes and renovating existing properties to create your dream living space.",
              features: [
                "Custom home building",
                "Home additions and extensions",
                "Basement finishing",
                "Garage construction",
                "Deck and patio construction",
              ],
              image: "/placeholder.svg?height=600&width=800&text=Residential",
            },
            {
              title: "Commercial Construction",
              description:
                "Creating functional, attractive spaces for businesses of all sizes, from office buildings to retail stores.",
              features: [
                "Office building construction",
                "Retail space development",
                "Restaurant build-outs",
                "Medical facility construction",
                "Warehouse and industrial buildings",
              ],
              image: "/placeholder.svg?height=600&width=800&text=Commercial",
              reverse: true,
            },
            {
              title: "Remodeling & Renovations",
              description: "Transforming existing spaces to improve functionality, aesthetics, and value.",
              features: [
                "Kitchen remodeling",
                "Bathroom renovations",
                "Whole-home renovations",
                "Historic property restoration",
                "Accessibility modifications",
              ],
              image: "/placeholder.svg?height=600&width=800&text=Remodeling",
            },
            {
              title: "Roofing Services",
              description:
                "Expert roofing installation, repair, and maintenance for residential and commercial properties.",
              features: [
                "Roof installation",
                "Roof repair and maintenance",
                "Shingle, metal, and flat roofing",
                "Gutter installation",
                "Roof inspections",
              ],
              image: "/placeholder.svg?height=600&width=800&text=Roofing",
              reverse: true,
            },
            {
              title: "Interior Finishing",
              description: "Adding the final touches that make a space beautiful, functional, and uniquely yours.",
              features: [
                "Drywall installation and finishing",
                "Custom carpentry and trim work",
                "Painting and wallpaper",
                "Flooring installation",
                "Cabinet installation",
              ],
              image: "/placeholder.svg?height=600&width=800&text=Interior",
            },
            {
              title: "Project Management",
              description: "Comprehensive oversight of your construction project from concept to completion.",
              features: [
                "Budget development and management",
                "Schedule creation and monitoring",
                "Subcontractor coordination",
                "Permit acquisition",
                "Quality control inspections",
              ],
              image: "/placeholder.svg?height=600&width=800&text=Management",
              reverse: true,
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index !== 0 ? "mt-24" : ""} ${service.reverse ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={service.reverse ? "order-1 lg:order-2" : ""}>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link href="/contact">Inquire About This Service</Link>
                </Button>
              </div>
              <div
                className={`relative h-[400px] rounded-lg overflow-hidden ${service.reverse ? "order-2 lg:order-1" : ""}`}
              >
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to ensure every project is completed successfully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We meet to discuss your project goals, budget, and timeline.",
              },
              {
                step: "02",
                title: "Planning & Design",
                description: "We develop detailed plans and designs tailored to your needs.",
              },
              {
                step: "03",
                title: "Construction",
                description: "Our skilled team brings your project to life with quality craftsmanship.",
              },
              {
                step: "04",
                title: "Completion",
                description: "Final inspections ensure everything meets our high standards.",
              },
            ].map((process, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border shadow-sm">
                <div className="text-4xl font-bold text-primary mb-4">{process.step}</div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and quote. Let's bring your vision to life.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
