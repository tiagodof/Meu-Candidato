// API Route para obter detalhes de um candidato específico
import { NextRequest, NextResponse } from 'next/server';
import { obterCandidatoDetalhado } from '@/lib/api/mockData';

// Rota para obter detalhes de um candidato por ID
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const id = params.id;
  
  try {
    const candidato = obterCandidatoDetalhado(id);
    
    if (!candidato) {
      return NextResponse.json(
        { error: 'Candidato não encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(candidato);
  } catch (error) {
    console.error('Erro ao obter detalhes do candidato:', error);
    return NextResponse.json(
      { error: 'Erro ao processar a requisição' },
      { status: 500 }
    );
  }
}
