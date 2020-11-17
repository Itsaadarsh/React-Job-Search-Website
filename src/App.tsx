import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

const BASE_URL: string = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';

interface JOB {
  id: string;
  type: string;
  url: string;
  created_at: string;
  company: string;
  company_url: string;
  location: string;
  title: string;
  description: string;
  how_to_apply: string;
  company_logo: string;
}

function App() {
  const [role, setRole] = useState(() => {
    return '';
  });
  const [location, setLocation] = useState(() => {
    return '';
  });
  const [fulltime, setFulltime] = useState(false);
  const [jobs, setjobs] = useState<AxiosResponse | null | void>(null);

  useEffect(() => {
    async function asyncFetcher() {
      const res = await axios.get(BASE_URL);
      console.log(res);
      setjobs(res);
    }
    asyncFetcher();
  }, []);

  return (
    <div>
      <input type='text' placeholder='Role' value={role} onChange={e => setRole(e.target.value)} />
      <input
        type='text'
        placeholder='Location'
        value={location}
        onChange={e => setLocation(e.target.value)}
      />
      <input type='checkbox' value='Full time' />
      {jobs}
    </div>
  );
}
const job = {
  id: '8a2e3d35-65ba-411d-9952-2e1940b73a4a',
  type: 'Full Time',
  url: 'https://jobs.github.com/positions/8a2e3d35-65ba-411d-9952-2e1940b73a4a',
  created_at: 'Mon Oct 19 19:43:52 UTC 2020',
  company: 'QSC, LLC',
  company_url: 'http://www.qsc.com',
  location: 'Boulder, CO',
  title: 'Senior Software Engineer',
  description:
    'QSC is a world leader in the design and manufacture of innovative audio, video, and control products for multiple markets including Installed Systems, Cinema, and Live Sound.  We are seeking a talented and motivated Software Engineer to work with our growing engineering team on our state of the art Q-SYS platform.  \r\n\r\nThe Senior Software Engineer will be responsible for design and implementation of application software in Linux OS for a wide variety of projects for Q-SYS. You will have the ability to bring creative solutions to our customers and the audio, visual, and control product space, while working in a dynamic and collaborative agile scrum environment.\r\n\r\nThis position is based in Boulder, Colorado.\r\n\r\nResponsibilities \r\n\r\n•Design and develop world-class software on our industry-leading Q-SYS platform\r\n•Work with Software Quality Assurance to develop appropriate test strategies\r\n•Perform other duties as assigned\r\n\r\nQualifications \r\n\r\n•B.S. in Computer Science, Computer Engineering, or a related field\r\n•Minimum 5 - 7 plus years’ hands-on experience developing C++ application software in Linux OS\r\n•Experience with the features of modern C++ and its effective use in solving real-world problems\r\n•Experience with the best principles, practices, and patterns of software architecture and design\r\n•Proficiency in several of the following areas:◦Communications protocols\r\n◦Web technologies\r\n◦Computer security and data privacy\r\n◦Streaming media protocols\r\n◦Real-time embedded systems\r\n◦High performance, distributed, or high availability systems\r\n◦Unit testing\r\n•Experience working with large scale C++ codebases\r\n•Experience working on software programs developed collaboratively by international teams\r\n•Ability to perform a software lead role on projects\r\n•Passionate, persistent, creative - you find solutions to difficult problems and clever ways to work around them when necessary\r\n•Ability to work collaboratively in an agile scrum environment\r\n•Superb communication skills in English, both written and verbal\r\n',
  how_to_apply:
    'Please apply via our careers site: https://qsccareers-qsc.icims.com/jobs/2655/senior-software-engineer/job',
  company_logo:
    'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa1dNIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7c5090b2cc1d8ac27b85146b3ba7def6abf0bc9e/QSC_LOGO_BLUE.jpg',
};
export default App;
