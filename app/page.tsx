import { HomeContent } from "@/components/home-content";

function getSeasonalGreeting(): string | null {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  if (month === 11 && day === 2) return "Happy Jaden Day 🎆";
  if (month === 12 && day === 25) return "Merry Christmas ❄️⛄️";
  if (month === 2) return "Happy Black History Month ✊🏾";
  if (month === 3) return "Happy Women's History Month 💜";
  if (month === 6) return "Happy Pride Month 🏳️‍🌈";
  if (month === 10) return "Happy Las Vegas Pride 🏳️‍🌈";
  return null;
}

export default function Home() {
  return <HomeContent greeting={getSeasonalGreeting()} />;
}
