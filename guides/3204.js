// Lumikan (High)


module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		"s-3204-1000-1101-0": [{ type: "text", sub_type: "message", message: "L모드 전후방 기본공격 1타 (atk01 | start)" }],
		"s-3204-1000-1102-0": [{ type: "text", sub_type: "message", message: "L모드 전후방 기본공격 1타 (atk01 | End)" }],
		"s-3204-1000-1103-0": [{ type: "text", sub_type: "message", message: "L모드 전후방 기본공격 2타 (atk01)" }],
		"s-3204-1000-1104-0": [{ type: "text", sub_type: "message", message: "L모드 전방 기본공격 띄우기 후 뽑기 (atk02 | noloop)" }],
		"s-3204-1000-1105-0": [{ type: "text", sub_type: "message", message: "L모드 전방 기본공격 띄우기 후 뽑기 (atk02 | loop)" }],
		"s-3204-1000-1106-0": [{ type: "text", sub_type: "message", message: "L모드 전방 기본공격 1타 밀어내기 (atk03 | noloop)" }],
		"s-3204-1000-1107-0": [{ type: "text", sub_type: "message", message: "L모드 전방 기본공격 2타 끌어오기 (atk03 | loop)" }],
		"s-3204-1000-1108-0": [{ type: "text", sub_type: "message", message: "L모드 전방 기본공격 원거리에서 근원 (atk04 | noloop | end01)" }],
		"s-3204-1000-1109-0": [{ type: "text", sub_type: "message", message: "L모드 전방 기본공격 원거리에서 근원 (atk04 | loop | end01)" }],
		"s-3204-1000-1110-0": [{ type: "text", sub_type: "message", message: "L모드 전후방 기본공격 원거리 근폭 후 후방부채꼴 (atk04 | noloop | end02)" }],
		"s-3204-1000-1111-0": [{ type: "text", sub_type: "message", message: "L모드 전후방 기본공격 원거리 근폭 후 후방부채꼴 (atk04 | loop | end02)" }],
		"s-3204-1000-1112-0": [{ type: "text", sub_type: "message", message: "S모드 범위 전체공격 개인 장판과 루크미아 중심 터져라 (atk05 | End02)" }],
		"s-3204-1000-1113-0": [{ type: "text", sub_type: "message", message: "S모드 범위 전체공격 개인 장판과 루크미아 중심 터져라 (none)" }],
		"s-3204-1000-1114-0": [{ type: "text", sub_type: "message", message: "S모드 범위 전체공격 정면 생존구역 제외 원폭 (atk05 | End03)" }],
		"s-3204-1000-1115-0": [{ type: "text", sub_type: "message", message: "S모드 전방 기본공격 돌진 후 찢기 (atk06)" }],
		"s-3204-1000-1116-0": [{ type: "text", sub_type: "message", message: "S모드 전방 기본공격 찌르기 후 직선공격 (atk07)" }],
		"s-3204-1000-1117-0": [{ type: "text", sub_type: "message", message: "S모드 전방 기본공격 올려치기 (atk08)" }],
		"s-3204-1000-1118-0": [{ type: "text", sub_type: "message", message: "S모드 측후방 320도 공격 하며 180도 회전 (BackAtk02)" }],
		"s-3204-1000-1119-0": [{ type: "text", sub_type: "message", message: "S모드 전방 공격 후 연속2타 (HeavyAtk | End01)" }],
		"s-3204-1000-1120-0": [{ type: "text", sub_type: "message", message: "S모드 전방 공격 후 연속2타 이후 범위공격 (HeavyAtk | End02)" }],
		"s-3204-1000-1121-0": [{ type: "text", sub_type: "message", message: "S모드 시간의 역장 생성 (longAtk01 | noloop)" }],
		"s-3204-1000-1122-0": [{ type: "text", sub_type: "message", message: "S모드 시간의 역장 생성 (longAtk01 | loop)" }],
		"s-3204-1000-1123-0": [{ type: "text", sub_type: "message", message: "S모드 정방향 회전 공격 (moveAtk01)" }],
		"s-3204-1000-1124-0": [{ type: "text", sub_type: "message", message: "S모드 역방향 회전 공격 (-moveAtk01)" }],
		"s-3204-1000-1125-0": [{ type: "text", sub_type: "message", message: "S모드 전방 랜덤 분신공격 (reactionAtk)" }],
		"s-3204-1000-1126-0": [{ type: "text", sub_type: "message", message: "S모드 전방 랜덤 분신공격 (-reactionAtk)" }],
		"s-3204-1000-1127-0": [{ type: "text", sub_type: "message", message: "L모드 반시계방향 270도 공격 (RoundAtkL01)" }],
		"s-3204-1000-1128-0": [{ type: "text", sub_type: "message", message: "L모드 시계방향 270도 공격 (RoundAtkL02)" }],
		"s-3204-1000-1129-0": [{ type: "text", sub_type: "message", message: "S모드 전-후방 회전 공격 (UltraAtk)" }],
		"s-3204-1000-1130-0": [{ type: "text", sub_type: "message", message: "S모드 후-전방 회전 공격 (-UltraAtk)" }],
		"s-3204-1000-1131-0": [{ type: "text", sub_type: "message", message: "S모드 제자리 회전 공격 (UltraAtk02)" }],
		"s-3204-1000-1150-0": [{ type: "text", sub_type: "message", message: "S모드 달려" }],
		"s-3204-1000-1151-0": [{ type: "text", sub_type: "message", message: "L모드 달려" }],
		"s-3204-1000-1200-0": [{ type: "text", sub_type: "message", message: "S모드로 변경" }],
		"s-3204-1000-1201-0": [{ type: "text", sub_type: "message", message: "L모드로 변경" }]
	};
};