import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tesla Authorization",
  robots: {
    index: false,
    follow: false,
  },
};

type CallbackPageProps = {
  searchParams: Promise<{
    code?: string;
    error?: string;
    error_description?: string;
  }>;
};

export default async function TeslaCallbackPage({
  searchParams,
}: CallbackPageProps) {
  const { code, error, error_description: errorDescription } = await searchParams;

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-6 px-6 py-16">
      <h1 className="text-3xl font-semibold">Tesla authorization</h1>
      {error ? (
        <>
          <p>Tesla did not authorize the application.</p>
          <pre className="overflow-x-auto rounded-md border p-4">
            {errorDescription ? `${error}: ${errorDescription}` : error}
          </pre>
        </>
      ) : code ? (
        <>
          <p>
            Authorization succeeded. Copy this page&apos;s full URL from the
            address bar and paste it into the waiting terminal.
          </p>
          <p>You can close this page after the terminal confirms token storage.</p>
        </>
      ) : (
        <p>No Tesla authorization response was found in this URL.</p>
      )}
    </main>
  );
}
