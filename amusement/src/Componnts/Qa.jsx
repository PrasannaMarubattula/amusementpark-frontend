import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@material-ui/core';

export default function Qa() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="sm">
      <div>
      <Typography
                variant='h3'
                align='center'
                className='my-5'
                sx={{ fontWeight: 'bold', color: '#2196f3', fontStyle: 'italic' }}
            >
                Frequently Asked Questions
      </Typography>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>For how long the ticket will be vaild</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The ticket is valid for only one day
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Where can I make the change to the existing ticket</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you wish to make the changes to the existing ticket,
            Please go to our contact page and drop a mail.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Can we book tickets in advance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes you can choose the date of the ticket but remember that the ticket
            is only valid for one day!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </Container>
    
  );
}