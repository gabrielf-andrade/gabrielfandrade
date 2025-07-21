"use client";

import { Dictionary, Language } from "@/types/definitions";
import { createContext, useContext } from "react";

interface DictionaryContextType {
  dict: Dictionary;
  lang: Language;
}

const DictionaryContext = createContext<DictionaryContextType | undefined>(undefined);

export function DictionaryProvider({
  children,
  dictionary,
  lang,
}: {
  children: React.ReactNode;
  dictionary: Dictionary;
  lang: Language;
}) {
  return (
    <DictionaryContext.Provider value={{ dict: dictionary, lang }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const context = useContext(DictionaryContext);
  if (context === undefined) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }
  return context;
}
