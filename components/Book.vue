<script setup lang="ts">
import { reactive, ref } from "vue";
import { push, Notification } from "notivue";
import { useBookingForm } from "~/composables/useBookingForm";

const isSending = ref(false);
const formData = reactive({
  name: "",
  email: "",
  date: "",
  time: "",
  options: "",
  notes: "",
});
const { sendBookingForm } = useBookingForm();

const submitForm = async () => {
  const bookingData = {
    name: formData.name,
    email: formData.email,
    date: formData.date,
    time: formData.time,
    options: formData.options,
    notes: formData.notes,
  };

  if (
    bookingData.name === "" ||
    bookingData.email === "" ||
    bookingData.date === "" ||
    bookingData.time === "" ||
    bookingData.options === ""
  ) {
    push.warning("Please fill all inputs");
    return;
  }
  isSending.value = true;
  try {
    sendBookingForm({ ...bookingData });
    push.success({
      title: "Booking Successful",
      message: "I'd get back to you soon",
    });

    formData.name = "";
    formData.email = "";
    formData.date = "";
    formData.time = "";
    formData.options = "";
    formData.notes = "";
  } catch (err: any) {
    push.error({
      title: "Booking Failed",
      message: "Something went wrong, try again",
    });
  } finally {
    isSending.value = false;
  }
};
</script>

<template>
  <Notivue v-slot="item" theme="dark">
    <Notification :item="item" />
  </Notivue>
  
  <section 
    id="book" 
    class="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 lg:py-28 overflow-hidden"
  >
    <!-- Background effects -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-1/3 left-1/3 w-96 h-96 bg-emerald-500/20 blur-3xl rounded-full"></div>
      <div class="absolute bottom-1/3 right-1/3 w-96 h-96 bg-green-500/10 blur-3xl rounded-full"></div>
    </div>

    <div class="relative max-w-5xl mx-auto px-6">
      <!-- Section Header -->
      <div 
        class="text-center mb-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span class="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium backdrop-blur-sm mb-4">
          Book Your Session
        </span>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          Reserve Your Spot
        </h2>
        <p class="text-lg text-slate-300 max-w-2xl mx-auto">
          Ready to capture your special moments? Fill out the form below and I'll get back to you within 24 hours.
        </p>
      </div>

      <!-- Booking Form Card -->
      <div 
        class="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 lg:p-12 shadow-2xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <form @submit.prevent="submitForm" class="space-y-6">
          <!-- Name and Email Row -->
          <div class="grid sm:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label for="name" class="text-white font-medium text-sm flex items-center gap-2">
                <i class="pi pi-user text-emerald-400"></i>
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
              <label for="email" class="text-white font-medium text-sm flex items-center gap-2">
                <i class="pi pi-envelope text-emerald-400"></i>
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

          <!-- Date and Time Row -->
          <div class="grid sm:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label for="date" class="text-white font-medium text-sm flex items-center gap-2">
                <i class="pi pi-calendar text-emerald-400"></i>
                Preferred Date
              </label>
              <input
                type="date"
                v-model="formData.date"
                name="date"
                id="date"
                class="w-full bg-slate-800/50 border border-slate-700/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-white placeholder-slate-500 px-4 py-3.5 rounded-xl transition-all duration-300 outline-none"
              />
            </div>
            
            <div class="space-y-2">
              <label for="time" class="text-white font-medium text-sm flex items-center gap-2">
                <i class="pi pi-clock text-emerald-400"></i>
                Preferred Time
              </label>
              <input
                type="time"
                v-model="formData.time"
                name="time"
                id="time"
                class="w-full bg-slate-800/50 border border-slate-700/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-white placeholder-slate-500 px-4 py-3.5 rounded-xl transition-all duration-300 outline-none"
              />
            </div>
          </div>

          <!-- Session Type -->
          <div class="space-y-2">
            <label for="options" class="text-white font-medium text-sm flex items-center gap-2">
              <i class="pi pi-camera text-emerald-400"></i>
              Session Type
            </label>
            <select
              name="options"
              v-model="formData.options"
              id="options"
              class="w-full bg-slate-800/50 border border-slate-700/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-white placeholder-slate-500 px-4 py-3.5 rounded-xl transition-all duration-300 outline-none appearance-none cursor-pointer"
            >
              <option value="" disabled selected>Select session type</option>
              <option value="Portrait">Portrait</option>
              <option value="Event">Event</option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Photoshoot">Photoshoot</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <!-- Extra Notes -->
          <div class="space-y-2">
            <label for="notes" class="text-white font-medium text-sm flex items-center gap-2">
              <i class="pi pi-file-edit text-emerald-400"></i>
              Additional Notes
            </label>
            <textarea
              name="notes"
              v-model="formData.notes"
              id="notes"
              rows="5"
              placeholder="Tell me more about your vision, location preferences, or any special requests..."
              class="w-full bg-slate-800/50 border border-slate-700/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-white placeholder-slate-500 px-4 py-3.5 rounded-xl transition-all duration-300 outline-none resize-none"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-center pt-4">
            <button
              type="submit"
              :disabled="isSending"
              class="group relative px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 min-w-[200px]"
            >
              <span class="flex items-center justify-center gap-2">
                <i class="pi pi-check-circle text-lg"></i>
                {{ isSending ? "Booking..." : "Book Your Session" }}
              </span>
              <span class="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>

          <!-- Info Text -->
          <p class="text-center text-slate-400 text-sm pt-4">
            * I'll review your booking and get back to you within 24 hours to confirm availability
          </p>
        </form>
      </div>

      <!-- Feature Cards -->
      <div 
        class="grid sm:grid-cols-3 gap-6 mt-12"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-emerald-500/50 transition-all duration-300">
          <div class="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="pi pi-clock text-2xl text-emerald-400"></i>
          </div>
          <h3 class="text-white font-semibold mb-2">Quick Response</h3>
          <p class="text-slate-400 text-sm">Get confirmation within 24 hours</p>
        </div>

        <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-emerald-500/50 transition-all duration-300">
          <div class="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="pi pi-shield text-2xl text-emerald-400"></i>
          </div>
          <h3 class="text-white font-semibold mb-2">Flexible Scheduling</h3>
          <p class="text-slate-400 text-sm">We'll work around your availability</p>
        </div>

        <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-emerald-500/50 transition-all duration-300">
          <div class="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="pi pi-star text-2xl text-emerald-400"></i>
          </div>
          <h3 class="text-white font-semibold mb-2">Professional Service</h3>
          <p class="text-slate-400 text-sm">High-quality results guaranteed</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator,
input[type="time"]::-webkit-calendar-picker-indicator {
  filter: brightness(0) invert(1);
  cursor: pointer;
}

select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%2310b981' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}
</style>
