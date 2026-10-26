import { getConfig } from '@/lib/api';
import Landing from '@/components/Landing';
export const dynamic = 'force-dynamic';
export default async function Home() { const config = await getConfig(); return <Landing config={config} />; }
