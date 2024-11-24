export enum ProductCategory {
  Writing = 'Writing',
  OfficeSupplies = 'Office Supplies',
  ArtSupplies = 'Art Supplies',
  Educational = 'Educational',
  Technology = 'Technology',
}

export type TStationeryProduct = {
  name: string;
  brand: string;
  price: number;
  category: ProductCategory | `${ProductCategory}`;
  description: string;
  quantity: number;
  inStock: boolean;
};
