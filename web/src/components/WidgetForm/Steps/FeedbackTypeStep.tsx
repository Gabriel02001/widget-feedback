import { FeedbackType, feedbackTypes } from ".." // não precisa colocar o index na hora de importar
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
// a tipagem do parametro e do retorno / tipo da variavel passada como parametro e o q a func retorna
 onFeedBackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps){
    return (
    <>
        <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
       </header> 
        {/* /* Object.entries(feedbackTypes) =>            41:00 vid
  [
   0 ['BUG', {...}],  chave e conteudo    
   1 ['IDEA', {...}], 
   2 ['THOUGHT',{...}] 

      com o map é possivel acessar a chave e o valor em cada array
      Object.entries(feedbackTypes).map(item ou [key value]) => {} [ 0 'THOUGHT', 1 {...}] 
  ] */}
        <div className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {
          console.log(key, value)
          return  (
              <button
               key={key}
               className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"                    
               onClick={ () => props.onFeedBackTypeChanged(key as FeedbackType)} // o onclick espera que eu passe pra ele uma função aqui no caso estariamos passando a execução de uma funçao
               type = "button"
              >
                  <img src={value.image.source} alt={value.image.alt} />
                  <span>{value.title}</span>
              </button>
          )
      })}
     </div>
    </>
    )
}