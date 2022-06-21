//contrato


// pra criar um novo feedback eu preciso saber 
export interface FeedbackCreateData{
 type: string;
 comment: string;
 screenshot?: string;
}

// quais metodos existem dentro do feedbackr-repository
// quais açoes a minha aplicação pode fazer com os feedbacks do banco de dados
//quais metodos existem dentro do repositorio de feedback açoes a minha aplicação pode fazer com os feedback do banco de dados
export interface FeedbacksRepository {
// esse metodo create vai receber data com o seguinte formato e o seu retorno é uma promise que não retorna nada.. promise pq esse metodo essa função é assincrona
create: (data: FeedbackCreateData) => Promise<void>;    
}

// contrato 
// esse é o cara que vai dizer para nossas rotas.. os casos de uso
// quais são as operaçoes que nos podemos realizar no banco de dados
// mas ele não vai implementar essas operaçoes 

//  a gente separou as implementaçoes da nossa aplicação em um outro arquivo

// com isso nos temos 2 grandes objetivos

// 1: se no futuro a gente quiser trocar o prisma feedbacks-repository 
// para qualquer outra implementação que não seja do prisma
 // um drive nativo, um mongo, um sequilize, typeorm, sql

 // e por a gente ter o contrato separado da aplicação
 // basta eu criar outra classe que implementa essa contrato
 // que implementa todos os metodos do contrato
 // e a minha aplicação vai continuar funcionando

 // estou desacoplando .. estou abstraindo a parte de acesso do banco de dados da minha aplicação
 // para um arquivo separado