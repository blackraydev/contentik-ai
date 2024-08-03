import { TextSkeletonStyled, TextSkeletonText } from './styled';

export const TextSkeleton = () => {
  return (
    <TextSkeletonStyled>
      <TextSkeletonText width={15} />
      <TextSkeletonText width={30} />
      <TextSkeletonText width={25} />
      <TextSkeletonText width={10} />
    </TextSkeletonStyled>
  );
};
