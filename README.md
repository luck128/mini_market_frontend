# Mini Market - Frontend

Interface para o sistema de autoatendimento em Mini Markets, permitindo que usuários visualizem o estoque em tempo real, acessem produtos disponíveis no mercado e na geladeira, e finalizem compras de maneira prática.

## 🚀 Tecnologias Utilizadas

- **[React](https://reactjs.org/):** Biblioteca para criação de interfaces interativas.
- **[Chakra UI](https://chakra-ui.com/):** Biblioteca de componentes estilizados.

## 📂 Funcionalidades

- [x] **Visualização em tempo real do estoque**: Produtos disponíveis para compra.
- [x] **Abas de navegação**:
  - **Mercado**: Produtos secos como salgados, doces e chocolates, entre outros.
  - **Geladeira**: Seleção de uma geladeira próxima à localização do usuário, com opção de abertura para pegar bebidas.
- [x] **Carrinho de compras**: Adicione itens e realize o pagamento.
- [ ] **Abertura de Geladeira**: Abertura da geladeira via localização do usuário.

## 💻 Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado.
- Gerenciador de pacotes (npm ou yarn).

### Passos para execução

```bash
# Clone o repositório:
git clone <url-do-repositorio-frontend>
cd frontend

Instale as dependências:
npm install

Inicie o servidor de desenvolvimento:
npm start

Acesse no navegador:
http://localhost:3000
```

## 📂 Estrutura do Projeto

src/

├── components/      # Componentes reutilizáveis

├── pages/           # Páginas principais (Mercado, Geladeira)

├── services/        # Comunicação com a API

└── App.js          # Configuração principal da aplicação

