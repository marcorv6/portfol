"use client"

import { Button } from "../ui/button"
import { useForm } from "react-hook-form"
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
import { Send } from "lucide-react"

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
    <form 
      className="flex flex-col gap-5" 
      onSubmit={handleSubmitForm(onSubmit)}
      aria-label="Contact form"
      noValidate
    >
      <Field>
        <FieldLabel htmlFor="name" className="text-xs font-mono uppercase text-foreground font-semibold">Name</FieldLabel>
        <Input 
          id="name"
          className={cn("bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl py-2.5 transition-colors", errors.name && "border-destructive")} 
          disabled={isSubmitting} 
          type="text" 
          placeholder="Marco Romero" 
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name", { required: { value: true, message: "Name is required" }, minLength: { value: 3, message: "Name must be at least 3 characters long" }, maxLength: { value: 50, message: "Name must be less than 50 characters long" } })} 
        />
        <div id="name-error" role="alert" aria-live="polite">
          <ErrorMessage message={errors.name?.message} show={!!errors.name} />
        </div>
      </Field>

      <Field>
        <FieldLabel htmlFor="email" className="text-xs font-mono uppercase text-foreground font-semibold">Email</FieldLabel>
        <Input 
          id="email"
          className={cn("bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl py-2.5 transition-colors", errors.email && "border-destructive")} 
          disabled={isSubmitting} 
          type="email" 
          placeholder="marco@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email", { required: { value: true, message: "Email is required" }, pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })} 
        />
        <div id="email-error" role="alert" aria-live="polite">
          <ErrorMessage message={errors.email?.message} show={!!errors.email} />
        </div>
      </Field>

      <Field>
        <FieldLabel htmlFor="message" className="text-xs font-mono uppercase text-foreground font-semibold">Message</FieldLabel>
        <Textarea 
          id="message"
          rows={4}
          className={cn("bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl py-2.5 resize-none transition-colors", errors.message && "border-destructive")} 
          disabled={isSubmitting} 
          placeholder="Tell me about your project or architecture ideas..."
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
        className="w-full py-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm shadow-md transition-all flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Spinner className="size-4 animate-spin" aria-hidden="true" />
            <span>Sending message...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  )
}

export default ContactForm
