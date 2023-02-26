import { CircularProgress, CircularProgressProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import React from 'react';

interface SpinnerProps extends CircularProgressProps {
  className?: string;
}

const StyledSpinner = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const Spinner: React.FC<SpinnerProps> = ({ className, ...props }) => {
  return (
    <div className={clsx('flex items-center justify-center z-50', className)}>
      <StyledSpinner {...props} />
    </div>
  );
};

export default Spinner;
