<h1 align="center"> Todo-list </h1>
<div align="center">

안녕하세요. 코드의 가독성을 중시하는 프론트엔드 개발자 임성준입니다 🫥

이 프로젝트는 원티드 프리온보딩 프론트엔드 11월 과제에서 제공된 [Todolist CRUD Server](https://github.com/sjlim32/wanted-pre-onboarding-challenge-fe-1-api)를 활용하여 Todo를 등록하고 조회하는 페이지를 구현하였습니다.

</div>

<br />

## ✅ 프로젝트 목표

- 로그인 및 회원가입 기능 구현
  - 이메일과 비밀번호는 유효성 검증 로직을 포함해야 함
  - 로그인 API 호출 시, 응답 결과에 따른 분기 처리가 구현되어야 함
- todo 리스트 조회, 추가, 수정, 삭제 기능 구현
  - 각 todo는 새로고침, 뒤로가기 및 앞으로가기 등의 브라우저 기능을 사용할 수 있어야 함
  - todo list의 내용이 변화하면, 실시간으로 변경된 사항이 반영되어야 함

## ⚒️ 사용 기술 스택

### 프론트엔드 구성

<div>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript">
</div>

### 라이브러리

<div>
  <img src="https://img.shields.io/badge/react router-CA4245?style=flat&logo=reactrouter&logoColor=white" alt="React Router">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white" alt="Axios">
  <img src="https://img.shields.io/badge/React Query-FF4154?style=flat&logo=reactquery&logoColor=white" alt="React Query">
  <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat&logo=recoil&logoColor=white" alt="Recoil">
</div>

### 코드 포맷팅

<div>
  <img src="https://img.shields.io/badge/prettier-F7B93E?style=flat&logo=prettier&logoColor=white" alt="Prettier">
  <img src="https://img.shields.io/badge/eslint-4B32C3?style=flat&logo=eslint&logoColor=white" alt="ESLint">
  <img src="https://img.shields.io/badge/husky-000000?style=flat&logo=husky&logoColor=white" alt="Husky">
</div>

<!-- - **React**: 프론트엔드 라이브러리
- **React Router**: 라우팅 관리
- **styled-components**: CSS-in-JS 라이브러리
- **Recoil**: 상태 관리
- **Axios**: HTTP 클라이언트
- **tanstack Query**: 비동기 상태 관리
- **prettier**: 코드 포맷팅
- **eslint**: 코드 스타일 검사
- **husky**: 커밋 전 코드 검사 -->

## 🗂️ 폴더 구조

**Feature-Sliced Design (FSD)** 방식을 채택하여 폴더 구조를 구성하였습니다.  
FSD에서는 프로젝트를 Layer, Slice, Segment로 구분하여 구조화합니다.

- **Layer**: 주요 디렉터리로, 전체 구조에서 계층적 위치를 나타냅니다.
- **Slice**: Layer 안에서 기능에 따라 구분되는 폴더입니다.
- **Segment**: 세부적으로 나눠진 컴포넌트와 기능 모음입니다.

아래는 표준화된 FSD 구조를 기반으로 한 폴더 구성입니다. 각 레이어는 상위 레이어를 참조할 수 있지만, 하위 레이어에서 상위 레이어를 참조하는 것은 금지되어 있습니다.

```markdown
src/
├── app/
│ ├── routes/ # 라우트 및 전역 설정 관리
│ └── index.tsx # 앱의 진입점 및 공통 설정 파일
├── pages/
│ ├── HomePage.tsx # 각 페이지에 대응하는 컴포넌트 파일
│ └── ... # 기타 페이지별 컴포넌트
├── widgets/
│ ├── model/ # 여러 기능을 조합하여 구성한 위젯의 상태 관리
│ ├── TodoList/ # Todo 리스트 위젯 컴포넌트
│ └── ... # 기타 위젯 컴포넌트
├── features/
│ ├── model/ # 개별 기능의 상태 관리와 비즈니스 로직
│ ├── AddTodo.tsx # Todo 추가 기능
│ └── ... # 기타 기능 컴포넌트
├── entities/
│ ├── ui/ # 개별 엔티티의 UI 컴포넌트
│ ├── api/ # 서버와 통신하는 API 모듈
│ ├── model/ # 엔티티 전용 상태 관리 및 비즈니스 로직
│ ├── lib/ # 엔티티 관련 유틸리티 함수
│ └── config/ # 엔티티 관련 설정 파일
├── shared/
│ ├── ui/ # 재사용 가능한 UI 컴포넌트
│ ├── lib/ # 프로젝트 전반에서 사용하는 유틸리티 함수
│ ├── api/ # 공통 API 설정 및 클라이언트
│ ├── config/ # 전역 설정 파일
│ └── types/ # 타입 정의 파일
└── ... # 기타 공통 리소스 및 설정
```

## 📝 커밋 컨벤션

프로젝트의 일관성과 가독성을 높이기 위해 다음과 같은 커밋 메시지 컨벤션을 따릅니다:

- **feat**: 새로운 기능 추가
- **fix**: 버그 수정
- **docs**: 문서 추가 또는 수정 (예: README 업데이트)
- **style**: 코드 포맷팅, 세미콜론 누락 등 기능에 영향을 주지 않는 변경
- **refactor**: 코드 리팩토링
- **test**: 테스트 코드 추가 또는 수정
- **chore**: 빌드 작업, 패키지 매니저 설정 등 기타 변경사항

### 📙 커밋 메시지 예시

```markdown
feat: Add functionality to add new todos
fix: Resolve API request error in TodoList component
docs: Update README with new folder structure and setup guide
```
