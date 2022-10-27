export interface Paragraph {
  sentences: number[];
  start: number;
  end: number;
}

export interface Sentence {
  phrases: number[];
  start: number;
  end: number;
}

export interface Phras {
  tokens: number[];
  type: string;
  start: number;
  end: number;
}

export interface Dependency {
  id: number;
  head: number;
  label: string;
}

export interface Atom {
  start: number;
  end: number;
  type: string;
  lemma: string;
}

export interface Token {
  syncon: number;
  start: number;
  end: number;
  type: string;
  lemma: string;
  pos: string;
  dependency: Dependency;
  morphology: string;
  paragraph: number;
  sentence: number;
  phrase: number;
  atoms: Atom[];
}

export interface MainSentence {
  value: string;
  score: number;
  start: number;
  end: number;
}

export interface Position {
  start: number;
  end: number;
}

export interface MainPhras {
  value: string;
  score: number;
  positions: Position[];
}

export interface Position2 {
  start: number;
  end: number;
}

export interface MainLemma {
  value: string;
  score: number;
  positions: Position2[];
}

export interface Position3 {
  start: number;
  end: number;
}

export interface MainSyncon {
  syncon: number;
  lemma: string;
  score: number;
  positions: Position3[];
}

export interface Topic {
  label: string;
  id: number;
  score: number;
  winner: boolean;
}

export interface Position4 {
  start: number;
  end: number;
}

export interface Attribute {
  attribute: string;
  lemma: string;
  syncon: number;
  type: string;
}

export interface Entity {
  type: string;
  lemma: string;
  syncon: number;
  positions: Position4[];
  relevance: number;
  attributes: Attribute[];
}

export interface Property {
  type: string;
  value: string;
}

export interface Knowledge {
  syncon: number;
  label: string;
  properties: Property[];
}

export interface Item2 {
  lemma: string;
  syncon: number;
  sentiment: number;
}

export interface Item {
  lemma: string;
  syncon: number;
  sentiment: number;
  items: Item2[];
}

export interface Sentiment {
  overall: number;
  negativity: number;
  positivity: number;
  items: Item[];
}

export interface Verb {
  text: string;
  lemma: string;
  syncon: number;
  phrase: number;
  type: string;
  relevance: number;
}

export interface Related {
  relation: string;
  text: string;
  lemma: string;
  syncon: number;
  type: string;
  phrase: number;
  relevance: number;
}

export interface Relation {
  verb: Verb;
  related: Related[];
}

export interface Data {
  content: string;
  language: string;
  version: string;
  paragraphs: Paragraph[];
  sentences: Sentence[];
  phrases: Phras[];
  tokens: Token[];
  mainSentences: MainSentence[];
  mainPhrases: MainPhras[];
  mainLemmas: MainLemma[];
  mainSyncons: MainSyncon[];
  topics: Topic[];
  entities: Entity[];
  knowledge: Knowledge[];
  sentiment: Sentiment;
  relations: Relation[];
}

export interface AnalyseResponseData {
  success: boolean;
  data: Data;
}
