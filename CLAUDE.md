# jjammsby - 개인 블로그

## 프로젝트 개요
- Gatsby 4 기반 개인 블로그 (TypeScript)
- 배포: https://jjammsby.vercel.app/
- 댓글: utterances (jjamming/jjammsby)

## Git
- SSH alias `github-jjamming` 사용
- 커밋 컨벤션: `type: description` (예: `post: react-server-component`, `refactor: rename ...`, `docs: add toc`)

## 주요 명령어
- `yarn dev` — 개발 서버
- `yarn build` — 빌드
- `yarn clean` — Gatsby 캐시 초기화
- `yarn lint` — ESLint
- `yarn format` — Prettier

## 블로그 글 작성 (content/)

### 디렉토리 구조
```
content/
  {slug}/
    index.md        # 글 본문 (Markdown)
    *.png, *.jpeg   # 이미지 (같은 폴더에 배치)
```

### Frontmatter 형식
```md
---
emoji: 🧩
title: '글 제목'
date: 'YYYY-MM-DD'
categories: featured-Dev
---
```
- `emoji`: 글 주제에 맞는 이모지 선택 (agent가 자동 선택)
- `title`: 글 제목
- `date`: 작성일 (YYYY-MM-DD)
- `categories`: 아래 카테고리 중 선택 (agent가 글 내용에 맞춰 자동 선택)

### 카테고리
- `featured-Dev` — 개발 관련 글 (기술, 라이브러리, 프레임워크 등)
- `featured-Project` — 프로젝트 관련 글
- `featured-Algorithm` — 알고리즘 문제풀이 (BOJ 등)
- 기존 카테고리 우선 사용, 정말 필요한 경우에만 새 카테고리 추가 가능

### 마크다운 기능
- 코드 하이라이팅: prismjs (언어 지정 가능)
- 이미지: 같은 폴더에 넣고 `![](filename.png)` 으로 참조
- TOC: 글 끝에 ````toc```` 블록 추가하면 자동 생성 (h2~h6)
- 자동 헤더 링크: gatsby-remark-autolink-headers

### BOJ 템플릿 (알고리즘 문제풀이)
`src/templates/boj-template/index.md` 참고:
```md
## 🔗 문제 링크
## 💬 문제
## 🤔 접근
## ⚠️ 문제
## ✏️ 해결
## 🤔 깨달은 점
## ✅ 전체 코드
```

### 슬러그 규칙
- 폴더명이 URL slug가 됨 (kebab-case 사용)
- `gatsby-node.ts`의 `createFilePath`가 `content/` 기준으로 slug 생성

## 프로젝트 구조
```
gatsby-config.ts          # Gatsby 플러그인 설정
gatsby-node.ts            # 페이지 생성 로직
gatsby-site-meta-data.ts  # 사이트 메타데이터 (author, projects, timestamps)
content/                  # 블로그 글 (주 작업 영역)
assets/                   # 프로젝트 썸네일 등 정적 에셋
static/                   # favicon 등
src/
  components/             # React 컴포넌트 (Emotion styled)
  pages/                  # 페이지 (index, about, playground, guestbook, 404)
  templates/              # 글 상세/목록 템플릿
  styles/                 # 글로벌 스타일, 테마, 마크다운 스타일
  layout/                 # 레이아웃 (SCSS + Emotion)
```

## 기술 스택
- Gatsby 4, React 18, TypeScript
- 스타일링: Emotion + SCSS
- 다크모드: gatsby-emotion-dark-mode
- Path alias: `@/src`, `@/assets`
