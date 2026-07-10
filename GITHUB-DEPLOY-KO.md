# BNB Lab을 GitHub에 등록하고 배포하는 방법

## 먼저 알아둘 점

현재 BNB Lab 메인 홈페이지는 단일 HTML 파일이 아니라 React/Vinext로 제작되었습니다. 부흥 기사 4개는 `public/revival` 폴더의 독립 HTML 파일입니다.

따라서 메인 홈페이지까지 현재 디자인과 탭 기능을 그대로 유지하려면 프로젝트 전체를 GitHub에 올리는 방법이 가장 안전합니다. `index.html` 하나만 GitHub Pages에 올리는 방식은 권장하지 않습니다.

## 1. GitHub 저장소 만들기

1. [GitHub](https://github.com)에 로그인합니다.
2. 오른쪽 위 `+` 버튼을 누르고 `New repository`를 선택합니다.
3. Repository name에 `bnb-lab`을 입력합니다.
4. 공개하고 싶으면 `Public`, 비공개로 보관하려면 `Private`를 선택합니다.
5. `Add a README`, `.gitignore`, `License`는 체크하지 않고 `Create repository`를 누릅니다.

## 2. 웹에서 파일 업로드하기

1. 새 저장소 화면에서 `uploading an existing file`을 누릅니다.
2. 압축파일을 먼저 해제합니다.
3. 압축을 푼 폴더 안의 파일과 폴더를 GitHub 업로드 화면으로 끌어놓습니다.
4. `Commit changes`를 누릅니다.

주의: ZIP 파일 한 개만 올리면 GitHub가 자동으로 압축을 풀지 않습니다. 반드시 PC에서 먼저 압축을 해제한 후 내부 파일을 올려야 합니다.

## 3. 명령어로 올리는 방법

Git이 설치된 PC에서 압축을 푼 BNB Lab 폴더를 연 뒤 터미널에 입력합니다.

```bash
git init
git add .
git commit -m "Initial BNB Lab website"
git branch -M main
git remote add origin https://github.com/사용자아이디/bnb-lab.git
git push -u origin main
```

`사용자아이디`는 본인의 GitHub 아이디로 바꿉니다.

## 4. Cloudflare Pages로 연결하기

현재 프로젝트는 React 기반이므로 GitHub Pages보다 Cloudflare Pages 또는 별도의 Node/Worker 호스팅이 적합합니다.

1. [Cloudflare Dashboard](https://dash.cloudflare.com)에 로그인합니다.
2. `Workers & Pages` → `Create` → `Pages` → `Connect to Git`을 선택합니다.
3. GitHub 계정을 연결하고 `bnb-lab` 저장소를 선택합니다.
4. Framework preset은 우선 `None`으로 둡니다.
5. 이 프로젝트는 Vinext/Cloudflare Worker 구성이 포함되어 있으므로, 실제 배포 단계에서는 저장소의 `package.json`과 `.openai/hosting.json` 설정에 맞춘 빌드 구성이 필요합니다.

Cloudflare에서 단순 정적 사이트로 운영하려면 별도의 정적 내보내기 작업이 필요합니다. 현재 제공된 프로젝트 소스는 사이트의 디자인과 기능을 보존하기 위한 원본입니다.

## 주요 파일 위치

- 메인 홈페이지: `app/page.tsx`
- 전체 디자인: `app/globals.css`
- 사진 자료: `public/archive`
- 풀턴 스트리트 기사: `public/revival/fulton-street.html`
- 웨일즈 부흥 기사: `public/revival/welsh-1904.html`
- 아주사 부흥 기사: `public/revival/azusa-street.html`
- 평양대부흥 기사: `public/revival/pyongyang-1907.html`
- 기사 공통 디자인: `public/revival/article.css`

## 도메인 연결 권장 구조

- 비즈니스 메인: `bnblab.co.kr`
- 선교·성경·부흥 사이트: `bnblab.co.kr/mission`

`mission.bnblab.co.kr`은 서브도메인이고, `bnblab.co.kr/mission`은 하위 경로입니다. 두 방식은 서버 설정이 다르므로 실제 배포 전에 하나를 선택하는 것이 좋습니다.
