import spotify from './assets/spotify.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Weather from './assets/weather.png';
import Login from './assets/login.png';
import To from './assets/tic.png';
import Tic from './assets/Tic-Tac.png';
import Net from './assets/Netflix.png';




const projects = [
    {
        id: 1,
        title: "Spotify Clone",
        description: "A simple and responsive Spotify-inspired music player built using HTML, CSS, and JavaScript.",
        image: spotify, 
        repoLink: "https://github.com/aryanyadav-cr/Spotify-clone.git"
    },
    {
        id: 2,
        title: "Weather App",
        description: "Weather App Using Html, Css and JS",
        image: Weather, 
        repoLink: "https://github.com/aryanyadav-cr/Weather-app.git"
    },
    
    {
        id: 4,
        title: "To-Do List",
        description: "To-Do List App Using react.js",
        image: To, 
        repoLink: "https://github.com/aryanyadav-cr/to-do-list-.git"
    },
    {
         id: 5,
        title: "Tic-Tac-Toe Game",
        description: "Tic-Tac-Toe  Using Html, Css and JS",
        image: Tic, 
        repoLink: "https://github.com/aryanyadav-cr/Tic-Tac-To-.git"
    },
    {
        id: 6,
        title: "Netflix Clone",
        description: "Netflix Clone Using Html and Css",
        image: Net, 
        repoLink: "https://github.com/aryanyadav-cr/netflix-clone.git"
    }
];

const Projects = () => {
  

    return (
        <section className="py-[140px] px-[50px] bg-black min-h-fit relative" id="projects">
            <h2 data-aos="fade-up" className="text-5xl font-bold mb-6 mt-12 pb-8 text-center text-white">
                My Projects
            </h2>
            <div 
                
                data-aos="fade-up" 
                data-aos-delay="200" 
                className="flex flex-nowrap gap-6 pb-8 overflow-x-auto snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            > 
                {projects.map((item) => (
                    <Card 
                        key={item.id}
                        className="snap-center shrink-0 shadow-xl"
                        sx={{ 
                            maxWidth: 345, 
                            height: 350,
                            overflow: 'hidden',   
                            backgroundColor: '#1e1e1e', 
                            color: 'white',
                            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-8px)',
                                boxShadow: '0 10px 20px rgba(59, 130, 246, 0.5)', 
                                '& .MuiCardMedia-root': {
                                    transform: 'scale(1.1)',
                                }
                            }
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="180"
                            image={item.image}
                            alt={item.title}
                            sx={{ transition: 'transform 0.3s ease-in-out' }}
                        />
                        <CardContent>
                            <Typography variant="h5">{item.title}</Typography>
                            <Typography variant="body2">{item.description}</Typography>
                        </CardContent>
                        <Button href={item.repoLink} variant="contained" sx={{ ml: 2, margin: 2 }}>
                            Github
                        </Button>
                    </Card>
                ))}
            </div>
           </section>
    );
};

export default Projects;