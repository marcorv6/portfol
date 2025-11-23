"use client"

import { Button } from "../ui/button"
import { useForm, } from "react-hook-form"
import { Field, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { ErrorMessage } from "../ui/error-message"
import { useState } from "react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import contactForm from "@/services/contact-form"
import { Spinner } from "../ui/spinner"
import { ContactFormResponse } from "@/types/contact-form"

interface ContactFormData {
  name: string
  email: string
  message: string
}
const ContactForm = ({ setSuccessfullySubmitted }: { setSuccessfullySubmitted: (value: boolean) => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit: handleSubmitForm, formState: { errors, isValid }, reset } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true)
      const response = await contactForm(data) as ContactFormResponse;
      if (response.success) {
        toast.success("Message sent successfully!")
        reset();
        setSuccessfullySubmitted(true);
      } else {
        toast.error(response.message)
      }
      setIsSubmitting(false)
    } catch (error) {
      console.error(error)
      toast.error("Failed to send message")
      setIsSubmitting(false)
    }
  }
  return (
    <>
      <form 
        className="flex flex-col gap-4" 
        onSubmit={handleSubmitForm(onSubmit)}
        aria-label="Contact form"
        noValidate
      >
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input 
            id="name"
            className={cn("border-input dark:border-input/30", errors.name && "border-destructive")} 
            disabled={isSubmitting} 
            type="text" 
            placeholder="Your name" 
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name", { required: { value: true, message: "Name is required" }, minLength: { value: 3, message: "Name must be at least 3 characters long" }, maxLength: { value: 50, message: "Name must be less than 50 characters long" } })} 
          />
          <div id="name-error" role="alert" aria-live="polite">
            <ErrorMessage message={errors.name?.message} show={!!errors.name} />
          </div>
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input 
            id="email"
            className={cn("border-input dark:border-input/30", errors.email && "border-destructive")} 
            disabled={isSubmitting} 
            type="email" 
            placeholder="your.email@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email", { required: { value: true, message: "Email is required" }, pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })} 
          />
          <div id="email-error" role="alert" aria-live="polite">
            <ErrorMessage message={errors.email?.message} show={!!errors.email} />
          </div>
        </Field>
        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea 
            id="message"
            className={cn("border-input dark:border-input/30", errors.message && "border-destructive")} 
            disabled={isSubmitting} 
            placeholder="Your message here..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message", { required: { value: true, message: "Message is required" }, minLength: { value: 10, message: "Message must be at least 10 characters long" }, maxLength: { value: 500, message: "Message must be less than 500 characters" } })} 
          />
          <div id="message-error" role="alert" aria-live="polite">
            <ErrorMessage message={errors.message?.message} show={!!errors.message} />
          </div>
        </Field>
        <Button 
          disabled={isSubmitting || !isValid} 
          type="submit"
          aria-busy={isSubmitting}
          aria-label={isSubmitting ? "Sending message..." : "Send message"}
        >
          {isSubmitting ? (
            <>
              <Spinner className="size-4 animate-spin" aria-hidden="true" />
              <span className="sr-only">Sending message...</span>
            </>
          ) : "Submit"}
        </Button>
      </form>
    </>
  )
}

export default ContactForm
