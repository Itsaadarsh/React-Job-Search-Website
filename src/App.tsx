import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

  // const [fulltime, setFulltime] = useState(false);

  const [jobs, setjobs] = useState<JOB[]>([]);

  useEffect(() => {
    async function asyncFetcher() {
      const res = await axios.get(BASE_URL);
      setjobs(res.data);
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
      {jobs.map((job: JOB) => {
        return <p key={job.id}>{job.title}</p>;
      })}
    </div>
  );
}

export default App;
