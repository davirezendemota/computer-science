# Estratégia de estudos — BPS (código)

Como organizar a preparação para o bloco de **algoritmos e estruturas de dados** da Business Phone Screen. O que marcar como feito está em [`checklist.md`](checklist.md).

---

## Objetivo

Chegar à sessão capaz de:

1. **Entender** o enunciado com perguntas objetivas.
2. **Propor** uma solução, implementá-la e **justificar** tempo/espaço (Big-O).
3. **Lidar** com edge cases, feedback do entrevistador e pequenas mudanças de requisito.

Isso espelha a avaliação implícita descrita em [`../requirements.md`](../requirements.md) (REQ-BPS-002).

---

## Princípios (Uber / guia local)

- **Entender antes de resolver** — alinhar suposições; não pular para o código no vácuo.
- **Pensar em voz alta** — pair programming é avaliação de processo, não só do resultado.
- **Trade-offs** — estrutura A vs B, solução ingênua vs otimizada, memória vs tempo.
- **Persistência** — se travar, verbalizar o bloqueio e tentar decomposição ou caso menor.

Referência: [`../how-to-prepare.md`](../how-to-prepare.md) e [`../README.md`](../README.md) (seção “Durante a entrevista”).

---

## Formato de sessão de estudo (45–60 min)

Use o mesmo ritmo aproximado do bloco real:

| Fase        | Minutos | O quê |
|-------------|---------|--------|
| Leitura + perguntas | 5–8  | Listar entradas/saídas, restrições, edge cases como se o entrevistador estivesse na call. |
| Ideação     | 5–10    | Duas abordagens se possível (ingênua + melhor); escolher uma e dizer Big-O. |
| Código      | 20–30   | Implementar na linguagem da entrevista; nomes claros. |
| Revisão     | 5–10    | Testar mentalmente 2–3 casos; repetir Big-O. |

**Regra:** se passar de 45 min na primeira tentativa, anotar o ponto de travamento e no dia seguinte **refazer só a parte difícil** ou o problema inteiro em menos tempo.

---

## Priorização de conteúdo

1. **Primeiro:** os [quatro exercícios do e-mail](../README.md#exercícios-extras-sugeridos-no-e-mail) (cobrem grafo, árvore+DP, grid, hash).
2. **Segundo:** lacunas que aparecerem nesses quatro (ex.: recursão, matriz de adjacência, BFS em grid).
3. **Terceiro:** problemas “médios” LeetCode nas tags que você ainda não sentir confiança (árvore, grafo, hash).

Evite dispersar em muitos tópicos avançados (ex.: segment tree) antes de consolidar DFS/BFS, hash e árvore binária.

---

## Semana da entrevista (ajuste as datas)

- **T–3 a T–2 dias:** um problema novo médio por dia em modo entrevista + revisão rápida de Big-O das estruturas do checklist.
- **T–1 dia:** refazer **dois** dos quatro exercícios oficiais só narrando e codando; não abrir conteúdo novo pesado à noite.
- **Dia:** aquecimento leve (30 min): implementação curta (ex.: BFS em grid ou contagem com hash), sem maratona.

Substitua **T** pela data da sua BPS.

---

## Idioma e ferramentas

- Prepare-se para **explicar técnico em inglês** se o processo global exigir trechos em inglês ([`../requirements.md`](../requirements.md) REQ-BPS-004).
- Codifique na **mesma linguagem** que usará na entrevista; treine atalhos do editor ambiente (se o link de coding for enviado antes, testar antes).

---

## Métricas simples de prontidão

Você está em boa forma quando:

- Consegue **terminar** pelo menos uma variante completa (comunicação + código) dos quatro problemas oficiais em ~45 min ou menos, em média.
- Explica **por que** a complexidade é a que você afirma, sem só decorar.
- Aceita um **hint** e incorpora sem perder o fio (simule com anotações ou gravando a si mesmo).

---

## Documentação relacionada

| Arquivo | Uso |
|---------|-----|
| [`checklist.md`](checklist.md) | Itens para marcar (EDS, problemas, links). |
| [`../requirements.md`](../requirements.md) | O que a fase exige formalmente. |
| [`../README.md`](../README.md) | Formato BPS, links Uber, D&A (outro bloco). |

---

*Última atualização: março de 2026.*
