import { vocabulary } from "../data/Vocabulary";


export const getWordsByName = (name ='') => {
    name = name.toLocaleLowerCase().trim();
  
    if(name.length === 0) return [];

   return vocabulary.filter((term) => term.word.toLocaleLowerCase().includes(name));

}
