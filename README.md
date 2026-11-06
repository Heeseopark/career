# 박희서 이력서

삼일PwC AX Node 지원용 정적 이력서입니다. Astro로 `/samil/` 페이지만 빌드합니다.

## 주소

이 저장소(`Heeseopark/resume`)는 GitHub 프로젝트 페이지입니다.

| | URL |
| --- | --- |
| 사이트 | https://heeseopark.github.io/resume/ |
| 이력서 | https://heeseopark.github.io/resume/samil/ |

`astro.config.mjs`의 `site`는 `https://heeseopark.github.io`, `base`는 `/resume` 입니다. 루트 `/`는 `/samil/`로 리다이렉트합니다. 다른 회사 페이지는 없습니다.

## 로컬 실행

Node.js 22 이상이 필요합니다.

```bash
npm install
npm run dev
npm run build
npm run preview
```

개발 서버 기본 주소는 http://localhost:4321/resume/ 이고, 바로 이력서로 넘어갑니다. 이력서 본문은 `src/content/resume/samil.yml` 입니다.

## 배포

`main`에 push할 때만 `.github/workflows/deploy.yml`이 사이트를 빌드하고 GitHub Pages에 배포합니다. PR 미리보기 워크플로는 없습니다.

비공개 저장소의 Pages는 GitHub 유료 플랜에서 제공합니다. 처음 한 번은 저장소 **Settings → Pages**에서 **Build and deployment → Source**를 **GitHub Actions**로 저장해야 합니다. 이 설정을 바꾸기 전에는 Actions가 성공해도 사이트가 열리지 않을 수 있습니다.
