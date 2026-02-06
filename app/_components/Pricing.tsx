"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Perfect for trying out VidNova",
    features: [
      "5 videos per month",
      "Basic templates",
      "Auto captions",
      "Standard export quality",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "₹799",
    description: "For serious creators & influencers",
    features: [
      "Unlimited videos",
      "Premium templates",
      "AI music sync",
      "High-quality exports",
      "Priority rendering",
    ],
    cta: "Upgrade to Pro",
    popular: true,
  },
  {
    name: "Team",
    price: "₹1999",
    description: "Best for teams & agencies",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Brand presets",
      "Shared asset library",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">Simple, Transparent Pricing</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Choose a plan that fits your workflow. Upgrade or cancel anytime. No
            hidden charges.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`
                relative overflow-hidden
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
                ${
                  plan.popular
                    ? "border-primary/50 bg-gradient-to-b from-primary/5 to-primary/10 scale-100 lg:scale-105"
                    : "border-border"
                }
              `}
            >
              {plan.popular && (
                <Badge className="absolute top-4 right-4">Most Popular</Badge>
              )}

              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Price */}
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>

                <Separator />

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
