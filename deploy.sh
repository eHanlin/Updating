#!/bin/bash
curl -X POST -H 'Content-Type: application/json' -d "{\"Repository\":\"107highscrev\",\"Tag\":\"${TRAVIS_TAG}\",\"Owner\":\"eHanlin\",\"Password\":\"${EHANLIN_PW}\"}" -v 'http://test.ehanlin.com.tw/event/api/Deploy'