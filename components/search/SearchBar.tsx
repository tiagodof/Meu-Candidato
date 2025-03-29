"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useRouter } from "next/navigation";

// Dados de exemplo para autocompletar - serão substituídos pela integração com API
const CANDIDATOS_EXEMPLO = [
  { id: "1", nome: "João Silva", partido: "PXX", numero: "12345" },
  { id: "2", nome: "Maria Oliveira", partido: "PYY", numero: "67890" },
  { id: "3", nome: "José Santos", partido: "PZZ", numero: "54321" },
  { id: "4", nome: "Ana Pereira", partido: "PWW", numero: "09876" },
  { id: "5", nome: "Carlos Ferreira", partido: "PXX", numero: "13579" },
  { id: "6", nome: "João Silveira", partido: "PYY", numero: "24680" },
  { id: "7", nome: "João Silvestre", partido: "PZZ", numero: "97531" },
];

export function SearchBar({ initialValue = "" }) {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();
  const inputRef = useRef(null);
  
  // Função para buscar sugestões baseadas no termo de busca
  useEffect(() => {
    if (searchTerm.trim().length > 1) {
      // Simulação de busca fuzzy - será substituída pela integração real com APIs
      const results = CANDIDATOS_EXEMPLO.filter(candidato => {
        const term = searchTerm.toLowerCase();
        return (
          candidato.nome.toLowerCase().includes(term) ||
          candidato.partido.toLowerCase().includes(term) ||
          candidato.numero.includes(term)
        );
      }).slice(0, 5); // Limitar a 5 resultados
      
      setSuggestions(results);
      setOpen(results.length > 0);
    } else {
      setSuggestions([]);
      setOpen(false);
    }
  }, [searchTerm]);
  
  const handleSearch = (e) => {
    e?.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/resultados?q=${encodeURIComponent(searchTerm)}`);
      setOpen(false);
    }
  };
  
  const handleSelectSuggestion = (candidato) => {
    router.push(`/candidato/${candidato.id}`);
    setOpen(false);
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full relative">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative flex-grow">
            <Input
              ref={inputRef}
              type="text"
              placeholder="Busque por nome, número ou partido..."
              className="w-full py-6 pl-4 pr-12 text-lg rounded-l-lg focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => searchTerm.trim().length > 1 && setSuggestions.length > 0 && setOpen(true)}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-[calc(100%-80px)]" align="start">
          <Command>
            <CommandList>
              <CommandEmpty>Nenhum candidato encontrado</CommandEmpty>
              <CommandGroup heading="Sugestões">
                {suggestions.map((candidato) => (
                  <CommandItem
                    key={candidato.id}
                    onSelect={() => handleSelectSuggestion(candidato)}
                    className="cursor-pointer"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{candidato.nome}</span>
                      <span className="text-sm text-gray-500">
                        {candidato.partido} • {candidato.numero}
                      </span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      
      <Button 
        type="submit" 
        className="bg-blue-600 hover:bg-blue-700 text-white py-6 px-6 rounded-r-lg"
      >
        <Search className="h-5 w-5 mr-2" />
        <span>Buscar</span>
      </Button>
    </form>
  );
}
