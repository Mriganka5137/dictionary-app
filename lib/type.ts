export interface WordData {
  word: string;
  phonetic: string;
  phonetics: Array<Phonetics>;
  meanings: Array<Meanings>;
  sourceUrls: Array<string>;
  license: string;
}

export interface Phonetics {
  text: string;
  audio: string;
}

export interface Meanings {
  partOfSpeech: string;
  definitions: Array<Definitions>;
  synonyms: Array<string>;
}

export interface Definitions {
  definition: string;
  synonyms: Array<string>;
  antonnyms: Array<string>;
  example?: string;
}
