# Checklist de estudos — BPS (algoritmos & estruturas de dados)

Checklist alinhado a [`../requirements.md`](../requirements.md) (REQ-BPS-002, P2) e à preparação em [`../README.md`](../README.md). Para **como** estudar, use [`study-strategy.md`](study-strategy.md).

---

## Requisitos e conduta

- [ ] **REQ-BPS-002:** treinar explicar o problema, decompor, implementar, cobrir edge cases e discutir **Big-O** (tempo e espaço).
- [ ] **P2:** prática contínua de algoritmos/EDS + Big-O (LeetCode ou lista do e-mail).
- [ ] **REQ-BPS-004:** reler o e-mail de agendamento (ferramentas permitidas, idioma, regras de integridade).

---

## Fundamentos

- [ ] Derivar Big-O: loops aninhados, recursão (árvore de chamadas), casos amortizados quando aplicável.
- [ ] Padrões em arrays/strings: two pointers, sliding window, prefix sum (quando couber).
- [ ] Edge cases habituais: entrada vazia, um elemento, duplicados, limites de índice, grafo desconexo.

---

## Estruturas de dados (consolidado do README da etapa)

| Estrutura        | Check |
|------------------|-------|
| Arrays / strings | [ ]   |
| Pilha / fila     | [ ]   |
| Hash table (map/set) | [ ] |
| Árvores (binária) | [ ]  |
| Grafos           | [ ]   |
| Heap (fila de prioridade) | [ ] |

**Por estrutura, validar:** quando usar, complexidade típica das operações que você precisa na sua linguagem.

---

## Exercícios sugeridos no e-mail (Uber)

Resolver, refazer sem olhar solução e **narrar** abordagem + Big-O.

- [ ] [Number of Provinces](https://leetcode.com/problems/number-of-provinces/description/) — componentes conexos (Union-Find ou DFS/BFS).
- [ ] [House Robber III](https://leetcode.com/problems/house-robber-iii/description/) — DP em árvore.
- [ ] [Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/description/) — flood fill / DFS-BFS em grid.
- [ ] [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/) — HashSet, sequências em O(n).

---

## Padrões extras (phone screen)

- [ ] Subarray/substring com condição (hash + prefix ou janela deslizante).
- [ ] BFS em grid (distância, “ilhas”).
- [ ] Árvore: DFS/BFS, altura, um problema com “estado” por nó (estilo DP na árvore).
- [ ] Grafo: DFS/BFS em lista de adjacência; contagem de componentes.

---

## Durante o bloco de codificação (~45 min)

- [ ] Clarificar entrada/saída e restrições antes de codar.
- [ ] Alinhar abordagem com o entrevistador (solução simples primeiro, se fizer sentido).
- [ ] Cobrir edge cases e testar com exemplos verbais ou no editor.
- [ ] Mencionar alternativa e trade-off de complexidade se pedirem follow-up.

---

## Links oficiais (Uber)

- [ ] [Engineering Interview Guide](https://www.uber.com/us/en/careers/engineering-interview-guide/?nocache=true)
- [ ] [Frontend Engineering Interview Guide](https://jobs.uber.com/en/uber-interview-guide/frontend-engineering-interview/)
- [ ] [Coding interview — dicas (PT-BR)](https://www.uber.com/pt-BR/blog/coding-interview-dicas-para-o-processo-seletivo-de-engenharia-da-uber/)

---

*Última atualização: março de 2026.*
