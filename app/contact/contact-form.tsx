"use client";

import { useActionState } from "react";
import { submitContact, ContactState } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Turnstile } from "@marsidev/react-turnstile";
import { motion } from "motion/react";
import { animation_container, animation_item } from "@/lib/animation";

const initial: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  if (state.status === "success") {
    return (
      <p className="mt-10 text-muted-foreground">
        Message sent — I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <motion.div variants={animation_container} initial="hidden" animate="show">
      <motion.h1 variants={animation_item} className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
        Let&apos;s Connect.
      </motion.h1>
      <motion.p variants={animation_item} className="mt-4 text-muted-foreground leading-relaxed">
        Have a question or want to work together? Send me a message or reach out at{" "}
        <a
          href="mailto:contact@jadenarceneaux.com"
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          contact@jadenarceneaux.com
        </a>
        .
      </motion.p>
      <form action={action} className="mt-10 flex flex-col gap-6 w-full">
        {state.status === "error" && (
          <p className="text-sm text-destructive">{state.message}</p>
        )}
  
        <motion.div variants={animation_item} className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your name" required />
        </motion.div>
  
        <motion.div variants={animation_item} className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        </motion.div>
  
        <motion.div variants={animation_item} className="flex flex-col gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" placeholder="What's on your mind?" rows={10} required />
        </motion.div>

        <motion.div variants={animation_item} className="flex flex-col gap-2">
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            options={{ size: "normal" }}
          />
        </motion.div>

        <motion.div variants={animation_item} className="flex flex-col gap-2">
          <Button type="submit" disabled={pending} className="self-start">
            {pending ? "Sending..." : "Send message"}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}
