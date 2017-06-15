---
layout: post
title: Patch Inquisition
introduction: When someone prefer to blame someone instead of fix the problem
comments: true
---

Há muito tempo a discussão do momento é sobre **gerencia de software**
e como obter um software mais confiável. (robusto, escalável, eficiente, etc)

Então certos profissionais da área tendem a optar por estratégias como SCRUM,
intrigantes quadros como o Kanban, duros procedimentos de revisão de código.

No final das contas, o que acontece? O sistema eventualmente quebra. Porque?
Provavelmente porque alguém estava com dor de cabeça, brigou com alguém ou simplesmente
não prestou atenção na revisão.

Nessa situação, só há uma coisa a fazer: **Consertar o problema.**
Eventualmente, descobrir o que causou o problema, não necessariamente quem, afinal
relacionar um novo ticket com um antigo já vai fazer o desenvolvedor que submeteu o patch perceber
que fez merda.

Recentemente, enviei uma correção para o developer tools do Firefox. Nessa correção,
eu acabei introduzindo um bug e fazendo com que outro escondido viesse à luz.
Ambos foram encontrados e corrigidos por mim, mesmo depois de afetar
alguns usuários.

- Um tribunal da inquisição da Mozilla veio a minha casa me queimar vivo? **Não**
- Alguém foi na issue que eu tinha feito ou no IRC rir de mim por não ter visto ou testado todos os casos? **Não**
- Foi dito que houve x problemas e que nunca mais devem ocorrer no Weekly Call? **Não**
- Alguém se prontificou para resolver o problema? **Sim**

Então, quando encontrarmos um problema, resolvamos. Talvez depois, falemos com
quem o introduziu para encorajar a entender o que aconteceu e na próxima vez
que acontecer saber como resolver mais rápido, se preciso faça uma base de conhecimento.
(Não use o pensamento de que não deve nunca mais se repetir, pois eventualmente irá)

E lembre-se:

* Espere o pior, sempre. Li recentemente no quora um artigo interessante sobre **problemas de um desenvolvedor** e um dos pontos dizia:

> "Excesso de confiança. Um desenvolvedor sabe que vai dar algum erro naquela lib introduzida para facilitar a sua vida."

* Não se apegue a solução, foque na resolução do problema.

> "The moral of the story is to focus on the problem - not a specific solution
and to discuss it with the development community before investing in the
creation of a body of code."
Kernel early stage

* Não culpe ninguém pelo erro, corrija e defina um modo de evita-lo. (se houver)

* [Programming, Motherfucker](http://programming-motherfucker.com/)
