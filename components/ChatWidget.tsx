import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendChatMessage } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola! Soy Alejandro, tu asesor virtual de AutoAlem. ¿Buscas un modelo específico o necesitas ayuda con financiación?' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendChatMessage(input, messages);
      
      const botMessage: ChatMessage = {
        role: 'model',
        text: responseText
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Lo siento, tuve un problema. Intenta de nuevo más tarde.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-brand-red text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <MessageSquare size={28} />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 w-full max-w-[380px] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right border border-gray-100
        ${isOpen ? 'opacity-100 scale-100 translate-y-0 h-[550px]' : 'opacity-0 scale-90 translate-y-10 pointer-events-none h-0'}`}
      >
        {/* Header */}
        <div className="bg-brand-dark p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <div className="bg-brand-red p-2 rounded-lg relative">
               <Sparkles size={18} className="text-white" />
               <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
            </div>
            <div>
              <h3 className="font-bold text-sm">Asesor AutoAlem</h3>
              <p className="text-xs text-gray-300">Potenciado por Gemini AI</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-brand-red text-white rounded-br-none' 
                    : 'bg-white text-gray-700 border border-gray-100 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 flex items-center gap-2">
                 <Loader2 size={16} className="animate-spin text-brand-red" />
                 <span className="text-xs text-gray-400">Escribiendo...</span>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Preguntá sobre precios, modelos..."
              className="flex-1 bg-gray-100 text-gray-900 placeholder-gray-500 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-brand-dark text-white p-2.5 rounded-xl hover:bg-brand-red disabled:opacity-50 disabled:hover:bg-brand-dark transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;