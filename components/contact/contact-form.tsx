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
      <form className="flex flex-col gap-4" onSubmit={handleSubmitForm(onSubmit)}>
        <Field>
          <FieldLabel>Name</FieldLabel>
          <Input className={cn("border-input dark:border-input/30", errors.name && "border-destructive")} disabled={isSubmitting} type="text" placeholder="Name" {...register("name", { required: { value: true, message: "Name is required" }, minLength: { value: 3, message: "Name must be at least 3 characters long" }, maxLength: { value: 50, message: "Name must be less than 50 characters long" } })} />
          <ErrorMessage message={errors.name?.message} show={!!errors.name} />
        </Field>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input className={cn("border-input dark:border-input/30", errors.email && "border-destructive")} disabled={isSubmitting} type="email" placeholder="Email" {...register("email", { required: { value: true, message: "Email is required" }, pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })} />
          <ErrorMessage message={errors.email?.message} show={!!errors.email} />
        </Field>
        <Field>
          <FieldLabel>Message</FieldLabel>
          <Textarea className={cn("border-input dark:border-input/30", errors.message && "border-destructive")} disabled={isSubmitting} placeholder="Message" {...register("message", { required: { value: true, message: "Message is required" }, minLength: { value: 10, message: "Message must be at least 10 characters long" }, maxLength: { value: 500, message: "Message must be less than 500 characters" } })} />
          <ErrorMessage message={errors.message?.message} show={!!errors.message} />
        </Field>
        <Button disabled={isSubmitting || !isValid} type="submit">
          {isSubmitting ? <Spinner className="size-4 animate-spin" /> : "Submit"}
        </Button>
      </form>
    </>
  )
}

export default ContactForm
