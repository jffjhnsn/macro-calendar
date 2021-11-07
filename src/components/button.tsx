import { styled } from '../stitches.config';

export const Button = styled('button', {
  borderRadius: '$round',
  fontSize: '$4',
  padding: '$2 $3',
  border: '2px solid $turq',
  backgroundColor: 'transparent',
  color: '$white',

  '&:hover': {
    backgroundColor: '$turq',
    color: '$black',
  },
});
