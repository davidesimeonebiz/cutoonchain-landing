"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { leadSchema, type LeadInput } from "@/lib/schemas";
import { serviceSelectOptions } from "@/config/services";

export function LeadForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: serviceSelectOptions[0]?.value,
      message: "",
      consent: false,
      marketing: false,
      website: "",
    },
  });

  const consent = watch("consent");
  const marketing = watch("marketing");

  async function onSubmit(data: LeadInput) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        toast.error(json.error || "Qualcosa e' andato storto. Riprova.");
        return;
      }

      toast.success("Grazie! Ti contattiamo entro 24h.");
      router.push("/grazie");
    } catch {
      toast.error("Errore di rete. Riprova tra qualche istante.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5 rounded-3xl border border-border bg-card/70 p-6 backdrop-blur-xl sm:p-8"
    >
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("website")}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Nome e cognome *</Label>
          <Input
            id="name"
            placeholder="Mario Rossi"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="nome@email.it"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="phone">Telefono (opzionale)</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+39 333 1234567"
            autoComplete="tel"
            {...register("phone")}
          />
        </div>
        <div className="space-y-1.5">
          <Label>Servizio di interesse *</Label>
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleziona un servizio" />
                </SelectTrigger>
                <SelectContent>
                  {serviceSelectOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.service && (
            <p className="text-xs text-destructive">{errors.service.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Messaggio (opzionale)</Label>
        <Textarea
          id="message"
          rows={3}
          placeholder="Capitale di partenza, obiettivi, dubbi specifici..."
          {...register("message")}
        />
      </div>

      <div className="space-y-3">
        <label className="flex items-start gap-3 text-sm">
          <Checkbox
            checked={consent}
            onCheckedChange={(v) => setValue("consent", v === true, { shouldValidate: true })}
            aria-invalid={!!errors.consent}
          />
          <span className="text-muted-foreground">
            Ho letto e accetto la{" "}
            <a href="/privacy" className="text-primary underline-offset-4 hover:underline">
              Privacy Policy
            </a>{" "}
            e i{" "}
            <a href="/termini" className="text-primary underline-offset-4 hover:underline">
              Termini
            </a>
            . Comprendo che nessun contenuto promette rendimenti o guadagni
            assicurati. *
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-destructive">{errors.consent.message}</p>
        )}

        <label className="flex items-start gap-3 text-sm">
          <Checkbox
            checked={marketing}
            onCheckedChange={(v) => setValue("marketing", v === true)}
          />
          <span className="text-muted-foreground">
            Acconsento a ricevere comunicazioni di marketing (opzionale).
          </span>
        </label>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full glow-bull"
        disabled={submitting}
      >
        {submitting ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Invio in corso...
          </>
        ) : (
          <>
            Voglio essere contattato
            <ArrowRight className="size-4" />
          </>
        )}
      </Button>

      <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
        Niente spam. Ti contattiamo solo per la call informativa. L&apos;invio
        del form non costituisce contratto né promessa di risultato economico.
      </p>
    </form>
  );
}
