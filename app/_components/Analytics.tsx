import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";
import { Video, Users, Clock, TrendingUp } from "lucide-react";

const stats = [
  {
    label: "Videos Generated",
    value: "120K+",
    description: "AI-powered videos created across all platforms",
    icon: Video,
    // progress: 80,
    trend: "+24%",
  },
  {
    label: "Active Creators",
    value: "15K+",
    description: "Creators actively publishing content every month",
    icon: Users,
    // progress: 65,
    trend: "+18%",
  },
  {
    label: "Avg. Creation Time",
    value: "10 sec",
    description: "From idea to export using AI automation",
    icon: Clock,
    // progress: 90,
    trend: "-42%",
  },
  {
    label: "Engagement Boost",
    value: "3.4x",
    description: "Increase in reach and viewer retention",
    icon: TrendingUp,
    // progress: 75,
    trend: "+3.4x",
  },
];

export default function Analytics() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Platform Performance
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Card
              key={i}
              className="
    group relative overflow-hidden
    border border-muted
    bg-gradient-to-b from-background via-background to-primary/20
    transition-all duration-300
    hover:-translate-y-1 hover:shadow-xl
    hover:border-primary/40
  "
            >
              {/* subtle hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
              </div>

              <CardContent className="relative z-10 p-6 space-y-4">
                {/* header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold">{stat.value}</div>
                  </div>

                  <Badge variant="secondary" className="px-2 py-1 border border-foreground/20">
                    {stat.trend}
                  </Badge>
                </div>

                {/* value */}

                <h3 className="font-semibold text-muted-foreground">
                  {stat.label}
                </h3>

                {/* description */}
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>

                {/* progress */}
                {/* <Progress value={stat.progress} /> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
