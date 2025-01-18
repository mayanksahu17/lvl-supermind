import { Groq } from 'groq-sdk';

import { TranslationRequest ,
   TranslationResponse ,
    ErrorResponse,
    SupportedLanguage,
    SUPPORTED_LANGUAGES,
    MAX_TRANSCRIPT_LENGTH,
    DEFAULT_MODEL,
    DEFAULT_TEMPERATURE,
    ValidationError,
    validateTranslationRequest,
    TranslationService
   } from '@/lib/utility';
// File: /app/types/translation.ts
import { NextRequest, NextResponse } from 'next/server';

  
  export async function POST(req: NextRequest) {
    const startTime = Date.now();

    if (!process.env.GROQ_API_KEY) {
      throw new Error('GROQ_API_KEY environment variable is not set');
    }
    
    const translationService = new TranslationService(process.env.GROQ_API_KEY);
    
  
    try {
      const { language, transcript } = await req.json();
      
      // Validate request
      validateTranslationRequest(language, transcript);
  
      // Perform translation
      const translatedText = await translationService.translate(language, transcript);
  
      const response: TranslationResponse = {
        success: true,
        translatedText,
        originalLanguage: 'auto-detected',
        targetLanguage: language,
        metadata: {
          processingTime: Date.now() - startTime,
          charCount: transcript.length
        }
      };
  
      return NextResponse.json(response);
  
    } catch (error) {
      console.error('Translation error:', error);
  
      if (error instanceof ValidationError) {
        return NextResponse.json(
          {
            error: error.message,
            code: 'VALIDATION_ERROR',
            details: error.message
          },
          { status: 400 }
        );
      }
  
      return NextResponse.json(
        {
          error: 'Internal server error',
          code: 'INTERNAL_ERROR',
          details: error instanceof Error ? error.message : 'Unknown error'
        },
        { status: 500 }
      );
    }
  }
  


  

  
  // File: /app/lib/translation-service.ts
 
  // File: /app/api/translate/route.ts
  
  
  // // File: /app/lib/client.ts
  // export async function translateText(
  //   language: SupportedLanguage, 
  //   transcript: string
  // ): Promise<TranslationResponse> {
  //   const response = await fetch('/api/translate', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       language,
  //       transcript
  //     })
  //   });
  
  //   const data = await response.json();
  
  //   if (!response.ok) {
  //     throw new Error(data.error || 'Translation failed');
  //   }
  
  //   return data;
  // }