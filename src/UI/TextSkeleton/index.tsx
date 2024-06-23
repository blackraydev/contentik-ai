import { TextSkeletonStyled, TextSkeletonText } from './styled';

export const TextSkeleton = () => {
  return (
    <TextSkeletonStyled>
      <TextSkeletonText width={50} />
      <TextSkeletonText width={30} />
      <TextSkeletonText width={15} />
      <TextSkeletonText width={20} />
      <TextSkeletonText width={70} />
      <TextSkeletonText width={5} />
      <TextSkeletonText width={10} />
      <TextSkeletonText width={35} />
      <TextSkeletonText width={25} />
    </TextSkeletonStyled>
  );
};
