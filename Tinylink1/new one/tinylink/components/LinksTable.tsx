"use client";

import React from "react";

type LinkItem = {
  id: number;
  code: string;
  targetUrl: string;
  clicks: number;
  createdAt: string;
  lastClicked?: string | null;
};

export default function LinksTable({
  links,
  onDeleted,
}: {
  links: LinkItem[];
  onDeleted?: () => void;
}) {

  async function deleteLink(code: string) {
    if (!confirm("Delete this link?")) return;

    await fetch(`/api/links/${code}`, {
      method: "DELETE",
    });

    onDeleted && onDeleted();
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      {links.length === 0 ? (
        <p>No links created yet.</p>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Short Code</th>
              <th className="py-2">Target</th>
              <th className="py-2">Clicks</th>
              <th className="py-2">Last Clicked</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(links) && links.map((l) => (

              <tr key={l.id} className="border-b">
                <td className="py-2">
                  <a className="text-blue-600" href={`/${l.code}`} target="_blank">
                    {l.code}
                  </a>
                </td>

                <td className="py-2 max-w-xs truncate" title={l.targetUrl}>
                  {l.targetUrl}
                </td>

                <td className="py-2">{l.clicks}</td>

                <td className="py-2">
                  {l.lastClicked
                    ? new Date(l.lastClicked).toLocaleString()
                    : "-"}
                </td>

                <td className="py-2">
                  <button
                    onClick={() => deleteLink(l.code)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
