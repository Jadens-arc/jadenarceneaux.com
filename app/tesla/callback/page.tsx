import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tesla Authorization",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TeslaCallbackPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-6 px-6 py-16">
      <h1 className="text-3xl font-semibold">Tesla authorization</h1>
      <p>
        Return to the waiting terminal and paste this page&apos;s full URL from
        the browser address bar.
      </p>
      <p>You can close this page after the terminal confirms token storage.</p>
    </main>
  );
}
