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

async function createSnippet(formState: { message: string }, formData: FormData) {
  try {
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    if (!title.trim() || !code.trim()) {
      return {
        message: 'Both Title And Code values should be provided!!!',
      };
    }

    await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    return {
      message: '',
    };
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        message: e.message,
      };
    } else {
      return {
        message: 'Smth Went Wrong!',
      };
    }
  }
}

export { updateSnippet, deleteSnippet, createSnippet };
