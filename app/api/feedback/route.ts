// API Route para enviar feedback sobre informações
import { NextRequest, NextResponse } from 'next/server';
import { Feedback } from '@/lib/api/types';

// Rota para enviar feedback
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const feedback: Feedback = body;
    
    // Aqui seria implementada a lógica para salvar o feedback
    // Por enquanto, apenas simulamos o processamento
    console.log('Feedback recebido:', feedback);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Feedback recebido com sucesso' 
    });
  } catch (error) {
    console.error('Erro ao processar feedback:', error);
    return NextResponse.json(
      { error: 'Erro ao processar a requisição' },
      { status: 500 }
    );
  }
}
