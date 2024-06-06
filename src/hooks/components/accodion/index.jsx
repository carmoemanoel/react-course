
import { AccordionContainer, AccordionButton, AccordionImage, AccordionText, AccordionWrapper, AccordionContent } from "./style"

import { useState } from "react";

import { AngleDown, AngleUp } from "./src/svg/index";


export default function Accordion(){

 // controle de estado do content
 const [ visible, setVisible ] = useState(false)
 // validação da direção da seta
 const handleAngle = visible == false ? AngleDown : AngleUp
 // função para abrir e fechar o accordion

 function HandleAccordion(){
  return setVisible(!visible)
 }

  return(
    <AccordionWrapper>
    <AccordionContainer>
      <AccordionText>What is an accordion component?</AccordionText>
      <AccordionButton onClick={HandleAccordion}>
        <AccordionImage src ={handleAngle} />
      </AccordionButton>
    </AccordionContainer>
      {
        visible && (

          <AccordionContent>
          <AccordionText>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aut voluptatum consequuntur placeat unde dolores nulla rerum vero reprehenderit voluptas
             illo dolor voluptatem id optio, ab deserunt architecto nisi mollitia aliquam.
          </AccordionText>
        </AccordionContent>
        
        )}
    </AccordionWrapper>
  )
}