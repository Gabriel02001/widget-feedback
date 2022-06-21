// test('sum 2 + 2', () => {
//     expect(2 + 2).toBe(4)
// })

import { SubmiteFeedbackUseCase } from "./submit-feedback-use-case"

const submitFeedback = new SubmiteFeedbackUseCase(
    { create: async () => {}},
    { sendMail: async () => {}}

)
// essa função está esperando um repositorio que tem um unico repositorio chamado create

describe('Submit feedback', () =>{
 it('should be able to submit a feedback',  async ()=>{
    
    // espero que a promessa seja resolvida e não dispare nenhum erro
    await expect(submitFeedback.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,8213713732sjfhwehere234fe',
    })).resolves.not.toThrow();
 })

 it('should not be able to submit feedback without type ',  async ()=>{
  
    // sem type
    await expect(submitFeedback.execute({
        type: '',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,8213713732sjfhwehere234fe',
    })).rejects.toThrow();
 })

 it('should not be able to submit feedback without comment ',  async ()=>{
  
    //sem comment
    await expect(submitFeedback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;base64,8213713732sjfhwehere234fe',
    })).rejects.toThrow();
 })

 it('should not be able to submit feedback without screenshot ',  async ()=>{
  
    // sem foto
    await expect(submitFeedback.execute({
        type: 'BUG',
        comment: 'Feedback bug',
        screenshot: '',
    })).rejects.toThrow();
 })
 
 it('should not be able to submit feedback with an invalid screenshot format ',  async ()=>{
  
    // sem foto
    await expect(submitFeedback.execute({
        type: 'BUG',
        comment: 'Feedback bug',
        screenshot: 'test.png',
    })).rejects.toThrow();
 })

})