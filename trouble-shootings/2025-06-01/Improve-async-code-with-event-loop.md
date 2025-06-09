---
slug: improve-async-code-with-event-loop
title: Docker 로그인 진행 후, auth 정보가 제대로 반영되지 않는 문제
authors: [binsk]
tags: [docker, linux]
---

## 문제상황

`docker login` 명령어를 통해 인증 후, [ghcr.io](http://ghcr.io) 에 컨테이너 이미지를 push 하려고 했더니 인증 실패가 발생했다.
<!-- truncate -->
`cat ~/.docker/config.json` 를 통해 확인해본 결과 아래와 같이 auth 항목에 credential 정보가 제대로 기입되지 않는 상황이 보였다.

```json
❯ cat ~/.docker/config.json
{
    "auths": {
        "ghcr.io": {}
    },
    "credsStore": "pass"
}
```

원래 로그인 이후 "ghcr.io" 부분에 올바른 값이 들어가는 것으로 알고 있지만 환경설정에 문제가 있는지 빈 값으로 업데이트 된 상태였다.

## 해결방법

이 경우 linux에서 사용중인 `pass` 와 관련된 문제로 보여 사실 pass와 관련된 문제를 해결해야 하지만 문제 해결이 시급한 경우, 아래와 같이 auth에 명시적으로 값을 넣어 해결할 수 있다.

```json
{
  "auths": {
    "ghcr.io": {
      "auth": "dXNlcjoxMjM0"
    }
  },
  "credsStore": "pass"
}
```

위의 경우 `auth` 는 `<유저명>:<credential>` 을 base64로 인코딩한 값이다.

## 레퍼런스
- https://docs.docker.com/reference/cli/docker/login/
- https://stackoverflow.com/questions/43441454/docker-login-auth-token
