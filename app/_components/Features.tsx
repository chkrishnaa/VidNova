import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sparkles,
  Video,
  Zap,
  Wand2,
  LayoutGrid,
  Music,
  Clock,
  CloudUpload,
} from "lucide-react";

const features = [
  {
    title: "AI-Powered Creation",
    description:
      "Turn simple ideas, scripts, or prompts into visually engaging short videos using advanced AI. VidNova understands pacing, visual flow, and storytelling to generate content that feels natural and professional. No timelines, no keyframes, and no manual edits required. Just input your idea and let AI handle the heavy lifting.",
    icon: Sparkles,
  },
  {
    title: "Short-Form Optimized",
    description:
      "Every video is automatically optimized for modern short-form platforms like Instagram Reels, YouTube Shorts, and TikTok. Aspect ratios, durations, and layouts are chosen to maximize engagement and retention. Your content looks native on every platform without extra adjustments. Focus on creativity while VidNova handles the technical details.",
    icon: Video,
  },
  {
    title: "Lightning-Fast Generation",
    description:
      "Create high-quality videos in seconds instead of spending hours on traditional editors. VidNova’s optimized pipeline ensures rapid processing without sacrificing quality. Perfect for creators who need speed, consistency, and scalability. From idea to export in one smooth flow.",
    icon: Zap,
  },
  {
    title: "Smart Templates",
    description:
      "Choose from a growing library of professionally designed templates built for performance. Each template adapts dynamically to your content, text length, and visuals. Maintain brand consistency while still producing fresh, unique videos. Great design without design skills.",
    icon: LayoutGrid,
  },
  {
    title: "Auto Captions",
    description:
      "Automatically generate accurate, readable captions powered by AI. Captions are styled, timed, and positioned for maximum clarity and engagement. Improve accessibility and viewer retention, even on muted playback. No manual typing or syncing needed.",
    icon: Wand2,
  },
  {
    title: "Music Sync",
    description:
      "Add background music that perfectly syncs with your visuals and transitions. VidNova intelligently matches beats, pacing, and scene changes. Create videos that feel polished and emotionally engaging. No need to manually align audio tracks again.",
    icon: Music,
  },
  {
    title: "Time-Saving Workflow",
    description:
      "Eliminate repetitive editing tasks and streamline your entire creation process. VidNova replaces complex tools with a simple, guided workflow. Spend more time ideating and publishing, not editing. Built for creators, marketers, and teams at scale.",
    icon: Clock,
  },
  {
    title: "One-Click Export",
    description:
      "Export your videos instantly in high quality, ready for publishing. Optimized output ensures fast uploads and platform compatibility. Share across multiple platforms without re-rendering. From creation to posting in a single click.",
    icon: CloudUpload,
  },
];

export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Powerful Features
        </h2>

        {/* 2-column layout */}
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="
                group relative overflow-hidden border-2
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
                hover:border-primary/30
              "
            >
              {/* glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
              </div>

              <CardHeader className="relative z-10 flex flex-row items-start gap-4">
                <div
                  className="
                  flex h-12 w-12 shrink-0 items-center justify-center
                  rounded-xl bg-foreground
                  transition group-hover:scale-110
                "
                >
                  <feature.icon className="h-6 w-6 text-background" />
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <div className="flex justify-between gap-2">
                      {/* first bar */}
                      <div
                        className="
      w-4 h-2 rounded-lg
      bg-muted-foreground opacity-25
      transition-opacity duration-300
      group-hover:bg-muted-foreground
      group-hover:opacity-75
    "
                      />
                      {/* second bar */}
                      <div
                        className="
      w-4 h-2 rounded-lg
bg-muted-foreground opacity-25
      transition-opacity duration-300
      group-hover:bg-muted-foreground
      group-hover:opacity-100
    "
                      />
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground text-justify">
                    {feature.description}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="hidden" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
