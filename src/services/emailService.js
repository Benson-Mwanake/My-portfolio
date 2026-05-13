import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_zie2akk";
const TEMPLATE_ID = "template_mip2nkm";
const PUBLIC_KEY = "zU3-x2vjfaUp6aUiT";

export const sendEmail = (formData) => {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    },
    PUBLIC_KEY,
  );
};
