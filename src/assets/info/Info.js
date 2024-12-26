import self from '../img/self.png';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Ishmael',
  lastName: 'Williams',
  initials: 'IW', 
  position: 'a Level 2 IT Support Technician',
  selfPortrait: self, 
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
  baseColor: colors[0],
  miniBio: [

    {
      emoji: '🇺🇸',
      text: 'based in the McDonough, Georgia',
    },
    {
      emoji: '🛠️',
      text: 'Advanced Repair Agent at GeekSquad',
    },
    {
      emoji: '📧',
      text: 'ishmaelwilliams777@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://drive.google.com/file/d/1Z5dsmzVmYgzq_em8c5JHuUykLh6llsC0/view?usp=drive_link', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-file',
      label: 'resume',
    },
    {
      link: 'https://github.com/Ishmael-D-Williams',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/ishmael-williams/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    
  ],
  bio: "Hello! I'm Ishmael. I'm a Computer Repair Technician. I studied CompSci at KSU and enjoy all manner of computer hardware and software. I currently work as an Advanced Repair Agent for Geek Squad. I love to hike, exercise, and play games. Based in McDonough, Georgia.",
  skills: {
    languages: ['JavaScript', 'Java', 'C++', 'HTML/CSS'],
    frameworks: [
      'React',
    ],
    cloudServices: ['Heroku', 'Google Analytics'],
    tools: [
      'Git',
      'npm',
    ],
  },
  hobbies: [
    {
      label: 'PC Building', 
      emoji: '🖥️',
    },
    {
      label: 'Video Games',
      emoji: '🎮',
    },
    {
      label: 'Cooking',
      emoji: '🍳',
    },
    {
      label: 'Exercising',
      emoji: '💪',
    },
    {
      label: 'Dog dad',
      emoji: '🐕',
    },

  ],
  portfolio: [

  ],
};
