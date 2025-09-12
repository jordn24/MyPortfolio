import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
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

interface ProjectsProps {
    filter?: string;
}

const ProjectsGrid: React.FC<ProjectsProps> = ({filter=""}) => {  
    const [projects, setProjects] = useState<Project[]>([]);

    let queryParams = new URLSearchParams(useLocation().search);

    const cache: Record<string, Project[]> = {};

    useEffect(() => {
        if (cache[filter]) {
            setProjects(cache[filter]);
            return;
        }

        fetch(`https://myportfolio-0jva.onrender.com/projects/${filter}`)
            .then(res => res.json())
            .then((resData: Project[]) => {
            cache[filter] = resData;
            setProjects(resData);
            })
            .catch(err => console.error("Fetching data went wrong...", err));
            
        }, [filter])

    return (
        <Grid container spacing={2}>
            {Array.from({length: 4}).map( (_, col: number) => (
                <Grid item xs={3}>
                    <Grid container direction='column'>
                        {Array.from({length: 3}).map( (_, row: number) => { 
                            const projectIndex: number = col * 3 + row;
                            const project: Project = projects[projectIndex];
                        
                            return (
                                <Grid item marginTop={1}>
                                    {project ? <Tile label={project.title} alt={`project-${projectIndex}`} image={project.thumbnail} backgroundColor={project.backgroundColour} url={project.link} /> : <Tile label='Empty Project' alt="empty-project"/> }
                                </Grid>
                                )
                            }
                        )}
                    </Grid>
               </Grid>
            ) )}
        </Grid>
    );
}

export default ProjectsGrid;