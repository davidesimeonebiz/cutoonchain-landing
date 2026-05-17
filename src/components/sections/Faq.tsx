"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { faqs } from "@/config/faqs";

export function Faq() {
  return (
    <AnimatedSection id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-balance sm:text-5xl">
            Domande frequenti.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Le risposte alle domande che ci fanno piu&apos; spesso prima di
            iniziare.
          </p>
        </div>
        <Accordion className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.question}
              value={`item-${i}`}
              className="border-border"
            >
              <AccordionTrigger className="text-left text-base font-medium hover:text-primary">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  );
}
