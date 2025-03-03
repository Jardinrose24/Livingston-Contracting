import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

const whyChooseUs = [
  {
    title: "Experienced Team",
    description: "Our team brings years of hands-on experience in excavation and land management.",
  },
  {
    title: "Quality Work",
    description: "We take pride in our attention to detail and superior workmanship.",
  },
  {
    title: "Reliable Service",
    description: "We show up when we say we will and complete projects on schedule.",
  },
  {
    title: "Fair Pricing",
    description: "Competitive rates with no hidden fees or surprises.",
  },
  {
    title: "Local Knowledge",
    description: "Deep understanding of local terrain and conditions.",
  },
  {
    title: "Customer Satisfaction",
    description: "Our success is measured by the satisfaction of our clients.",
  },
]

const featuredProjects = [
  {
    title: "Project 1",
    description: "Description coming soon",
    image: "/placeholder.svg?height=400&width=400&text=Project+1",
  },
  {
    title: "Project 2",
    description: "Description coming soon",
    image: "/placeholder.svg?height=400&width=400&text=Project+2",
  },
]

const testimonials = [
  {
    name: "Coming Soon",
    role: "Client",
    quote: "Testimonial coming soon",
  },
  {
    name: "Coming Soon",
    role: "Client",
    quote: "Testimonial coming soon",
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Construction site"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10 py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Quality Construction & Contracting Services
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Professional contracting solutions for residential and commercial projects. Building excellence with
              integrity and craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of contracting services to meet all your construction needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Construction",
                description: "Custom home building, renovations, and additions for your dream home.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Commercial Construction",
                description: "Office buildings, retail spaces, and commercial property renovations.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Remodeling",
                description: "Kitchen, bathroom, and whole-home remodeling services.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Roofing",
                description: "Roof installation, repair, and maintenance for all types of buildings.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Interior Finishing",
                description: "Drywall, painting, flooring, and custom carpentry work.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Project Management",
                description: "Full-service project management from concept to completion.",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link href="/services" className="inline-flex items-center text-primary font-medium hover:underline">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With years of experience and a commitment to excellence, we deliver exceptional results on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border shadow-sm">
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a look at some of our recent work and see the quality we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/gallery">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white text-foreground p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="mb-4 italic">"{testimonial.quote}"</blockquote>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/testimonials">Read More Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
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
