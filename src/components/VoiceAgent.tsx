import { useConversation } from "@elevenlabs/react";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const VoiceAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const conversation = useConversation({
    onConnect: () => {
      console.log("Voice agent connected");
      setError(null);
    },
    onDisconnect: () => {
      console.log("Voice agent disconnected");
    },
    onError: (err) => {
      console.error("Voice agent error:", err);
      setError("Connection error. Please try again.");
    },
  });

  const startConversation = useCallback(async () => {
    setIsConnecting(true);
    setError(null);

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });

      const { data, error: fnError } = await supabase.functions.invoke(
        "elevenlabs-conversation-token"
      );

      if (fnError || !data?.signed_url) {
        throw new Error(fnError?.message || "Failed to get conversation token");
      }

      await conversation.startSession({
        signedUrl: data.signed_url,
      });
    } catch (err) {
      console.error("Failed to start voice agent:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to start. Please check microphone permissions."
      );
    } finally {
      setIsConnecting(false);
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  const handleToggle = () => {
    if (isOpen && conversation.status === "connected") {
      stopConversation();
    }
    setIsOpen(!isOpen);
    setError(null);
  };

  return (
    <>
      {/* Trigger button */}
      <motion.button
        onClick={handleToggle}
        className="fixed bottom-6 right-24 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Voice AI Agent"
      >
        {isOpen ? <X size={20} /> : <Mic size={20} />}
      </motion.button>

      {/* Voice agent panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 rounded-xl border border-border bg-card shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    conversation.status === "connected"
                      ? "bg-green-500 animate-pulse"
                      : "bg-muted"
                  }`}
                />
                <span className="text-sm font-semibold text-foreground">
                  AI Voice Assistant
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Talk to me about your project needs
              </p>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col items-center justify-center min-h-[180px] gap-4">
              {error && (
                <p className="text-xs text-destructive text-center px-2">
                  {error}
                </p>
              )}

              {conversation.status === "disconnected" ? (
                <>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mic className="text-primary" size={28} />
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    Click to start a voice conversation about automation systems,
                    AI integration, or project scoping.
                  </p>
                  <button
                    onClick={startConversation}
                    disabled={isConnecting}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-md text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isConnecting ? "Connecting..." : "Start Conversation"}
                  </button>
                </>
              ) : (
                <>
                  {/* Active conversation UI */}
                  <div className="relative">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center ${
                        conversation.isSpeaking
                          ? "bg-primary/20"
                          : "bg-primary/10"
                      } transition-colors duration-300`}
                    >
                      {conversation.isSpeaking ? (
                        <motion.div
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{ repeat: Infinity, duration: 1.2 }}
                        >
                          <Mic className="text-primary" size={32} />
                        </motion.div>
                      ) : (
                        <MicOff className="text-muted-foreground" size={28} />
                      )}
                    </div>
                    {conversation.isSpeaking && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary/30"
                        animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      />
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground">
                    {conversation.isSpeaking
                      ? "AI is speaking..."
                      : "Listening..."}
                  </p>

                  <button
                    onClick={stopConversation}
                    className="w-full border border-border text-foreground py-3 rounded-md text-sm font-medium hover:border-destructive hover:text-destructive transition-colors"
                  >
                    End Conversation
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VoiceAgent;
