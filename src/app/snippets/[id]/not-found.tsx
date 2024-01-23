import { Box, Typography } from '@mui/material';

export default function NotFound() {
  return (
    <Box sx={{ height: '100vh', display: 'flex', textAlign: 'center' }}>
      <Typography variant="h1" sx={{ margin: 'auto' }}>
        Snippet Was Not Found
      </Typography>
    </Box>
  );
}
