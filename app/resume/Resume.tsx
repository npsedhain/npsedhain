import React from 'react';

const Resume = () => {
  return (
    <div className='font-sans leading-relaxed max-w-3xl mx-auto'>
      <header className='text-center mb-8'>
        <p className='text-lg'>3700 SW 27th St, Gainesville 32608 • (352) 664-0351</p>
        <p className='text-lg'>
          <a href='https://www.codingfreshman.com/' className='text-blue-500'>
            codingfreshman.com
          </a>
        </p>
        <p className='text-lg'>
          <a href='https://www.linkedin.com/in/npsedhain/' className='text-blue-500'>
            LinkedIn
          </a>{' '}
          •{' '}
          <a href='https://github.com/npsedhain' className='text-blue-500'>
            GitHub
          </a>{' '}
          •{' '}
          <a href='mailto:npsedhain@gmail.com' className='text-blue-500'>
            E-mail
          </a>
        </p>
      </header>

      <Section title='SKILLS'>
        <ul className='list-disc list-outside ml-5'>
          <li>Javascript, Typescript, C++, C#, Rust, Python, SQL, Node.js, Next.js, React.js, HTML, CSS, CUDA, Pony</li>
          <li>MongoDB, Git, Docker, Vercel, AWS, GCP, Firebase</li>
          <li>Socket, WebRTC, Real-time systems, WebAssembly</li>
          <li>Algorithms and Data Structures</li>
        </ul>
      </Section>

      <Section title='EDUCATION'>
        <EducationItem
          title='The University of Florida, Master of Science in Computer Science'
          dates='May 2026'
          details={[
            'Specializing in Computer Systems',
            'Enrolled in Distributed Systems and Computer Architecture classes'
          ]}
        />
        <EducationItem
          title='Kathmandu University, Bachelor of Computer Engineering - 3.63 CGPA'
          dates='July 2019'
          details={[
            'Honors: Dean’s List',
            'University-level Hult Prize winner and represented Nepal in the regional finals in Japan.'
          ]}
        />
      </Section>

      <Section title='EMPLOYMENT'>
        <JobItem
          title='Software Engineer, Airvet Inc.'
          dates='May 2021 - July 2024'
          responsibilities={[
            'Led the development of a web application to handle all incoming chat requests from pet parents to in-house veterinary technicians. Scaled the application from handling a couple of requests to over 100 per hour.',
            'Worked with data streams and implemented real-time notifications, reducing response time to less than a minute.',
            'Transferred blog content from WordPress to Next.js, solving underlying security issues and improving load time by almost ten times.',
            'Saved at least 5 hours of DevOps work monthly by building the company’s front-facing website and automating the deployment process using Firebase, GitHub Actions, and Vercel.',
            'Implemented A/B testing to enable the leadership team to make data-driven decisions.',
            'Reduced global data states and refactored video call logic, ensuring 100% reliability.',
            'Led multiple feature initiatives in the admin portal to resolve CX issues, working closely with the support team.'
          ]}
        />
        <JobItem
          title='Software Engineering Consultant, Polydelic AS'
          dates='August 2020 - December 2021'
          responsibilities={[
            'Architected MVPs from scratch for multiple European startups to help secure seed funding.',
            'Implemented RBAC, subscriptions, and contract management for an artist booking platform.',
            'Built a real-time webinar hosting platform using MUX, PeerJS, Socket.io, and Google APIs for video transcoding.',
            'Developed a token-based reward system with Solana Web 3 API.',
            'Used DimensionFour to analyze and parse data from baby monitoring sensors, providing insights to parents on a mobile application.'
          ]}
        />
        <JobItem
          title='Software Engineer, Leapfrog Technology Inc.'
          dates='July 2019 - April 2021'
          responsibilities={[
            'Led a team of five to build a web app that automated the preparation of product requirement documents using Google Docs APIs and implemented real-time web notifications.'
          ]}
        />
      </Section>

      <Section title='LANGUAGES'>
        <ul className='list-disc list-outside ml-5'>
          <li>Native: Nepali</li>
          <li>Advanced: English</li>
        </ul>
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className='my-8'>
    <h2 className='text-2xl text-blue-600 font-bold mb-3'>{title}</h2>
    {children}
  </div>
);

const EducationItem = ({ title, dates, details }) => (
  <div className='my-8'>
    <div className='flex justify-between'>
      <p className='font-semibold text-lg text-blue-400'>{title}</p>
      <p className='ml-4 italic min-w-24'>{dates}</p>
    </div>
    <ul className='list-disc list-outside ml-5'>
      {details.map((detail, index) => (
        <li key={index} className='mb-1'>
          {detail}
        </li>
      ))}
    </ul>
  </div>
);

const JobItem = ({ title, dates, responsibilities }) => (
  <div className='my-8'>
    <div className='flex justify-between'>
      <p className='font-semibold text-lg text-blue-400'>{title}</p>
      <p className='italic'>{dates}</p>
    </div>
    <ul className='list-disc list-outside ml-5'>
      {responsibilities.map((responsibility, index) => (
        <li key={index} className='mb-1'>
          {responsibility}
        </li>
      ))}
    </ul>
  </div>
);

export default Resume;
