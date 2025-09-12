import { Grid } from '@mui/material';

import Tile from './Tile';

interface Project {
    id: string;
    title: string;
    thumbnail: string;
    link: string;
    date: string;
    category: string;
    backgroundColour: string;
}

interface HomeGridProps {
  projects: Project[];
}


const HomeGrid: React.FC<HomeGridProps> = ({ projects }) => {
    return (
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Grid container direction='column'>
                        <Grid item marginTop={1}>
                            <Tile label='Projects' image='portfolioBg-400.webp' alt="projects" url="/projects" openInNewTab={false} />
                        </Grid>
                        <Grid item marginTop={1}>
                        <Tile label='My Account' image='profileBg-400.webp' alt="account" url="/jordansposito" openInNewTab={false} />
                        </Grid>
                        <Grid item marginTop={1}>
                            <Tile label='Recent' image='recentBg-400.webp' alt="recent" url="/projects?sorted=dsc" openInNewTab={false} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={12} marginTop={1}>
                            {projects[0] ? <Tile label={projects[0].title} alt="project-2" image={projects[0].thumbnail} backgroundColor={projects[0].backgroundColour} url={projects[0].link} large={true} /> : <Tile alt="project"/> }
                        </Grid>
                        <Grid item xs={6} marginTop={1} paddingRight={1}>
                            {projects[1] ? <Tile label={projects[1].title} alt="project-3" image={projects[1].thumbnail} backgroundColor={projects[1].backgroundColour} url={projects[1].link} /> : <Tile alt="project"/> }
                        </Grid>
                        <Grid item xs={6} marginTop={1} paddingLeft={1}>
                            {projects[2] ? <Tile label={projects[2].title} image={projects[2].thumbnail} alt="project-4" backgroundColor={projects[2].backgroundColour} url={projects[2].link} /> : <Tile alt="project"/> }
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid container direction='column'>
                        <Grid item marginTop={1}>
                            {projects[3] ? <Tile label={projects[3].title} image={projects[3].thumbnail} alt="project-5" backgroundColor={projects[3].backgroundColour} url={projects[3].link} /> : <Tile alt="project"/> }
                        </Grid>
                        <Grid item marginTop={1}>
                            {projects[4] ? <Tile label={projects[4].title} image={projects[4].thumbnail} backgroundColor={projects[4].backgroundColour} url={projects[4].link} alt="project"/> : <Tile alt="project"/> }
                        </Grid>
                        <Grid item marginTop={1}>
                            {projects[5] ? <Tile label={projects[5].title} image={projects[5].thumbnail} backgroundColor={projects[5].backgroundColour} url={projects[5].link} alt="project"/> : <Tile alt="project"/> }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    );
}

export default HomeGrid;