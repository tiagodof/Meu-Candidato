// API Route para reportar informações incorretas
import { NextRequest, NextResponse } from 'next/server';
import { RelatorioErro } from '@/lib/api/types';

// Rota para reportar erros ou informações incorretas
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const relatorio: RelatorioErro = body;
    
    // Aqui seria implementada a lógica para salvar o relatório de erro
    // Por enquanto, apenas simulamos o processamento
    console.log('Relatório de erro recebido:', relatorio);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Relatório recebido com sucesso' 
    });
  } catch (error) {
    console.error('Erro ao processar relatório:', error);
    return NextResponse.json(
      { error: 'Erro ao processar a requisição' },
      { status: 500 }
    );
  }
}
