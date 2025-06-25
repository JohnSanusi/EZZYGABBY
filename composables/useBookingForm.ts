export const useBookingForm = () => {
  const sendBookingForm = async ({
    name,
    email,
    date,
    time,
    options,
    notes,
  }: {
    name: string;
    email: string;
    date: string;
    time: string;
    options: string;
    notes: string;
  }) => {
    const { data, error } = await $fetch("/api/booking", {
      method: "POST",
      body: {
        name,
        email,
        date,
        time,
        options,
        notes,
      },
    });
    if (error.value) throw error.value;
    return data.value;
  };

  return { sendBookingForm };
};
