import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Logan Livingston",
      role: "Founder",
      description:
        "With 4 years of experience in fabrication and machining, as well as a year of farm work, Logan Livingston, the founder of Livingston Excavation, has proven himself to be a hard worker.",
      image: "/placeholder.svg?height=400&width=400&text=Logan",
    },
    {
      name: "Joc",
      role: "Team Member",
      description: "Description coming soon",
      image: "/placeholder.svg?height=400&width=400&text=Joc",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-muted-foreground">
              Dedicated professionals committed to delivering quality results on every project.
            </p>
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-16">
        <div className="container">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1600&text=Team+Photo"
              alt="Livingston Contracting Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="relative w-full md:w-1/2 aspect-square rounded-lg overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-muted py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">Contact us today to discuss your needs and get a free quote.</p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

