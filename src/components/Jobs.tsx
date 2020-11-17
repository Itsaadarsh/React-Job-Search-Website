import { Box, Spacer } from '@chakra-ui/react';
import React from 'react';
import { JOB } from '../interface/JOB';

interface JobsProps {
  job: JOB;
}

export const Jobs: React.FC<JobsProps> = ({ job }) => {
  return (
    <React.Fragment>
      <Box
        w='48%'
        h='35vh'
        p='5'
        m='7px'
        // borderWidth='7px'
        // borderColor='blue.50'
        rounded='md'
        overflow='hidden'
        bg='gray.100'
        color='black'
      >
        {job.title}
      </Box>
      <Spacer />
    </React.Fragment>
  );
};
