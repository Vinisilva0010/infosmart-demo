// Base de conhecimento avançada para o chatbot
// Estrutura: categoria -> {padrões de entrada, respostas possíveis}
export const knowledgeBase = {
    "greetings": {
        "patterns": ['olá', 'oi', 'hello', 'hey', 'e aí', 'bom dia', 'boa tarde', 'boa noite', 'hi', 'eai', 'começar', 'iniciar'],
        "responses": [
            'Olá! Sou o InfoSmart Demo, como posso ajudar você hoje? Estou aqui para falar sobre automação, IA e os serviços oferecidos pela InfoSmart.',
            'Oi! Bem-vindo ao InfoSmart Demo. Posso ajudar com informações sobre nossos serviços de IA e automação. O que você gostaria de saber?',
            'Olá! Sou o assistente virtual da InfoSmart. Estou aqui para responder suas dúvidas sobre automação, IA e como podemos ajudar sua empresa.',
        ]
    },
    "services": {
        "patterns": ['serviços', 'servicos', 'oferecem', 'fazem', 'produtos', 'soluções', 'solucoes', 'o que vocês fazem'],
        "responses": [
            'A InfoSmart oferece diversos serviços de automação e inteligência artificial, como: (1) chatbots personalizados, (2) automação de processos internos (RPA), (3) análise de dados com IA, (4) sistemas de recomendação, e (5) soluções de atendimento ao cliente com IA.',
            'Nossos principais serviços incluem desenvolvimento de assistentes virtuais personalizados, automação de processos repetitivos, análise de dados com machine learning, e integração de sistemas com IA.',
            'Desenvolvemos soluções de IA para diversos segmentos: atendimento ao cliente (chatbots), automação de processos, análise de dados, reconhecimento de padrões e sistemas de recomendação.'
        ]
    },
    "automation": {
        "patterns": ['automação', 'automatizar', 'automacao', 'rpa', 'processos', 'robôs', 'robos', 'workflow', 'fluxo de trabalho'],
        "responses": [
            'A automação com IA pode transformar os processos da sua empresa, reduzindo custos operacionais em até 70% e aumentando a eficiência. Nossos robôs de software podem automatizar entrada de dados, geração de relatórios, atendimento ao cliente e muito mais.',
            'Nossa plataforma de automação de processos (RPA) permite automatizar tarefas repetitivas como processamento de documentos, integração entre sistemas, geração de relatórios e atendimento. Os resultados incluem redução de erros, maior velocidade e economia significativa.',
            'Automatizamos processos empresariais usando IA para identificar padrões e tomar decisões. Isso permite que seus funcionários foquem em tarefas estratégicas enquanto a tecnologia cuida do trabalho repetitivo.'
        ]
    },
    "pricing": {
        "patterns": ['preço', 'custo', 'valor', 'investimento', 'preco', 'quanto custa', 'planos', 'pagamento', 'mensalidade', 'assinatura'],
        "responses": [
            'Os valores dos serviços da InfoSmart variam de acordo com as necessidades específicas de cada cliente. Temos planos a partir de R$ 1.500/mês para chatbots simples, até soluções corporativas completas. Para obter um orçamento personalizado, entre em contato com nossa equipe comercial.',
            'Trabalhamos com modelo de assinatura mensal, com planos que variam conforme a complexidade da solução. Para projetos de chatbot, os valores iniciam em R$ 1.500/mês, enquanto automações de processos começam em R$ 3.000/mês. Podemos preparar um orçamento sob medida para sua necessidade.',
            'O investimento depende do escopo do projeto. Oferecemos uma avaliação inicial gratuita para entender seu negócio e recomendar a melhor solução. Após essa etapa, apresentamos um orçamento detalhado com todas as opções disponíveis.'
        ]
    },
    "contact": {
        "patterns": ['contato', 'contatar', 'contratar', 'email', 'telefone', 'whatsapp', 'número', 'numero', 'falar', 'comercial', 'vendas'],
        "responses": [
            'Para contratar os serviços da InfoSmart ou obter mais informações, entre em contato através do nosso site (infosmart.ai) ou pelo telefone (11) 4567-8900. Nossa equipe terá prazer em entender suas necessidades e propor a solução ideal.',
            'Você pode entrar em contato conosco pelo email comercial@infosmart.ai, pelo telefone (11) 4567-8900 ou pelo WhatsApp (11) 98765-4321. Estamos disponíveis de segunda a sexta, das 9h às 18h.',
            'Entre em contato pelo formulário no nosso site, por telefone (11) 4567-8900 ou pelo email contato@infosmart.ai. Podemos agendar uma demonstração gratuita para mostrar como nossas soluções podem ajudar sua empresa.'
        ]
    },
    "benefits": {
        "patterns": ['benefício', 'vantagem', 'beneficios', 'vantagens', 'ganhos', 'roi', 'retorno', 'melhoria', 'melhorias'],
        "responses": [
            'Os principais benefícios de usar as soluções da InfoSmart incluem: redução de custos operacionais (economia de 30-70%), atendimento 24/7, escalabilidade para lidar com picos de demanda, personalização completa e integração com sistemas existentes.',
            'Nossos clientes relatam diversos benefícios após implementar nossas soluções: (1) redução de 45% no tempo de atendimento ao cliente, (2) diminuição de 30% em custos operacionais, (3) aumento de 25% na satisfação dos clientes, e (4) liberação da equipe para focar em atividades estratégicas.',
            'As vantagens da automação com IA incluem: processamento de dados mais rápido, redução significativa de erros humanos, melhor experiência do cliente com respostas instantâneas, redução de custos com pessoal e capacidade de operar 24/7 sem interrupções.'
        ]
    },
    "implementation": {
        "patterns": ['implementação', 'implantar', 'implementar', 'instalar', 'setup', 'configurar', 'integrar', 'integração', 'começar'],
        "responses": [
            'O processo de implementação segue estas etapas: (1) Diagnóstico inicial para entender suas necessidades, (2) Desenho da solução personalizada, (3) Desenvolvimento e integração com seus sistemas, (4) Treinamento da equipe, (5) Acompanhamento e otimização contínua. O tempo médio é de 3 a 6 semanas.',
            'A implementação de nossas soluções é simples e rápida. Começamos com um diagnóstico de suas necessidades, seguido de uma fase de configuração. Integramos com seus sistemas existentes e treinamos sua equipe. Em média, um projeto leva 4 semanas do início até estar operacional.',
            'Para começar, realizamos uma reunião de discovery para entender seus objetivos. Em seguida, mapeamos os processos atuais, identificamos oportunidades de automação e propomos uma solução personalizada. A implementação técnica geralmente leva de 2 a 8 semanas, dependendo da complexidade.'
        ]
    },
    "cases": {
        "patterns": ['clientes', 'exemplos', 'case', 'sucesso', 'referência', 'referencia', 'quem usa', 'empresas', 'resultados', 'depoimentos'],
        "responses": [
            'Entre nossos clientes de sucesso estão: (1) Uma rede varejista que reduziu em 40% o tempo de atendimento ao cliente com nosso chatbot, (2) Uma instituição financeira que automatizou a análise de documentos, reduzindo o tempo de processamento de 2 dias para 15 minutos, (3) Uma operadora de saúde que melhorou em 35% a satisfação dos clientes.',
            'Um de nossos casos de sucesso é uma empresa de e-commerce que implementou nosso chatbot e conseguiu atender um volume 200% maior de clientes sem aumentar a equipe, além de reduzir o tempo médio de resposta de 2 horas para 3 minutos. O ROI do projeto foi alcançado em apenas 4 meses.',
            'Temos casos de sucesso em diversos segmentos. Por exemplo, uma empresa de logística conseguiu otimizar rotas usando nossa IA, reduzindo custos operacionais em 23%. Uma rede de hospitais automatizou o agendamento, reduzindo o não comparecimento em 45%.'
        ]
    },
    "technology": {
        "patterns": ['tecnologia', 'tecnologias', 'machine learning', 'ia', 'inteligência artificial', 'nlp', 'algoritmo', 'processamento de linguagem', 'deep learning', 'arquitetura'],
        "responses": [
            'Nossas soluções utilizam tecnologias avançadas de processamento de linguagem natural (NLP), machine learning e deep learning. Trabalhamos com modelos de linguagem de última geração, garantindo que nossos chatbots entendam com precisão as intenções dos usuários e forneçam respostas relevantes.',
            'Utilizamos uma combinação de tecnologias proprietárias e open-source, incluindo processamento de linguagem natural, machine learning e sistemas de recomendação. Nossa plataforma é desenvolvida em Python e Node.js, com uma arquitetura escalável e segura em nuvem.',
            'Nossa tecnologia é baseada em algoritmos avançados de IA, incluindo redes neurais para processamento de linguagem natural, modelos de machine learning para análise preditiva e sistemas especializados para automação de processos. Tudo isso é integrado em uma plataforma única e fácil de usar.'
        ]
    }
};

