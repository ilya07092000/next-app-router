import EditSnippet from '@/components/EditSnippet';
import { db } from '@/db';
import { notFound } from 'next/navigation';

interface SnippetSinglePageProps {
  params: {
    id: string;
  };
}

export default async function SnippetSinglePage(props: SnippetSinglePageProps) {
  const snippet = await db.snippet.findFirst({ where: { id: parseInt(props.params.id) } });

  if (!snippet) {
    return notFound();
  }

  return <EditSnippet {...snippet} />;
}
