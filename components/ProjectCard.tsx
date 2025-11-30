interface ProjectCardProps {
  id: number
  title: string
  description: string
  goal: number
  raised: number
}

export default function ProjectCard({ title, description, goal, raised }: ProjectCardProps) {
  const progress = ((raised / goal) * 100).toFixed(1)

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-sm text-gray-500">{progress}% raised ({raised.toLocaleString()} / {goal.toLocaleString()} KRW)</p>
    </div>
  )
}