import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ChakraProvider, Input, Flex, Box, Text } from '@chakra-ui/react';

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
      try {
        const res = await axios.get(BASE_URL, { params: { description: role, location: location } });
        console.log(res.data);
        setjobs(res.data);
        // console.log('Dummy');
      } catch (err) {
        console.log(err);
      }
    }
    asyncFetcher();
  }, [role, location]);

  return (
    <ChakraProvider>
      <Box fontFamily='Righteous' boxShadow='dark-lg' p='6' mx='60' my='30' rounded='md' bg='blue.50'>
        <Text fontSize='5xl' textAlign='center' pb='5' fontStyle='oblique' fontWeight='bold'>
          Job Finder
        </Text>
        <Flex>
          <Input
            variant='flushed'
            type='text'
            placeholder='Role'
            value={role}
            onChange={e => setRole(e.target.value)}
          />
          <Input
            variant='flushed'
            type='text'
            placeholder='Location'
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </Flex>
        <Flex justifyContent='space-between'>
          {jobs.map((job: JOB) => {
            return (
              <Box bg='black' w='100%' p={4} color='white'>
                {job.title}
              </Box>
            );
          })}
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
