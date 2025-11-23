import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const ThankYouCard = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Thank you for your message!</h1>
      <p className="text-lg">We will get back to you as soon as possible.</p>
      <Button onClick={() => router.push("/")} variant="outline">Go to home</Button>
    </div>
  )
}

export default ThankYouCard;