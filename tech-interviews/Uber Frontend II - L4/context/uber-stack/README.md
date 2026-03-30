# Stack e tecnologias — contexto Uber (frontend)

## Vídeo do meetup (link do processo)

O e-mail *Uber Next Steps* aponta o último meetup de Frontend na Uber neste link:

**[YouTube — meetup Frontend Uber](https://www.youtube.com/watch?v=EGHHaOgUzPU)**

## Sobre esta “extração”

Neste ambiente **não há acesso à transcrição nem ao áudio** do vídeo; o fetch da página do YouTube não retorna título, descrição nem capítulos. Por isso, **não dá para afirmar que a lista abaixo foi dita palavra por palavra nesse vídeo**.

O que segue é uma consolidação útil para estudo:

1. **Contexto público do tipo de evento** — o ecossistema [Uber Tech Brazil / Meetup](https://www.meetup.com/pt-BR/uber-tech-latam/) costuma promover encontros como *Front @ Uber* (papel do frontend na engenharia, simulações de entrevista, processo seletivo). O foco nem sempre é uma palestra só de “lista de stack”.
2. **Stack web documentada publicamente pela Uber** — blogs de engenharia, open source e documentação oficial de projetos que a empresa mantém ou manteve em destaque no **frontend web**.

Para **confirmar menções exatas** do vídeo: use **legendas** (automáticas ou manuais) e a **descrição** no YouTube, e anote aqui ou em um arquivo `notas-meetup.md` na mesma pasta.

---

## Tecnologias e produtos frequentemente associados ao frontend web Uber

| Tema | O quê é | Notas |
|------|---------|--------|
| **React** | Biblioteca de UI | Base grande parte dos produtos web descritos publicamente. |
| **[Fusion.js](https://www.fusionjs.com/docs/overview)** | Framework **universal** (React), SSR, arquitetura por **plugins** | Criado para escala (muitos apps web). Open source. |
| **[Base Web](https://eng.uber.com/introducing-base-web/)** | **Design system** / biblioteca de componentes React | Linguagem visual “Base”, temas, overrides; open source. |
| **Styletron** | Motor de **CSS-in-JS** (estilo atômico) | Ligado ao Base Web na documentação pública. |
| **TypeScript** | Tipagem estática | Comum em bases Fusion/modern web na documentação do Fusion.js. |
| **GraphQL** | Camada de API / dados | Muito citado em contexto de engenharia Uber (web e mobile); detalhes variam por produto. |
| **Micro-frontends / muitos apps** | Organização em dezenas/centenas de aplicações | Motivação histórica para Fusion.js (extensibilidade, SSR). |

Referências úteis:

- [Introducing Base Web (Uber Engineering)](https://eng.uber.com/introducing-base-web/)
- [Fusion.js — overview](https://www.fusionjs.com/docs/overview)
- Repositório: [fusionjs/fusionjs](https://github.com/fusionjs/fusionjs)

---

## Outras frentes (não específicas deste vídeo)

| Tema | Uso típico na Uber (mercado / vagas) |
|------|--------------------------------------|
| **React Native** | Apps mobile; aparece em discussões amplas de engenharia Uber. |
| **Redux / Apollo / ferramentas GraphQL** | Combinadas em ecossistemas React em empresas grandes; **validar por time/produto** se for citar em entrevista. |

---

## Próximo passo recomendado

1. Assistir o vídeo com **legendas** e listar aqui qualquer tecnologia **citada nominalmente**.
2. Manter esta pasta como **fonte estável**; o README acima cobre o que é **público e documentado** além do meetup.
