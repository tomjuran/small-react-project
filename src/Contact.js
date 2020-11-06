import emailjs from "emailjs-com";
import React from 'react';
import './Contact.css';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function ContactUs() {
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_lnzn3vj', 'template_33my4sg', e.target, 'user_L42IxmkO3BjPvEhN03yl4')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });    
    e.target.reset()
    }

    const useStyles = makeStyles((theme) => ({
        appBar: {
          backgroundColor: "#fff"
        },
        hero: {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('https://images.unsplash.com/photo-1560185008-b033106af5c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')`,
          height: "50vh",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "4rem",
          [theme.breakpoints.down("sm")]: {
            height: 300,
            fontSize: "3em"
          }
        },
        blogsContainer: {
          paddingTop: theme.spacing(3),
          textAlign: "left"
        },
        blogTitle: {
          fontWeight: 800,
          paddingBottom: theme.spacing(3)
        },
        card: {
          maxWidth: "100%",
        },
        media: {
          height: 240
        },
        cardActions: {
          display: "flex",
          margin: "0 10px",
          justifyContent: "space-between"
        },
        author: {
          display: "flex"
        },
        paginationContainer: {
          display: "flex",
          justifyContent: "center"
        }
      }));
        const classes = useStyles();


    return(
        <div>
        <Box className={classes.hero}>
        <Box>Contact</Box>
        </Box>
        <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h6" className={classes.blogTitle}>
          Phone: 905 888 8888
        </Typography>
        <Typography variant="h6" className={classes.blogTitle}>
          Email: email@gmail.com
        </Typography>
        <p></p>
        
      </Container>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Email Address" name="email" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" className="btn btn-infol" value="Send Message" />
                    </div>
                </form>
            </div>
        </div>
        
    )
}