// Dicionário de correção para palavras comumente escritas incorretamente
export const spellingCorrections = {
    // Saudações
    "ola": "olá",
    "oie": "oi",
    "hello": "olá",
    "bom-dia": "bom dia",
    "bdia": "bom dia",
    
    // Serviços
    "servico": "serviços",
    "servisso": "serviços",
    "servissos": "serviços",
    "solucao": "solução",
    "solucoes": "soluções",
    "produto": "produtos",
    
    // Automação
    "automaçao": "automação",
    "automatizaçao": "automação",
    "procesos": "processos",
    "processo": "processos",
    "robo": "robô",
    "fluxo": "workflow",
    
    // Preços
    "precos": "preço",
    "presos": "preços",
    "custos": "custo",
    "valores": "valor",
    "quanto": "preço",
    "plano": "planos",
    
    // Contato
    "contatos": "contato",
    "telefon": "telefone",
    "email": "contato",
    "zap": "whatsapp",
    
    // Benefícios
    "beneficio": "benefício",
    "vantagen": "vantagem",
    "retornos": "retorno",
    "ganho": "ganhos",
    "melhora": "melhoria",
    
    // Tecnologia
    "tecnologya": "tecnologia",
    "técnologia": "tecnologia",
    "inteligencia": "inteligência",
    
    // Casos
    "exemplo": "exemplos",
    "cliente": "clientes"
};

