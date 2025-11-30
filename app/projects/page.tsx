import ProjectCard from '@/components/ProjectCard'

const dummyProjects = [
  { id: 1, title: 'Superconductor Experiment', description: 'Building a low-temp cooler. Need 800만 원.', goal: 8000000, raised: 2000000 },
  { id: 2, title: 'AI Physics Simulator', description: 'Quantum simulation tool. Seeking collaborators.', goal: 5000000, raised: 1200000 },
]

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </main>
  )
}