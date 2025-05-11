
const About = () => {
  return (
    <section id="about" className="section-padding bg-nuvo-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-nuvo-purple rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="NUVO team at work"
                className="w-full rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-nuvo-dark mb-6">
              About <span className="text-nuvo-purple">NUVO</span>
            </h2>
            
            <p className="text-nuvo-gray mb-6">
              NUVO is a forward-thinking digital agency focused on helping local businesses succeed in the digital landscape. 
              Our team combines technical expertise with creative solutions to deliver exceptional results for our clients.
            </p>
            
            <p className="text-nuvo-gray mb-6">
              We believe that every business, regardless of size, deserves access to cutting-edge technology and 
              professional services that can help them grow and thrive in today's competitive market.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-nuvo-dark mb-2">Our Mission</h3>
                <p className="text-nuvo-gray">
                  To empower local businesses with technology solutions that drive growth and success.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-nuvo-dark mb-2">Our Vision</h3>
                <p className="text-nuvo-gray">
                  To be the trusted technology partner for local businesses nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
