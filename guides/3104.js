// Catalepticon


module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		"s-3104-1000-1103-0": [{ type: "text", sub_type: "message", message: "L모드 전후방 기본공격 2타 (atk01)" }],
		"s-3104-1000-1104-0": [{ type: "text", sub_type: "message", message: "L모드 창 꼽아 근폭 (atk02 | noloop)" }],
		"s-3104-1000-1107-0": [{ type: "text", sub_type: "message", message: "L모드 직선세줄공격 (atk03 | loop)" }],
		"s-3104-1000-1110-0": [{ type: "text", sub_type: "message", message: "L모드 랜덤타겟 원거리 폭발 후 후방부채꼴 (atk04 | noloop | end02)" }],
		"s-3104-1000-1112-0": [{ type: "text", sub_type: "message", message: "S모드 쌍검 내지르기 (atk05 | End02)" }],
		"s-3104-1000-1114-0": [{ type: "text", sub_type: "message", message: "S모드 범위 전체공격 근원폭 (atk05 | End03)" }],
		"s-3104-1000-1115-0": [{ type: "text", sub_type: "message", message: "S모드 전방 기본공격 돌진 후 찢기 (atk06)" }],
		"s-3104-1000-1116-0": [{ type: "text", sub_type: "message", message: "S모드 직선공격 (atk07)" }],
		"s-3104-1000-1117-0": [{ type: "text", sub_type: "message", message: "S모드 전방 기본공격 올려치기 (atk08)" }],
		"s-3104-1000-1119-0": [{ type: "text", sub_type: "message", message: "S모드 전방 공격 후 연속2타 (HeavyAtk | End01)" }],
		"s-3104-1000-1120-0": [{ type: "text", sub_type: "message", message: "S모드 전방 공격 후 연속2타 이후 범위공격 (HeavyAtk | End02)" }],
		"s-3104-1000-1123-0": [{ type: "text", sub_type: "message", message: "S모드 정방향 회전 공격 (moveAtk01)" }],
		"s-3104-1000-1125-0": [{ type: "text", sub_type: "message", message: "S모드 전방 푹 찌르기 (reactionAtk)" }],
		"s-3104-1000-1127-0": [{ type: "text", sub_type: "message", message: "L모드 반시계방향 270도 공격 (RoundAtkL01)" }],
		"s-3104-1000-1128-0": [{ type: "text", sub_type: "message", message: "L모드 시계방향 270도 공격 (RoundAtkL02)" }],
		"s-3104-1000-1139-0": [{ type: "text", sub_type: "message", message: "S모드 전방 기본공격 내려치기 (atk10)" }],
		"s-3104-1000-1148-0": [{ type: "text", sub_type: "message", message: "S모드 연속 라운드어택 (RoundAtk)" }],
		"s-3104-1000-1155-0": [{ type: "text", sub_type: "message", message: "S모드 일자형 누킹 발사체 (projectile)" }],
		"s-3104-1000-1156-0": [{ type: "text", sub_type: "message", message: "S모드 필살기 예비동작1 (UltraAtk | Start) " }],
		"s-3104-1000-1157-0": [{ type: "text", sub_type: "message", message: "S모드 필살기 예비동작 2-1" }],
		"s-3104-1000-1158-0": [{ type: "text", sub_type: "message", message: "S모드 필살기 예비동작 2-2" }],
		"s-3104-1000-1159-0": [{ type: "text", sub_type: "message", message: "S모드 필살기 마지막동작(UltraAtk03)" }],
		"s-3104-1000-1160-0": [{ type: "text", sub_type: "message", message: "S모드 필살기 해골약 발사체 (projectile)" }],
		"s-3104-1000-1202-0": [{ type: "text", sub_type: "message", message: "S모드 | 스폰연출" }],
		"s-3104-1000-2103-0": [{ type: "text", sub_type: "message", message: "L모드 전후방 기본공격 2타 (atk01) | 분노" }],
		"s-3104-1000-2104-0": [{ type: "text", sub_type: "message", message: "L모드 창 꼽아 근폭 (atk02 | noloop) | 분노" }],
		"s-3104-1000-2107-0": [{ type: "text", sub_type: "message", message: "L모드 직선세줄공격 (atk03 | loop) | 분노" }],
		"s-3104-1000-2110-0": [{ type: "text", sub_type: "message", message: "L모드 랜덤타겟 원거리 폭발 후 후방부채꼴 (atk04 | noloop | end02) | 분노" }],
		"s-3104-1000-2112-0": [{ type: "text", sub_type: "message", message: "S모드 쌍검 내지르기 (atk05 | End02) | 분노" }],
		"s-3104-1000-2114-0": [{ type: "text", sub_type: "message", message: "S모드 범위 전체공격 근원폭 (atk05 | End03) | 분노" }],
		"s-3104-1000-2115-0": [{ type: "text", sub_type: "message", message: "S모드 전방 기본공격 돌진 후 찢기 (atk06) | 분노" }],
		"s-3104-1000-2116-0": [{ type: "text", sub_type: "message", message: "S모드 직선공격 (atk07) | 분노" }],
		"s-3104-1000-2117-0": [{ type: "text", sub_type: "message", message: "S모드 전방 기본공격 올려치기 (atk08) | 분노" }],
		"s-3104-1000-2119-0": [{ type: "text", sub_type: "message", message: "S모드 전방 공격 후 연속2타 (HeavyAtk | End01) | 분노" }],
		"s-3104-1000-2120-0": [{ type: "text", sub_type: "message", message: "S모드 전방 공격 후 연속2타 이후 범위공격 (HeavyAtk | End02) | 분노" }],
		"s-3104-1000-2123-0": [{ type: "text", sub_type: "message", message: "S모드 정방향 회전 공격 (moveAtk01) | 분노" }],
		"s-3104-1000-2125-0": [{ type: "text", sub_type: "message", message: "S모드 전방 푹 찌르기 (reactionAtk) | 분노" }],
		"s-3104-1000-2127-0": [{ type: "text", sub_type: "message", message: "L모드 반시계방향 270도 공격 (RoundAtkL01) | 분노" }],
		"s-3104-1000-2128-0": [{ type: "text", sub_type: "message", message: "L모드 시계방향 270도 공격 (RoundAtkL02) | 분노" }],
		"s-3104-1000-2139-0": [{ type: "text", sub_type: "message", message: "S모드 전방 기본공격 내려치기 (atk10) | 분노" }],
		"s-3104-1000-2148-0": [{ type: "text", sub_type: "message", message: "S모드 연속 라운드어택 (RoundAtk) | 분노" }],
		"s-3104-1000-2200-0": [{ type: "text", sub_type: "message", message: "S모드로 변경" }],
		"s-3104-1000-2201-0": [{ type: "text", sub_type: "message", message: "L모드로 변경" }]
	};
};