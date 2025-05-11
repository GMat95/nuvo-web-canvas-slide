
const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and challenges through a detailed consultation.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Our team develops a tailored strategy and solution roadmap aligned with your business objectives.",
    },
    {
      number: "03",
      title: "Design & Development",
      description: "We create and build your solution with attention to detail, ensuring quality and performance.",
    },
    {
      number: "04",
      title: "Testing",
      description: "Rigorous testing ensures your solution works flawlessly across all platforms and devices.",
    },
    {
      number: "05",
      title: "Launch",
      description: "We carefully deploy your solution and provide support during the critical launch phase.",
    },
    {
      number: "06",
      title: "Optimization",
      description: "Continuous improvement and optimization keep your solution performing at its best.",
    },
  ];

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-nuvo-dark mb-4">
            Our <span className="text-nuvo-purple">Process</span>
          </h2>
          <p className="text-nuvo-gray">
            We follow a structured approach to ensure your project is delivered efficiently and exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative p-6 border border-gray-100 rounded-lg bg-white shadow-sm card-hover"
            >
              <span className="absolute -top-4 -left-4 bg-nuvo-purple text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-nuvo-dark mt-4 mb-3">{step.title}</h3>
              <p className="text-nuvo-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
