import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Marco Romero for collaboration opportunities, project inquiries, or any questions about web development and frontend architecture.",
  openGraph: {
    title: "Contact Marco Romero | Frontend Developer",
    description: "Reach out to discuss your project or collaboration opportunities.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

