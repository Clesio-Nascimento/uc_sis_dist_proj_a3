#Clesio Nascimento Da Silva   RA: 820138484

# Cayle store

woocommerce com 3 microsserviços cliente, pedido e produto

## Instalação e Configuração

### Atenção 
- o projeto tá na branch master

### Instalação
Passos para instalar o projeto:

1. git clone -b master https://github.com/Clesio-Nascimento/uc_sis_dist_proj_a3.git
2. npm install
3. cria o arquivo .env
4. criar os databade dos respectivos microsserviços no postgresql
5. excluir o repositório de cada microsserviço migrations, ele está localizado dentro da pasta chamada prisma
6. feito as exclusôes, executar os seguite comando para cada microsserviço para criar as tabelas 
7. npx prisma migrate dev --name aqui pode colocar o nome de sua preferencia
   

## Utilização

Instruções sobre como usar o projeto:

npm run dev para inicializar os microsserviços
9. apos inicializar se quiser ver a base de dados atráves do prisma, o camando é
10. npx prisma studio
11. 7. npm start no repositorio do app_react
