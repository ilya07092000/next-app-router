'use client';

import { Typography } from '@mui/material';

interface Props {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error }: Props) {
  return <Typography>{error.message}</Typography>;
}
