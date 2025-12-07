import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const sendChatMessage = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    if (!apiKey) {
      throw new Error("API Key is missing.");
    }

    const modelId = "gemini-2.5-flash";
    
    // Construct conversation history for context
    // We only take the last few messages to keep context relevant but concise
    const recentHistory = history.slice(-6).map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const chat = ai.chats.create({
      model: modelId,
      config: {
        temperature: 0.7,
        maxOutputTokens: 500,
        systemInstruction: `You are "Alejandro", the expert AI sales assistant for AutoAlem, a premium car dealership. 
        Your tone is professional, enthusiastic, and helpful. 
        You help customers find cars based on their needs.
        Here is our current inventory highlights: 
        - Nissan Kicks 2021 ($26M)
        - Ford Maverick Hybrid 2024 ($50M)
        - Toyota Corolla 2018 ($21.9M)
        - Fiat Toro 2019 ($29.7M)
        - Jeep Compass 2017 ($29M)
        
        If a user asks about prices, always format them in ARS (Argentine Pesos) clearly.
        If you don't know the answer, suggest they visit our showroom at Av. Alem 351, Córdoba or call +54 9 351 631-3195.
        Answer briefly (under 100 words) unless asked for details.
        `
      },
      history: recentHistory
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Disculpa, no pude procesar eso. ¿Podrías intentar de nuevo?";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, estoy teniendo problemas de conexión. Por favor, contáctanos por teléfono.";
  }
};