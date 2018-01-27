import React from 'react';
import './about-style';

const About = () => {
  return (
    <div className='section-about main'>
      <a className='nav-hook' name='about'></a>
      <h2>About Me</h2>
      <p className='about-bold'>At my core, I am a pragmatic problem solver.</p>
      <p>I am motivated by the challenge that a new problem presents and the learning and growth that comes from solving it.</p>
      <p>Before enrolling in the FE program at Turing, I was a product manager that collaborated closely with developers to figure out how best to translate my end-users' needs into effective technology solutions.</p>
      <p className='about-bold'>Becoming a software engineer has reignited my passion to learn and grow in my career precisely because of the hard-skills it gives me to do what I do best and care about most...building things that solve problems.</p>
      <h3 className='resume-link'><a href="https://drive.google.com/file/d/0B1LF3i2gTJgNR3p4ZzVZSndYY0E/view?usp=sharing" target='_blank'>Check out my resume </a><img className='icon-arrow' src={require('../../Images/resume-icon.png')} /></h3>
    </div>
  );
}

export default About;
