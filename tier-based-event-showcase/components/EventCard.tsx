export default function EventCard({ event }) {
  const badgeColors = {
    free: 'bg-gray-400',
    silver: 'bg-slate-400',
    gold: 'bg-yellow-400',
    platinum: 'bg-violet-400'
  };
  return (
    <div className="p-4 border rounded shadow">
      <img src={event.image_url || '/placeholder.png'} className="w-full h-40 object-cover mb-2 rounded" />
      <div className="flex justify-between items-center">
        <h2 className="font-bold">{event.title}</h2>
        <span className={\`text-white px-2 py-1 text-xs rounded \${badgeColors[event.tier]}\`}>{event.tier}</span>
      </div>
      <p className="text-sm">{event.description}</p>
      <time className="text-xs text-gray-500">{new Date(event.event_date).toLocaleDateString()}</time>
    </div>
  );
}
