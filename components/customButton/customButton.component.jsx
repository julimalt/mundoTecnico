import { CustomButton } from './customButton.styles';

const CustomButtonComponent = ({ primary, children, style, onClick, type, disabled }) => {
  return (
    <CustomButton
      onClick={disabled ? () => {} : onClick}
      style={style}
      type={type}
      primary={primary}
      disabled={disabled}
    >
      {children}
    </CustomButton>
  );
};

export default CustomButtonComponent;
