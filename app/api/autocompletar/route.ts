// API Route para obter sugestões de autocompletar
import { NextRequest, NextResponse } from 'next/server';
import { obterSugestoesAutocompletar } from '@/lib/api/mockData';

// Rota para obter sugestões de autocompletar
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const termo = searchParams.get('termo') || '';
  
  try {
    const sugestoes = obterSugestoesAutocompletar(termo);
    return NextResponse.json({ sugestoes });
  } catch (error) {
    console.error('Erro ao obter sugestões de autocompletar:', error);
    return NextResponse.json(
      { error: 'Erro ao processar a requisição' },
      { status: 500 }
    );
  }
}
