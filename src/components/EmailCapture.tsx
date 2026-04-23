import { useEffect, useRef } from "react";

interface Props {
  id?: string;
  variant?: "hero" | "footer";
}

export function EmailCapture({ id }: Props) {
  const embedHostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = embedHostRef.current;
    if (!host) return;

    host.innerHTML = "";
    const script = document.createElement("script");
    script.async = true;
    script.dataset.uid = "b085507a60";
    script.src = "https://rsm-realstreetmedic.kit.com/b085507a60/index.js";
    host.appendChild(script);

    return () => {
      host.innerHTML = "";
    };
  }, []);

  return (
    <div
      id={id}
      className="w-full"
      data-kit-email-capture
    >
      <div ref={embedHostRef} className="w-full" aria-live="polite">
        <noscript>Enable JavaScript to join the waitlist.</noscript>
      </div>
    </div>
  );
}
