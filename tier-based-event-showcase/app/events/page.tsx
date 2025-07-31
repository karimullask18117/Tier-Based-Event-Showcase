import { currentUser } from '@clerk/nextjs';
import { createClient } from '@/lib/supabase';
import EventCard from '@/components/EventCard';
import { getAllowedTiers } from '@/utils/tier';

export default async function EventsPage() {
  const user = await currentUser();
  if (!user) return <p>Please login</p>;
  const userTier = user.publicMetadata?.tier || 'free';
  const supabase = createClient();
  const allowedTiers = getAllowedTiers(userTier);
  const { data: events } = await supabase.from('events').select('*').in('tier', allowedTiers);
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{events?.map((e) => <EventCard key={e.id} event={e} />)}</div>;
}
