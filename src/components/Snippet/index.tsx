/**
 * such import "import {  Grid } from '@mui/material/'" cause and ERROR!!!
 * need to add "/index" to the end of it in order to fix theissue
 * https://github.com/mui/material-ui/issues/40214#issuecomment-1866196893
 */
import { Button, Grid } from '@mui/material/index';
import { SxProps, Theme } from '@mui/material/styles';
import Link from 'next/link';

interface Props {
  id: number;
  title: string;
}

const styles: Record<string, SxProps<Theme>> = {
  snippet: {
    border: '2px solid #e5e5e5',
    borderRadius: 'fsd',
    padding: 1,
  },
};

const Snippet = ({ id, title }: Props) => {
  return (
    <Grid container justifyContent="space-between" alignItems="center" sx={styles.snippet}>
      <Grid item>{title}</Grid>
      <Grid item>
        <Link href={`/snippets/${id}`}>
          <Button variant="contained">View</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Snippet;
