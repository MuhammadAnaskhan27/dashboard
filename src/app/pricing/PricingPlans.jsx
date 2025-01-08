export default function PricingPlans() {
  const plans = [
    {
      title: "Free Trial",
      price: "$0/mo",
      description: "for 10 days",
      button: "Start Free Trial",
      features: ["Time tracking", "Activity tracking", "Screenshots"],
      backgroundColor: "#F6FAFF",
    },
    {
      title: "Pro",
      price: "$5.99/mo",
      description: "per user",
      button: "Start Free Trial",
      features: [
        "Time tracking",
        "Activity monitoring",
        "Computer screenshots",
        "Task management",
        "Team analytics",
        "Idle time detection",
        "Stealth version available",
        "One month screenshot storage",
      ],
      backgroundColor: "#F6FAFF",
    },
    {
      title: "Business",
      price: "$8.99/mo",
      description: "per user",
      button: "Start Free Trial",
      features: [
        "Everything in Pro, plus:",
        "Internet monitoring",
        "Application monitoring",
        "Email reports",
        "Weekly limits",
        "Advanced reporting",
        "Unlimited integrations",
        "Complimentary onboarding",
        "Two months screenshot storage",
      ],
      mostPopular: true,
      backgroundColor: "white", // Highlighted tab with white background
    },
    {
      title: "Enterprise",
      price: "Contact sales",
      description: "",
      button: "Contact sales",
      features: [
        "Everything from Pro & Business, plus:",
        "Higher API Limits",
        "VIP Support",
        "Audit Logs",
        "100+ employees only",
        "Security assessments",
        "Manual procurement",
        "Custom screenshot storage",
      ],
      backgroundColor: "#F6FAFF",
    },
  ];

  return (
    <div className="flex flex-col px-10 items-center justify-center py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{ backgroundColor: plan.backgroundColor }}
            className={`relative flex flex-col p-6 rounded-lg shadow-lg ${
              plan.mostPopular ? "border border-blue-600" : ""
            }`}
          >
            {plan.mostPopular && (
              <div className="absolute top-0 right-0 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-bl-lg">
                Most Popular
              </div>
            )}
            <h3 className="text-lg font-semibold text-gray-800">
              {plan.title}
            </h3>
            <div className="mt-4 text-2xl font-bold text-gray-900">
              {plan.price}
            </div>
            <div className="text-sm text-gray-500">{plan.description}</div>
            <button
              className={`mt-6 py-2 px-4 rounded-md font-medium ${
                plan.mostPopular
                  ? "bg-blue-600 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {plan.button}
            </button>
            <ul className="mt-4 text-sm text-gray-600 space-y-2">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <svg
                    className="w-4 h-4 text-blue-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
