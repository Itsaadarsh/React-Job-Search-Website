import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ChakraProvider, Input, Flex, Box, Text, Spacer, Container, Checkbox } from '@chakra-ui/react';
import { Jobs } from './components/Jobs';
import { JOB } from './interface/JOB';

const BASE_URL: string = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';

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
      <Box fontFamily='Righteous' boxShadow='dark-lg' p='6' mx='40' my='30' rounded='md' bg='blue.100'>
        <Text fontSize='5xl' textAlign='center' pb='5' fontStyle='oblique' fontWeight='bold'>
          Job Finder
        </Text>
        <Flex>
          <Input
            variant='filled'
            type='text'
            placeholder='Role'
            value={role}
            onChange={e => setRole(e.target.value)}
            m='5'
            w='45%'
          />
          <Input
            variant='filled'
            type='text'
            placeholder='Location'
            value={location}
            onChange={e => setLocation(e.target.value)}
            w='45%'
            m='5'
          />
          <Checkbox colorScheme='green' defaultIsChecked w='10%'>
            Full Time
          </Checkbox>
        </Flex>
        <Box my='10'>
          <Flex flexWrap='wrap'>
            {jobs.map((job: JOB) => {
              return <Jobs job={job} />;
            })}
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
