import { TextSkeletonStyled, TextSkeletonText } from './styled';

export const TextSkeleton = () => {
  return (
    <TextSkeletonStyled>
      <TextSkeletonText width={70} />
    </TextSkeletonStyled>
  );
};
