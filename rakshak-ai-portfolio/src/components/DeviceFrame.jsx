// Requirements: 7.2
const DeviceFrame = ({ device, children }) => {
  if (device === 'mobile') {
    return (
      <div className="relative bg-gray-800 rounded-3xl border-2 border-gray-600 p-2 w-48 mx-auto">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-700 rounded-full" />
        <div className="w-full rounded-2xl overflow-hidden mt-6 aspect-[9/16]">
          {children}
        </div>
      </div>
    );
  }

  // Default: laptop
  return (
    <div className="relative bg-gray-800 rounded-xl border-2 border-gray-600 p-2 aspect-video">
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-gray-700 rounded-b-lg" />
      <div className="w-full h-full rounded-lg overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default DeviceFrame;
