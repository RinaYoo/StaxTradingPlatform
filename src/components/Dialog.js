import React from "react";
import { Button,Dialog,DialogContent,DialogActions ,DialogTitle,DialogContentText,Slide} from "@mui/material";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function EarnModal(props){
    const {open,setOpen} = props;

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={()=>setOpen(false)}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Congratulations!!!"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Congratulations! You Pass the quiz! $2 rewards will added to your account.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={()=>setOpen(false)}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default EarnModal;