import { getGuideBySlug, getAllGuideSlugs } from "@/lib/guides-data";
import GuidePageClient from "./GuidePageClient";

// Generate static params for all guides at build time
export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({
    slug,
  }));
}

interface PageProps {
  params: { slug: string };
}

export default function GuidePage({ params }: PageProps) {
  const guide = getGuideBySlug(params.slug);

  return <GuidePageClient guide={guide || null} slug={params.slug} />;
}
