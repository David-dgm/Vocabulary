import { vocabulary } from "../data/Vocabulary"


export const getWordById = (id) => {

     return vocabulary.find( word=> word.id === id);
}
