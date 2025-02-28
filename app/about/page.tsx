import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Clock, Users, Briefcase } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Logan Livingston Contracting</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Building excellence through quality craftsmanship and exceptional service since 2010.
              </p>
              <p className="mb-8">
                Logan Livingston Contracting is a full-service contracting company dedicated to delivering high-quality
                construction services for residential and commercial clients. With a focus on craftsmanship,
                reliability, and customer satisfaction, we've built a reputation as one of the most trusted contractors
                in the region.
              </p>
              <Button asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Company Image"
                alt="About Logan Livingston Contracting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming a leading contracting company.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="mb-4">
                Founded in 2010 by Logan Livingston, our company began with a simple mission: to provide quality
                construction services with integrity and dedication. Logan started as a solo contractor, taking on small
                residential projects and building a reputation for exceptional craftsmanship and reliability.
              </p>
              <p className="mb-4">
                As word spread about the quality of our work, the company grew steadily. We expanded our team with
                skilled professionals who share our commitment to excellence and attention to detail. Today, Logan
                Livingston Contracting has evolved into a full-service contracting company capable of handling projects
                of all sizes, from home renovations to commercial construction.
              </p>
              <p>
                Throughout our growth, we've maintained our core values of quality, integrity, and customer
                satisfaction. Every project we undertake reflects our dedication to these principles, and we're proud of
                the lasting relationships we've built with our clients over the years.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Our Story"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Award className="h-10 w-10 mx-auto mb-4" />, value: "12+", label: "Years Experience" },
              { icon: <Users className="h-10 w-10 mx-auto mb-4" />, value: "250+", label: "Happy Clients" },
              { icon: <Briefcase className="h-10 w-10 mx-auto mb-4" />, value: "500+", label: "Projects Completed" },
              { icon: <Clock className="h-10 w-10 mx-auto mb-4" />, value: "98%", label: "On-Time Completion" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                {stat.icon}
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our skilled professionals bring expertise and dedication to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Logan Livingston",
                role: "Founder & CEO",
                bio: "With over 20 years of experience in construction, Logan leads our team with expertise and vision.",
                image: "/placeholder.svg?height=400&width=400&text=Logan",
              },
              {
                name: "Sarah Mitchell",
                role: "Project Manager",
                bio: "Sarah ensures that every project runs smoothly, on time, and within budget.",
                image: "/placeholder.svg?height=400&width=400&text=Sarah",
              },
              {
                name: "Michael Rodriguez",
                role: "Lead Architect",
                bio: "Michael brings creative design solutions and technical expertise to every project.",
                image: "/placeholder.svg?height=400&width=400&text=Michael",
              },
              {
                name: "Jennifer Lee",
                role: "Interior Designer",
                bio: "Jennifer specializes in creating beautiful, functional spaces tailored to client needs.",
                image: "/placeholder.svg?height=400&width=400&text=Jennifer",
              },
              {
                name: "David Thompson",
                role: "Construction Supervisor",
                bio: "David oversees on-site operations, ensuring quality and safety standards are met.",
                image: "/placeholder.svg?height=400&width=400&text=David",
              },
              {
                name: "Emily Wilson",
                role: "Client Relations Manager",
                bio: "Emily is dedicated to ensuring exceptional client experiences from start to finish.",
                image: "/placeholder.svg?height=400&width=400&text=Emily",
              },
            ].map((member, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden border shadow-sm">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and relationships with clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description:
                  "We never compromise on quality. Every aspect of our work meets the highest standards of craftsmanship.",
              },
              {
                title: "Integrity",
                description:
                  "We conduct our business with honesty, transparency, and ethical practices in all our dealings.",
              },
              {
                title: "Reliability",
                description:
                  "Our clients can count on us to deliver on our promises, meet deadlines, and stay within budget.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace new technologies and methods to improve efficiency and deliver better results.",
              },
              {
                title: "Safety",
                description: "The safety of our team and clients is paramount in every project we undertake.",
              },
              {
                title: "Customer Focus",
                description: "We listen to our clients' needs and work collaboratively to bring their vision to life.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Contact us today to discuss your project needs and how we can help bring your vision to life.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
