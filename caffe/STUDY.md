    
- svelte
    - ```
        npx degit sveltejs/template my-svelte-project
        # or download and extract 
        cd my-svelte-project
        # to use  run:
        # node scripts/setupTypeScript.js

        npm install
        npm run dev
        ```
    - package.json
        - scripts.start:dev: "sirv public --dev --single --port 5001"
            - --dev : 실시간 반영 적용.
            - --single : 
                - SSR 처리 
                - 이 옵션 누락하면 페이지 새로고침시 ERR_CONNECTION_REFUSED 오류가 발생함.
                - https://www.npmjs.com/package/sirv
    - 화면 
        - 스타일
            - bootstrap
                - public/index.html : `<head><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></head>`
        - 레이아웃
            - tailwindcss
                - public/index.html : `<head><link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></head>`
                - 장점
                    - Tailwind CSS는 Utility-First 컨셉을 가진 CSS 프레임워크다. 부트스트랩과 비슷하게 m-1, flex와 같이 미리 세팅된 유틸리티 클래스를 활용하는 방식으로 HTML 코드 내에서 스타일링을 할 수 있다.
                    - 모든 곳에서 동일한 색상이나 사이즈, 간격 등의 유틸리티 클래스를 사용하므로 일관된 스타일로 구현하기가 수월하다.
                    - Tailwind CSS는 JavaScript 코드와 완전히 분리되어 있다. 그러므로 프로젝트 진행 도중 JavaScript 프레임워크를 변경하여도 큰 추가 작업 없이 기존의 HTML 코드를 그대로 쓸 수 있다.
                - 단점
                    - 초반 클래스명 러닝 커브
                        - 초반에는 각 스타일의 클래스명을 익히느라 개발하는 내내 문서를 참고해야 하는 번거로움이 있다. 그래도 대부분의 클래스명이 기존 CSS 속성이나 속성값과 비슷한 경우가 많고 자동완성을 지원하는 Intelli Sense 플러그인이 있어서 금방 익숙해지기는 한다.
                    - JavaScript 코드 사용 불가
                        - 클래스명을 분기 처리하여 동적으로 스타일링을 설정할 수는 있지만 styled-components와 같이 JavaScript 변수 값에 따라 가로 길이를 설정하는 등의 구현은 가능하기는 하지만 무척 번거로운 설정이 필요하다.
    - Slot
        - https://svelte.dev/tutorial/slots
        - https://beomy.github.io/tech/svelte/slot/
            - HTML 요소는 아래와 같이 자식 요소를 가질 수 있습니다.
            - 컴포넌트도 slot을 사용하면 자식 요소를 가질 수 있게 됩니다. Vue.js와 Svelte의 slot 사용 방법은 비슷합니다.
        - Default slot
        - Named slot
        - Slot props
    - A 태그 링크
        - 정적 링크
            - inport { Link, link } from 'svelte-routing';
            - <Link to ="/">홈</Link>
                - 같은 의미의 다른 방식 : <a href ="/" use:link>홈</a>
            - <Link to ="/about">서비스 소개</Link>
        - 동적 링크
            - 로직 처리를 추가할 수 있음.
            - ```
                <script>
                    import { navigate } from 'svelte-routing';
                    function goHome(){
                        navigate('/');
                    }
                </script>
                <button on:click={ goHome }>홈</button>
                ```
        - [ 요청 주소]        [ 실제 처리 ]
        - /             ->    /index.html
        - /about        ->    /about/index.html
        - [ 요청 주소]        [ 실제 처리 ]
        - /             ->    /index.html        ->    * svelete-routing
        - /about        ->    /index.html        ->    * svelete-routing
        - /order        ->    /index.html        ->    * svelete-routing
    - 국제화 처리
        - 숫자 자리수
            - `const formatter = Intl.NumberFormat( 'ko-KR');`
            - `<p>합계 : { formatter.format( sum ) }원 </p>`