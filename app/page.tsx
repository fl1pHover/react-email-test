"use client";

export default function Home() {
  return (
    <div>
      <button
        onClick={async () => {
          await fetch("/api/emails", { method: "POST" });
        }}
        className="p-4 border border-white"
      >
        Send test email
      </button>
    </div>
  );
}
