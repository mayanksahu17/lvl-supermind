import { Groq } from 'groq-sdk';


export interface TranslationRequest {
    language: string;
    transcript: string;
  }
  

  export interface TranslationResponse {
    success: boolean;
    translatedText: string;
    originalLanguage: string;
    targetLanguage: string;
    metadata?: {
      processingTime?: number;
      charCount?: number;
    };
  }


    
    export interface ErrorResponse {
      error: string;
      code: string;
      details?: string;
    }
    

    export type SupportedLanguage = 'hi' | 'mr' | 'gu' | 'ta' | 'kn' | 'te' | 'bn' | 'ml' | 'pa' | 'or';


      // File: /app/api/translate/constants.ts
  export const SUPPORTED_LANGUAGES: Record<SupportedLanguage, string> = {
    hi: 'Hindi',
    mr: 'Marathi',
    gu: 'Gujarati',
    ta: 'Tamil',
    kn: 'Kannada',
    te: 'Telugu',
    bn: 'Bengali',
    ml: 'Malayalam',
    pa: 'Punjabi',
    or: 'Odia'
  };

  
  
  export const MAX_TRANSCRIPT_LENGTH = 5000;
  export const DEFAULT_MODEL = 'mixtral-8x7b-32768';
  export const DEFAULT_TEMPERATURE = 0.3;
  


  

  // File: /app/lib/validators.ts
  export class ValidationError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'ValidationError';
    }
  }



  
 export function validateTranslationRequest(
    language: string, 
    transcript: string
  ): void {
    if (!language || typeof language !== 'string') {
      throw new ValidationError('Invalid language parameter');
    }
  
    if (!transcript || typeof transcript !== 'string') {
      throw new ValidationError('Invalid transcript parameter');
    }
  
    if (transcript.length > MAX_TRANSCRIPT_LENGTH) {
      throw new ValidationError(`Transcript exceeds maximum length of ${MAX_TRANSCRIPT_LENGTH} characters`);
    }
  
    if (!Object.keys(SUPPORTED_LANGUAGES).includes(language)) {
      throw new ValidationError(`Unsupported language: ${language}`);
    }
  }
  


   
  export class TranslationService {
    private groq: Groq;
  
    constructor(apiKey: string) {
      this.groq = new Groq({ apiKey });
    }
  
    async translate(language: string, transcript: string): Promise<string> {
      const startTime = Date.now();
  
      const completion = await this.groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `You are a professional translator. Translate the following text to ${SUPPORTED_LANGUAGES[language as SupportedLanguage]}. 
                     Maintain the original meaning, tone, and context as much as possible.`
          },
          {
            role: "user",
            content: transcript
          }
        ],
        model: DEFAULT_MODEL,
        temperature: DEFAULT_TEMPERATURE,
      });
  
      const translatedText = completion.choices[0]?.message?.content;
      
      if (!translatedText) {
        throw new Error('Translation service returned empty response');
      }
  
      return translatedText;
    }
  }
  