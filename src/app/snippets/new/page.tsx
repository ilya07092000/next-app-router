'use client';

import { useFormState } from 'react-dom';
import { Button, TextField, Typography, Container } from '@mui/material';
import { createSnippet } from '@/actions/snippets';

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(createSnippet, { message: '' });

  return (
    <Container sx={{ pt: 5 }}>
      <Typography sx={{ mb: 2 }} variant="h3">
        Create A Snippet
      </Typography>
      <Typography component="p" sx={{ color: 'red' }}>
        {formState?.message}
      </Typography>
      <form action={action}>
        <TextField sx={{ mb: 3 }} label="Title" variant="outlined" fullWidth name="title" id="title" />
        <TextField label="Code" multiline rows={10} fullWidth name="code" id="code" />
        <Button sx={{ mt: 2, minWidth: '160px' }} variant="outlined" type="submit">
          Create
        </Button>
      </form>
    </Container>
  );
}
