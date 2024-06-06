
import { AccordionContainer, AccordionButton, AccordionImage, AccordionText } from "./style"

export default function Accordion(){
  return(
    <AccordionContainer>
      <AccordionText>What is an accordion component?</AccordionText>
      <AccordionButton>
        <AccordionImage/>
      </AccordionButton>
    </AccordionContainer>
  )
}