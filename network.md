# osi 7계층

- 물리 전기신호를 0101 이진수로만들어줌 누가 ? 랜카드가
- 데이터링크 48비트 mac주소 출발지,목적지,데이터,트레일러 등을 담은 프레임을 가지게됨 목적지 mac주소는 모르면 옆에 스위치한테 물어봐서 알게됨
- 네트워크 출발지 ip 도착지 ip 데이터 트레일러 - 패킷 스위치가 모인 라우터단위로 나뉘어짐 ( 근데 꼭 이렇게 정석적인 연결만 있는것은 아님 )
- 전송 출발지port 도착지 port 데이터 트레일러 - 세그먼트 포트번호 443 https 53 dns
- 세션
- 표현
- 응용 합쳐서 하나로 생각해도됨 http헤더+http바디

# DNS

- DNS는 ip주소를 할당함 www.naver.com를 쳤을때 네트워크계층에서 붙은 목적지 ip를 알아야하는데 dns resolver를 통해 목적지 ip 주소를 알수있음
- dns resover는 사람이 읽을 수 있는도메인을 할당된 ip주소를 찾는데에 쓰임 첫번째 쿼리가 rootserver임 최상위 도메인인 .com으로 응답을하고
- 다음 응답은 TLDserver에서 응답을 함
- 최종적으로 ip원본을 사용해 브라우저에 전송해줌

# HTTP

- http 요청은 header 와 body 로 구성되어있음
- RFC7231 참고하면 좋음 표준을 보더라도 최신을 보는게 좋음 2616도 많지만 (1999년에 만들어짐)
- 예를들면 GET DELETE는 예전에는 요청에 body를 가질 수없다고 했으나 요즘에는 신경을 안쓴다고 스펙이 바뀜

# URL,URI,ORIGIN

- http://www.tacoding.com/book/2
- /book/2 을 uri 또는 url 굳이 구분하지 않고 둘다 써도되는데 node에서는 url쓰긴함
- origin 은 프로토콜+호스트네임+포트번호의 조합임(CORS할떄 origin)

# HTTP method 와 REST API

- 9개의 메소드가 있음(get얻다,post보내다,put/patch 전체수정/부분수정, delete 삭제하다)
- HEAD method는 응답바디가아닌 헤더만 보내줌 그래서 이라우터가 잘 동작하는지만 체크할때 사용함
- options 는 다른사이트에 요청을 보내는 method임
- 단어의 뜻에 맞게 사용하는것을 권장함(모두 GET으로 사용해도됨 하지만 맞게 사용하는것이 더욱 가독성있음)
- REST API (유니콘같은 존재 정확한 규칙이 없음)
  - /login /signin 벌써 이런것부터 restapi위반 일수도 있음 보통은 명사로 쓰기 때문임
- HTTP API 라고 하고 백엔드 개발자와 잘 협약이 되어있고 명시적으로 uri를 잘 구성하였다면 너무 얽매이지 않아도 될 것 같음

# get vs post , 안전한메서드, 멱등성 메서드

- get method를 사용하면 post에 비해서 보안이 뛰어나다 ? 개소리임
- http 요청이면 와이어샤크에 어짜피 노출이 다됨 https 로 암호화 할때 둘다 보안이 좋음
- 안전한 메서드 : 아무리 요청해도 서버상태를 바꾸지 않는 메서드(GET HEAD OPTION) 안전한 메서드만 캐싱이됨
- 멱등성 매서드 : 같은 것을 여러번 호출해도 최종적으로 서버에서는 한번만 한것으로 간주되는것 (안전한 메서드 + put delete)
- 불안전한 메서드 : 서버에 요청하면 서버상태를 바꾸는 메서드 (post)

# 상태코드

- 100 정보 100번 컨티뉴(스트리밍) 101 switching protocols(101)
- 200 성공 200번 ok 201 created (비어있는 번호는 회사에 맞게 자유롭게 쓰면됨)
- 300 리다이렉트 응답하기 애매할때 리다이렉트처리
- 400 클라이언트에러 - 서버는 기능을 제대로 수행했으나 클라이언트에서 에러가 발생
- 500 서버에러 - 서버의 에러

# 컨텐츠협상과 MIME TYPE

- ACCEPT : MIME Type 대분류/확장자 image/png, image/jpeg video/mp4 application.json(서버 주도 협상)

# Authorization, 기타 헤더, 커스텀 헤더

- Authorization: Basic
- Authorization: Bearer + jwt토큰
- Authorization: Digest
- referrer policy
