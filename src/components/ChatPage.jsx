import React, { useState, useRef, useEffect } from 'react';
import NavBar from './NavBar';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import SuggestionItem from './SuggestionItem';
import { detectIntent, topicExamples } from '../utils/chatbotService';
import './ChatPage.css';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Função para inicializar o chat com uma mensagem de boas-vindas
  useEffect(() => {
    const welcomeMessage = `Olá! Sou o assistente virtual da InfoSmart. Estou aqui para falar sobre nossas soluções de automação e IA para empresas.

Posso te ajudar com informações sobre:
• Nossos serviços e soluções
• Como a automação funciona
• Preços e planos
• Benefícios e vantagens
• Casos de sucesso
• Processo de implementação
• Como entrar em contato

Como posso ajudar você hoje?`;
    
    setMessages([{ text: welcomeMessage, isUser: false }]);
  }, []);

  // Função para rolar para a última mensagem
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Efeito para rolar para baixo quando novas mensagens são adicionadas
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Função para processar a mensagem do usuário
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Adiciona a mensagem do usuário ao chat
    const userMessage = inputValue;
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setInputValue('');
    setIsTyping(true);
    
    // Simula um tempo de processamento para parecer mais natural
    setTimeout(() => {
      // Processa a mensagem e obtém a resposta
      const botResponse = detectIntent(userMessage);
      
      setIsTyping(false);
      setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
    }, 1000 + Math.random() * 1000); // Delay aleatório entre 1-2 segundos
  };

  // Função para usar uma sugestão
  const handleSuggestion = (suggestion) => {
    setInputValue(suggestion);
    handleSubmit({ preventDefault: () => {} });
  };

  return (
    <div className="chat-page">
      <NavBar />
      
      <div className="container mt-4 mb-5">
        <div className="row justify-content-center mb-4">
          <div className="col-md-10 text-center">
            <h1 className="header-title">
              <i className="fas fa-robot"></i> InfoSmart Demo Chatbot
            </h1>
            <p className="lead">Pergunte sobre nossas soluções de IA e automação para empresas</p>
          </div>
        </div>

        <div className="row">
          {/* Chatbot */}
          <div className="col-md-8">
            <div className="chat-container">
              <div className="chat-header">
                <i className="fas fa-comment-dots"></i> InfoSmart Assistant
              </div>
              
              <div className="chat-messages" id="chatMessages">
                {messages.map((msg, index) => (
                  <ChatMessage 
                    key={index} 
                    message={msg.text} 
                    isUser={msg.isUser} 
                  />
                ))}
                
                {isTyping && <TypingIndicator />}
                
                <div ref={messagesEndRef} />
              </div>
              
              <div className="chat-input">
                <form onSubmit={handleSubmit} className="input-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Digite sua pergunta aqui..." 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-paper-plane"></i> Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Sugestões */}
          <div className="col-md-4">
            <div className="suggestions-container">
              <h4 className="mb-3"><i className="fas fa-lightbulb"></i> Sugestões de perguntas</h4>
              
              {topicExamples.map((topic, index) => (
                <div key={index} className="mb-3">
                  <h5 className="category-title">{topic.category}</h5>
                  <div className="suggestion-examples">
                    {topic.examples.map((example, idx) => (
                      <SuggestionItem 
                        key={idx} 
                        text={example} 
                        onClick={handleSuggestion} 
                      />
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="help-text">
                <i className="fas fa-info-circle"></i> Clique nas sugestões ou digite suas próprias perguntas sobre automação e IA.
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p>
              <a href="/about">Sobre o InfoSmart Demo</a> | 
              <a href="https://github.com/infosmart/demo">GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage; 