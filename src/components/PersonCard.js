
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const PersonCard = ({ data, onClick }) => {

    return (
        <Card sx={{ border: "solid black 1px" }}
            onClick={() => onClick(data)}
        >

            <CardMedia
                component="img"
                alt="headshot"
                width="170"
                image={data.speaker_head_shot_to_display}
            />
            <CardContent>
                <Typography gutterBottom component="div">
                    {data.firstname} {data.lastname}
                </Typography>
                <Typography color="red" sx={{ fontSize: 11 }}>
                    {data.company}
                </Typography>
            </CardContent>
        </Card>
    )
}
export default PersonCard;