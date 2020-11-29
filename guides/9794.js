// Thaumetal Refinery


module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		"s-794-999-1101-0": [{ type: "text", sub_type: "message", message: "광차 출발" }],
		"s-794-999-1201-0": [{ type: "text", sub_type: "message", message: "광차 하차" }],
		"s-794-1000-1101-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 오른손 휘두르기 | atk01 | 노말" }],
		"s-794-1000-1102-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 왼손 휘두르기 | atk02 | 노말" }],
		"s-794-1000-1103-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 양손 내려 찍기 | atk03 | 노말" }],
		"s-794-1000-1104-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 오른손 휘두르고 왼손으로 내려 찍기 | heavyAtk01 | comboAtk1 | 노말" }],
		"s-794-1000-1105-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 오른손 휘두르면서 구르기 | heavyAtk02 | 노말" }],
		"s-794-1000-1106-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 전방 도약후 양손 내려 찍기 | heavyAtk03 | 노말" }],
		"s-794-1000-1107-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 양손 내려 찍은 후 움츠렸다가 점프 공격 | reactionAtk | comboAtk1 | 노말" }],
		"s-794-1000-1108-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 양손 내려 찍은 후 움츠렸다가 방귀 공격(원거리 방귀) | reactionAtk | comboAtk2 | 노말" }],
		"s-794-1000-1109-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 좌회전 공격 | roundAtk01 | 노말" }],
		"s-794-1000-1110-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 우회전 공격 | roundAtk02 | 노말" }],
		"s-794-1000-1111-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 던지고 터트리기1 | LongAtk02+reactionAtk | 노말" }],
		"s-794-1000-1112-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 던지고 터트리기2 | LongAtk02+reactionAtk | 노말" }],
		"s-794-1000-1113-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 던지고 터트리기3 | LongAtk02+reactionAtk | 노말" }],
		"s-794-1000-1114-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 연속 내려 찍기 공격(마지막 당기기) | MoveAtk03 | 노말" }],
		"s-794-1000-1115-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 제자리 점프 공격 | MoveAtk01 | 노말" }],
		"s-794-1000-1116-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 연속 폭격 | LongAtk01 | 노말" }],
		"s-794-1000-1117-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 연속 폭격 | 발사체 | LongAtk01 | 노말" }],
		"s-794-1000-1118-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 연속 폭격 | 발사체(거대한 원폭) | LongAtk01 | 노말" }],
		"s-794-1000-1119-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 뒤로 발길질 | atk04 | Start+End | 노말" }],
		"s-794-1000-1120-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 제자리 쿵 뛰기 | longMove | Start+End | 노말" }],
		"s-794-1000-1121-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 던지고 터트리기1(하급용) | LongAtk02+reactionAtk | 노말" }],
		"s-794-1000-1122-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 던지고 터트리기2(하급용) | LongAtk02+reactionAtk | 노말" }],
		"s-794-1000-1123-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 던지고 터트리기3(하급용) | LongAtk02+reactionAtk | 노말" }],
		"s-794-1000-1124-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 연속 폭격(하급용) | LongAtk01 | 노말" }],
		"s-794-1000-1125-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 연속 폭격(하급용) | 발사체 | LongAtk01 | 노말" }],
		"s-794-1000-1126-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 연속 폭격(하급용) | 발사체(더 큰 근폭) | LongAtk01 | 노말" }],
		"s-794-1000-1201-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 그로기 | groggy | 노말" }],
		"s-794-1000-1203-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 액티브무브 | activeMove | 노말" }],
		"s-794-1000-1204-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 어그로체인지 | aggroChange | 노말" }],
		"s-794-1000-1205-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 도망 | runAway | 노말" }],
		"s-794-1000-1206-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 모드알람 | modeAlarm | 노말" }],
		"s-794-1000-1207-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 롱무브 | longMove | 노말" }],
		"s-794-1000-1208-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 백무브 | backMove | 노말" }],
		"s-794-1000-1209-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 좌점프 | sideMove01 | 노말" }],
		"s-794-1000-1210-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 우점프 | sideMove02 | 노말" }],
		"s-794-1000-1301-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 나무올라가기 | 1단계 | 노말" }],
		"s-794-1000-1302-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 나무올라가기 | 2단계 | 노말" }],
		"s-794-1000-1303-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 나무올라가기 | 3단계 | 노말" }],
		"s-794-1000-1304-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 나무올라가기 | 점프 | 노말" }],
		"s-794-1000-1305-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 나무올라가기 | 1단계추락 | 노말" }],
		"s-794-1000-1306-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 나무올라가기 | 2단계추락 | 노말" }],
		"s-794-1000-1307-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 나무올라가기 | 3단계추락 | 노말" }],
		"s-794-1000-1308-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 나무올라가기 | 자기버프 | 노말" }],
		"s-794-1000-1309-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 나무올라가기 | 2단계 | 대기 | 노말" }],
		"s-794-1000-1310-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 나무올라가기 | 2단계 | 대기종료" }],
		"s-794-1000-1311-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 미끄러지기 | moveAtk02 | End" }],
		"s-794-1000-1312-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 중앙으로 점프하고 포효(바나나 껍질 패턴용) | MoveAtk03 | Start+longMove | Start+End+modealarm" }],
		"s-794-1000-1313-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 모드알람 | modeAlarm | 노말" }],
		"s-794-1000-1314-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 밀쳐내고 쾅 찍기(밀쳐내기) | longMove | Start+End+heavyAtk04 | Start+Loop+End" }],
		"s-794-1000-1315-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 밀쳐내고 쾅 찍기(쾅 찍기) | longMove | Start+End+heavyAtk04 | Start+Loop+End" }],
		"s-794-1000-2101-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 오른손 휘두르기 | atk01 | 분노" }],
		"s-794-1000-2102-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 왼손 휘두르기 | atk02 | 분노" }],
		"s-794-1000-2103-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 양손 내려 찍기 | atk03 | 분노" }],
		"s-794-1000-2104-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 오른손 휘두르고 왼손으로 내려 찍기 | heavyAtk01 | comboAtk1 | 분노" }],
		"s-794-1000-2105-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 오른손 휘두르면서 구르기 | heavyAtk02 | 분노" }],
		"s-794-1000-2106-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 전방 도약후 양손 내려 찍기 | heavyAtk03 | 분노" }],
		"s-794-1000-2107-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 양손 내려 찍은 후 움츠렸다가 점프 공격 | reactionAtk | comboAtk1 | 분노" }],
		"s-794-1000-2108-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 양손 내려 찍은 후 움츠렸다가 방귀 공격(원거리 방귀) | reactionAtk | comboAtk2 | 분노" }],
		"s-794-1000-2109-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 좌회전 공격 | roundAtk01 | 분노" }],
		"s-794-1000-2110-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 우회전 공격 | roundAtk02 | 분노" }],
		"s-794-1000-2111-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 던지고 터트리기1 | LongAtk02+reactionAtk | 분노" }],
		"s-794-1000-2112-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 던지고 터트리기2 | LongAtk02+reactionAtk | 분노" }],
		"s-794-1000-2113-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 던지고 터트리기3 | LongAtk02+reactionAtk | 분노" }],
		"s-794-1000-2114-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 연속 내려 찍기 공격(마지막 당기기) | MoveAtk03 | 분노" }],
		"s-794-1000-2115-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 제자리 점프 공격 | MoveAtk01 | 분노" }],
		"s-794-1000-2116-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 연속 폭격 깔기 | LongAtk01 | 분노" }],
		"s-794-1000-2117-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 연속 폭격 깔기 | 발사체 | LongAtk01 | 분노" }],
		"s-794-1000-2118-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 연속 폭격 깔기 | 발사체(거대한 원폭) | LongAtk01 | 분노" }],
		"s-794-1000-2119-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 뒤로 발길질 | atk04 | Start+End | 분노" }],
		"s-794-1000-2120-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 제자리 쿵 뛰기 | longMove | Start+End | 분노" }],
		"s-794-1000-2121-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 던지고 터트리기1(하급용) | LongAtk02+reactionAtk | 분노" }],
		"s-794-1000-2122-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 던지고 터트리기2(하급용) | LongAtk02+reactionAtk | 분노" }],
		"s-794-1000-2123-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 던지고 터트리기3(하급용) | LongAtk02+reactionAtk | 분노" }],
		"s-794-1000-2124-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 연속 폭격(하급용) | LongAtk01 | 분노" }],
		"s-794-1000-2125-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 연속 폭격(하급용) | 발사체 | LongAtk01 | 분노" }],
		"s-794-1000-2126-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 | 연속 폭격(하급용) | 발사체(더 큰 근폭) | LongAtk01 | 분노" }],
		"s-794-1000-2201-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 그로기 | groggy | 분노" }],
		"s-794-1000-2203-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 액티브무브 | activeMove | 분노" }],
		"s-794-1000-2204-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 어그로체인지 | aggroChange | 분노" }],
		"s-794-1000-2205-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 도망 | runAway | 분노" }],
		"s-794-1000-2206-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 모드알람 | modeAlarm | 분노" }],
		"s-794-1000-2207-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 롱무브 | longMove | 분노" }],
		"s-794-1000-2208-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 백무브 | backMove | 분노" }],
		"s-794-1000-2209-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 좌점프 | sideMove01 | 분노" }],
		"s-794-1000-2210-0": [{ type: "text", sub_type: "message", message: "거대 원숭이 우점프 | sideMove02 | 분노" }],
		"s-794-1002-1101-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)1네임드 스턴 걸기" }],
		"s-794-1002-1102-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)원숭이 소환" }],
		"s-794-1002-1103-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)바나나 투하" }],
		"s-794-1003-1101-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)1네임드 스턴 걸기" }],
		"s-794-1003-1102-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)원숭이 소환" }],
		"s-794-1003-1103-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)바나나 투하" }],
		"s-794-1004-1101-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)1네임드 스턴 걸기" }],
		"s-794-1004-1102-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)원숭이 소환" }],
		"s-794-1004-1103-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)바나나 투하" }],
		"s-794-1005-1101-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)1네임드 스턴 걸기" }],
		"s-794-1005-1102-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)원숭이 소환" }],
		"s-794-1005-1103-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)바나나 투하" }],
		"s-794-1008-1301-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소) 바나나 껍질" }],
		"s-794-2000-1101-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 양손 오른쪽 내려치기 | Atk01 | 노말" }],
		"s-794-2000-1102-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 양주먹 원투 내려찍기 | Atk02 | 노멀" }],
		"s-794-2000-1103-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 오른쪽 회전하며 원투 연타찍기 | roundAtk01 | 노말" }],
		"s-794-2000-1104-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 왼쪽 회전하며 오른 주먹 내려치고 왼손 비껴 쓸기 | roundAtk02 | 노말" }],
		"s-794-2000-1105-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 제자리 고공점프 | reactionAtk" }],
		"s-794-2000-1106-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 돌 던지기 | longAtk01 | 노말" }],
		"s-794-2000-1107-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 돌 뽑아 앞에 찍고 부수기 | longAtk02 | 노말" }],
		"s-794-2000-1108-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 전방 점프해서 내려찍기 | longMove | 노말" }],
		"s-794-2000-1109-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 후방 점프해서 내려찍기 | backMove | 노말" }],
		"s-794-2000-1110-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 후방 발로 찍기 | 노말 | atk03" }],
		"s-794-2000-1111-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 2갈래 레이저 | UltraAtk01 | 노말" }],
		"s-794-2000-1112-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 3갈래 레이저 | UltraAtk01 | 노말" }],
		"s-794-2000-1113-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 전방 연타 후 원폭 | heavyatk01+atk01 | 노말" }],
		"s-794-2000-1114-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 가까운 애한테 마석 낙하1 | 노말 | longAtk03 | Start+Loop+End | A" }],
		"s-794-2000-1115-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 가까운 애한테 마석 낙하1 | 발사체 | 노말 | longAtk03 | Start+Loop+End | A" }],
		"s-794-2000-1116-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 가까운 애한테 마석 낙하1 낚시 | 노말 | longAtk03 | Start+Loop+End | B" }],
		"s-794-2000-1117-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 가까운 애한테 마석 낙하2 원근 노말 | longAtk03 | Start+Loop+End | A+Wait" }],
		"s-794-2000-1118-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 가까운 애한테 마석 낙하2 근원 노말 | longAtk03 | Start+Loop+End | B+Wait" }],
		"s-794-2000-1150-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 액티브무브 포효를 터트리고 밟아 공격하면 이동 | activeMove | Start+activeMove | Loop+activeMove | End | 노말" }],
		"s-794-2000-1307-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 유저에게 마석 소환 | modeAlarm" }],
		"s-794-2000-1308-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 유저에게 빨/파 이상상태 걸기 | modeAlarm | End" }],
		"s-794-2000-2101-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 양손 오른쪽 내려치기 | Atk01 | 분노" }],
		"s-794-2000-2102-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 양주먹 원투 내려찍기 | Atk02 | 노멀" }],
		"s-794-2000-2103-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 오른쪽 회전하며 원투 연타찍기 | roundAtk01 | 분노" }],
		"s-794-2000-2104-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 왼쪽 회전하며 오른 주먹 내려치고 왼손 비껴 쓸기 | roundAtk02 | 분노" }],
		"s-794-2000-2105-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 제자리 고공점프 | reactionAtk" }],
		"s-794-2000-2106-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 돌 던지기 | longAtk01 | 분노" }],
		"s-794-2000-2107-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 돌 뽑아 앞에 찍고 부수기 | longAtk02 | 분노" }],
		"s-794-2000-2108-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 전방 점프해서 내려찍기 | longMove | 분노" }],
		"s-794-2000-2109-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 후방 점프해서 내려찍기 | backMove | 분노" }],
		"s-794-2000-2110-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 후방 발로 찍기 | 분노 | atk03" }],
		"s-794-2000-2111-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 2갈래 레이저 | UltraAtk01 | 분노" }],
		"s-794-2000-2112-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 3갈래 레이저 | UltraAtk01 | 분노" }],
		"s-794-2000-2113-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 전방 연타 후 원폭 | heavyatk01+atk01 | 분노" }],
		"s-794-2000-2114-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 가까운 애한테 마석 낙하1 | 분노 | longAtk03 | Start+Loop+End | A" }],
		"s-794-2000-2115-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 가까운 애한테 마석 낙하1 | 발사체 | 분노 | longAtk03 | Start+Loop+End | A" }],
		"s-794-2000-2116-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 가까운 애한테 마석 낙하1 낚시 | 분노 | longAtk03 | Start+Loop+End | B" }],
		"s-794-2000-2117-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 가까운 애한테 마석 낙하2 원근 분노 | longAtk03 | Start+Loop+End | A+Wait" }],
		"s-794-2000-2118-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 가까운 애한테 마석 낙하2 근원 분노 | longAtk03 | Start+Loop+End | B+Wait" }],
		"s-794-2000-2150-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 액티브무브 포효를 터트리고 밟아 공격하면 이동 | activeMove | Start+activeMove | Loop+activeMove | End | 분노" }],
		"s-794-2001-1302-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 | (그린 마석)회전 레이저(빨)-시계 방향" }],
		"s-794-2002-1303-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 | (그린 마석)회전 레이저(파)-시계 방향" }],
		"s-794-2003-1304-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 | (그린 마석)회전 레이저(빨)-반시계 방향" }],
		"s-794-2004-1305-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 | (그린 마석)회전 레이저(파)-반시계 방향" }],
		"s-794-2005-1301-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 | (그린 마석)레이저 맞을 투명NPC들 소환" }],
		"s-794-2005-1311-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 | 의미 없는 대기" }],
		"s-794-2007-1301-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)대기" }],
		"s-794-2007-1302-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)시계 방향 회전" }],
		"s-794-2007-1303-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)반시계 방향 회전" }],
		"s-794-2007-1304-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)시계 방향 회전(하급용 전류 없는 버전)" }],
		"s-794-2007-1305-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)반시계 방향 회전(하급용 전류 없는 버전)" }],
		"s-794-2008-1307-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 | (그린 마석)즉발 회전 레이저(빨)-시계 방향" }],
		"s-794-2009-1308-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 | (그린 마석)즉발 회전 레이저(파)-시계 방향" }],
		"s-794-2010-1309-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 | (그린 마석)즉발 회전 레이저(빨)-반시계 방향" }],
		"s-794-2011-1310-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 | (그린 마석)즉발 회전 레이저(파)-반시계 방향" }],
		"s-794-2016-1327-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 | (그린 마석)죽을 때 즉시 시계-빨강 레이저 소환" }],
		"s-794-2017-1328-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 | (그린 마석)죽을 때 즉시 시계-파랑 레이저 소환" }],
		"s-794-2018-1329-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 | (그린 마석)죽을 때 즉시 반시계-빨강 레이저 소환" }],
		"s-794-2019-1330-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 | (그린 마석)죽을 때 즉시 반시계-파랑 레이저 소환" }],
		"s-794-3000-1101-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 오른손 휘두르기 | atk01 | 노말" }],
		"s-794-3000-1102-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 왼손 내려찍기 | atk02 | 노말" }],
		"s-794-3000-1103-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 후방 치기 | BackAtk | 노말" }],
		"s-794-3000-1104-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 전방 철퇴로 내려찍기 | LongAtk01 | Start+End | 노말" }],
		"s-794-3000-1105-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 우회전 공격 | RoundAtk01 | 노말" }],
		"s-794-3000-1106-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 좌회전 공격 | RoundAtk02 | 노말" }],
		"s-794-3000-1107-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 철퇴 돌린 뒤 전방 찍기 | HeavyAtk02 | Start+Loop01+End01 | 노말" }],
		"s-794-3000-1108-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 철퇴 돌린 뒤 후방 찍기 | HeavyAtk02 | Start+Loop02+End02 | 노말" }],
		"s-794-3000-1109-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 전방으로 이동하며 연타 | UltraAtk01 | Start+Loop+End | 노말" }],
		"s-794-3000-1110-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 후방으로 가볍게 점프하기 | BackMove | 노말" }],
		"s-794-3000-1111-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 전방 기 모았다가 발사(냉기) | LongAtk02 | Start+Loop+End | 노말" }],
		"s-794-3000-1112-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 전방 기 모았다가 발사(화염) | LongAtk02 | Start+Loop+End | 노말" }],
		"s-794-3000-1113-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 강하게 내려치기(냉기) | HeavyAtk01 | Start+End | 노말" }],
		"s-794-3000-1114-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 강하게 내려치기(화염) | HeavyAtk01 | Start+End | 노말" }],
		"s-794-3000-1115-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 철퇴 길게 휘두르기(원폭) | UltraAtk02 | Start+End | 노말" }],
		"s-794-3000-1116-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 철퇴로 전방 찍기(냉기) | HeavyAtk02 | End01 | 노말" }],
		"s-794-3000-1118-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 철퇴로 후방 찍기(화염) | HeavyAtk02 | End02 | 노말" }],
		"s-794-3000-1120-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 전방 내려치기 | ReactionAtk | Start+End | 노말" }],
		"s-794-3000-1121-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 전방으로 가볍게 점프하기 | BackMove | 노말" }],
		"s-794-3000-1122-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 5인 장판 생성(원폭근폭) | ReactionAtk | Start+Loop+End | 노말" }],
		"s-794-3000-1123-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 5인 장판 생성 | 발사체(원폭) | ReactionAtk | Start+Loop+End | 노말" }],
		"s-794-3000-1124-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 5인 장판 생성 | 발사체(근폭) | ReactionAtk | Start+Loop+End | 노말" }],
		"s-794-3000-1125-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 길게 철퇴 뻗어서 자신한테 당기기 | ultraAtk01 | Start+Loop+HeavyAtk02 | End01 | 노말" }],
		"s-794-3000-1126-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 전방 기 모았다가 발사(냉기+오염) | LongAtk02 | Start+Loop+End | 노말" }],
		"s-794-3000-1127-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 전방 기 모았다가 발사(화염+오염) | LongAtk02 | Start+Loop+End | 노말" }],
		"s-794-3000-1128-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 강하게 내려치기(냉기+오염) | HeavyAtk01 | Start+End | 노말" }],
		"s-794-3000-1129-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 강하게 내려치기(화염+오염) | HeavyAtk01 | Start+End | 노말" }],
		"s-794-3000-1130-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 철퇴로 전방 찍기(냉기+오염) | HeavyAtk02 | End01 | 노말" }],
		"s-794-3000-1131-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 철퇴로 후방 찍기(화염+오염) | HeavyAtk02 | End02 | 노말" }],
		"s-794-3000-1301-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | (패턴용)실험실 온도 변경(냉기) | ReactionAtk | Start+Loop+End" }],
		"s-794-3000-1302-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | (패턴용)실험실 온도 변경(화염) | ReactionAtk | Start+Loop+End" }],
		"s-794-3000-1303-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | (패턴용)실험실 온도 변경 발사체 | ReactionAtk | Start+Loop+End" }],
		"s-794-3000-1304-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | (패턴용)웅크렸다가 포효하면서 고리 생성 | ModeAlarm | Start+Loop+End" }],
		"s-794-3000-1305-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | (패턴용)웅크렸다가 포효하면서 실험체 이속 증가 | ModeAlarm | Start+Loop+End" }],
		"s-794-3000-1306-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | (패턴용)오염된 유저 폭발시키기(냉기) | ReactionAtk | Start+Loop+End" }],
		"s-794-3000-1307-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | (패턴용)오염된 유저 폭발시키기 | 발사체(데미지) | ReactionAtk | Start+Loop+End" }],
		"s-794-3000-1308-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | (패턴용)오염된 유저 폭발시키기 | 발사체(오염 안 된 유저 오염) | ReactionAtk | Start+Loop+End" }],
		"s-794-3000-1309-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | (패턴용)오염된 유저 폭발시키기 | 발사체(오염된 유저 오염 제거) | ReactionAtk | Start+Loop+End" }],
		"s-794-3000-1310-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | (패턴용)오염된 유저 폭발시키기(화염) | ReactionAtk | Start+Loop+End" }],
		"s-794-3000-1311-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | (패턴용)오염된 유저 폭발시키기 | 발사체(데미지) | ReactionAtk | Start+Loop+End" }],
		"s-794-3000-1312-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | (패턴용)오염된 유저 폭발시키기 | 발사체(오염 안 된 유저 오염) | ReactionAtk | Start+Loop+End" }],
		"s-794-3000-1313-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | (패턴용)오염된 유저 폭발시키기 | 발사체(오염된 유저 오염 제거) | ReactionAtk | Start+Loop+End" }],
		"s-794-3000-1314-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | (패턴용)오염텐션 변경 포효 모션 | ModeAlarm | Start+End" }],
		"s-794-3000-1315-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | (패턴용)실험실 온도 변경(냉기, 당기기 있음(하급용)) | ReactionAtk | Start+Loop+End" }],
		"s-794-3000-1316-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | (패턴용)실험실 온도 변경(화염, 당기기 있음(하급용)) | ReactionAtk | Start+Loop+End" }],
		"s-794-3000-2101-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 오른손 휘두르기 | atk01 | 분노" }],
		"s-794-3000-2102-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 왼손 내려찍기 | atk02 | 분노" }],
		"s-794-3000-2103-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 후방 치기 | BackAtk | 분노" }],
		"s-794-3000-2104-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 전방 철퇴로 내려찍기 | LongAtk01 | Start+End | 분노" }],
		"s-794-3000-2105-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 우회전 공격 | RoundAtk01 | 분노" }],
		"s-794-3000-2106-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 좌회전 공격 | RoundAtk02 | 분노" }],
		"s-794-3000-2107-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 철퇴 돌린 뒤 전방 찍기 | HeavyAtk02 | Start+Loop01+End01 | 분노" }],
		"s-794-3000-2108-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 철퇴 돌린 뒤 후방 찍기 | HeavyAtk02 | Start+Loop02+End02 | 분노" }],
		"s-794-3000-2109-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 전방으로 이동하며 연타 | UltraAtk01 | Start+Loop+End | 분노" }],
		"s-794-3000-2110-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 후방으로 가볍게 점프하기 | BackMove | 분노" }],
		"s-794-3000-2111-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 전방 기 모았다가 발사(냉기) | LongAtk02 | Start+Loop+End | 분노" }],
		"s-794-3000-2112-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 전방 기 모았다가 발사(화염) | LongAtk02 | Start+Loop+End | 분노" }],
		"s-794-3000-2113-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 강하게 내려치기(냉기) | HeavyAtk01 | Start+End | 분노" }],
		"s-794-3000-2114-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 강하게 내려치기(화염) | HeavyAtk01 | Start+End | 분노" }],
		"s-794-3000-2115-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 철퇴 길게 휘두르기(원폭) | UltraAtk02 | Start+End | 분노" }],
		"s-794-3000-2116-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 철퇴로 전방 찍기(냉기) | HeavyAtk02 | End01 | 분노" }],
		"s-794-3000-2118-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 철퇴로 후방 찍기(화염) | HeavyAtk02 | End02 | 분노" }],
		"s-794-3000-2120-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 전방 내려치기 | ReactionAtk | Start+End | 분노" }],
		"s-794-3000-2121-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 전방으로 가볍게 점프하기 | BackMove | 분노" }],
		"s-794-3000-2122-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 5인 장판 생성(원폭근폭) | ReactionAtk | Start+Loop+End | 분노" }],
		"s-794-3000-2123-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 5인 장판 생성 | 발사체(원폭) | ReactionAtk | Start+Loop+End | 분노" }],
		"s-794-3000-2124-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 5인 장판 생성 | 발사체(근폭) | ReactionAtk | Start+Loop+End | 분노" }],
		"s-794-3000-2125-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 길게 철퇴 뻗어서 자신한테 당기기 | ultraAtk01 | Start+Loop+HeavyAtk02 | End01 | 분노" }],
		"s-794-3000-2126-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 전방 기 모았다가 발사(냉기+오염) | LongAtk02 | Start+Loop+End | 분노" }],
		"s-794-3000-2127-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 전방 기 모았다가 발사(화염+오염) | LongAtk02 | Start+Loop+End | 분노" }],
		"s-794-3000-2128-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 강하게 내려치기(냉기+오염) | HeavyAtk01 | Start+End | 분노" }],
		"s-794-3000-2129-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 강하게 내려치기(화염+오염) | HeavyAtk01 | Start+End | 분노" }],
		"s-794-3000-2130-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 철퇴로 전방 찍기(냉기+오염) | HeavyAtk02 | End01 | 분노" }],
		"s-794-3000-2131-0": [{ type: "text", sub_type: "message", message: "변형된 고블린 | 철퇴로 후방 찍기(화염+오염) | HeavyAtk02 | End02 | 분노" }],
		"s-794-3001-1313-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 | 3네임드에게 암흑 고리 걸어 주기" }],
		"s-794-3001-1314-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 | 3네임드에게 암흑 고리 걸어 주기 | 발사체" }],
		"s-794-3001-1320-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 | 3네임드에게 암흑 고리 걸어 주기 | 발사체(마지막에 이펙트 지우기용)" }],
		"s-794-3002-1301-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)시험관 파괴되면서 고블린 등장" }],
		"s-794-3003-1301-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)변형된 실험체로 변신" }],
		"s-794-3003-1302-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)백신 치료 성공(본인에게 투명화 걸기)" }],
		"s-794-3003-1303-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)백신 치료 성공(조용히 자살)" }],
		"s-794-3006-1315-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 액체(기본)" }],
		"s-794-3007-1304-0": [{ type: "text", sub_type: "message", message: "(아크데바 마석 연구소)자폭 공격 | modealarm" }],
		"s-794-3012-1316-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 액체(도넛)" }],
		"s-794-3013-1317-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 액체(빅 사이즈)" }],
		"s-794-3014-1318-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 액체(독장판)" }],
		"s-794-3015-1319-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 구슬 폭발" }],
		"s-794-3016-1313-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 | 유저에게 암흑 고리 걸어 주기" }],
		"s-794-3016-1314-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 | 유저에게 암흑 고리 걸어 주기 | 발사체" }],
		"s-794-3016-1320-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 | 유저에게 암흑 고리 걸어 주기 | 발사체(마지막에 이펙트 지우기용)" }],
		"s-794-3018-1321-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 냉기 폭발" }],
		"s-794-3019-1322-0": [{ type: "text", sub_type: "message", message: "아크데바 마석 연구소 화염 폭발" }],
		"s-794-5002-1101-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 기본공격 | 화염구 | 노멀" }],
		"s-794-5002-1103-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 얼음송곳모션 | BlastSoil | 노멀" }],
		"s-794-5002-1104-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 얼음송곳발사체 | 노멀" }],
		"s-794-5002-1105-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 번개의덫모션 | ShockTrap | 노멀" }],
		"s-794-5002-1106-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 번개의덫발사체 | 노멀" }],
		"s-794-5002-1107-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 지옥불소환 | BlastBall | 노멀" }],
		"s-794-5002-1108-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 영기태우기 | AuraBurn | 노멀" }],
		"s-794-5002-1121-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 1차지폭렬구모션 | BlastBall | 노멀" }],
		"s-794-5002-1122-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 1차지폭렬구발사체 | 노멀" }],
		"s-794-5002-1123-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 2차지폭렬구모션 | BlastBall | 노멀" }],
		"s-794-5002-1124-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 2차지폭렬구 | 노멀" }],
		"s-794-5002-1125-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 3차지폭렬구모션 | BlastBall | 노멀" }],
		"s-794-5002-1126-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 3차지폭렬구 | 노멀" }],
		"s-794-5002-1206-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 물러서기(회피) | BackDash | 노멀" }],
		"s-794-5002-1501-0": [{ type: "text", sub_type: "message", message: "(듀리온의 안식처)암흑 구슬화" }],
		"s-794-5002-1502-0": [{ type: "text", sub_type: "message", message: "(듀리온의 안식처)암흑 구슬(프로젝타일)" }],
		"s-794-5002-1503-0": [{ type: "text", sub_type: "message", message: "(듀리온의안식처) | 아크데바마법사 | 죡불소환" }],
		"s-794-5002-2101-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 기본공격 | 화염구 | 분노" }],
		"s-794-5002-2103-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 얼음송곳모션 | BlastSoil | 분노" }],
		"s-794-5002-2104-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 얼음송곳발사체 | 분노" }],
		"s-794-5002-2105-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 번개의덫모션 | ShockTrap | 분노" }],
		"s-794-5002-2106-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 번개의덫발사체 | 분노" }],
		"s-794-5002-2107-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 지옥불소환 | BlastBall | 분노" }],
		"s-794-5002-2108-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 영기태우기 | AuraBurn | 분노" }],
		"s-794-5002-2121-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 1차지폭렬구모션 | BlastBall | 분노" }],
		"s-794-5002-2122-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 1차지폭렬구발사체 | 분노" }],
		"s-794-5002-2123-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 2차지폭렬구모션 | BlastBall | 분노" }],
		"s-794-5002-2124-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 2차지폭렬구 | 분노" }],
		"s-794-5002-2125-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 3차지폭렬구모션 | BlastBall | 분노" }],
		"s-794-5002-2126-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 3차지폭렬구 | 분노" }],
		"s-794-5002-2206-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 물러서기(회피) | BackDash | 분노" }],
		"s-794-5003-1101-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Normal Shot" }],
		"s-794-5003-1103-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Arrow Shower | Shot | 1단계" }],
		"s-794-5003-1104-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Arrow Shower | Shot | 2단계" }],
		"s-794-5003-1105-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Arrow Shower | Shot | 3단계" }],
		"s-794-5003-1106-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Charge Arrow | Shot | 1단계" }],
		"s-794-5003-1107-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Charge Arrow | Shot | 2단계" }],
		"s-794-5003-1108-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Charge Arrow | Shot | 3단계" }],
		"s-794-5003-1109-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Piercing Arrow | Shot | 1단계" }],
		"s-794-5003-1110-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Piercing Arrow | Shot | 2단계" }],
		"s-794-5003-1111-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Piercing Arrow | Shot | 3단계" }],
		"s-794-5003-1206-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | 회피" }],
		"s-794-5003-1501-0": [{ type: "text", sub_type: "message", message: "(듀리온의 안식처)암흑 구슬화" }],
		"s-794-5003-1502-0": [{ type: "text", sub_type: "message", message: "(듀리온의 안식처)암흑 구슬(프로젝타일)" }],
		"s-794-5003-1503-0": [{ type: "text", sub_type: "message", message: "(듀리온의안식처)아크데바 | 궁수 | 라인샷 | 1단계" }],
		"s-794-5003-2101-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Normal Shot" }],
		"s-794-5003-2103-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Arrow Shower | Shot | 1단계" }],
		"s-794-5003-2104-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Arrow Shower | Shot | 2단계" }],
		"s-794-5003-2105-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Arrow Shower | Shot | 3단계" }],
		"s-794-5003-2106-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Charge Arrow | Shot | 1단계" }],
		"s-794-5003-2107-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Charge Arrow | Shot | 2단계" }],
		"s-794-5003-2108-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Charge Arrow | Shot | 3단계" }],
		"s-794-5003-2109-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Piercing Arrow | Shot | 1단계" }],
		"s-794-5003-2110-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Piercing Arrow | Shot | 2단계" }],
		"s-794-5003-2111-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Piercing Arrow | Shot | 3단계" }],
		"s-794-5003-2206-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | 회피 | 분노" }],
		"s-794-5004-1101-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 콤보2연타 | Combo2 | 노멀" }],
		"s-794-5004-1103-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 콤보3연타 | Combo3 | 노멀" }],
		"s-794-5004-1104-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 콤보4연타 | Combo4 | 노멀" }],
		"s-794-5004-1105-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 도발난무 | Nanmu | 노멀" }],
		"s-794-5004-1106-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 몰아치기 | PointAtk | 노멀" }],
		"s-794-5004-1107-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 기상공격 | RisingAtk | 노멀" }],
		"s-794-5004-1108-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 투지의일격 | PointStrike | 노멀" }],
		"s-794-5004-1205-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 긴급회피(피격무적구간있음) | tumbling | 노멀" }],
		"s-794-5004-1210-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 대기 | Wait | 노멀" }],
		"s-794-5004-2101-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 콤보2연타 | Combo2 | 분노" }],
		"s-794-5004-2103-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 콤보3연타 | Combo3 | 분노" }],
		"s-794-5004-2104-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 콤보4연타 | Combo4 | 분노" }],
		"s-794-5004-2105-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 도발난무 | Nanmu | 분노" }],
		"s-794-5004-2106-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 몰아치기 | PointAtk | 분노" }],
		"s-794-5004-2107-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 기상공격 | RisingAtk | 분노" }],
		"s-794-5004-2108-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 투지의일격 | PointStrike | 분노" }],
		"s-794-5004-2205-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 긴급회피(피격무적구간있음) | tumbling | 분노" }],
		"s-794-5004-2210-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 대기 | Wait | 분노" }],
		"s-794-7005-1301-0": [{ type: "text", sub_type: "message", message: "돌 무더기 | 생성될 때 주변 유저 밀쳐내기" }],
		"s-794-8000-1101-0": [{ type: "text", sub_type: "message", message: "체력 회복용 꽃 | 체력 100% 회복 | wait | 공통" }],
		"s-794-8001-1101-0": [{ type: "text", sub_type: "message", message: "공격력 상승 꽃 | 공격력 상승 | Wait | 공통" }]
	};
};