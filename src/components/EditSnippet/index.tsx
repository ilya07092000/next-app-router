'use client';

import { deleteSnippet, updateSnippet } from '@/actions/snippets';
import useDbRequest from '@/common/hooks/useDbRequest';
import { Box, Button, Grid, TextField, Typography } from '@mui/material/index';
import { useState } from 'react';

interface Props {
  id: number;
  title: string;
  code: string;
}

const onError = () => alert('Smth Went Wrong while snippet updating');

const EditSnippet = ({ id, title, code }: Props) => {
  const { makeRequest: updateSnippetReq, isLoading } = useDbRequest({
    requestFn: updateSnippet,
    onError: onError,
  });

  const { makeRequest: deleteSnippetReq, isLoading: isDeleting } = useDbRequest({ requestFn: deleteSnippet });

  const [codeValue, setCodeValue] = useState(code);
  const [isActive, setIsActive] = useState(false);

  const toggleMode = () => setIsActive((curr) => !curr);

  const onSaveClick = async () => {
    await updateSnippetReq({ id, code: codeValue });
    toggleMode();
  };

  const onDeleteClick = async () => {
    const isSure = confirm('Are You Sure?');
    if (isSure) {
      await deleteSnippetReq(id);
      alert('Deleted Successfully');
    }
  };

  return (
    <Box sx={{ py: 3 }}>
      <Grid sx={{ mb: 3 }} container justifyContent="space-between" alignItems="flex-end">
        <Grid item>
          <Typography variant="h2">{title}</Typography>
        </Grid>
        <Grid item>
          {isActive ? (
            <Button onClick={onSaveClick} disabled={isLoading || isDeleting}>
              Save
            </Button>
          ) : (
            <Button onClick={toggleMode}>Edit</Button>
          )}
          <Button disabled={isActive || isLoading || isDeleting} onClick={onDeleteClick}>
            Delete
          </Button>
        </Grid>
      </Grid>
      <TextField
        value={codeValue}
        onChange={(e) => setCodeValue(e.target.value)}
        multiline
        maxRows={20}
        fullWidth
        disabled={!isActive}
      />
    </Box>
  );
};

export default EditSnippet;
