import Snippet from '@/components/Snippet';
import { db } from '@/db';
import { Typography, Stack, Grid, Button } from '@mui/material';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <>
      <Grid container justifyContent="space-between" alignItems="flex-end" sx={{ mb: 2 }}>
        <Grid item>
          <Typography variant="h2">Snippets</Typography>
        </Grid>
        <Grid item>
          <Link href="/snippets/new">
            <Button>New</Button>
          </Link>
        </Grid>
      </Grid>

      <Stack spacing={1}>
        {snippets.map((snippet) => (
          <Snippet key={snippet.id} title={snippet.title} id={snippet.id} />
        ))}
      </Stack>
    </>
  );
}
