/** 一道美食 */
export interface Dish {
  id: string;
  name: string;
  region: string;
  emoji: string;
  rating: number;
  tags: string[];
  desc: string;
}
