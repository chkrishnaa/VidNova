import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { MdLiveTv } from "react-icons/md";
import { Instagram, Twitter, Github, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary/10 via-background to-primary/10">
      <Separator className="w-full" />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* LEFT: Brand */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2 justify-center">
              <MdLiveTv size={32} />
              <span className="text-2xl font-bold">VidNova</span>
            </div>

            <p className="text-muted-foreground max-w-sm text-center">
              VidNova helps creators transform ideas into high-performing short
              videos using AI-powered automation and smart workflows.
            </p>

            <div className="flex gap-4 pt-2">
              {[Instagram, Twitter, Github, Youtube].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="
                    text-muted-foreground
                    transition-colors
                    hover:text-foreground
                  "
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* MIDDLE: Legal */}
          <div className="pl-6">
            <h4 className="font-semibold mb-4">Legal & Policies</h4>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Terms of Service",
                "Privacy Policy",
                "Security",
                "Cookie Policy",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Navigation */}
          <div className="pl-6">
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3 text-muted-foreground">
              {["Home", "Features", "Analytics", "Pricing", "Contact"].map(
                (item, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} VidNova. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
