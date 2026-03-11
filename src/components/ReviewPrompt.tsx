import { GOOGLE_REVIEW_URL } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MessageSquare } from "lucide-react";

export default function ReviewPrompt() {
  const REVIEW_URL = GOOGLE_REVIEW_URL;

  return (
    <Card className="border-0 shadow-lg bg-white overflow-hidden relative group">
      <div className="absolute top-0 left-0 w-1 h-full bg-[hsl(var(--nila-warm))]" />
      <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="bg-[hsl(var(--nila-warm-light))] p-5 rounded-3xl shrink-0">
          <Star className="h-10 w-10 text-[hsl(var(--nila-warm))] fill-[hsl(var(--nila-warm))]" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-nila-navy mb-2">How was your experience?</h3>
          <p className="text-muted-foreground leading-relaxed">
            Your feedback helps us provide even better care for families in Namakkal. Please take a moment to share your review on Google.
          </p>
        </div>
        <div className="shrink-0 w-full md:w-auto">
          <a href={REVIEW_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full bg-nila-navy hover:bg-nila-navy/90 text-white font-bold gap-2 rounded-2xl px-8 shadow-xl">
              <MessageSquare className="h-4 w-4" /> Write a Review
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
