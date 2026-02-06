"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Aarav Sharma",
    role: "Content Creator",
    quote:
      "VidNova completely transformed how I create content 😄. What used to take hours now takes minutes, and the output still feels premium and polished.",
    rating: 5,
  },
  {
    name: "Neha Patel",
    role: "Marketing Lead",
    quote:
      "Our short-form strategy finally clicked after using VidNova. Engagement numbers jumped quickly, and the workflow feels effortless for the entire team.",
    rating: 4.5,
  },
  {
    name: "Rahul Mehta",
    role: "Startup Founder",
    quote:
      "From a raw idea to a polished video in seconds 🤯. VidNova genuinely feels like magic and helped us move faster during our product launch.",
    rating: 5,
  },
  {
    name: "Karan Verma",
    role: "YouTuber",
    quote:
      "I’ve tried dozens of tools, but VidNova stands out 😎. It's fast, intuitive, and built exactly for creators who value speed and consistency.",
    rating: 4,
  },
  {
    name: "Simran Kaur",
    role: "Social Media Manager",
    quote:
      "Managing multiple brands became easier with VidNova. The templates adapt beautifully, and I no longer worry about design skills.",
    rating: 3.5,
  },
  {
    name: "Rohit Jain",
    role: "Agency Owner",
    quote:
      "Our clients noticed the difference almost immediately. Faster turnaround, better visuals, and zero editing headaches.",
    rating: 4.5,
  },
  {
    name: "Ananya Roy",
    role: "Brand Strategist",
    quote:
      "VidNova helps us maintain brand consistency while experimenting with fresh ideas 🧠. It's a perfect balance of control and creativity.",
    rating: 5,
  },
  {
    name: "Vikas Malhotra",
    role: "Growth Marketer",
    quote:
      "Speed matters in growth marketing. VidNova lets us test more ideas, iterate faster, and publish without friction.",
    rating: 4,
  },
  {
    name: "Isha Kapoor",
    role: "Influencer",
    quote:
      "Reels, Shorts, TikToks — everything just works 😍. VidNova genuinely makes content creation fun again.",
    rating: 5,
  },
  {
    name: "Mohit Singh",
    role: "Video Editor",
    quote:
      "As an editor, I was skeptical at first 🤔. But VidNova complements my workflow and saves me hours every single day.",
    rating: 4.5,
  },
  {
    name: "Pooja Nair",
    role: "Founder",
    quote:
      "This is exactly the kind of tool modern teams need. Simple on the surface, powerful underneath, and extremely reliable.",
    rating: 5,
  },
  {
    name: "Aditya Kulkarni",
    role: "Freelancer",
    quote:
      "VidNova helps me deliver faster without compromising quality. My clients are happier, and so is my schedule.",
    rating: 4,
  },
  {
    name: "Sneha Joshi",
    role: "Startup Marketer",
    quote:
      "Retention-focused content is hard to crack 😬, but VidNova made it easier. The performance improvements were noticeable within days.",
    rating: 5,
  },
  {
    name: "Rakesh Yadav",
    role: "Media Lead",
    quote:
      "A genuine game-changer for short-form video production 🔥. The entire team adopted it much faster than expected.",
    rating: 4.5,
  },
];

const topTestimonials = testimonials.slice(
  0,
  Math.ceil(testimonials.length / 2)
);
const bottomTestimonials = testimonials.slice(
  Math.ceil(testimonials.length / 2)
);



function Stars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => {
        // Full star
        if (i < fullStars) {
          return (
            <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />
          );
        }

        // Half star
        if (i === fullStars && hasHalfStar) {
          return (
            <div key={i} className="relative h-4 w-4">
              {/* empty star */}
              <Star className="absolute h-4 w-4 text-muted-foreground" />

              {/* half filled star */}
              <div className="absolute h-4 w-2 overflow-hidden">
                <Star className="h-4 w-4 fill-foreground text-foreground" />
              </div>
            </div>
          );
        }

        // Empty star
        return <Star key={i} className="h-4 w-4 text-muted-foreground" />;
      })}
    </div>
  );
}



export default function Testimonials() {
  const [paused, setPaused] = useState(false);
  const [resumeTimeout, setResumeTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const handleEnter = () => {
    if (resumeTimeout) clearTimeout(resumeTimeout);
    setPaused(true);
  };

  const handleLeave = () => {
    const t = setTimeout(() => setPaused(false), 0);
    setResumeTimeout(t);
  };

  const row = (data: Testimonial[], reverse = false) => (
    <div
      className={`flex w-max gap-6 animate-marquee ${
        reverse ? "animate-marquee-reverse" : ""
      } ${paused ? "pause" : ""}`}
    >
      {[...data, ...data].map((t, i) => (
        <Card
          key={`${t.name}-${i}`}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className="
          w-80 shrink-0
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl
          bg-gradient-to-b from-background via-background to-primary/10
        "
        >
          <CardContent className="p-6 space-y-4">
            {/* Header */}
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>{t.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>

            <Stars rating={t.rating} />

            <Separator />

            <p className="text-muted-foreground text-sm text-justify">
              “{t.quote}”
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <section className="py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Loved by Creators Worldwide
        </h2>
        <p></p>
      </div>

      <div className="space-y-10">
        <div className="relative">{row(topTestimonials, false)}</div>

        <div className="relative">{row(bottomTestimonials, true)}</div>
      </div>
    </section>
  );
}
