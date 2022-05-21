import styled from 'styled-components';

import { colors, fontColors } from '../../utils/constants/colors.constants';
import { sizes, fontSizes } from '../../utils/constants/sizes.constants';

export const CustomButton = styled.button`
  border: none;
  font-weight: bold;
  font-size: ${fontSizes.md}rem;
  border-radius: ${sizes.sm}px;
  height: ${sizes.xxl}px;
  cursor: pointer;

  color: ${(props) =>
    props.primary
      ? props.disabled
        ? fontColors.primaryDisabled
        : fontColors.primary
      : props.disabled
      ? fontColors.secodaryDisabled
      : fontColors.secondary};
  background-color: ${(props) =>
    props.primary
      ? props.disabled
        ? colors.primaryDisabled
        : colors.primary
      : props.disabled
      ? colors.secodaryDisabled
      : colors.secondary};

  & :focus {
    outline: none;
  }

  & :hover {
    background-color: ${(props) => (props.primary ? '#da1f5f' : '#07a6ba')};
  }
`;
