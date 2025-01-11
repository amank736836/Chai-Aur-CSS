import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  

import React from "react";

const AccordPage = () => {
  const faq = [
    {
      question: "What is the purpose of this website?",
      answer:
        "This website is a demo project for the Chakra UI component library.",
    },
    {
      question: "Is this website accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "What is the technology stack used in this project?",
      answer:
        "This project uses Next.js, TypeScript, Chakra UI, and Vercel for deployment.",
    },
  ];

  return (
    <div className="flex justify-center items-center h-full flex-col">
      <main className="w-[500px] p-4">
        {
            faq.map(({ question, answer }) => (
                <Accordion key={question} type="single">
                <AccordionItem value={question}>
                    <AccordionTrigger>{question}</AccordionTrigger>
                    <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
                </Accordion>
            ))
        }
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>

      <AlertDialog>
  <AlertDialogTrigger>Open Chai</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    </div>
  );
};

export default AccordPage;
