import { Grid } from '@mui/material';
import Tile from './Tile';
import blackOps2Bg from "../assets/images/blackOps2.png";
import portfolioBg from "../assets/images/portfolioBg.png";
import emailBg from "../assets/images/emailBg.png";
import githubBg from "../assets/images/githubBg.png";
import { useEffect, useState } from 'react';

interface Project {
    id: string;
    title: string;
    thumbnail: string;
    link: string;
    date: string;
    category: string;
    backgroundColour: string;
}


const HomeGrid = () => {  
    const [projects, setProjects] = useState<Project[]>([]);

    let email = "jordan.sposito2430@gmail.com";

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
                        {projects[0] ? <Tile label={projects[0].title} image={projects[0].thumbnail} backgroundColor={projects[0].backgroundColour} url={projects[0].link} alt="project-1"/> : <Tile alt="project-1"/> }
                    </Grid>
                    <Grid item marginTop={1}>
                        <Tile label='Projects' image={portfolioBg} alt="projects" url="/projects" openInNewTab={false} />
                    </Grid>
                    <Grid item marginTop={1}>
                        <Tile label='Contact Me' image={emailBg} alt="contact-me" url={`mailto:${email}`} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container>
                    <Grid item xs={12} marginTop={1}>
                        <Tile label='Call of Duty: Black Ops II' image={blackOps2Bg} alt="project-1" large={true} backgroundColor='rgb(4, 3, 1)' />
                    </Grid>
                    <Grid item xs={6} marginTop={1} paddingRight={1}>
                        {projects[1] ? <Tile label={projects[1].title} alt="project-2" image={projects[1].thumbnail} backgroundColor={projects[1].backgroundColour} url={projects[1].link} /> : <Tile alt="project-2"/> }
                    </Grid>
                    <Grid item xs={6} marginTop={1} paddingLeft={1}>
                        {projects[2] ? <Tile label={projects[2].title} alt="project-3" image={projects[2].thumbnail} backgroundColor={projects[2].backgroundColour} url={projects[2].link} /> : <Tile alt="project-3"/> }
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container direction='column'>
                    <Grid item marginTop={1}>
                        {projects[3] ? <Tile label={projects[3].title} image={projects[3].thumbnail} alt="project-4" backgroundColor={projects[3].backgroundColour} url={projects[3].link} /> : <Tile alt="project-4"/> }
                    </Grid>
                    <Grid item marginTop={1}>
                        {projects[4] ? <Tile label={projects[4].title} image={projects[4].thumbnail} alt="project-5" backgroundColor={projects[4].backgroundColour} url={projects[4].link} /> : <Tile alt="project-5"/> }
                    </Grid>
                    <Grid item marginTop={1}>
                        <Tile label='Github' image={githubBg} alt="github" url="https://github.com/jordn24" />

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default HomeGrid;