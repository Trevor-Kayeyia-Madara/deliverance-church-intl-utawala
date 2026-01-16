export default function TopBar() {
  return (
    <div className="bg-amber-900 text-white text-sm py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <span>📍 Utawala</span>
          <span>⏰ Sunday Services</span>
        </div>
        <div className="flex items-center gap-4">
          <span>📞 Phone</span>
          <span>💬 WhatsApp</span>
          <span className="bg-red-500 text-xs px-2 py-1 rounded">🔴 Watch Live</span>
        </div>
      </div>
    </div>
  );
}