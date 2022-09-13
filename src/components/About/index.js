const About = () => {
  const section = {
    overflow: 'hidden',
    padding: '100px 0',
    background: '#f8f8f8',
    alignItems: 'center',
    minHeight: '100vh',
  };
  return (
    <section style={section}>
      <div style={{ padding: '2rem' }} className="md:p-12 lg:px-16 lg:py-24">
        <div
          style={{ maxWidth: '36rem', margin: '0 auto', alignItems: 'center' }}
          className="sm:text-left"
        >
          <h2 style={{ color: 'CaptionText' }} className="text-xl md:text-3xl">
            Welcome to our Math Magician page
          </h2>
          <p className=" text-gray-500 md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
            sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
            volutpat quisque ut interdum tincidunt duis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
