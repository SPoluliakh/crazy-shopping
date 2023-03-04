import { ELocalStorage } from './enums/ls.enum';
interface IArgument {
  title: string;
  image: string;
  id: number;
  count: number;
  price: number;
}

export const localStorageFunc = ({
  title,
  image,
  id,
  price,
  count,
}: IArgument): boolean => {
  const itemToAdd = { title, image, id, price, count };
  const isInLS: string | null = localStorage.getItem(ELocalStorage.product);
  if (!isInLS) {
    localStorage.setItem(ELocalStorage.product, JSON.stringify([itemToAdd]));

    return true;
  }
  const lsProducts: IArgument[] = JSON.parse(isInLS);
  const product: boolean = lsProducts.some((item: IArgument) => item.id === id);
  if (!product) {
    localStorage.setItem(
      ELocalStorage.product,
      JSON.stringify([...lsProducts, itemToAdd])
    );

    return true;
  }

  return false;
};
