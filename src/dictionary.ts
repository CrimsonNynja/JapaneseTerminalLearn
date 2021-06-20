import { combineDicts } from './utils/dictUtils.ts';
import { Dict } from './types/dict.ts';
import Hiragana from './data/hiragana.ts';
import Katakana from './data/katakana.ts';
import Locations from './data/locations.ts';
import Numbers from './data/numbers.ts';
import Food from './data/food.ts';
import Family from './data/family.ts';
import Animals from './data/animals.ts';
import Pleasantries from './data/pleasantries.ts';
import House from './data/house.ts';
import Education from './data/education.ts';
import Time from './data/time.ts';
import Places from './data/places.ts';

const chapters: any = {
  Hiragana,
  Katakana,
  Locations,
  Numbers,
  Food,
  Family,
  Animals,
  Pleasantries,
  House,
  Education,
  Time,
  Places,
}

export const createDictionary = (chaptersToAdd: string[]): Dict => {
  let dictionary: Dict = [];
  chaptersToAdd.forEach((chapter: any) => {
    dictionary = combineDicts(dictionary, chapters[chapter]);
  });
  return dictionary;
}
