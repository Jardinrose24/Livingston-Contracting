import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Landscapes",
      description: "Professional landscaping services to enhance your property's beauty and functionality.",
      features: [
        "Custom landscape design",
        "Plant selection and installation",
        "Terrain modification",
        "Sustainable solutions",
      ],
      image: "/placeholder.svg?height=600&width=800&text=Landscapes",
    },
    {
      title: "Excavating",
      description: "Comprehensive excavation services for all your project needs.",
      features: ["Site preparation", "Foundation excavation", "Utility trenching", "Precise grading"],
      image: "/placeholder.svg?height=600&width=800&text=Excavating",
    },
    {
      title: "Snow Removal",
      description: "Reliable snow removal services to keep your property safe and accessible.",
      features: ["24/7 emergency service", "Commercial & residential", "Parking lot clearing", "De-icing services"],
      image: "/placeholder.svg?height=600&width=800&text=Snow+Removal",
    },
    {
      title: "Ditch Digging",
      description: "Professional ditch digging services for drainage and utilities.",
      features: ["Precise depth control", "Proper drainage slopes", "Utility preparation", "Clean execution"],
      image: "/placeholder.svg?height=600&width=800&text=Ditch+Digging",
    },
    {
      title: "Grading",
      description: "Expert grading services for proper drainage and site preparation.",
      features: ["Land leveling", "Slope creation", "Drainage optimization", "Site preparation"],
      image: "/placeholder.svg?height=600&width=800&text=Grading",
    },
    {
      title: "Gravel Driveways",
      description: "Quality gravel driveway installation and maintenance.",
      features: ["Base preparation", "Proper drainage", "Quality materials", "Long-lasting results"],
      image: "/placeholder.svg?height=600&width=800&text=Driveways",
    },
    {
      title: "Land Clearing & Management",
      description: "Comprehensive land clearing and ongoing management services.",
      features: ["Brush removal", "Tree clearing", "Property maintenance", "Site preparation"],
      image: "/placeholder.svg?height=600&width=800&text=Land+Clearing",
    },
    {
      title: "Barbed Wire Fencing",
      description: "Durable barbed wire fence installation for property security.",
      features: ["Quality materials", "Proper installation", "Gate options", "Perimeter security"],
      image: "/placeholder.svg?height=600&width=800&text=Fencing",
    },
    {
      title: "Pondscape Installation",
      description: "Custom pond design and installation for your property.",
      features: ["Site evaluation", "Custom design", "Proper excavation", "Finishing touches"],
      image: "/placeholder.svg?height=600&width=800&text=Pondscape",
    },
    {
      title: "Hardscape Construction",
      description: "Beautiful and durable hardscape solutions for your outdoor spaces.",
      features: ["Retaining walls", "Patios", "Walkways", "Stone features"],
      image: "/placeholder.svg?height=600&width=800&text=Hardscape",
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
              Professional excavation and landscaping services for all your needs. From land clearing to custom
              pondscapes, we've got you covered.
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

