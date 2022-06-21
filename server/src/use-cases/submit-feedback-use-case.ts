import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";
import { PrismaFeedbacksRepository } from "../repositories/prisma/prisma-feedbacks-repository";

//quais dados eu preciso para enviar um novo feedback
interface SubmiteFeedbackUseCaseRequest{
 type: string;
 comment: string;
 screenshot: string;
}

// o prisma é inversamente injetado dentro dessa classe

export class SubmiteFeedbackUseCase{
   // no
   constructor(
    private feedbackRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
   ){}

    // salvar esse feedback no banco de dados e depois enviar o email
    async execute(request: SubmiteFeedbackUseCaseRequest){
      const {type, comment, screenshot} = request
        
      if(!type){
         throw new Error('Type is required.')
      }

      if(!comment){
         throw new Error('comment is required.')
      }

      if(!screenshot){
         throw new Error('screenshot is required.')
      }

      if(screenshot && !screenshot.startsWith('data:image/png;base64')){
         throw new Error('Invalid screenshot format.')
      }

         await this.feedbackRepository.create({
            type,
            comment,
            screenshot,
         })

         await this.mailAdapter.sendMail({
            subject: 'Novo feedback',
            body:  [
               `<div style="font-family": sans-serif; font-size: 16px; color: #111;">`,
               `<p>Tipo do feedback: ${type} </p>`,
               `<p>Comentario ${comment} </p>`,
               screenshot  ? `<img src="${screenshot}">` : ``,
               `</div>`
           ].join('\n')
         })
    }
}



// caso não estivessemos usando o principil de inversão de dependencias 
// funcionaria sim funcionaria
// mas meu caso de uso está completamente acoplado ao prisma
// se um dia eu quiser trocar a base de dados não vai dar ou mt dificil de alterar
//
// export class SubmiteFeedbackUseCase{
    
//     async execute(request: SubmiteFeedbackUseCaseRequest){
//       const {type, comment, screenshot} = request
//      
        //  const PrismaFeedbacksRepository = new PrismaFeedbacksRepository();

        //  await PrismaFeedbacksRepository.create({
        //     type,
        //     comment,
        //     screenshot,
        //  })
//     }
// }