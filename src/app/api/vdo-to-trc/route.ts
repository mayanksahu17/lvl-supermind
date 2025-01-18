import { getTranscript } from "@/lib/transcribe";

import { NextRequest, NextResponse } from "next/server";
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
// Constants for status codes
const UNAUTHORIZED = 401;
const SUCCESS = 200;
const SERVER_ERROR = 500;

  
export async function POST(req: NextRequest) {
    try {
    
        const {vdoUrl , language} =  await req.json();
        const transcript   = await getTranscript(vdoUrl);
        const startTime = Date.now();

        if (!process.env.GROQ_API_KEY) {
          throw new Error('GROQ_API_KEY environment variable is not set');
        }
        

        
    const translationService = new TranslationService(process.env.GROQ_API_KEY);
    

      
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
        console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: SERVER_ERROR });
  
    }
}
