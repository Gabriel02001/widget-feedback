import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/Icons/bug.svg'
import ideaImageUrl from '../../assets/Icons/idea.svg'
import thoughtImageUrl from '../../assets/Icons/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import FeedbackContentStep from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";


export const feedbackTypes = {
    BUG: {
      title: 'Problema',
      image: {
          source: bugImageUrl,
          alt: 'Imagem de um inseto'
      },
    },
    IDEIA: {
      title: 'Ideia',
      image: {
        source: ideaImageUrl,
        alt: 'Imagem de um lâmpada'
      },
    },
    OTHER: {
      title: 'Outro',
      image: {
        source: thoughtImageUrl,
        alt: 'Imagem de um balão de pensamento'
      },
    }
}

//type: declara um tipo literal / um tipo literal é um tipo mais especifico do que uma string, number or boolean / 
      // Exemplo: "hello world" é uma string, mas string  não é um "hello world"
//keyof:  de algum tipo lhe dá um novo tipo que é uma união de tipos literais e esses tipos literais são os nomes das propriedades
//typeof: o operador lhe dá o tipo de objeto


//
export type FeedbackType = keyof typeof feedbackTypes     
/* Object.entries(feedbackTypes) =>            41:00 vid
  [
    ['BUG', {...}],  chave e conteudo    
    ['IDEA', {...}], 
    ['THOUGHT',{...}] 
  ] */

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedBackSent] = useState(false)
   function handleRestartFeedback(){
     setFeedBackSent(false)
     setFeedbackType(null);
   }
  
    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
         
           {feedbackSent ? (
             <FeedbackSucessStep
             onFeedbackRestartRequested={handleRestartFeedback} 
             />
           ) :  (
             <>
             {!feedbackType ? (
             <FeedbackTypeStep  onFeedBackTypeChanged={setFeedbackType}/>
           ) : (
            <FeedbackContentStep 
            feedbackType={feedbackType}
            onFeedbackRestartRequested={handleRestartFeedback} 
            onFeedbackSent={() => setFeedBackSent(true)}/>
           )}
             </>
           )}
           


            <footer className="text-xs text-neutral-400">
             Feito com O pela <a className="underline underline-offset-2" href="#">Rocketseat</a>
            </footer>
        </div>
    )
}

// parei em 54:00 / https://www.figma.com/file/tBNqGb6HKUf1Gpxuy1ceQZ/Feedback-Widget-(Community)?node-id=100%3A3925