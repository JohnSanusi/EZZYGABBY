<script setup>
import { reactive, ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();
const formRef = ref(null);
const isSending = ref(false);
const formData = reactive({
  name: "",
  email: "",
  date: "12/06/2025",
  time: "12:00",
  options: "",
  notes: "",
});

const submitForm = async () => {
  const bookingData = {
    name: formData.name,
    email: formData.email,
    date: formData.date,
    time: formData.time,
    type: formData.options,
    notes: formData.notes,
  };

  if (
    bookingData.name === "" ||
    bookingData.email === "" ||
    bookingData.date === "" ||
    bookingData.time === "" ||
    bookingData.type === ""
  ) {
    toast.warning("Please fill all inputs");
    return
  }
  isSending.value = true;

  const {data, error} = await useFetch("/api/booking", {
    method: 'post',
    body: bookingData
  })
  isSending.value = false;
if(error.value){
  console.log(error.value);
  toast.error("Booking failed, please try again ")
  
}else if(data.value?.status === "success"){
  toast.success("Booking successful, I'd get back to you soon")
  formData.name =  "";
  formData.email = "";
  formData.date = "12/06/2025";
  formData.time = "12:00";
  formData.options = "";
  formData.notes = "";
}else{
  toast.error("Error, form not functioning")
}
 
};
</script>
<template>
  <section id="book" class="flex flex-col p-6 justify-center">
    <p
      class="text-white tracking-widest border border-green-500 cursor-pointer focus:ring-4 flex justify-center items-center font-medium rounded-3xl text-sm w-40 md:text-base px-2 py-2 text-center mb-2 self-center"
    >
      Book An Event
    </p>
    <div class="p-2 mt-4 text-white">
      <form  @submit.prevent="submitForm" class="flex flex-col gap-4">
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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div class="w-full">
            <label
              for="date"
              class="text-lg tracking-normal font-semibold w-full"
              >Preferred Datee:</label
            >
            <input
              type="date"
              v-model="formData.date"
              placeholder="Preferred Date"
              name="date"
              id="date"
              class="w-full border border-gray-400 p-3 font-light text-lg rounded-lg text-white"
            />
          </div>
          <div class="full">
            <label
              for="time"
              class="text-lg tracking-normals font-semibold text-white w-full"
              >Preferred Time:</label
            >
            <input
              type="time"
              v-model="formData.time"
              placeholder="Preferred Time"
              name="time"
              id="time"
              class="w-full border border-gray-400 p-3 font-light text-lg rounded-lg"
            />
          </div>
        </div>
        <div>
          <label for="options" class="text-lg tracking-normal font-semibold"
            >Session Type:</label
          >
          <select
            name="options"
            v-model="formData.options"
            id="options"
            class="bg-slate-900 w-full border border-gray-400 p-3 font-light text-lg rounded-lg"
          >
            <option value="Session Type" disabled selected class="">
              Session type
            </option>
            <option>Potrait</option>
            <option>Event</option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Photshoot</option>
            <option>other</option>
          </select>
        </div>
        <div>
          <label for="notes" class="text-lg tracking-normal font-semibold"
            >Extra Notes:</label
          >
          <textarea
            name="notes"
            v-model="formData.notes"
            id="notes"
            col="20"
            placeholder="Extra Notes"
            class="w-full border border-gray-400 p-3 font-light text-lg rounded-lg"
          ></textarea>
        </div>
        <button
          type="submit"
          :disabled="isSending"
         
          class="text-white tracking-widest bg-green-500 hover:bg-green-600 hover:shadow-green-500/50 cursor-pointer focus:ring-4 focus:outline-none focus:ring-green-700 flex justify-center items-center font-medium rounded-xl text-base px-4 py-3 w-48 text-center transition-all duration-200 mr-4"
        >
          <i class="pi pi-send text-base mr-2"></i>
          {{ isSending ? "Booking..." : "Book Event" }}
        </button>
      </form>
    </div>
  </section>
</template>
<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator,
input[type="time"]::-webkit-calendar-picker-indicator {
  filter: brightness(0) invert(1);
  cursor: pointer;
}
</style>
