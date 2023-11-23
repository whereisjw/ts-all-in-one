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
