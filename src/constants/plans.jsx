export const getPlans = (billing) => [
    {
      name: "Creator",
      price: billing === "monthly" ? 0 : 0,
      period: billing === "monthly" ? "per month" : "per year",
      features: [
        "Short Links (limited)",
        "Basic Analytics",
        "Bio Link Page",
        "QR Code Generator",
        "UTM Builder",
      ],
      cta: "Start Free",
      featured: false,
    },
    {
      name: "Growth",
      price: billing === "monthly" ? 9 : 90,
      period:
        billing === "monthly" ? "per month" : "per year (save ~20%)",
      badge: "Most Popular",
      featured: true,
      features: [
        "Unlimited Short Links",
        "Advanced Analytics",
        "Custom Domains",
        "Link Expiry + Password Protection",
        "Retargeting Pixels",
        "A/B Testing",
        "Priority Support",
      ],
      cta: "Upgrade to Growth",
    },
    {
      name: "Agency",
      price: billing === "monthly" ? 29 : 290,
      period:
        billing === "monthly" ? "per month" : "per year (save ~20%)",
      features: [
        "Everything in Growth",
        "Team Members",
        "API Access",
        "Webhooks",
        "Bulk Link Creation",
        "White-label Branding",
        "Dedicated Support",
      ],
      cta: "Go Agency",
      featured: false,
    },
  ];