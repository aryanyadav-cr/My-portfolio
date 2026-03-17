
export default function Skills() {
const skillList = ["React", "Java", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Git" , "Node.js", "Express", "MongoDB","MySQL","Github"];

  return (
    <section id="skills" className="bg-black py-20 px-6 text-white text-center h-min-screen">
      <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-bold mb-10">My Skills</h2>
      
     
      <div data-aos="fade-up" data-aos-delay="200" className="  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skillList.map((skill) => (
        
            <div
  key={skill}
  className="p-4 cursor-pointer bg-gray-800 rounded-lg text-white 
  transform transition-all duration-500 ease-in-out
  hover:scale-110  hover:bg-blue-600 bg-blue-500 shadow-lg shadow-blue-500/50 hover:text-black"
>
        
              <p className="text-sm md:text-base font-medium">{skill}</p>
            </div>
       
        ))}
      </div>
    </section>
  );
}