"use client";

import React, { useState } from "react";

export default function LinkForm({ onCreated }: { onCreated?: () => void }) {
  const [targetUrl, setTargetUrl] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<{ type: "error" | "success"; text: string } | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);

    if (!targetUrl) {
      setMsg({ type: "error", text: "Target URL is required" });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ targetUrl, code }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMsg({ type: "error", text: data?.error || "Error creating link" });
      } else {
        setMsg({ type: "success", text: `Created: ${data.code}` });
        setTargetUrl("");
        setCode("");
        onCreated && onCreated();
      }
    } catch (err) {
      setMsg({ type: "error", text: "Network error" });
    }

    setLoading(false);
  }

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded shadow">
      <div className="mb-3">
        <label className="block font-medium mb-1">Target URL</label>
        <input
          value={targetUrl}
          onChange={(e) => setTargetUrl(e.target.value)}
          placeholder="https://example.com"
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-3">
        <label className="block font-medium mb-1">Custom Code (optional)</label>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="abc123"
          className="w-1/2 px-3 py-2 border rounded"
        />
        <p className="text-xs text-gray-500 mt-1">
          Must be 6–8 characters (letters + numbers)
        </p>
      </div>

      <button
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        {loading ? "Creating..." : "Create Link"}
      </button>

      {msg && (
        <p
          className={`mt-2 ${
            msg.type === "error" ? "text-red-600" : "text-green-600"
          }`}
        >
          {msg.text}
        </p>
      )}
    </form>
  );
}
