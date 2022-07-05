import { Box, Button, Modal, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    color: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: "center"
};

export default function BasicModal({ data, onClose, open }) {

    if (data?.company) {
        return (
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography gutterBottom component="div" >
                        {data.firstname} {data.lastname}
                    </Typography>
                    <Typography >
                        {data.company}
                    </Typography>
                    <img
                        style={{ width: '170' }}
                        src={data.speaker_head_shot_to_display}
                        alt="image"
                    />
                    <Typography sx={{ fontSize: 11 }}>
                        {data.bio}
                    </Typography>
                    <Box
                        m={1}
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                    >
                        <Button onClick={onClose} variant="contained" sx={{ height: 30, color: 'black', backgroundColor: 'lightgrey' }}>
                            Close
                        </Button>
                    </Box>
                </Box>
            </Modal>
        );
    }
}