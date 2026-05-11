import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';
import { portfolioData } from '@/lib/portfolioData';

interface Message {
  role: 'user' | 'model';
  content: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Gemini Session
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  // Memoize AI instance to avoid re-initialization on every render
  const ai = React.useMemo(() => new GoogleGenAI({ apiKey: apiKey || 'missing_key' }), [apiKey]);

  // Create chat session ref so history is maintained during component lifecycle if needed
  const chatSessionRef = useRef<ReturnType<typeof ai.chats.create> | null>(null);

  useEffect(() => {
    if (chatSessionRef.current === null && apiKey) {
      try {
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-1.5-flash',
          config: {
            systemInstruction: portfolioData,
            temperature: 0.7,
          }
        });

        // Add initial greeting from AI
        setMessages([{
          role: 'model',
          content: "Hi! I'm Rakib's AI assistant. Ask me anything about his skills, projects, or experience!"
        }]);
      } catch (error) {
        console.error("Failed to initialize Gemini:", error);
      }
    }
  }, [apiKey, ai.chats]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);

    if (!apiKey) {
      setMessages(prev => [...prev, {
        role: 'model',
        content: "⚠️ **Error:** Missing Gemini API Key.\nPlease add `VITE_GEMINI_API_KEY` to your `.env.local` file to test this feature."
      }]);
      return;
    }

    setIsTyping(true);

    try {
      if (!chatSessionRef.current) {
        throw new Error("Chat session not initialized");
      }

      const response = await chatSessionRef.current.sendMessage({ message: userMsg });
      const aiResponseText = response.text || "Sorry, I couldn't generate a response.";

      setMessages(prev => [...prev, { role: 'model', content: aiResponseText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, {
        role: 'model',
        content: "Sorry, I encountered an error. Please try again later or check console."
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open AI Assistant"
      >
        <Bot className="w-6 h-6 animate-pulse" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] flex flex-col bg-background/95 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl transition-all duration-300 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-primary/20 bg-card/50 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">AI Assistant</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'model' && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.role === 'user'
                    ? 'bg-primary text-primary-foreground rounded-tr-sm'
                    : 'bg-secondary text-secondary-foreground rounded-tl-sm'
                  }`}
              >
                {msg.role === 'user' ? (
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                ) : (
                  <div className="text-sm prose prose-sm dark:prose-invert max-w-none">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                )}
              </div>

              {msg.role === 'user' && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 border-t border-primary/20 bg-card/50 rounded-b-2xl">
          <form
            onSubmit={handleSend}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-background border border-border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isTyping ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </form>
          <div className="text-center mt-2">
            <span className="text-[10px] text-muted-foreground">Powered by Me</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
