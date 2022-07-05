import { Container, CssBaseline, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import axios from "axios";
import { useEffect, useState } from "react";
import BasicModal from "./components/BasicModal";
import PersonCard from "./components/PersonCard";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    const [speakers, setSpeakers] = useState([]);
    const [speaker, setSpeaker] = useState();

    useEffect(() => {
        axios('https://youngstartup.io/api/cwebsite/get_speakers_dyn')
            .then(res => setSpeakers(res.data.speakers.slice(0, 30)))
    }, []);

    const handleSelect = (element) => {
        setSpeaker(element)
    }
    const handleClose = () => {
        setSpeaker(null)
    }
    const open = Boolean(speaker);

    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                {speakers.length > 0 &&
                    <Container>
                        <h1 style={{ textAlign: "center" }}>MEET OUR 30 FEATURED INVESTORS</h1>
                        <Grid container spacing={1}>
                            {speakers.map(e => {
                                return <Grid item key={e.id} xs={6} sm={4} md={3} lg={2}>
                                    <PersonCard data={e} onClick={handleSelect} />
                                </Grid>
                            })}
                        </Grid>
                    </Container>}
            </ThemeProvider>

            <BasicModal data={speaker} open={open} onClose={handleClose} />
        </div>
    );
}

export default App;