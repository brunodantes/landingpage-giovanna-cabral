import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BooksSection from "@/components/BooksSection";
import PodcastSection from "@/components/PodcastSection";
import ContentSection from "@/components/ContentSection";
import ProductsSection from "@/components/ProductsSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BooksSection />
        <PodcastSection />
        <ContentSection />
        <ProductsSection />
        <InstagramSection />
      </main>
      <Footer />
    </>
  );
}
