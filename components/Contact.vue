<script setup lang="ts">
import { reactive, ref } from "vue";
import { push, Notification } from "notivue";
import { useContactForm } from "~/composables/useContactForm";

const isSending = ref(false);
const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const { sendContactForm } = useContactForm();

const submitForm = async () => {
  const contactForm = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };

  if (
    contactForm.name === "" ||
    contactForm.email === "" ||
    contactForm.subject === "" ||
    contactForm.message === ""
  ) {
    push.warning("please Fill all inputs");
    return;
  }
  isSending.value = true;

  try {
    sendContactForm({ ...contactForm });
    push.success({
      title: "Message Sent",
      message: "Thanks for reaching out",
    });

    formData.name = "";
    formData.email = "";
    formData.subject = "";
    formData.message = "";
  } catch (err: any) {
    push.error({
      title: "Failed to send",
      message: "Something went wrong, try again",
    });
  } finally {
    isSending.value = false;
  }
};
</script>

<template>
  <Notivue v-slot="item" theme="white">
    <Notification :item="item" />
  </Notivue>
  
  <section 
    id="contact" 
    class="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 lg:py-28 overflow-hidden"
  >
    <!-- Background effects -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 blur-3xl rounded-full"></div>
      <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-500/10 blur-3xl rounded-full"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div 
        class="text-center mb-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span class="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium backdrop-blur-sm mb-4">
          Get In Touch
        </span>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          Let's Create Together
        </h2>
        <p class="text-lg text-slate-300 max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear about it. Drop me a message and let's make something amazing.
        </p>
      </div>

      <!-- Contact Grid -->
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <!-- Map Section -->
        <div 
          class="space-y-8"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div class="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px] group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.30397185467!2d0.013513675659954686!3d51.54432490800638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a790e74668ad%3A0xf3d940cee7894474!2s170%20Romford%20Rd%2C%20London%20E7%209HY%2C%20UK!5e0!3m2!1sen!2sng!4v1749157072908!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="grayscale group-hover:grayscale-0 transition-all duration-500"
            ></iframe>
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none"></div>
          </div>

          <!-- Contact Info Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
              <div class="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <i class="pi pi-map-marker text-2xl text-emerald-400"></i>
              </div>
              <h3 class="text-white font-semibold text-lg mb-2">Location</h3>
              <p class="text-slate-400 text-sm">170 Romford Rd, London E7 9HY, UK</p>
            </div>

            <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
              <div class="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <i class="pi pi-clock text-2xl text-emerald-400"></i>
              </div>
              <h3 class="text-white font-semibold text-lg mb-2">Response Time</h3>
              <p class="text-slate-400 text-sm">Within 24 hours</p>
            </div>
          </div>
        </div>

        <!-- Form Section -->
        <form 
          @submit.prevent="submitForm" 
          class="space-y-6"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div class="grid sm:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label for="name" class="text-white font-medium text-sm">
                Full Name
              </label>
              <input
                type="text"
                v-model="formData.name"
                placeholder="John Doe"
                name="name"
                id="name"
                class="w-full bg-slate-800/50 border border-slate-700/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-white placeholder-slate-500 px-4 py-3.5 rounded-xl transition-all duration-300 outline-none"
              />
            </div>
            
            <div class="space-y-2">
              <label for="email" class="text-white font-medium text-sm">
                Email Address
              </label>
              <input
                type="email"
                v-model="formData.email"
                placeholder="johndoe@gmail.com"
                name="email"
                id="email"
                class="w-full bg-slate-800/50 border border-slate-700/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-white placeholder-slate-500 px-4 py-3.5 rounded-xl transition-all duration-300 outline-none"
              />
            </div>
          </div>

          <div class="space-y-2">
            <label for="subject" class="text-white font-medium text-sm">
              Subject
            </label>
            <input
              type="text"
              v-model="formData.subject"
              placeholder="What's this about?"
              name="subject"
              id="subject"
              class="w-full bg-slate-800/50 border border-slate-700/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-white placeholder-slate-500 px-4 py-3.5 rounded-xl transition-all duration-300 outline-none"
            />
          </div>

          <div class="space-y-2">
            <label for="message" class="text-white font-medium text-sm">
              Message
            </label>
            <textarea
              name="message"
              v-model="formData.message"
              id="message"
              rows="6"
              placeholder="Tell me about your project..."
              class="w-full bg-slate-800/50 border border-slate-700/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-white placeholder-slate-500 px-4 py-3.5 rounded-xl transition-all duration-300 outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="isSending"
            class="group relative w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            <span class="flex items-center justify-center gap-2">
              <i class="pi pi-send text-base"></i>
              {{ isSending ? "Sending..." : "Send Message" }}
            </span>
            <span class="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
