---
emoji: 🧩
title: '리액트 훅 이후의 상태 관리 흐름: Recoil, Jotai, Zustand'
date: '2026-02-05'
categories: featured-Dev
---

과거 리액트 생태계에서는 애플리케이션 상태 관리를 위해 Redux에 크게 의존했다.
이후 Context API와 useState, useReducer 같은 훅이 등장하면서, 리액트 자체만으로도 상태를 관리할 수 있는 방법이 늘어났고, 그 결과 다양한 상태 관리 라이브러리가 선택지로 자리 잡게 됐다.

## 가장 기본적인 방법: useState / useReducer

### useState

useState 훅의 등장으로 여러 컴포넌트에 동일한 인터페이스의 상태를 생성하고 관리할 수 있게 됐다.

```tsx
function useCounter(initCount: number = 0) {
  const [counter, setCounter] = useState(initCount);

  function inc() {
    setCounter((prev) => prev + 1);
  }

  return { counter, inc };
}
```

하지만 이 훅을 사용하는 컴포넌트마다 상태는 각각 초기화된다.

### useReducer

useReducer는 상태 변경 로직을 action 단위로 분리해 관리할 수 있는 훅이다.

```tsx
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
```

복잡한 상태 전이를 다루기엔 유용하지만, useState와 마찬가지로 컴포넌트마다 독립적인 상태를 가진다는 한계가 있다.

이처럼 컴포넌트 내부에서만 유효한 상태를 지역 상태(local state)라고 한다.

### 두 컴포넌트가 동일한 counter 상태를 바라보게 하기 위해선?

가장 간단 or 먼저 떠오르는 방법은 상태를 컴포넌트 밖으로 한 단계 끌어올리는 것이다.

```tsx
function Parent(){
	const { counter, inc } = useCounter();

	return (
		<>
		  <Counter1 counter={counter} inc={inc} />
		  <Counter2 counter={counter} inc={inc} />
		</>
	)
}

function Counter1({ counter, inc }): { counter: number; inc: () => void }) { ... }
function Counter2({ counter, inc }): { counter: number; inc: () => void }) { ... }
```

부모 상태 하나를 자식 컴포넌트에서 공유할 수 있지만, 컴포넌트 계층이 깊어지면 계속 props를 전달해야 해서 불편하다.

### useState의 상태를 바깥으로 분리하기

현재 리액트의 useState는 리액트가 만든 클로저 내부에서 관리된다.

하지만 다른 자바스크립트 실행 문맥 어디에서 초기화되고 관리된다면?

⇒ 파일을 만들어 관리할 수는 있지만, 화면에는 즉각적으로 갱신되지 않을 수 있다.

: 리액트에서 리렌더링은 setState가 실행되어야 발생하기 때문에 외부 상태를 변경한다고 해도 렌더링이 발생하지 않는다.

### 리렌더링 하기 위해선?

1. useState, useReducer 반환값 중 두 번째 인수가 어떻게든 호출돼야 한다.
2. 부모 컴포넌트가 리렌더링 되거나 해당 함수 컴포넌트가 다시 실행돼야 한다.

### 함수 외부에서 상태를 참조하고 렌더링까지 발생시키는 조건

1. 컴포넌트 외부 어딘가에 상태를 두고 여러 컴포넌트가 같이 쓸 수 있어야 한다.
2. 외부 상태의 변경을 사용하는 컴포넌트에서 알아챌 수 있어야한다.
3. 상태가 객체인 경우 감지하지 않는 내부 값이 변했을 때 리렌더링이 발생하면 안 된다.

## 상태 관리 라이브러리 비교(Recoil, Jotai, Zustand)

### Recoil

- Meta에서 만든 리액트를 위한 상태 관리 라이브러리
- Atom이라는 개념을 처음 선보였다.
- Selector라는 파생 상태를 연결하는 그래프 구조

리액트의 렌더링 모델과 잘 맞도록 설계되었지만, 개념이 많고 구조가 복잡하다는 평가를 받았다.
최근에는 적극적인 기능 확장보다는 유지 관리 위주의 흐름을 보이고 있다.

### Jotai

- Recoil의 철학을 계승하고 개선시켜 나온 라이브러리
- Atom을 계승하되, Atom 하나만으로 파생된 상태까지 만들 수 있다는 차이점이 있다.

```jsx
const counterState = atom(0);

const isBiggerThan10 = atom((get) => get(counterState) > 0); // 파생 상태
```

- context의 문제점인 불필요한 리렌더링이 일어난다는 문제를 해결하고자 설계되어 있고, 추가적으로 개발자들이 메모이제이션이나 최적화를 거치지 않아도 리렌더링이 발생되지 않도록 설계돼 있다.

### Zustand

- 리덕스에 영감을 받아 만들어졌으며, 하나의 스토어를 중앙 집중형으로 활용해 이 스토어 내부에서 상태를 관리한다.
- 바닐라 ts로 구분되어있어서 리액트가 아니더라도 사용할 수 있다.
- 필요한 상태만 선택해서 구독할 수 있다.

### 라이브러리 특성 비교

| **특징**          | **Zustand**                    | **Recoil**                  | **Jotai**                    |
| ----------------- | ------------------------------ | --------------------------- | ---------------------------- |
| **관리 단위**     | **Store** (하나의 큰 저장소)   | **Atom** (잘게 쪼개진 상태) | **Atom** (더 미니멀한 원자)  |
| **핵심 철학**     | Flux (Redux를 더 쉽게)         | Graph (상태 간의 연결)      | Bottom-up (작은 단위의 조립) |
| **데이터 흐름**   | 단방향 (Action → State)        | 상호 참조 가능              | 상호 참조 및 유동적 조립     |
| **리액트 의존성** | 독립적 (Vanilla JS에서도 사용) | 강함 (리액트 전용)          | 유연함 (독립적 사용 가능)    |
| **번들 크기**     | 약 1.1KB (초경량)              | 약 20KB (무거움)            | 약 3.3KB (가벼움)            |

```toc

```
