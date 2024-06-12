import { Circular, LoaderStyled, Path } from './styled';

type LoaderProps = {
  className?: string;
};

export const Loader = ({ className }: LoaderProps) => {
  return (
    <LoaderStyled className={className}>
      <Circular viewBox="25 25 50 50">
        <Path r="20" cy="50" cx="50"></Path>
      </Circular>
    </LoaderStyled>
  );
};
