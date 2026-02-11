"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2Icon, Sparkles } from "lucide-react";
import axios from "axios";

const suggestions = [
  "Historic Story",
  "Kids Story",
  "Movie Stories",
  "AI Innovations",
  "Space Mysteries",
  "Horror Stories",
  "Mythological Tales",
  "Tech Breakthroughs",
  "True Crime Stories",
  "Fantasy Adventures",
  "Science Experiments",
  "Motivational Stories",
];

function Topic({ onHandeInputChange }: any) {
  const [selectTopic, setSelectTopic] = useState<string>("");

  type Script = {
    content: string;
  };

  const [scripts, setScripts] = useState<Script[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const generateScript = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/generate-script", {
        topic: selectTopic,
      });
      console.log(result.data);
      setScripts(result.data?.scripts);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <div>
      <h2 className="mb-1">Project Title</h2>
      <Input
        placeholder="Enter Project Title"
        onChange={(e) => onHandeInputChange("title", e?.target.value)}
      />

      <div className="mt-6">
        <h2>Video Topic</h2>
        <p className="text-muted-foreground">Select topic for your video.</p>

        <Tabs defaultValue="suggestions" className="w-full mt-2">
          <TabsList className="rounded-sm p-1 mb-2">
            <TabsTrigger
              value="suggestions"
              className="!rounded-sm data-[state=active]:!rounded-sm"
            >
              Suggestions
            </TabsTrigger>

            <TabsTrigger
              value="your-topic"
              className="!rounded-sm data-[state=active]:!rounded-sm"
            >
              Your Topic
            </TabsTrigger>
          </TabsList>

          <TabsContent value="suggestions">
            <div className="flex flex-wrap gap-2 w-full">
              {suggestions.map((suggestion) => (
                <Button
                  key={suggestion}
                  variant="outline"
                  className={`flex-1 min-w-[140px]
    ${
      suggestion === selectTopic
        ? "!bg-primary !text-primary-foreground hover:!bg-primary focus:!bg-primary"
        : ""
    }
  `}
                  onClick={() => {
                    setSelectTopic(suggestion);
                    onHandeInputChange("topic", suggestion);
                  }}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="your-topic">
            <div>
              <h2>Enter your own topic.</h2>
              <Textarea
                placeholder="Enter your topic idea..."
                className="h-[144px] max-h-[144px] resize-none overflow-y-auto mt-1"
                onChange={(e) => {
                  onHandeInputChange("topic", e.target.value);
                }}
              />
            </div>
          </TabsContent>
        </Tabs>

        {scripts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {scripts.map((script, index) => (
              <div key={index} className="p-4 border rounded-xl mt-4">
                <h2 className="text-base text-muted-foreground text-justify line-clamp-3">
                  {script.content}
                </h2>
              </div>
            ))}
          </div>
        )}
      </div>

      <Button
        className="mt-6"
        size="lg"
        disabled={loading}
        onClick={generateScript}
      >
        {loading ? (
          <Loader2Icon className="animate-spin" />
        ) : (
          <Sparkles size={20} />
        )}
        <span>Generate Script</span>
      </Button>
    </div>
  );
}

export default Topic;
