<script setup>
useHead({
  title: "Ezzy Gabby Photography ",
  meta: [
    {
      name: "description",
      content:
        "Book stunning photoshoots with EzzyGabby Photography. Weddings, birthdays, events, potraits and more...",
    },
    {
      name: "keywords",
      content: " photography, photoshoot, weddings, potraits, event booking",
    },
    {
      name: "author",
      content: "EzzyGabby",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "EzzyGabby Photography",
    },
    {
      property: "og:description",
      content: "Book a session with a top-tier photographer now.",
    },
    {
      property: "og:url",
      content: "https://ezzygabby.vercel.app",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://ezzygabby.vercel.app",
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
