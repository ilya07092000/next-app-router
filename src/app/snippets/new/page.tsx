import { Button, TextField, Typography, Container } from '@mui/material';
import { db } from '@/db';

export default function SnippetCreatePage() {
  // Server action
  async function createSnippet(formData: FormData) {
    'use server';
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  }

  return (
    <Container sx={{ pt: 5 }}>
      <Typography sx={{ mb: 2 }} variant="h3">
        Create A Snippet
      </Typography>
      <form action={createSnippet}>
        <TextField sx={{ mb: 3 }} label="Title" variant="outlined" fullWidth name="title" id="title" />
        <TextField label="Code" multiline rows={10} fullWidth name="code" id="code" />
        <Button sx={{ mt: 2, minWidth: '160px' }} variant="outlined" type="submit">
          Create
        </Button>
      </form>
    </Container>
  );
}
