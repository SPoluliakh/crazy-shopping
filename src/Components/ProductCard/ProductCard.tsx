interface IProps {
  title: string;
  image: string;
  id: number;
  description: string;
  count: number;
  rate: number;
  price: number;
  key: number;
}

export const ProductCard = ({
  title,
  image,
  id,
  description,
  count,
  rate,
  price,
}: IProps) => {
  return (
    <li key={id}>
      <h2>{title}</h2>
      <img src={image} alt={title} style={{ width: '150px' }} />
      <p>{description}</p>
      <p>{price} $</p>
      <p>{count} </p>
      <p>{rate}</p>
    </li>
  );
};
