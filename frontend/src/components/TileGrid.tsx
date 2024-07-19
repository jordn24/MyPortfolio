import { Grid } from '@mui/material';
import Tile from './Tile';
import blackOps2Bg from "../assets/images/blackOps2.png";
import portfolioBg from "../assets/images/portfolioBg.png";
import emailBg from "../assets/images/emailBg.png";
import { useEffect, useState } from 'react';

interface Project {
    id: string;
    title: string;
    thumbnail: string;
    link: string;
    date: string;
    category: string;
}


const TileGrid = () => {  
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch("http://localhost:4500/projects")
            .then((response) => {
                return response.json();
            })
            .then((resData) => {
                console.log(resData)
                setProjects(resData);
            })
            .catch((err: any) => {
                console.log("Fetching data went wrong...", err);
            })
    }, [])


    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Grid container direction='column'>
                    <Grid item marginTop={1}>
                        {projects[0] ? <Tile label={projects[0].title} alt="project-1"/> : <Tile alt="project-1"/> }
                    </Grid>
                    <Grid item marginTop={1}>
                        <Tile label='Projects' image={portfolioBg} alt="project-2"/>
                    </Grid>
                    <Grid item marginTop={1}>
                        <Tile label='Contact Me' image={emailBg} alt="project-3"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container>
                    <Grid item xs={12} marginTop={1}>
                        <Tile label='Call of Duty: Black Ops II' image={blackOps2Bg} alt="project-1" large={true} backgroundColor='rgb(4, 3, 1)' />
                    </Grid>
                    <Grid item xs={6} marginTop={1} paddingRight={1}>
                        {projects[1] ? <Tile label={projects[1].title} alt="project-1"/> : <Tile alt="project-1"/> }
                    </Grid>
                    <Grid item xs={6} marginTop={1} paddingLeft={1}>
                        {projects[2] ? <Tile label={projects[2].title} alt="project-1"/> : <Tile alt="project-1"/> }
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container direction='column'>
                    <Grid item marginTop={1}>
                        {projects[3] ? <Tile label={projects[3].title} alt="project-1"/> : <Tile alt="project-1"/> }
                    </Grid>
                    <Grid item marginTop={1}>
                        {projects[4] ? <Tile label={projects[4].title} alt="project-1"/> : <Tile alt="project-1"/> }
                    </Grid>
                    <Grid item marginTop={1}>
                        {projects[5] ? <Tile label={projects[5].title} alt="project-1"/> : <Tile alt="project-1"/> }
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default TileGrid;