import { ComputerDesktopIcon, GlobeAltIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/solid";

const Platforms = () => {
  const platforms = [
    { name: "Windows", icon: <ComputerDesktopIcon className="h-10 w-10" /> },
    { name: "macOS", icon: <ComputerDesktopIcon className="h-10 w-10" /> },
    { name: "Linux", icon: <GlobeAltIcon className="h-10 w-10" /> },
    { name: "Android", icon: <DevicePhoneMobileIcon className="h-10 w-10" /> },
    { name: "iOS", icon: <DevicePhoneMobileIcon className="h-10 w-10" /> },
    { name: "Chromebook", icon: <GlobeAltIcon className="h-10 w-10" />, beta: true },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto text-center px-6">
        {/* Title */}
        <h2 className="text-[36px]  font-semibold text-custom-white mb-8 font-custom">
          Monitask is Available for
        </h2>

        {/* Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-custom-blue font-extrabold text-white text-[18px] font-custom rounded-2xl flex items-center justify-center py-6 px-6 shadow hover:shadow-lg transition-shadow space-x-3"
            >
              {/* Icon */}
              <div>{platform.icon}</div>

              {/* Text */}
              <p className="text-base font-semibold">
                {platform.name}{" "}
                {platform.beta && <span className="text-sm">(beta)</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platforms;





