import { City } from './city';
import { Location } from './location';

export type Offer = {
  id: string;
  city: City;
  previewImage: string;
  title: string;
  rating: number;
  type: string;
  price: number;
  isPremium: boolean;
  isFavorite: boolean;
  location: Location;
};

export type Offers = Offer[];
