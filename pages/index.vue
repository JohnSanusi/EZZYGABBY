<script setup>
useHead({
  title: "Eazzy Gabby Photography ",
  meta: [
    {
      name: "description",
      content:
        "Book stunning photoshoots with EazzyGabby Photography. Weddings, birthdays, events, potraits and more...",
    },
    {
      name: "keywords",
      content: " photography, photoshoot, weddings, potraits, event booking",
    },
    {
      name: "author",
      content: "EazzyGabby",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "EazzyGabby Photography",
    },
    {
      property: "og:description",
      content: "Book a session with a top-tier photographer now.",
    },
    {
      property: "og:url",
      content: "https://eazzygabby.vercel.app",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://eazzygabby.vercel.app",
    },
  ],
});
</script>

<template>
  <header>
    <Navbar />
    <Hero />
  </header>
  <main>
    <About />
    <Services />
    <HomeGallery />
    <Book />
    <Contact />
  </main>
  <footer>
    <Footer />
  </footer>
  <div>
    <BackToTop />
  </div>
</template>
