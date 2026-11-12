import { useState } from 'react';

function extractFileId(url) {
  if (!url) return null;
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /[?&]id=([a-zA-Z0-9_-]+)/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

export default function GoogleDrivePlayer({ videoUrl, title }) {
  const [loaded, setLoaded] = useState(false);
  const fileId = extractFileId(videoUrl);

  if (!fileId) {
    return (
      <div className="aspect-video bg-zinc-900 rounded-2xl flex items-center justify-center p-6 text-center">
        <p className="text-zinc-400 text-sm">
          ⚠️ Invalid Google Drive link.<br />
          Expected: <code className="text-warm">https://drive.google.com/file/d/FILE_ID/view</code>
        </p>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-zinc-800">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-charcoal z-10">
          <div className="w-10 h-10 border-2 border-warm border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <iframe
        src={`https://drive.google.com/file/d/${fileId}/preview`}
        title={title || 'Project video'}
        className="w-full h-full relative"
        allow="autoplay; fullscreen"
        allowFullScreen
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
