import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ChatMessage } from "../../data/types";
import { getApp } from "../../data/mockData";
import { cn } from "../../lib/cn";

// A single chat bubble (spec §7). Assistant replies may surface app suggestions as links.
export function AssistantMessage({ message }: { message: ChatMessage }) {
  const navigate = useNavigate();
  const isUser = message.role === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
          isUser
            ? "rounded-br-sm bg-bayer-blue text-white"
            : "rounded-bl-sm bg-surface text-text-primary"
        )}
      >
        <p>{message.text}</p>

        {message.apps && message.apps.length > 0 && (
          <div className="mt-2.5 flex flex-col gap-1.5">
            {message.apps.map((id) => {
              const app = getApp(id);
              if (!app) return null;
              return (
                <button
                  key={id}
                  onClick={() => navigate(`/app/${id}`)}
                  className="group flex items-center justify-between gap-2 rounded-lg border border-border-subtle bg-surface-card px-2.5 py-1.5 text-left text-xs font-semibold text-bayer-blue transition-colors hover:border-bayer-capri"
                >
                  {app.name}
                  <ArrowRight
                    size={13}
                    className="text-text-muted transition-all group-hover:translate-x-0.5 group-hover:text-bayer-capri"
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// Three-dot typing indicator shown before a scripted reply lands (spec §7).
export function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-surface px-3.5 py-3">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 animate-bounce rounded-full bg-text-muted"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}
