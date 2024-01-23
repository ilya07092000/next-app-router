import EditSnippet from '@/components/EditSnippet';
import { db } from '@/db';
import { notFound } from 'next/navigation';

interface SnippetSinglePageProps {
  params: {
    id: string;
  };
}

/**
 * this page is dynamic by default because of wildcard [id]
 */
export default async function SnippetSinglePage(props: SnippetSinglePageProps) {
  const snippet = await db.snippet.findFirst({ where: { id: parseInt(props.params.id) } });

  if (!snippet) {
    return notFound();
  }

  return <EditSnippet {...snippet} />;
}

/**
 * static version
 */
// export async function generateStaticParams() {
//   const snippets = await db.snippet.findMany();

//   return snippets.map((snippet) => ({ id: String(snippet.id) }));
// }
