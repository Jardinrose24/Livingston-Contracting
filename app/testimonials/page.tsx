import Image from "next/image"
import { Star } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "John Smith",
      role: "Homeowner",
      image: "/placeholder.svg?height=200&width=200&text=John",
      quote:
        "Logan and his team did an amazing job on our kitchen renovation. They were professional, on time, and the quality of work exceeded our expectations. I would highly recommend them to anyone looking for quality contracting services.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      image: "/placeholder.svg?height=200&width=200&text=Sarah",
      quote:
        "We hired Logan Livingston Contracting for our office remodel and couldn't be happier with the results. The project was completed on schedule and within budget. Their attention to detail and communication throughout the process was exceptional.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      role: "Property Manager",
      image: "/placeholder.svg?height=200&width=200&text=Michael",
      quote:
        "I've worked with many contractors over the years, and Logan Livingston Contracting stands out for their attention to detail and excellent communication throughout the project. They're my go-to for all property maintenance and renovation needs.",
      rating: 5,
    },
    {
      name: "Jennifer Davis",
      role: "Homeowner",
      image: "/placeholder.svg?height=200&width=200&text=Jennifer",
      quote:
        "The team at Logan Livingston Contracting transformed our outdated bathroom into a beautiful, modern space. They were respectful of our home, cleaned up thoroughly each day, and delivered exceptional quality work.",
      rating: 5,
    },
    {
      name: "Robert Wilson",
      role: "Restaurant Owner",
      image: "/placeholder.svg?height=200&width=200&text=Robert",
      quote:
        "When we needed to renovate our restaurant, Logan Livingston Contracting understood the importance of minimizing downtime. They worked efficiently, often during off-hours, to complete the project with minimal disruption to our business.",
      rating: 4,
    },
    {
      name: "Emily Thompson",
      role: "Real Estate Developer",
      image: "/placeholder.svg?height=200&width=200&text=Emily",
      quote:
        "As a developer, I need contractors I can trust to deliver quality work on time and on budget. Logan Livingston Contracting has been a reliable partner on multiple projects, consistently exceeding expectations.",
      rating: 5,
    },
    {
      name: "David Martinez",
      role: "Office Manager",
      image: "/placeholder.svg?height=200&width=200&text=David",
      quote:
        "Our office renovation was a complex project with specific requirements. Logan and his team listened carefully to our needs and delivered a space that perfectly balances functionality and aesthetics.",
      rating: 5,
    },
    {
      name: "Lisa Anderson",
      role: "Homeowner",
      image: "/placeholder.svg?height=200&width=200&text=Lisa",
      quote:
        "We hired Logan Livingston Contracting for a major home addition. Throughout the project, they were professional, responsive, and committed to quality. The finished result is everything we hoped for and more.",
      rating: 4,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it. Here's what our satisfied clients have to say about our work.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg border shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`}
                    />
                  ))}
                </div>
                <blockquote className="italic">"{testimonial.quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Satisfied Clients?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project and experience the Logan Livingston Contracting difference.
          </p>
          <div className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-10 px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90">
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </section>
    </>
  )
}
