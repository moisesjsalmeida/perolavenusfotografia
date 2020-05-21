![Pérola Vênus Fotografia](https://github.com/moisesjsalmeida/perolavenusfotografia/blob/master/pearlphotography/static/images/logo.png)

Este projeto foi realizado como conclusão para o curso *CS50 Introduction to computer Science*, realizado através do programa HarvardX.
Durante o andamento do referido curso, houve o uso da linguagem Python, o que me deixou mais confortável para a utilização de frameworks como [Flask](https://flask.palletsprojects.com/en/1.1.x/) e [Django](https://www.djangoproject.com/). Desde então, foram realizadas pequenas mudanças, adequando o site para os conhecimentos que foram adquiridos. Ele se tornou uma "área de testes" em que pratico alguns conceitos novos.
Por conta do aspecto de pesquisa que o projeto tem, preferi utilizar o mínimo de códigos pré-programados possível. Além disso, nota-se que muito da linguagem se refinou com o tempo.

O projeto original, hospedado no [perolavenus.com.br](http://www.perolavenus.com.br) possui algumas pequenas diferenças. Primeiramente, o banco de dados utilizado para a versão em produção foi construído em MySQL. Também existe uma pequena diferença na estrutura de pastas, que se adequa melhor à disponibilizada pelo servidor.

**Alguns detalhes do projeto**
- A página de admin foi alterada somente para receber um input de arquivos de fotos, e tem uma pequena personalização com javascript para mostrar uma prévia da imagem antes que seja carregada para o site.
- A página de portfólio possui um lazy loading baseado apenas em javascript, com a utilização de `Intersection Observer` para carregar as imagens conforme acontece a rolagem. Desta forma, não existe paginação para carregamento de novas imagens.
- O formulário de contatos não salva as mensagens no banco de dados. Elas são encaminhadas diretamente para o e-mail do admin do site. Esta decisão foi tomada levando em consideração que a página de admin não será utilizada com frequência e o encaminhamento das mensagens se mostrou mais eficaz.

**Próximos passos**
- Construção de uma página para venda de *presets* para Photoshop e Lightroom.
- Possível construção de blog para publicação de tutoriais e outros textos relacionados.
- Correções de performance da seção de portfolio (existe uma necessidade real de redimensionamento de imagens)

---
*Estou aberto a críticas e sugestões! Quanto mais trabalho neste projeto, mais me sinto seguro como programador e mais aprendo o potencial das linguagens que utilizei!*