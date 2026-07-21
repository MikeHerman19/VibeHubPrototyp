import { useEffect, useRef, useState } from "react";
import { PanelRightClose, PanelRightOpen, Sparkles } from "lucide-react";
import type { ChatMessage } from "../../data/types";
import { QUICK_STARTS, resolveAssistantReply } from "../../data/mockData";
import { AssistantMessage, TypingIndicator } from "./AssistantMessage";
import { QuickStartChip } from "./QuickStartChip";
import { AssistantInput } from "./AssistantInput";

/*
 * Persistent AI assistant (spec §7). Mounted once in the layout so its conversation state
 * survives route changes. No LLM — scripted keyword replies with a brief typing indicator
 * to make it feel live. Collapses to a slim rail so the gallery can go full width.
 */
export function AssistantPanel() {
  const [collapsed, setCollapsed] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const msgId = useRef(1);
  const timers = useRef<number[]>([]);

  // Auto-scroll to the latest message / typing indicator.
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  // Clear any pending timers on unmount.
  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach((t) => window.clearTimeout(t));
  }, []);

  const send = (text: string) => {
    const userMsg: ChatMessage = {
      id: `m${msgId.current++}`,
      role: "user",
      text,
    };
    setMessages((prev) => [...prev, userMsg]);
    setTyping(true);

    const { text: reply, apps } = resolveAssistantReply(text);
    const t = window.setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: `m${msgId.current++}`, role: "assistant", text: reply, apps },
      ]);
    }, 750);
    timers.current.push(t);
  };

  if (collapsed) {
    return (
      <aside className="hidden shrink-0 lg:block">
        <button
          onClick={() => setCollapsed(false)}
          aria-label="Open assistant"
          className="bg-bayer-gradient sticky top-24 grid h-12 w-12 place-items-center rounded-2xl text-white shadow-md transition-transform hover:scale-105"
        >
          <PanelRightOpen size={20} />
        </button>
      </aside>
    );
  }

  return (
    <aside className="hidden w-[340px] shrink-0 lg:block">
      <div className="sticky top-24 flex h-[calc(100vh-8rem)] flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface-card shadow-sm">
        {/* Header — uses the Bayer gradient to read as a companion, not part of the grid. */}
        <div className="bg-bayer-gradient relative px-4 py-3.5 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles size={18} />
              <span className="font-semibold">Vibe Hub Assistant</span>
            </div>
            <button
              onClick={() => setCollapsed(true)}
              aria-label="Collapse assistant"
              className="rounded-md p-1 text-white/80 hover:bg-white/10 hover:text-white"
            >
              <PanelRightClose size={18} />
            </button>
          </div>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-bayer-green" />
            Online — ask me about the hub
          </div>
        </div>

        {/* Conversation / empty state */}
        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
          {messages.length === 0 && (
            <div className="pt-2">
              <p className="text-sm font-semibold text-text-primary">How can I help?</p>
              <p className="mt-1 text-sm text-text-muted">
                Tell me what you're trying to do and I'll point you to the right app —
                plus who to ping.
              </p>
            </div>
          )}

          {messages.map((m) => (
            <AssistantMessage key={m.id} message={m} />
          ))}

          {typing && <TypingIndicator />}
        </div>

        {/* Quick starts */}
        <div className="flex flex-wrap gap-2 border-t border-border-subtle px-4 py-3">
          {QUICK_STARTS.map((q) => (
            <QuickStartChip key={q} label={q} onClick={() => send(q)} />
          ))}
        </div>

        <AssistantInput disabled={typing} onSend={send} />
      </div>
    </aside>
  );
}
