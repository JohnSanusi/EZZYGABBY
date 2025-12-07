export const useContactForm = () => {
  const sendContactForm = async ({
    name,
    email,
    subject,
    message,
  }: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    const { data, error } = await $fetch("/api/contact", {
      method: "POST",
      body: {
        name,
        email,
        subject,
        message,
      },
    });
    if (error.value) throw error.value;
    return data.value;
  };

  return { sendContactForm };
};
