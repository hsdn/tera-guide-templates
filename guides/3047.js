// Hall of the Argon Queen (Hard)


module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		"s-3047-1000-1101-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 오른 손 공격 | atk01 | 노말" }],
		"s-3047-1000-1102-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 공중 도약 후 연속 범위 공격 | reactionAtk03 | 노말" }],
		"s-3047-1000-1103-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 왼 손 공격 | atk02 | 노말" }],
		"s-3047-1000-1104-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 점프 덮치기 | heavyAtk | 노말" }],
		"s-3047-1000-1105-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 전방 폭발 공격 | heavyAtk02 | 노말" }],
		"s-3047-1000-1106-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 원거리 폭발 공격 | longAtk | 노말" }],
		"s-3047-1000-1107-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 레이져 공격 | longAtk02 | 노말" }],
		"s-3047-1000-1108-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 점프 후 돌진 | moveAtk | 노말" }],
		"s-3047-1000-1109-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 도트 존 공격 발사 동작 | reactionAtk01 | 노말" }],
		"s-3047-1000-1110-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 도트 존 공격 | 발사체 | reactionAtk01 | 노말" }],
		"s-3047-1000-1111-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 범위 속박 | reactionAtk02 | 노말" }],
		"s-3047-1000-1112-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 존재 박멸 | reactionAtk04 | 노말" }],
		"s-3047-1000-1113-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 좌회전 공격 | roundAtk01 | 노말" }],
		"s-3047-1000-1114-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 우회전 공격 | roundAtk02 | 노말" }],
		"s-3047-1000-1115-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 후방 공격 | backAtk | 노말" }],
		"s-3047-1000-1201-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 그로기 | groggy" }],
		"s-3047-1000-1202-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 액티브 무브 | activeMove | 노말" }],
		"s-3047-1000-1203-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 도망 | runAway | 노말" }],
		"s-3047-1000-1204-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | (세포 촉진용)모드 알람 | modeAlarm" }],
		"s-3047-1000-1205-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 롱무브 | longmove | 노말" }],
		"s-3047-1000-1206-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 백무브 | backMove | 노말" }],
		"s-3047-1000-1301-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 자기 버프(데미지 반사) | Command" }],
		"s-3047-1000-1302-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 자기 버프(여왕의 포효) | Command" }],
		"s-3047-1000-1303-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 자기 버프(방어막 걸기) | Command" }],
		"s-3047-1000-1304-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 방어막체크용대기 | wait" }],
		"s-3047-1000-1305-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 리액션" }],
		"s-3047-1000-1306-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 디버프 걸기용" }],
		"s-3047-1000-1307-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 버프 걸기용1" }],
		"s-3047-1000-1308-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 데미지반사용 광역 디버프" }],
		"s-3047-1000-1309-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 5초 대기" }],
		"s-3047-1000-1310-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 1초 대기" }],
		"s-3047-1000-1311-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 30% 공속 증가용 | Command" }],
		"s-3047-1000-1312-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 30% 공속 증가용(2중첩) | Command" }],
		"s-3047-1000-1313-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 30% 공속 증가용(3중첩) | Command" }],
		"s-3047-1000-2101-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 오른 손 공격 | atk01 | 노말" }],
		"s-3047-1000-2102-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 공중 도약 후 연속 범위 공격 | reactionAtk03 | 노말" }],
		"s-3047-1000-2103-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 왼 손 공격 | atk02 | 노말" }],
		"s-3047-1000-2104-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 점프 덮치기 | heavyAtk | 노말" }],
		"s-3047-1000-2105-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 전방 폭발 공격 | heavyAtk02 | 노말" }],
		"s-3047-1000-2106-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 원거리 폭발 공격 | longAtk | 노말" }],
		"s-3047-1000-2107-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 레이져 공격 | longAtk02 | 노말" }],
		"s-3047-1000-2108-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 점프 후 돌진 | moveAtk | 노말" }],
		"s-3047-1000-2109-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 도트 존 공격 발사 동작 | reactionAtk01 | 노말" }],
		"s-3047-1000-2110-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 도트 존 공격 | 발사체 | reactionAtk01 | 노말" }],
		"s-3047-1000-2111-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 범위 속박 | reactionAtk02 | 노말" }],
		"s-3047-1000-2112-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 존재 박멸 | reactionAtk04 | 노말" }],
		"s-3047-1000-2113-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 좌회전 공격 | roundAtk01 | 노말" }],
		"s-3047-1000-2114-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 우회전 공격 | roundAtk02 | 노말" }],
		"s-3047-1000-2115-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 후방 공격 | backAtk | 노말" }],
		"s-3047-1000-2201-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 그로기 | groggy" }],
		"s-3047-1000-2202-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 액티브 무브 | activeMove | 분노" }],
		"s-3047-1000-2203-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 도망 | runAway | 분노" }],
		"s-3047-1000-2204-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | (아르곤 말기암 용)모드 알람 | modeAlarm" }],
		"s-3047-1000-2205-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 롱무브 | longmove | 분노" }],
		"s-3047-1000-2206-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 백무브 | backMove | 분노" }],
		"s-3047-1000-3101-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 오른 손 공격 | atk01 | 노말" }],
		"s-3047-1000-3102-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 공중 도약 후 연속 범위 공격 | reactionAtk03 | 노말" }],
		"s-3047-1000-3103-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 왼 손 공격 | atk02 | 노말" }],
		"s-3047-1000-3104-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 점프 덮치기 | heavyAtk | 노말" }],
		"s-3047-1000-3105-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 전방 폭발 공격 | heavyAtk02 | 노말" }],
		"s-3047-1000-3106-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 원거리 폭발 공격 | longAtk | 노말" }],
		"s-3047-1000-3107-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 레이져 공격 | longAtk02 | 노말" }],
		"s-3047-1000-3108-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 점프 후 돌진 | moveAtk | 노말" }],
		"s-3047-1000-3109-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 도트 존 공격 발사 동작 | reactionAtk01 | 노말" }],
		"s-3047-1000-3110-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 도트 존 공격 | 발사체 | reactionAtk01 | 노말" }],
		"s-3047-1000-3111-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 범위 속박 | reactionAtk02 | 노말" }],
		"s-3047-1000-3112-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 존재 박멸 | reactionAtk04 | 노말" }],
		"s-3047-1000-3113-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 좌회전 공격 | roundAtk01 | 노말" }],
		"s-3047-1000-3114-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 우회전 공격 | roundAtk02 | 노말" }],
		"s-3047-1000-3115-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 후방 공격 | backAtk | 노말" }],
		"s-3047-1000-3116-0": [{ type: "text", sub_type: "message", message: "5인 장판 공격(비분노)" }],
		"s-3047-1000-3117-0": [{ type: "text", sub_type: "message", message: "전후좌우 범위 속박(비분노)" }],
		"s-3047-1000-3118-0": [{ type: "text", sub_type: "message", message: "존재 박멸 변형 | 정방향(비분노)" }],
		"s-3047-1000-3119-0": [{ type: "text", sub_type: "message", message: "양손 찍기(비분노)" }],
		"s-3047-1000-3120-0": [{ type: "text", sub_type: "message", message: "후방 공격 2(비분노)" }],
		"s-3047-1000-3121-0": [{ type: "text", sub_type: "message", message: "어둠 터져라(비분노)" }],
		"s-3047-1000-3122-0": [{ type: "text", sub_type: "message", message: "어둠 힐업(비분노)" }],
		"s-3047-1000-3123-0": [{ type: "text", sub_type: "message", message: "존재 박멸 변형 | 역방향(비분노)" }],
		"s-3047-1000-3201-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 그로기 | groggy" }],
		"s-3047-1000-3202-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 액티브 무브 | activeMove | 노말" }],
		"s-3047-1000-3203-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 도망 | runAway | 노말" }],
		"s-3047-1000-3204-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | (세포 촉진용)모드 알람 | modeAlarm" }],
		"s-3047-1000-3205-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 롱무브 | longmove | 노말" }],
		"s-3047-1000-3206-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 백무브 | backMove | 노말" }],
		"s-3047-1000-3301-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 자기 버프(데미지 반사) | Command" }],
		"s-3047-1000-3302-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 자기 버프(여왕의 포효) | Command" }],
		"s-3047-1000-3303-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 자기 버프(방어막 걸기) | Command" }],
		"s-3047-1000-3304-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 방어막체크용대기 | wait" }],
		"s-3047-1000-3305-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 리액션" }],
		"s-3047-1000-3306-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 디버프 걸기용" }],
		"s-3047-1000-3307-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 버프 걸기용1" }],
		"s-3047-1000-3308-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 데미지반사용 광역 디버프" }],
		"s-3047-1000-3309-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 5초 대기" }],
		"s-3047-1000-3310-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 1초 대기" }],
		"s-3047-1000-3311-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 30% 공속 증가용 | Command" }],
		"s-3047-1000-3312-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 30% 공속 증가용(2중첩) | Command" }],
		"s-3047-1000-3313-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 30% 공속 증가용(3중첩) | Command" }],
		"s-3047-1000-3314-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 3초 대기" }],
		"s-3047-1000-3315-0": [{ type: "text", sub_type: "message", message: "어둠 패턴 사전 모션" }],
		"s-3047-1000-3316-0": [{ type: "text", sub_type: "message", message: "낚시용 모션" }],
		"s-3047-1000-3317-0": [{ type: "text", sub_type: "message", message: "공격력 강화 모션" }],
		"s-3047-1000-3318-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 0.5초 대기" }],
		"s-3047-1000-3319-0": [{ type: "text", sub_type: "message", message: "파동 이상상태 변경 | I" }],
		"s-3047-1000-3320-0": [{ type: "text", sub_type: "message", message: "파동 이상상태 변경 | II" }],
		"s-3047-1000-3321-0": [{ type: "text", sub_type: "message", message: "파동 이상상태 변경 | III" }],
		"s-3047-1000-3322-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 자기 버프(공격 속도 증가 1) | Command" }],
		"s-3047-1000-3323-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 자기 버프(공격 속도 증가 2) | Command" }],
		"s-3047-1000-3324-0": [{ type: "text", sub_type: "message", message: "도트존 십자 더미 스킬" }],
		"s-3047-1000-4101-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 오른 손 공격 | atk01 | 노말" }],
		"s-3047-1000-4102-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 공중 도약 후 연속 범위 공격 | reactionAtk03 | 노말" }],
		"s-3047-1000-4103-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 왼 손 공격 | atk02 | 노말" }],
		"s-3047-1000-4104-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 점프 덮치기 | heavyAtk | 노말" }],
		"s-3047-1000-4105-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 전방 폭발 공격 | heavyAtk02 | 노말" }],
		"s-3047-1000-4106-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 원거리 폭발 공격 | longAtk | 노말" }],
		"s-3047-1000-4107-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 레이져 공격 | longAtk02 | 노말" }],
		"s-3047-1000-4108-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 점프 후 돌진 | moveAtk | 노말" }],
		"s-3047-1000-4109-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 도트 존 공격 발사 동작 | reactionAtk01 | 노말" }],
		"s-3047-1000-4110-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 도트 존 공격 | 발사체 | reactionAtk01 | 노말" }],
		"s-3047-1000-4111-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 범위 속박 | reactionAtk02 | 노말" }],
		"s-3047-1000-4112-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 존재 박멸 | reactionAtk04 | 노말" }],
		"s-3047-1000-4113-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 좌회전 공격 | roundAtk01 | 노말" }],
		"s-3047-1000-4114-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 우회전 공격 | roundAtk02 | 노말" }],
		"s-3047-1000-4115-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 후방 공격 | backAtk | 노말" }],
		"s-3047-1000-4116-0": [{ type: "text", sub_type: "message", message: "5인 장판 공격(분노)" }],
		"s-3047-1000-4117-0": [{ type: "text", sub_type: "message", message: "전후좌우 범위 속박(분노)" }],
		"s-3047-1000-4118-0": [{ type: "text", sub_type: "message", message: "존재 박멸 변형 | 정방향(분노)" }],
		"s-3047-1000-4119-0": [{ type: "text", sub_type: "message", message: "양손 찍기(분노)" }],
		"s-3047-1000-4120-0": [{ type: "text", sub_type: "message", message: "후방 공격 2(분노)" }],
		"s-3047-1000-4121-0": [{ type: "text", sub_type: "message", message: "어둠 터져라(분노)" }],
		"s-3047-1000-4122-0": [{ type: "text", sub_type: "message", message: "어둠 힐업(비분노)" }],
		"s-3047-1000-4123-0": [{ type: "text", sub_type: "message", message: "존재 박멸 변형 | 역방향(분노)" }],
		"s-3047-1000-4201-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 그로기 | groggy" }],
		"s-3047-1000-4202-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 액티브 무브 | activeMove | 분노" }],
		"s-3047-1000-4203-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 도망 | runAway | 분노" }],
		"s-3047-1000-4204-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | (아르곤 말기암 용)모드 알람 | modeAlarm" }],
		"s-3047-1000-4205-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 롱무브 | longmove | 분노" }],
		"s-3047-1000-4206-0": [{ type: "text", sub_type: "message", message: "샨드라마나이아의 핵(이탈형) | 백무브 | backMove | 분노" }],
		"s-3047-1001-1132-0": [{ type: "text", sub_type: "message", message: "지속형 장판" }],
		"s-3047-1002-1212-0": [{ type: "text", sub_type: "message", message: "터져라" }],
		"s-3047-1301-1101-0": [{ type: "text", sub_type: "message", message: "문이펙트가 사라지는효과 | Run" }],
		"s-3047-1302-1101-0": [{ type: "text", sub_type: "message", message: "문이펙트가 사라지는효과 | Run" }]
	};
};