import api from "./axiosConfig";
import { ContactFormData, ContactFormResponse } from "@/types/contact-form";

const contactForm = async (data: ContactFormData): Promise<ContactFormResponse> => {
  try {
    const response = await api.post<ContactFormResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/submitContactForm`,
      data
    );
    console.log(response);
    return response.data as ContactFormResponse;
  } catch (error) {
    throw error;
  }
};

export default contactForm;
