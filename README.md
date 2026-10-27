# gw-dev-space.github.io

https://gw-dev-space.github.io

출시한 앱의 소개와 이용약관, 개인정보처리방침을 게시하는 사이트입니다. [Astro](https://astro.build)로 만들고, `main` 브랜치에 push하면 GitHub Actions가 GitHub Pages로 자동 배포합니다.

## 페이지

| 주소 | 내용 |
| :--- | :--- |
| `/` | 홈 |
| `/apps/` | 앱 목록과 앱별 약관 링크 |
| `/privacy/` | 모든 앱에 공통으로 적용되는 개인정보처리방침 |
| `/<앱>/terms/` | 앱별 서비스 이용약관 (예: `/lottopunch/terms/`) |

## 새 앱 추가하기

1. [`src/data/apps.ts`](src/data/apps.ts)의 `apps`에 앱 정보(처리하는 개인정보 항목, 외부 서비스 등)를 추가합니다. 개인정보처리방침과 앱 목록에 자동으로 반영됩니다.
2. `src/pages/<앱>/terms.md`에 이용약관을 작성합니다. [`src/pages/lottopunch/terms.md`](src/pages/lottopunch/terms.md)를 복사해서 고치면 됩니다.
3. 약관이나 방침의 내용을 바꾸면 시행일(`updated`)도 함께 바꿉니다.

운영자 정보와 개인정보 보호책임자는 `src/data/apps.ts`의 `operator`에서 관리하며, 모든 약관 페이지 하단에 표시됩니다.

## 명령어

| 명령어 | 동작 |
| :--- | :--- |
| `npm install` | 의존성 설치 |
| `npm run dev` | 개발 서버 실행 (`localhost:4321`) |
| `npm run build` | `./dist/`에 사이트 빌드 |
| `npm run preview` | 빌드 결과를 로컬에서 미리보기 |

## 주의

- 이 저장소는 GitHub Pages를 무료로 쓰기 위해 Public입니다. API 키, 토큰 같은 비밀 값을 넣지 마세요.
- 앱인토스 콘솔 등에 등록한 약관 주소는 바꾸지 않는 것이 좋습니다. 경로를 바꿔야 하면 콘솔의 링크도 함께 바꿔야 합니다.
