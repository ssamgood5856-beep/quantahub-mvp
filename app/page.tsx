export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">QuantaHub</h1>
          <p className="text-xl text-gray-600 mb-8">Science Collaboration & Funding Platform</p>
          <a href="/projects/new" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Start New Project
          </a>
        </div>
        <div className="mt-12">
          <a href="/projects" className="text-blue-600 hover:underline">View Projects</a>
        </div>
      </div>
    </main>
  )
}