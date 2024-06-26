interface Props {
  title: string;
  cover_image: string;
  author: string;
}

const BookCard = (props: Props) => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.author}</p>
    </div>
  );
};

export default BookCard;
