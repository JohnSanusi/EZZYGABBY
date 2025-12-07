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
  <section id="contact" class="p-6 flex flex-col gap-4">
    <p
      class="text-white tracking-widest border border-green-500 cursor-pointer focus:ring-4 flex justify-center items-center font-medium rounded-3xl text-sm w-40 md:text-base px-2 py-2 text-center mb-2 self-center"
    >
      Contact Me
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <div class="grid grid-cols-1 gap-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.30397185467!2d0.013513675659954686!3d51.54432490800638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a790e74668ad%3A0xf3d940cee7894474!2s170%20Romford%20Rd%2C%20London%20E7%209HY%2C%20UK!5e0!3m2!1sen!2sng!4v1749157072908!5m2!1sen!2sng"
          width="600"
          height="450"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="w-full rounded-lg"
        ></iframe>
      </div>
      <form @submit.prevent="submitForm" class="flex flex-col gap-4 text-white">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div class="w-full">
            <label for="name" class="text-lg tracking-normal font-semibold"
              >FullName:</label
            >
            <input
              type="text"
              v-model="formData.name"
              placeholder="John Doe"
              name="name"
              id="name"
              class="border border-gray-400 p-3 font-light text-lg rounded-lg w-full"
            />
          </div>
          <div class="w-full">
            <label for="email" class="text-lg tracking-normal font-semibold"
              >Email:</label
            >
            <input
              type="email"
              v-model="formData.email"
              placeholder="johndoe@gmail.com"
              name="email"
              id="email"
              class="w-full border border-gray-400 p-3 font-light text-lg rounded-lg"
            />
          </div>
        </div>
        <div class="w-full">
          <label for="subject" class="text-lg tracking-normal font-semibold"
            >Subject:</label
          >
          <input
            type="text"
            v-model="formData.subject"
            placeholder="Subject"
            name="subject"
            id="subject"
            class="w-full border border-gray-400 p-3 font-light text-lg rounded-lg"
          />
        </div>
        <div>
          <label for="notes" class="text-lg tracking-normal font-semibold"
            >Message:</label
          >
          <textarea
            name="message"
            v-model="formData.message"
            id="message"
            col="30"
            placeholder="Your Message...."
            class="w-full border border-gray-400 p-3 font-light text-lg rounded-lg"
          ></textarea>
        </div>
        <button
          type="submit"
          :disabled="isSending"
          class="text-white tracking-widest bg-green-500 hover:bg-green-600 hover:shadow-green-500/50 cursor-pointer focus:ring-4 focus:outline-none focus:ring-green-700 flex justify-center items-center font-medium rounded-xl text-base px-4 py-3 w-48 text-center transition-all duration-200 mr-4"
        >
          <i class="pi pi-send text-base mr-2"></i>
          {{ isSending ? "Sending..." : "Send Message" }}
        </button>
      </form>
    </div>
  </section>
</template>
