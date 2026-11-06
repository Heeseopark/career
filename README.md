# 박희서 career

삼일PwC 지원용 이력서와 포트폴리오 정적 사이트입니다. Astro로 빌드합니다.

## 주소

이 저장소(`Heeseopark/career`)는 GitHub 프로젝트 페이지입니다.

| | URL |
| --- | --- |
| 사이트 | https://heeseopark.github.io/career/ |
| 이력서 | https://heeseopark.github.io/career/resume/samil/ |
| 포트폴리오 | https://heeseopark.github.io/career/portfolio/ |

`astro.config.mjs`의 `site`는 `https://heeseopark.github.io`, `base`는 `/career` 입니다.

루트 `/`와 이전 경로 `/samil/`은 `/resume/samil/`로 이동합니다.

포트폴리오 상세는 다음 순서입니다.

1. `/portfolio/allen/`
2. `/portfolio/allen-mcp/`
3. `/portfolio/lis/`
4. `/portfolio/mumul/`
5. `/portfolio/sarang/`

핸디버스 상세 페이지는 없습니다. 이력서 프로젝트에는 남아 있습니다.

## 로컬 실행

Node.js 22 이상이 필요합니다.

```bash
npm install
npm run dev
npm run build
npm run preview
```

개발 서버 기본 주소는 http://localhost:4321/career/ 이고, 이력서로 넘어갑니다. 이력서 본문은 `src/content/resume/samil.yml`, 포트폴리오는 `src/content/portfolio/` 입니다.

## 배포

`main`에 push할 때만 `.github/workflows/deploy.yml`이 사이트를 빌드하고 GitHub Pages에 배포합니다. PR 미리보기 워크플로는 없습니다.

비공개 저장소의 Pages는 GitHub 유료 플랜에서 제공합니다. 처음 한 번은 저장소 **Settings → Pages**에서 **Build and deployment → Source**를 **GitHub Actions**로 저장해야 합니다. 이 설정을 바꾸기 전에는 Actions가 성공해도 사이트가 열리지 않을 수 있습니다.
