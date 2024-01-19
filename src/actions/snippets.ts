'use server';

import { db } from '@/db';
import { redirect } from 'next/navigation';

const updateSnippet = async ({ id, code }: { id: number; code: string }) => {
  const updateSnippet = await db.snippet.update({
    where: {
      id,
    },
    data: {
      code,
    },
  });
  return updateSnippet;
};

const deleteSnippet = async (id: number) => {
  await db.snippet.delete({
    where: {
      id,
    },
  });

  redirect('/');
};

export { updateSnippet, deleteSnippet };
