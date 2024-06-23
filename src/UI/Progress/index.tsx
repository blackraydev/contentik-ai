import { ProgressStyled } from './styled';

type ProgressProps = {
  progress?: number;
  width?: string;
};

export const Progress = ({ width, progress = 50 }: ProgressProps) => {
  return <ProgressStyled $width={width} $progress={progress} />;
};
