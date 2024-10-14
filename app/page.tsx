import Image from 'next/image';
import { socialLinks } from './config';

export default function Page() {
  return (
    <section>
      <a href={socialLinks.instagram} target='_blank'>
        <Image
          src='/profile.png'
          alt='Profile photo'
          className='rounded-full object-cover bg-gray-100 h-40 w-40 grayscale hover:grayscale-0 block mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5'
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className='mb-2 text-2xl font-medium tracking-tight'>Hey there! I am Anup.</h1>
      <p className='mb-6'>
        tip: it's pronounced <strong>ah-noop</strong>
      </p>

      <div className='prose prose-neutral dark:prose-invert'>
        <p>I am a graduate student at the University of Florida.</p>
        <p>I will be graduating on May 2026, so you got that right - I need an internship!</p>
        <p>Oh did I tell you I have over 5 years of experience?</p>
        <p>
          I was a software engineer at{' '}
          <a target='_blank' href='https://airvet.com'>
            Airvet Inc
          </a>{' '}
          and before that I used to be a freelancer and I started my career as an intern at{' '}
          <a target='_blank' href='https://www.lftechnology.com/'>
            Leapfrog Technology.
          </a>
        </p>
      </div>
    </section>
  );
}
