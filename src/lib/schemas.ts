import { z } from "zod";
import { services } from "@/config/services";

const serviceSlugs = services.map((s) => s.slug) as [string, ...string[]];

export const leadSchema = z.object({
  name: z
    .string()
    .min(2, "Inserisci almeno 2 caratteri")
    .max(80, "Massimo 80 caratteri"),
  email: z.string().email("Email non valida").max(120),
  phone: z.string().trim().max(30).optional(),
  service: z.enum(serviceSlugs, {
    message: "Seleziona un servizio",
  }),
  message: z.string().max(500).optional(),
  consent: z.boolean().refine((v) => v === true, {
    message: "Devi accettare la privacy policy",
  }),
  marketing: z.boolean().optional(),
  // honeypot: must be empty
  website: z.string().max(0).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
