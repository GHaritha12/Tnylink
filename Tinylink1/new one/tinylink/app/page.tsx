"use client";

import { useEffect, useState } from "react";
import LinkForm from "@/components/LinkForm";
import LinksTable from "@/components/LinksTable";

export default function Page() {
  const [links, setLinks] = useState<Array<any>>([]);

  const [loading, setLoading] = useState(false);

  async function loadLinks() {
    setLoading(true);
    try {
      const res = await fetch("/api/links");
      const data = await res.json();

      if (Array.isArray(data)) {
        setLinks(data);
      } else {
        setLinks([]);
      }
    } catch {
      setLinks([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <div>
      <div className="mb-6">
        <LinkForm onCreated={loadLinks} />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <LinksTable links={links} onDeleted={loadLinks} />
      )}
    </div>
  );
}