// Lista de tópicos que o chatbot pode responder
export const topicExamples = [
    {"category": "Serviços", "examples": ["Quais serviços a InfoSmart oferece?", "O que vocês fazem?", "Que soluções vocês têm?"]},
    {"category": "Automação", "examples": ["Como funciona automação com IA?", "O que é RPA?", "Como automatizar processos?"]},
    {"category": "Preços", "examples": ["Quanto custa um chatbot?", "Quais são os planos de assinatura?", "Qual o investimento necessário?"]},
    {"category": "Contato", "examples": ["Como posso contratar?", "Qual o telefone de vocês?", "Como faço para agendar uma demonstração?"]},
    {"category": "Benefícios", "examples": ["Quais vantagens de usar IA?", "Qual o retorno do investimento?", "Como melhora o atendimento?"]},
    {"category": "Implementação", "examples": ["Quanto tempo leva para implementar?", "Como começar?", "Como integrar com meu sistema?"]},
    {"category": "Casos de Sucesso", "examples": ["Quais empresas já usam?", "Tem algum case no meu segmento?", "Quais resultados obtidos?"]},
    {"category": "Tecnologia", "examples": ["Que tecnologias vocês usam?", "Como funciona o NLP?", "Vocês usam machine learning?"]}
];

// Função para detectar a intenção da pergunta e retornar uma resposta
export const detectIntent = (userInput) => {
    // Normalização da entrada do usuário
    const normalizedInput = userInput.toLowerCase();
    const words = normalizedInput.match(/\b\w+\b/g) || [];
    
    // Correção de possíveis erros de digitação
    const correctedWords = words.map(word => {
        // Verificar se a palavra está no dicionário de correções
        if (spellingCorrections[word]) {
            return spellingCorrections[word];
        } else {
            // Verifica se há palavras similares no nosso conhecimento
            const allPatterns = [];
            Object.values(knowledgeBase).forEach(category => {
                category.patterns.forEach(pattern => {
                    allPatterns.push(pattern);
                });
            });
            
            // Encontra correspondências próximas
            const closeMatches = findCloseMatches(word, allPatterns);
            
            if (closeMatches.length > 0) {
                return closeMatches[0];
            } else {
                return word;
            }
        }
    });
    
    const correctedInput = correctedWords.join(' ');
    
    // Sistema de pontuação para determinar a categoria mais relevante
    const scores = {};
    Object.entries(knowledgeBase).forEach(([category, content]) => {
        scores[category] = 0;
        content.patterns.forEach(pattern => {
            if (correctedInput.includes(pattern)) {
                scores[category] += 10;  // Correspondência exata tem peso maior
            } else if (correctedWords.some(word => word.includes(pattern))) {
                scores[category] += 5;   // Correspondência parcial tem peso menor
            }
        });
    });
    
    // Verificar se alguma categoria recebeu pontuação
    if (Object.values(scores).some(score => score > 0)) {
        // Encontrar a categoria com maior pontuação
        const bestCategory = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        // Escolher aleatoriamente uma resposta desta categoria
        const responses = knowledgeBase[bestCategory].responses;
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Resposta padrão se nenhuma categoria corresponder
    return `Obrigado pelo seu interesse! Como assistente da InfoSmart, posso ajudar com informações sobre:
            
- Nossos serviços de IA e automação
- Preços e planos de assinatura
- Benefícios e vantagens das nossas soluções
- Casos de sucesso e exemplos de clientes
- Detalhes sobre implementação e integração
- Tecnologias que utilizamos
- Como entrar em contato conosco

Como posso ajudá-lo com algum desses tópicos?`;
};

// Função utilitária para encontrar correspondências próximas
function findCloseMatches(word, choices, n = 1, cutoff = 0.7) {
    // Implementação simplificada de correspondência próxima baseada em distância de Levenshtein
    const matches = [];
    
    choices.forEach(choice => {
        const similarity = calculateSimilarity(word, choice);
        if (similarity >= cutoff) {
            matches.push(choice);
        }
    });
    
    // Ordena por similaridade e retorna os primeiros n resultados
    return matches.slice(0, n);
}

// Função para calcular a similaridade entre duas strings
function calculateSimilarity(s1, s2) {
    // Implementação da distância de Levenshtein normalizada
    const longerLength = Math.max(s1.length, s2.length);
    if (longerLength === 0) return 1.0;
    
    const levenshteinDistance = levenshtein(s1, s2);
    return (longerLength - levenshteinDistance) / longerLength;
}

// Implementação da distância de Levenshtein
function levenshtein(a, b) {
    const matrix = [];
    
    // Incrementar ao longo da primeira coluna de cada linha
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    
    // Incrementar ao longo da primeira linha de cada coluna
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
    
    // Preencher o resto da matriz
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i-1) === a.charAt(j-1)) {
                matrix[i][j] = matrix[i-1][j-1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i-1][j-1] + 1, // substituição
                    Math.min(
                        matrix[i][j-1] + 1, // inserção
                        matrix[i-1][j] + 1  // exclusão
                    )
                );
            }
        }
    }
    
    return matrix[b.length][a.length];
} 