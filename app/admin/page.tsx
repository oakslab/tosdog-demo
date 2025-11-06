'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [tosMarkdown, setTosMarkdown] = useState('');
  const [privacyMarkdown, setPrivacyMarkdown] = useState('');
  const [tosLoading, setTosLoading] = useState(false);
  const [privacyLoading, setPrivacyLoading] = useState(false);
  const [tosMessage, setTosMessage] = useState('');
  const [privacyMessage, setPrivacyMessage] = useState('');

  const handleTosSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTosLoading(true);
    setTosMessage('');

    try {
      const response = await fetch('/api/update-tos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ markdown: tosMarkdown, type: 'tos' }),
      });

      const data = await response.json();

      if (response.ok) {
        setTosMessage('Terms of Service saved successfully!');
      } else {
        setTosMessage(`Error: ${data.error || 'Failed to save'}`);
      }
    } catch (error) {
      setTosMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setTosLoading(false);
    }
  };

  const handlePrivacySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPrivacyLoading(true);
    setPrivacyMessage('');

    try {
      const response = await fetch('/api/update-tos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ markdown: privacyMarkdown, type: 'privacy' }),
      });

      const data = await response.json();

      if (response.ok) {
        setPrivacyMessage('Privacy Policy saved successfully!');
      } else {
        setPrivacyMessage(`Error: ${data.error || 'Failed to save'}`);
      }
    } catch (error) {
      setPrivacyMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setPrivacyLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4 dark:bg-zinc-900">
      <div className="mx-auto max-w-4xl bg-white p-8 shadow-sm dark:bg-zinc-800">
        <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Admin Panel
        </h1>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Terms of Service Form */}
          <form onSubmit={handleTosSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="tos-markdown"
                className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-50"
              >
                Terms of Service (Markdown)
              </label>
              <textarea
                id="tos-markdown"
                value={tosMarkdown}
                onChange={(e) => setTosMarkdown(e.target.value)}
                rows={15}
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 transition-colors focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-50"
                placeholder="Enter your Terms of Service in Markdown format..."
              />
            </div>

            <button
              type="submit"
              disabled={tosLoading}
              className="w-full rounded-lg bg-zinc-900 px-4 py-3 text-white font-medium transition-all hover:bg-zinc-700 hover:shadow-md disabled:bg-zinc-400 disabled:cursor-not-allowed dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:disabled:bg-zinc-600"
            >
              {tosLoading ? 'Saving...' : 'Save Terms of Service'}
            </button>

            {tosMessage && (
              <div
                className={`rounded-lg p-4 ${
                  tosMessage.startsWith('Error')
                    ? 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-200'
                    : 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-200'
                }`}
              >
                {tosMessage}
              </div>
            )}
          </form>

          {/* Privacy Policy Form */}
          <form onSubmit={handlePrivacySubmit} className="space-y-4">
            <div>
              <label
                htmlFor="privacy-markdown"
                className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-50"
              >
                Privacy Policy (Markdown)
              </label>
              <textarea
                id="privacy-markdown"
                value={privacyMarkdown}
                onChange={(e) => setPrivacyMarkdown(e.target.value)}
                rows={15}
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 transition-colors focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-50"
                placeholder="Enter your Privacy Policy in Markdown format..."
              />
            </div>

            <button
              type="submit"
              disabled={privacyLoading}
              className="w-full rounded-lg bg-zinc-900 px-4 py-3 text-white font-medium transition-all hover:bg-zinc-700 hover:shadow-md disabled:bg-zinc-400 disabled:cursor-not-allowed dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:disabled:bg-zinc-600"
            >
              {privacyLoading ? 'Saving...' : 'Save Privacy Policy'}
            </button>

            {privacyMessage && (
              <div
                className={`rounded-lg p-4 ${
                  privacyMessage.startsWith('Error')
                    ? 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-200'
                    : 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-200'
                }`}
              >
                {privacyMessage}
              </div>
            )}
          </form>
        </div>

        <div className="mt-8 border-t border-zinc-200 pt-4 dark:border-zinc-700">
          <div className="flex gap-4">
            <Link
              href="/"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Home
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              View Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
