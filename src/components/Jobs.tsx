import { Box, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { JOB } from '../interface/JOB';

interface JobsProps {
  job: JOB;
}

export const Jobs: React.FC<JobsProps> = ({ job }) => {
  return (
    <React.Fragment>
      <Box w='48%' h='35vh' p='5' m='7px' rounded='md' overflow='hidden' bg='gray.100' color='black'>
        <Text fontWeight='bold' fontSize='xl'>
          {job.title}
        </Text>
        <Flex>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>{job.created_at}</p>
          <p>{job.type}</p>
        </Flex>
        <Image boxSize='50%' objectFit='cover' src={job.company_logo} alt='Dan Abramov' />
      </Box>
      <Spacer />
    </React.Fragment>
  );
};
