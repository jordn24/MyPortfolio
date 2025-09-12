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
      projects: Project[];
      filter?: string;
}

const ProjectsGrid: React.FC<ProjectsProps> = ({ projects, filter }) => {  
    const filteredProjects = filter 
    ? projects.filter((p) => p.category.toLowerCase() === filter.toLowerCase())
    : projects;

    
    return (
        <Grid container spacing={2}>
            {Array.from({length: 4}).map( (_, col: number) => (
                <Grid item xs={3}>
                    <Grid container direction='column'>
                        {Array.from({length: 3}).map( (_, row: number) => { 
                            const projectIndex: number = col * 3 + row;
                            const project: Project = filteredProjects[projectIndex];
                        
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