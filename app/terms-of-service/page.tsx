import { createClient } from "redis";
import ReactMarkdown from "react-markdown";
import Header from "../components/Header";

export default async function TermsOfServicePage() {
  let content: string | null = null;
  let redis;

  try {
    redis = createClient({ url: process.env.REDIS_URL });
    await redis.connect();
    content = await redis.get("tos_content");
  } catch (error) {
    console.error("Redis error:", error);
  } finally {
    if (redis) {
      await redis.quit();
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <Header variant="legal" />
      <div className="py-12 px-4">
        <div className="mx-auto max-w-3xl bg-white p-8 shadow-sm dark:bg-zinc-800">
          <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Terms of Service
          </h1>

          {content === null ? (
            <p className="text-zinc-600 dark:text-zinc-400">
              No Terms of Service uploaded yet.
            </p>
          ) : (
            <div className="prose prose-zinc dark:prose-invert max-w-none">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
