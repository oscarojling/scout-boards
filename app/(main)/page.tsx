import CategoryList from "@/components/CategoryList";
import RecentPost from "@/components/RecentPost";
import HomeHero from "@/components/HomeHero";

export const revalidate = 600;
export default async function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl p-4 md:py-12">
      <HomeHero />
      <div className="grid gap-4 md:grid-cols-[3fr_1fr]">
        <CategoryList />
        <RecentPost />
      </div>
    </div>
  );
}
