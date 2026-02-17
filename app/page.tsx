import { Footer, Header } from "@/components/landing/navigation";
import { HomeContent } from "./home-content";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HomeContent />
      </main>
      <Footer />
    </>
  );
}
