// This is a Server Component - it runs on the server
async function getStats() {
  // Simulate fetching data from a database or API
  // In a real app, this would be an actual database query
  await new Promise(resolve => setTimeout(resolve, 100)); // Simulate delay
  
  return {
    projects: 25,
    clients: 18,
    yearsExperience: 3,
    satisfactionRate: 98
  };
}

export default async function StatsSection() {
  const stats = await getStats();

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Impact in Numbers</h2>
          <p className="text-xl opacity-90">
            Real results from real projects
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">{stats.projects}+</div>
            <div className="text-lg opacity-90">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">{stats.clients}+</div>
            <div className="text-lg opacity-90">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">{stats.yearsExperience}+</div>
            <div className="text-lg opacity-90">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">{stats.satisfactionRate}%</div>
            <div className="text-lg opacity-90">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
