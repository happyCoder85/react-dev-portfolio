import React from 'react'
const ProjectsCard = () => {
  const currentProjects = [
    {
      title: 'Fake Sites',
      subheading: 'A playground for Imaginary Clients',
      description: 'Fake Sites is my personal sandbox for honing my full-stack development skills. It\'s a collection of websites built for imaginary clients, each with their own unique persona, needs, and business goals.',
      creativeProcess: [
        'Persona Creation: I start by crafting detailed personas for my fictional clients. This includes their industry, target audience, brand personality, and any specific challenges they might be facing.',
        'Requirement Generation: Based on the persona, I outline a set of business requirements for their website. This encompasses everything from the site\'s purpose and core features to its overall design and functionality.',
        'Development and Iteration: I then translate these requirements into a functional website, starting with simpler layouts and basic features. As my skills progress, I gradually introduce more complex elements like interactive dashboards, forums, and e-commerce capabilities.',
      ],
      github: 'https://github.com/your-github-username/fake-sites', 
      link: 'https://www.your-fake-sites-website.com' 
  },
  {/*
    title: 'Fake Sites',
    subheading: 'A playground for Imaginary Clients',
    description: 'Fake Sites is my personal sandbox for honing my full-stack development skills. It\'s a collection of websites built for imaginary clients, each with their own unique persona, needs, and business goals.',
    image: 'FakeSites.png',
    creativeProcess: [
      'Persona Creation: I start by crafting detailed personas for my fictional clients. This includes their industry, target audience, brand personality, and any specific challenges they might be facing.',
      'Requirement Generation: Based on the persona, I outline a set of business requirements for their website. This encompasses everything from the site\'s purpose and core features to its overall design and functionality.',
      'Development and Iteration: I then translate these requirements into a functional website, starting with simpler layouts and basic features. As my skills progress, I gradually introduce more complex elements like interactive dashboards, forums, and e-commerce capabilities.',
    ],
    github: 'https://github.com/your-github-username/fake-sites', 
    link: 'https://www.your-fake-sites-website.com' 
  },
  {
    title: 'Fake Sites',
    subheading: 'A playground for Imaginary Clients',
    description: 'Fake Sites is my personal sandbox for honing my full-stack development skills. It\'s a collection of websites built for imaginary clients, each with their own unique persona, needs, and business goals.',
    image: 'FakeSites.png',
    creativeProcess: [
      'Persona Creation: I start by crafting detailed personas for my fictional clients. This includes their industry, target audience, brand personality, and any specific challenges they might be facing.',
      'Requirement Generation: Based on the persona, I outline a set of business requirements for their website. This encompasses everything from the site\'s purpose and core features to its overall design and functionality.',
      'Development and Iteration: I then translate these requirements into a functional website, starting with simpler layouts and basic features. As my skills progress, I gradually introduce more complex elements like interactive dashboards, forums, and e-commerce capabilities.',
    ],
    github: 'https://github.com/your-github-username/fake-sites', 
    link: 'https://www.your-fake-sites-website.com' 
  }
*/}];
  return (
    <>
      <div className="box-container">
        <h2>Current Projects</h2>
        {currentProjects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <h4>{project.subheading}</h4>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} />
            <h4>Creative Process</h4>
            <ul>
              {project.creativeProcess.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
            <a href={project.github}>GitHub</a>
            <a href={project.link}>Website</a>
          </div>
        ))}
      </div>
    </>
  )
}
export default ProjectsCard;
