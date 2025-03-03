import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Ditch Digging",
      description: "Professional ditch digging services for drainage, utilities, or other needs.",
      features: [
        "Precise depth and width control",
        "Proper drainage slope",
        "Clean and efficient execution",
        "Site cleanup after completion",
      ],
      image: "/placeholder.svg?height=600&width=800&text=Ditch+Digging",
    },
    {
      title: "Grading",
      description: "Expert land grading services to ensure proper drainage and site preparation.",
      features: ["Level surfaces for construction", "Drainage optimization", "Site preparation", "Erosion control"],
      image: "/placeholder.svg?height=600&width=800&text=Grading",
    },
    {
      title: "Gravel Driveways",
      description: "Quality gravel driveway installation and maintenance.",
      features: [
        "Proper base preparation",
        "Quality gravel selection",
        "Drainage consideration",
        "Professional installation",
      ],
      image: "/placeholder.svg?height=600&width=800&text=Driveways",
    },
    {
      title: "Land Clearing & Management",
      description: "Comprehensive land clearing and ongoing management services.",
      features: ["Brush removal", "Tree clearing", "Site preparation", "Land maintenance"],
      image: "/placeholder.svg?height=600&width=800&text=Land+Clearing",
    },
    {
      title: "Barbed Wire Fencing",
      description: "Durable barbed wire fence installation for property security.",
      features: ["Quality materials", "Proper post installation", "Secure wire installation", "Gate installation"],
      image: "/placeholder.svg?height=600&width=800&text=Fencing",
    },
    {
      title: "General Yard Excavation",
      description: "Comprehensive yard excavation services for various needs.",
      features: ["Pool excavation", "Foundation preparation", "Landscaping preparation", "Site cleanup"],
      image: "/placeholder.svg?height=600&width=800&text=Excavation",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional excavation and land management services for all your needs. From ditch digging to land
              clearing, we've got you covered.
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
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index !== 0 ? "mt-24" : ""
              } ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={index % 2 === 1 ? "order-1 lg:order-2" : ""}>
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
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
              <div
                className={`relative h-[400px] rounded-lg overflow-hidden ${
                  index % 2 === 1 ? "order-2 lg:order-1" : ""
                }`}
              >
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-muted py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Need Something Else?</h2>
          <p className="text-xl mb-8">
            Have a different excavation project in mind? Request a quote and we'll let you know if we can help!
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

