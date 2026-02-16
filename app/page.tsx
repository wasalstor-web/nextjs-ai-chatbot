import { Footer, Header } from "@/components/landing/navigation";
import HomePageContent from "./home-content";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HomePageContent />
      </main>
      <Footer />
    </>
  );
}
