'use client';

import { Share2 } from 'lucide-react';
import { useState } from 'react';

type ShareLocationButtonProps = {
  text: string;
  url: string;
  accent: string;
};

export function ShareLocationButton({ text, url, accent }: ShareLocationButtonProps) {
  const [copied, setCopied] = useState(false);

  async function shareLocation() {
    const shareData = {
      title: text,
      text,
      url
    };

    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(`${text} ${url}`);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={shareLocation}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black text-white shadow-[0_8px_20px_rgba(47,33,5,0.18)] transition hover:-translate-y-0.5"
      style={{ background: accent }}
    >
      <Share2 className="h-4 w-4" />
      {copied ? 'Copied location' : 'Share location'}
    </button>
  );
}
