interface IProps {
  image: string;
  title: string;
}

export const SwiperElItem = ({ image, title }: IProps) => {
  return (
    <li style={{ height: '125px' }}>
      <img src={image} alt={title} />
    </li>
  );
};
