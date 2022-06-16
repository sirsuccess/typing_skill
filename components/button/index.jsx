import { Button } from "@mui/material";

const Btn = ({ text, variant, action,disabled, color="primary"}) => {
  return (
    <Button className="button" variant={variant} onClick={action} sx={{mt:2}} disabled={disabled} color={color}>
      {text}
    </Button>
  );
};

export default Btn;
