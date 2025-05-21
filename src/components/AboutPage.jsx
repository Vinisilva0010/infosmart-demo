import React from 'react';
import NavBar from './NavBar';
import { topicExamples } from '../utils/chatbotService';
import './AboutPage.css';

const AboutPage = () => {
  // Função para determinar o ícone a ser utilizado para cada categoria
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Serviços':
        return 'cube';
      case 'Automação':
        return 'cogs';
      case 'Preços':
        return 'tag';
      case 'Contato':
        return 'headset';
      case 'Benefícios':
        return 'chart-line';
      case 'Implementação':
        return 'tools';
      case 'Casos de Sucesso':
        return 'star';
      case 'Tecnologia':
        return 'microchip';
      default:
        return 'info-circle';
    }
  };

  return (
    <div className="about-page">
      <NavBar />
      
      <div className="container mb-5">
        <div className="row justify-content-center mb-4">
          <div className="col-md-10 text-center">
            <h1 className="header-title">Sobre o InfoSmart Demo</h1>
            <p className="lead">Um chatbot inteligente para demonstração de soluções de IA e automação</p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12 mb-4">
            <div className="section-container">
              <h2 className="section-title">O que é o InfoSmart Demo?</h2>
              <p>
                O InfoSmart Demo é um chatbot demonstrativo que simula um assistente virtual especializado em soluções de inteligência artificial e automação para empresas.
                Ele foi criado para mostrar as capacidades de um chatbot corporativo e como ele pode ajudar no atendimento ao cliente, fornecendo informações e automação de processos.
              </p>
              <p>
                Este chatbot utiliza técnicas avançadas de processamento de linguagem natural para entender as perguntas dos usuários, mesmo quando há erros de digitação ou variações na forma de perguntar.
                Ele também é capaz de manter um contexto de conversa e fornecer respostas relevantes e personalizadas.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row mb-4">
          <div className="col-12">
            <div className="section-container">
              <h2 className="section-title">Tópicos que o chatbot pode responder</h2>
              
              <div className="row">
                {topicExamples.map((topic, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="topic-card">
                      <h4>
                        <span className="topic-icon">
                          <i className={`fas fa-${getCategoryIcon(topic.category)}`}></i>
                        </span>
                        {topic.category}
                      </h4>
                      <div className="mt-3 mb-2">
                        <strong>Exemplos de perguntas:</strong>
                      </div>
                      {topic.examples.map((example, idx) => (
                        <div key={idx} className="example-question">{example}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mb-4">
          <div className="col-12">
            <div className="section-container">
              <h2 className="section-title">Recursos e Funcionalidades</h2>
              
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card feature-card">
                    <div className="card-body text-center">
                      <div className="feature-icon">
                        <i className="fas fa-brain"></i>
                      </div>
                      <h5 className="card-title">Entendimento avançado</h5>
                      <p className="card-text">
                        Compreende variações na forma de perguntar e tolera erros ortográficos comuns, oferecendo uma experiência natural de conversa.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-4 mb-4">
                  <div className="card feature-card">
                    <div className="card-body text-center">
                      <div className="feature-icon">
                        <i className="fas fa-lightbulb"></i>
                      </div>
                      <h5 className="card-title">Sugestões inteligentes</h5>
                      <p className="card-text">
                        Oferece sugestões de perguntas contextuais para guiar o usuário e mostrar os tipos de informações disponíveis.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-4 mb-4">
                  <div className="card feature-card">
                    <div className="card-body text-center">
                      <div className="feature-icon">
                        <i className="fas fa-reply-all"></i>
                      </div>
                      <h5 className="card-title">Respostas variadas</h5>
                      <p className="card-text">
                        Para cada tipo de pergunta, o chatbot possui múltiplas variações de resposta para evitar repetições e manter o engajamento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="section-container">
              <h2 className="section-title">Limitações do chatbot</h2>
              <p>
                O InfoSmart Demo foi criado para responder perguntas sobre soluções de IA e automação para empresas. Ele <strong>não é capaz</strong> de:
              </p>
              <ul>
                <li>Responder perguntas sobre outros assuntos não relacionados (política, esportes, entretenimento, etc.)</li>
                <li>Realizar transações ou processar pagamentos</li>
                <li>Acessar informações de usuários específicos ou dados confidenciais</li>
                <li>Executar ações no sistema além de fornecer informações</li>
              </ul>
              
              <div className="alert alert-info mt-4">
                <i className="fas fa-info-circle"></i> <strong>Dica:</strong> Para obter as melhores respostas, faça perguntas específicas sobre os tópicos listados acima. Caso o chatbot não entenda sua pergunta, tente reformulá-la ou use uma das sugestões fornecidas.
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-12 text-center">
            <a href="/" className="btn btn-primary">Voltar para o Chatbot</a>
          </div>
        </div>
      </div>
      
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <div className="container">
          <p className="mb-0">InfoSmart Demo | React + NLP Chatbot | <a href="/" className="text-white">Voltar ao início</a></p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage; 