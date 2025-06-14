// API Routes para o Meu Candidato
import { NextRequest, NextResponse } from 'next/server';
import { buscarCandidatos, obterCandidatoDetalhado, obterSugestoesAutocompletar } from '@/lib/api/mockData';

// Rota para buscar candidatos
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q') || '';
  
  try {
    const resultado = buscarCandidatos(query);
    return NextResponse.json(resultado);
  } catch (error) {
    console.error('Erro ao buscar candidatos:', error);
    return NextResponse.json(
      { error: 'Erro ao processar a busca' },
      { status: 500 }
    );
  }
}
