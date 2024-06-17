import { ChangeEventHandler, useRef } from 'react';
import { FiUpload, FiPlus } from 'react-icons/fi';
import {
  ButtonStyled,
  PhotoUploadStyled,
  InputHidden,
  PhotoHolder,
  Photo,
  CrossIcon,
  PhotoUploadBlocks,
  Label,
  LabelWrapper,
  InfoIcon,
} from './styled';
import { Tooltip } from '../../../../UI';
import { Mode } from '../../types';

type PhotoUploadProps = {
  photos: File[];
  onPhotoUploaded: (file?: File) => void;
  onPhotoRemove: (index: number) => void;
  mode: Mode;
};

export const PhotoUpload = ({ photos, onPhotoUploaded, onPhotoRemove, mode }: PhotoUploadProps) => {
  const hiddenPhotoInput = useRef<HTMLInputElement | null>(null);
  const isButtonVisible = photos.length < 5;

  const handleClick = () => {
    hiddenPhotoInput.current?.click();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // TODO: Validate files
    // const supportedTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/heic', 'image/heif'];

    const photoUploaded = event.target.files?.[0];
    onPhotoUploaded(photoUploaded);
  };

  return (
    <PhotoUploadStyled>
      <LabelWrapper>
        <Label>Фотографии</Label>
        <Tooltip
          content={`На фотографии можно ссылаться в ${
            mode === 'create' ? 'описании' : 'тексте'
          } поста`}
          offset={50}
          width={220}
        >
          <InfoIcon />
        </Tooltip>
      </LabelWrapper>
      <PhotoUploadBlocks $fullWidth={!photos.length}>
        {photos.map((photo, index) => (
          <PhotoHolder onClick={() => onPhotoRemove(index)} key={index}>
            <Photo src={URL.createObjectURL(photo)} />
            <CrossIcon size={30} />
          </PhotoHolder>
        ))}
        {isButtonVisible && (
          <ButtonStyled onClick={handleClick}>
            {!photos.length ? <FiUpload /> : <FiPlus />}
          </ButtonStyled>
        )}
        <InputHidden type="file" onChange={handleChange} ref={hiddenPhotoInput} />
      </PhotoUploadBlocks>
    </PhotoUploadStyled>
  );
};
