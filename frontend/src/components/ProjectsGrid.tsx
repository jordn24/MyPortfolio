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
    sorted?: string;
}

const ProjectsGrid: React.FC<ProjectsProps> = ({filter=""}) => {  
    const [projects, setProjects] = useState<Project[]>([]);

    let queryParams = new URLSearchParams(useLocation().search);
    let sorted = queryParams.get('sorted');

    useEffect(() => {
        fetch(`https://myportfolio-0jva.onrender.com/projects/${filter}`)
            .then((response) => {
                return response.json();
            })
            .then((resData: Project[]) => {
                let sortedProjects = resData;
                
                if (sorted === "asc") {
                    sortedProjects.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
                }
                if (sorted === "dsc") {
                    sortedProjects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                }

                setProjects(sortedProjects);
            })
            .catch((err: any) => {
                console.log("Fetching data went wrong...", err);
            })
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