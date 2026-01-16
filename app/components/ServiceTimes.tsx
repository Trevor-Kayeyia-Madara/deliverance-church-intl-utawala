export default function ServiceTimes() {
  return (
    <div className="relative -mt-16 z-10">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-lg font-semibold text-primary">Sunday Services</h3>
            <p className="text-sm text-gray-600 mt-2">10:00 AM - 12:00 PM</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Midweek Fellowship</h3>
            <p className="text-sm text-gray-600 mt-2">Wednesday 7:00 PM</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Prayer Meetings</h3>
            <p className="text-sm text-gray-600 mt-2">Friday 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}