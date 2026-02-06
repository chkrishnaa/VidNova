"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Sparkles, Video, Zap, Wand2 } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">About VidNova</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            VidNova is built to redefine how creators and teams produce
            high-performing short videos using AI.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* LEFT: About VidNova */}
          <div className="space-y-8">
            <Card className="border-muted bg-gradient-to-b from-background to-muted/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  What is VidNova?
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  VidNova is an AI-powered short video generation platform
                  designed for creators who value speed, consistency, and
                  performance. From idea to export, everything happens in one
                  seamless flow.
                </p>

                <p>
                  Whether you're building content for Reels, Shorts, or TikTok,
                  VidNova adapts your message into engaging visuals, captions,
                  and formats automatically.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary">AI Video</Badge>
                  <Badge variant="secondary">Short-form</Badge>
                  <Badge variant="secondary">No Editing</Badge>
                  <Badge variant="secondary">Creator-first</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Carousel */}
            <Carousel>
              <CarouselContent>
                {[
                  {
                    icon: Video,
                    title: "Built for Short-Form",
                    text: "Optimized layouts, pacing, and formats for modern platforms.",
                  },
                  {
                    icon: Wand2,
                    title: "AI Automation",
                    text: "Scripts, scenes, captions, and visuals generated instantly.",
                  },
                  {
                    icon: Zap,
                    title: "Lightning Fast",
                    text: "Create videos in seconds instead of hours.",
                  },
                ].map((item, i) => (
                  <CarouselItem key={i}>
                    <Card className="border-muted">
                      <CardContent className="p-6 space-y-3">
                        <item.icon className="h-8 w-8 text-primary" />
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.text}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* RIGHT: How it Works */}
          <div>
            <Card className="border-muted">
              <CardHeader>
                <CardTitle>How VidNova Works</CardTitle>
              </CardHeader>

              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="step-1">
                    <AccordionTrigger>
                      1. Enter your idea or script
                    </AccordionTrigger>
                    <AccordionContent>
                      Provide a short prompt, script, or topic. VidNova
                      understands intent, tone, and structure instantly.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="step-2">
                    <AccordionTrigger>
                      2. AI generates scenes & visuals
                    </AccordionTrigger>
                    <AccordionContent>
                      Our AI breaks your content into scenes, selects visuals,
                      adds captions, and aligns everything for engagement.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="step-3">
                    <AccordionTrigger>3. Customize & refine</AccordionTrigger>
                    <AccordionContent>
                      Adjust style, pacing, branding, and captions with simple
                      controls—no editing timeline required.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="step-4">
                    <AccordionTrigger>4. Export & publish</AccordionTrigger>
                    <AccordionContent>
                      Download your video optimized for Reels, Shorts, or TikTok
                      and publish instantly.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
