import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  // Sample project data
  const projects = {
    all: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      title: `Project ${i + 1}`,
      category: ["residential", "commercial", "remodeling", "roofing"][Math.floor(Math.random() * 4)],
      image: `/placeholder.svg?height=600&width=800&text=Project ${i + 1}`,
    })),
    get residential() {
      return this.all.filter((project) => project.category === "residential")
    },
    get commercial() {
      return this.all.filter((project) => project.category === "commercial")
    },
    get remodeling() {
      return this.all.filter((project) => project.category === "remodeling")
    },
    get roofing() {
      return this.all.filter((project) => project.category === "roofing")
    },
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Project Gallery</h1>
            <p className="text-xl text-muted-foreground">
              Browse through our portfolio of completed projects showcasing our quality craftsmanship and attention to
              detail.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="residential">Residential</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
                <TabsTrigger value="remodeling">Remodeling</TabsTrigger>
                <TabsTrigger value="roofing">Roofing</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.all.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="residential" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.residential.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.commercial.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="remodeling" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.remodeling.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="roofing" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.roofing.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}

function ProjectCard({ project }: { project: { id: number; title: string; category: string; image: string } }) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="aspect-[4/3] relative">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
          <h3 className="text-white text-xl font-bold">{project.title}</h3>
          <p className="text-white/80 capitalize">{project.category}</p>
        </div>
      </div>
    </div>
  )
}
