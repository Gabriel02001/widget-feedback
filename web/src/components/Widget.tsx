// import {ChatTeardropDots} from 'phosphor-react';
// import {useState} from 'react'

// import { Popover } from '@headlessui/react'

// export function Widget(){
//     const [isWidgetOpen, setIswidgetOpen] = useState(false)

//     function toggleWidgetVisibility(){ // altera a vis do wid
//         setIswidgetOpen(!isWidgetOpen)
//     }

//     // isWidgetOpen = true 
//     // não é possivel alterar o valor dela da msm forma que se altera uma variavel tradicional do js
//     // se alterarmos o valor direto da variavel o valor até vai ser alterado 
//     // mas o componente não vai ser recriado e mostrado em tela o novo valor da variavel

//     // a unica forma de alterar essa variavel é atraves da função set
//     // assim o react entende que a variavel deve ser alterada o componente atualizado com o novo valor
//     return (
//         <div className='absolute bottom-5 right-5'>
//             { isWidgetOpen ? <p>Hello World</p> : null}
//          <button onClick={toggleWidgetVisibility}  className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
//            <ChatTeardropDots className="w-6 h-6"/>
//            <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
//             <span className='pl-2'></span>
//             Feedback
//            </span>
//          </button>
         
//         </div>
//     )
// }

// ESTADO: sempre que eu preciso que alguma coisa
// mude  de acordo com uma ação do usuario 
// é uma variavel como qualquer outra do js
// o react fica observando essas variaveis
// coisa que ele não faz no js tradicional
// e toda vez que essas variaveis tiverem
// o seu valor alterado 
// o react cria a interface do componente de novo
// com o novo valord a variavel alterada

// dica: sempre que voce for utilizar booleanos no seu codigo 
// certifique-se de nomear a varivel de forma descritiva

import {ChatTeardropDots} from 'phosphor-react';
import {useState} from 'react'

import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

export function Widget(){

    return (
        <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
             <Popover.Panel>
             <WidgetForm />
             </Popover.Panel>
         <Popover.Button  className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
           <ChatTeardropDots className="w-6 h-6"/>
           <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
            <span className='pl-2'></span>
            Feedback
           </span>
         </Popover.Button>
         
        </Popover>
    )
}