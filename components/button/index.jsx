import { Button } from "@mui/material";

const Btn = ({ text, variant, action,disabled }) => {
  return (
    <Button className="button" variant={variant} onClick={action} sx={{ mt: 2 }} disabled={disabled}>
      {text}
    </Button>
  );
};

export default Btn;
