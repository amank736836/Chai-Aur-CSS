import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordPage() {
  const faq = [
    {
      question: "What is ShadCN?",
      answer:
        "ShadCN is a design system for creating accessible and inclusive web applications.",
    },
    {
      question: "What is DaisyUI?",
      answer: "DaisyUI is a collection of utility classes for Tailwind CSS.",
    },
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
    },
    {
      question: "What is Next.js?",
      answer:
        "Next.js is a React framework for building static and dynamic websites.",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="w-[500px] p-4 h-full">
        {faq.map(({ question, answer }) => (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h2 className="text-lg font-semibold">{question}</h2>
              </AccordionTrigger>
              <AccordionContent>
                <p>{answer}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </main>
    </div>
  );
}
