import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <div>
      <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
        Let&apos;s Connect.
      </h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Have a question or want to work together? Send me a message or reach out at{" "}
        <a
          href="mailto:contact@jadenarceneaux.com"
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          contact@jadenarceneaux.com
        </a>
        .
      </p>
      <ContactForm />
    </div>
  );
}
