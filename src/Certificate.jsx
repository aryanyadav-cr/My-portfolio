import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

// Importing your assets
import img1 from './assets/f8532ca8-f43a-47c5-8afc-df71e9502654.png';
import img3 from './assets/48b112a3-11a6-45a2-ad32-3e7b4c3c1f3e.png';
import img4 from './assets/879a78a1-92d8-40f8-9097-1f9f358ec5c2.png';
import img6 from './assets/e2ff6b20-e23a-45a4-b00f-727344e74bc4.png';
import img7 from './assets/fc6a5b1e-dfea-452f-9e8a-8c19bc75b706.png';
import { useState } from 'react';
import img8 from './assets/e1541af3-1cd7-4518-a76e-703814262f64.png';
import img9 from './assets/9certi.jpeg';
import Dialog from '@mui/material/Dialog';


export default function Certificate() {
  const certificates = [
    { id: 1, title: "Microsoft Azure Tech Workshop", description: "Gained insights into cloud solutions and specialized tools for developers.", image: img1 },
    { id: 2, title: "AWS Workshop", description: "Explored cloud infrastructure, deployment, and scalable computing services.", image: img3 },
    { id: 4, title: "Blue Dart Workshop", description: "Gained an understanding of supply chain management and the logistics of global express delivery.", image: img4 },
    { id: 6, title: "Odoo Workshop", description: "Learned about integrated ERP (Enterprise Resource Planning) software for managing business operations.", image: img6 },
    { id: 7, title: "Myntra Workshop", description: "Studied the tech and business logic behind India’s leading fashion e-commerce platform.", image: img7 },
    { id: 8, title: "Zomato District Workshop", description: "Learned about hyperlocal services, dining discovery, and platform scaling.", image: img8 },
   { 
  id: 9, 
  title: "Rapid Prototyping Workshop", 
  description: "Completed a hands-on workshop covering the fundamentals of 3D printing and laser cutting.", 
  image: img9 
}  ];

const [selectedImage, setSelectedImage] = useState(null);
const handleClick = (image) => {
  setSelectedImage(selectedImage === image ? null : image);

}
 const handleClose = () => {
    
    setSelectedImage(null);
  };
  return (
    <section className="py-[140px] px-[50px] bg-black min-h-screen" id="Certificates">
      <h2 
        data-aos="fade-up" 
        className="text-5xl font-bold mb-12 text-center text-white"
      >
        Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {certificates.map((cert, index) => (
          <div 
            key={cert.id}
            data-aos="zoom-in" 
            data-aos-delay={index * 100}
            className="flex" 
          >
            <Card sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%', // Makes card fill the grid column width
              boxShadow: 1,
              overflow: 'hidden',
              backgroundColor: '#1a1a1a', 
              color: 'white',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 10px 20px rgba(59, 130, 246, 0.5)', 
                '& .MuiCardMedia-root': {
                  transform: 'scale(1.1)',
                },
              },
            }}>
              <CardActionArea sx={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'flex-start' }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={cert.image}
                  alt={cert.title}
                  sx={{ transition: 'transform 0.3s ease-in-out' }}
                  onClick={() => handleClick(selectedImage === cert.image ? null : cert.image)}
                />
                <CardContent sx={{ 
                  backgroundColor: '#1a1a1a', 
                  flexGrow: 1, // This stretches the content area to fill empty space
                  width: '100%' 
                }}>
                  <Typography gutterBottom variant="h6" component="div" sx={{ color: 'white' }}>
                    {cert.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'gray' }}>
                    {cert.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
        <Dialog 
                      open={Boolean(selectedImage)} 
                      onClose={handleClose} 
                      maxWidth="md"
                      PaperProps={{
                          style: { backgroundColor: 'transparent', boxShadow: 'none' } // Keeps the edges clean
                      }}
                  >
                      {selectedImage && (
                          <img 
                              src={selectedImage} 
                              alt="Expanded project view" 
                              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} 
                              onClick={handleClose} // Clicking the big image also closes it
                          />
                      )}
                  </Dialog>
    </section>
  );
}