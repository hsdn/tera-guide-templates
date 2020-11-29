// Red Refuge


module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		"s-739-1000-1101-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 기본공격 | Atk01 | 노말" }],
		"s-739-1000-1102-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 사전동작있는돌진이동공격 | MoveAtk | 노말" }],
		"s-739-1000-1103-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 2번찍기공격 | Atk02 | 노말" }],
		"s-739-1000-1104-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 강하게내려찍기공격 | HeavyAtk | 노말" }],
		"s-739-1000-1105-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 원거리물대포공격 | LongAtk | 노말" }],
		"s-739-1000-1106-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 롱무브(근) | LongMove | 노말" }],
		"s-739-1000-1107-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 리액션유발대점프공격 | ReactionAtk | 노말" }],
		"s-739-1000-1108-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 좌회전공격 | RoundAtk | 노말" }],
		"s-739-1000-1109-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 우회전공격 | RoundAtk01 | 노말" }],
		"s-739-1000-1110-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 뒤로빠진후점프덮치기 | UltraAtk01 | 노멀" }],
		"s-739-1000-1111-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 롱무브(원) | LongMove | 노말" }],
		"s-739-1000-1112-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 원거리물대포후방공격 | LongAtk | 노말" }],
		"s-739-1000-1113-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 원거리물대포후방공격2타 | LongAtk | 노말" }],
		"s-739-1000-1114-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 원거리물대포후방공격2타 | 2(다이나믹리액션) | LongAtk | 노말" }],
		"s-739-1000-1115-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 원거리물대포공격2타 | LongAtk | 노멀" }],
		"s-739-1000-1116-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 원거리물대포공격2타 | 2 | LongAtk | 노말" }],
		"s-739-1000-1117-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 리액션유발대점프공격2타 | ReactionAtk | 노말" }],
		"s-739-1000-1118-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 리액션유발대점프공격2타 | 2 | ReactionAtk | 노말" }],
		"s-739-1000-1119-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 사전동작있는돌진이동공격 | 밀치기 | MoveAtk | 노말" }],
		"s-739-1000-1120-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 원거리물대포후방공격(방막불가) | LongAtk | 노말" }],
		"s-739-1000-1150-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 액티브무브 | Run | 노말" }],
		"s-739-1000-1201-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 헉헉동작30% | Groggy" }],
		"s-739-1000-1203-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 사전동작(임시등록 | 제작 미완료) | 노말" }],
		"s-739-1000-1204-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 어그로체인지 | AggroChange | 노말" }],
		"s-739-1000-1205-0": [{ type: "text", sub_type: "message", message: "(인던전용)유안티광전사 | 원거리 5인 누킹 장판(발사동작) | 공용" }],
		"s-739-1000-1206-0": [{ type: "text", sub_type: "message", message: "(인던전용)유안티광전사 | 원거리 5인 누킹 장판(발사체) | 공용" }],
		"s-739-1000-1207-0": [{ type: "text", sub_type: "message", message: "(인던전용)유안티광전사 | 원거리 5인 누킹 장판(투명npc소환) | 공용" }],
		"s-739-1000-1209-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 모드알람 | ModeAlarm | 노말" }],
		"s-739-1000-1212-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 백무브 | BackMove | 노멀" }],
		"s-739-1000-1214-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 패턴용 | 지면강타 | 2번" }],
		"s-739-1000-1215-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 패턴용 | 지면강타 | 3번" }],
		"s-739-1000-1216-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 패턴용 | 지면강타 | 4번" }],
		"s-739-1000-1217-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 패턴용 | 지면강타 | 5번" }],
		"s-739-1000-1301-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 실험용뿜뿜패턴스킬(근, 중, 원)" }],
		"s-739-1000-1302-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 하늘에 독구름 쏘아올리기 | 공용" }],
		"s-739-1000-1305-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 뿜뿜근원[근]" }],
		"s-739-1000-1306-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 돌면서 점프 후 긁기 | ultraAtk01 | 공용" }],
		"s-739-1000-1307-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 뿜뿜근원[원]" }],
		"s-739-1000-1308-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 돌면서 긁은 후 점프 | ultraAtk01 | 공용" }],
		"s-739-1000-2101-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 기본공격 | Atk01 | 분노" }],
		"s-739-1000-2102-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 사전동작있는돌진이동공격 | MoveAtk | 분노" }],
		"s-739-1000-2103-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 2번찍기공격 | Atk02 | 분노" }],
		"s-739-1000-2104-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 강하게내려찍기공격 | HeavyAtk | 분노" }],
		"s-739-1000-2105-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 원거리물대포공격 | LongAtk | 분노" }],
		"s-739-1000-2106-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 롱무브(근) | LongMove | 분노" }],
		"s-739-1000-2107-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 리액션유발대점프공격 | ReactionAtk | 분노" }],
		"s-739-1000-2108-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 좌회전공격 | RoundAtk | 분노" }],
		"s-739-1000-2109-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 우회전공격 | RoundAtk01 | 분노" }],
		"s-739-1000-2110-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 뒤로빠진후점프덮치기 | UltraAtk01 | 분노" }],
		"s-739-1000-2111-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 롱무브(원) | LongMove | 분노" }],
		"s-739-1000-2112-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 원거리물대포후방공격 | LongAtk | 분노" }],
		"s-739-1000-2113-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 원거리물대포후방공격2타 | LongAtk | 분노" }],
		"s-739-1000-2114-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 원거리물대포후방공격2타 | 2(다이나믹리액션) | LongAtk | 분노" }],
		"s-739-1000-2115-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 원거리물대포공격2타 | LongAtk | 분노" }],
		"s-739-1000-2116-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 원거리물대포공격2타 | 2 | LongAtk | 노말" }],
		"s-739-1000-2117-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 리액션유발대점프공격2타 | ReactionAtk | 분노" }],
		"s-739-1000-2118-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 리액션유발대점프공격2타 | 2 | ReactionAtk | 분노" }],
		"s-739-1000-2119-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 사전동작있는돌진이동공격 | 밀치기 | MoveAtk | 분노" }],
		"s-739-1000-2120-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 원거리물대포후방공격(방막불가) | LongAtk | 분노" }],
		"s-739-1000-2150-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 액티브무브 | Run | 분노" }],
		"s-739-1000-2203-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 사전동작(임시등록 | 제작 미완료) | 분노" }],
		"s-739-1000-2204-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 어그로체인지 | AggroChange | 분노" }],
		"s-739-1000-2209-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 모드알람 | ModeAlarm | 분노" }],
		"s-739-1000-2212-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 백무브 | BackMove | 분노" }],
		"s-739-1000-3104-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 강하게내려찍기공격 | HeavyAtk | 시전" }],
		"s-739-1000-3105-0": [{ type: "text", sub_type: "message", message: "유안티광전사 | 강하게내려찍기공격 | HeavyAtk | 장판" }],
		"s-739-2000-1101-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 기본 공격 | Atk01 | 노말" }],
		"s-739-2000-1102-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 긴 이동 공격 | MoveAtk01 | 노말" }],
		"s-739-2000-1103-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 오른 손 내려 찍기 | Atk02 | 노말" }],
		"s-739-2000-1104-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 양 손 번갈아 내려 찍기 | Atk03 | 노말" }],
		"s-739-2000-1105-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 좌 회전 공격 | RoundAtk01 | 노말" }],
		"s-739-2000-1106-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 우 회전 공격(뒤돌아봄) | RoundAtk02 | 노말" }],
		"s-739-2000-1107-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 죽은척 하다 회전 공격 | RoundAtk03 | 노말" }],
		"s-739-2000-1108-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 연속 회전 공격 | HeavyAtk01 | 노말" }],
		"s-739-2000-1109-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 3연속 발사체 공격 | HeavyAtk02 | 노말" }],
		"s-739-2000-1110-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 짧은 이동 공격 | MoveAtk02 | 노말" }],
		"s-739-2000-1111-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 연속 내려 찍기 | ReactionAtk01 | 노말" }],
		"s-739-2000-1112-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 발사체 공격 | ReactionAtk02 | 노말" }],
		"s-739-2000-1113-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 강하게 내려 찍기[방막불가] | ReactionAtk03 | 노말" }],
		"s-739-2000-1114-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 빠른 발사체 공격 | LongRangeAtk01 | 노말" }],
		"s-739-2000-1115-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 폭풍회오리 | UltraAtk | 노말[방막불가]" }],
		"s-739-2000-1116-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | (인던전용)범위지속성DOT마법 | 발사동작 | 노말" }],
		"s-739-2000-1117-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | (인던전용)범위지속성 DOT마법 | 발사체 | 노말" }],
		"s-739-2000-1118-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | (인던전용)3연속 대포 공격 | HeavyAtk02 | 노말" }],
		"s-739-2000-1119-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 전방폭격 | BackAtk02 | Start,End02 | 노말" }],
		"s-739-2000-1120-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 후방폭격 | BackAtk02 | Start,End01 | 노말" }],
		"s-739-2000-1150-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 이동 공격 | RunAttackSkill | 노말" }],
		"s-739-2000-1151-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | (인던전용)액티브무브 | RunAttackSkill | 노말" }],
		"s-739-2000-1201-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 그로기 | Groggy" }],
		"s-739-2000-1202-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 리액션 | Reaction" }],
		"s-739-2000-1203-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 스킬 사전 동작" }],
		"s-739-2000-1204-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 어그로 체인지 | Aggrochange" }],
		"s-739-2000-1209-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 5초 대기 | aggrochange" }],
		"s-739-2000-1210-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 5초 대기 | Wait" }],
		"s-739-2000-1211-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 스폰 동작 | SpawnAniForBattleStart" }],
		"s-739-2000-1212-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 백무브 |  BackMove" }],
		"s-739-2000-1213-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 회오리 사전 모션 | HeavyAtk02 | 공용" }],
		"s-739-2000-1301-0": [{ type: "text", sub_type: "message", message: "블러드골렘 | 자연회복 | Wait | 노멀/분노공용" }],
		"s-739-2000-1302-0": [{ type: "text", sub_type: "message", message: "(검은틈전용)블러드 골렘 | 광폭화이상상태버프걸기 | aggrochange | 공용" }],
		"s-739-2000-1303-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 오른손 높이 들어 내려치기 | LongAtk02 | 공용" }],
		"s-739-2000-1304-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 다중 포획 | LongAtk02 | 공용" }],
		"s-739-2000-1305-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 다중 포획 후 직선 공격 | knockback | 공용" }],
		"s-739-2000-2101-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 기본 공격 | Atk01 | 분노" }],
		"s-739-2000-2102-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 긴 이동 공격 | MoveAtk01 | 분노" }],
		"s-739-2000-2103-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 오른 손 내려 찍기 | Atk02 | 분노" }],
		"s-739-2000-2104-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 양 손 번갈아 내려 찍기 | Atk03 | 분노" }],
		"s-739-2000-2105-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 좌 회전 공격 | RoundAtk01 | 분노" }],
		"s-739-2000-2106-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 우 회전 공격 | RoundAtk0 | 분노" }],
		"s-739-2000-2107-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 죽은척 하다 회전 공격 | RoundAtk03 | 분노" }],
		"s-739-2000-2108-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 연속 회전 공격 | HeavyAtk01 | 분노" }],
		"s-739-2000-2109-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 3연속 발사체 공격 | HeavyAtk02 | 분노" }],
		"s-739-2000-2110-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 짧은 이동 공격 | MoveAtk02 | 분노" }],
		"s-739-2000-2111-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 연속 내려 찍기 | ReactionAtk01 | 분노" }],
		"s-739-2000-2112-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 발사체 공격 | ReactionAtk02 | 분노" }],
		"s-739-2000-2113-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 강하게 내려 찍기(방막불가) | ReactionAtk03 | 분노" }],
		"s-739-2000-2114-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 빠른 발사체 공격 | LongRangeAtk01 | 분노" }],
		"s-739-2000-2115-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 폭풍회오리 | UltraAtk | 분노" }],
		"s-739-2000-2116-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | (인던전용)범위지속성DOT마법 | 발사동작 | 분노" }],
		"s-739-2000-2117-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | (인던전용)범위지속성 DOT마법 | 발사체 | 분노" }],
		"s-739-2000-2118-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | (인던전용)3연속 대포 공격 | HeavyAtk02 | 분노" }],
		"s-739-2000-2119-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 전방폭격 | BackAtk02 | Start,End02 | 노말" }],
		"s-739-2000-2120-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 후방폭격 | BackAtk02 | Start,End01 | 노말" }],
		"s-739-2000-2150-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 이동 공격 | RunAttackSkill | 분노" }],
		"s-739-2000-2151-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | (인던전용)액티브무브 | RunAttackSkill | 분노" }],
		"s-739-2000-2203-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 스킬 사전 동작 | 분노" }],
		"s-739-2000-2204-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 어그로 체인지 | Aggrochange | 분노" }],
		"s-739-2000-2209-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 3초 대기 | Wait | 분노" }],
		"s-739-2000-2210-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 5초 대기 | Wait | 분노" }],
		"s-739-2000-2211-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 스폰 동작 | SpawnAniForBattleStart | 분노" }],
		"s-739-2000-2212-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 백무브 |  BackMove | 분노" }],
		"s-739-3000-1101-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)오른손평타 | Atk01 | 노말" }],
		"s-739-3000-1102-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)왼손평타 | Atk02 | 노말" }],
		"s-739-3000-1103-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)양손평타 | Atk03 | Start,Atk03 | End | 노말" }],
		"s-739-3000-1104-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)양손평타콤보 | Atk03 | Start,Atk03 | Combo | 노말" }],
		"s-739-3000-1105-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)우측라운드어택 | RoundAtk01 | 노말" }],
		"s-739-3000-1106-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)좌측라운드어택 | RoundAtk02 | 노말" }],
		"s-739-3000-1107-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)무브어택(경직) | MoveAtk | Start,MoveAtk | Loop,MoveAtk | End | 노말" }],
		"s-739-3000-1108-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)무브어택콤보 | MoveAtk01 | Start,MoveAtk01 | Loop,MoveAtk01 | Combo | 노말" }],
		"s-739-3000-1109-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)전방 2회+1회 할퀴기 | HeavyAtk01 | StartEnd01 | 노말" }],
		"s-739-3000-1110-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)전방2회+후방1회 할퀴기+HeavyAtk01 | StartLoopEnd02 | 노말" }],
		"s-739-3000-1111-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)전방2회+후방1회 할퀴기(발사체) | 노말[방막불가]" }],
		"s-739-3000-1112-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)주먹 내지르기 | HeavyAtk02 | 노말" }],
		"s-739-3000-1113-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)점프후착지 | LongAtk01 | StartEnd | 노말" }],
		"s-739-3000-1114-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)양손평타콤보(발사체) | 노말[방막불가]" }],
		"s-739-3000-1115-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)포효 | ModeAlarm01 | End | 노말[방막불가]" }],
		"s-739-3000-1116-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)2연타 | MoveAtk | Loop |  노말" }],
		"s-739-3000-1117-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)순간이동 일격타 | HeavyAtk02 |  노말[회피불가][방막불가][무적불가]" }],
		"s-739-3000-1118-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)갈갈이 | MoveAtk01 | Combo01 | 노말" }],
		"s-739-3000-1119-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)2대치기 | LongAtk02 | End01 | 노말" }],
		"s-739-3000-1150-0": [{ type: "text", sub_type: "message", message: "변이된사자 | 액티브무브 | ActiveMoveLoop | 노말" }],
		"s-739-3000-1151-0": [{ type: "text", sub_type: "message", message: "변이된사자 | 숨어서 액티브무브 | ActiveMoveLoop | 노말" }],
		"s-739-3000-1161-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)오른손평타 | Atk01 | 노말" }],
		"s-739-3000-1162-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)왼손평타 | Atk02 | 노말" }],
		"s-739-3000-1163-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)양손평타 | Atk03 | Start,Atk03 | End | 노말" }],
		"s-739-3000-1164-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)양손평타콤보 | Atk03 | Start,Atk03 | Combo | 노말" }],
		"s-739-3000-1165-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)우측라운드어택 | RoundAtk01 | 노말" }],
		"s-739-3000-1166-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)좌측라운드어택 | RoundAtk02 | 노말" }],
		"s-739-3000-1167-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)무브어택 | MoveAtk | Start,MoveAtk | Loop,MoveAtk | End | 노말" }],
		"s-739-3000-1168-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)무브어택콤보 | MoveAtk01 | Start,MoveAtk01 | Loop,MoveAtk01 | Combo | 노말" }],
		"s-739-3000-1169-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)전방 2회+1회 할퀴기 | HeavyAtk01 | StartEnd01 | 노말" }],
		"s-739-3000-1170-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)전방2회+후방1회 할퀴기+HeavyAtk01 | StartLoopEnd02 | 노말" }],
		"s-739-3000-1171-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)전방2회+후방1회 할퀴기(발사체) | 노말[방막불가]" }],
		"s-739-3000-1172-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)주먹 내지르기 | HeavyAtk02 | 노말" }],
		"s-739-3000-1173-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)점프후착지 | LongAtk01 | StartEnd | 노말" }],
		"s-739-3000-1174-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)양손평타콤보(발사체) | 노말[방막불가]" }],
		"s-739-3000-1175-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)포효 | ModeAlarm01 | End | 노말[방막불가]" }],
		"s-739-3000-1176-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)2연타 | MoveAtk | Loop |  노말" }],
		"s-739-3000-1177-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)순간이동 일격타 | HeavyAtk02 |  노말[회피불가][방막불가][무적불가]" }],
		"s-739-3000-1178-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)갈갈이 | MoveAtk01 | Combo01 | 노말" }],
		"s-739-3000-1179-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)2대치기 | LongAtk02 | End01 | 노말" }],
		"s-739-3000-1180-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (3페이즈)누킹 후 찢기 | Atk03 | Combo | 노멀" }],
		"s-739-3000-1201-0": [{ type: "text", sub_type: "message", message: "변이된사자 | 변신 | ModeAlarm | 공용[방막불가][무적불가]" }],
		"s-739-3000-1202-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)뒤로 점프 | BackMove | 공용[투명화]" }],
		"s-739-3000-1203-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (공용)짧은 포효 | ModeAlarm | End | 공용[회피불가][방막불가][무적불가]" }],
		"s-739-3000-1204-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (공용)순차누킹 | 점프 뛰어오르기 | longAtk01 | Start | 공용" }],
		"s-739-3000-1205-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (공용)순차누킹 | 점프 착지 | longAtk01 | End | 공용" }],
		"s-739-3000-1206-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (공용)순차누킹 이상상태 전파 | LongAtk01 | Loop02 | 공용[회피불가][방막불가][무적불가]" }],
		"s-739-3000-1207-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (공용)누킹 전 짧은 포효 | ModeAlarm | End | 공용" }],
		"s-739-3000-1209-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (공용)일반 | 순간이동 | longAtk02 | Loop02 | 분노" }],
		"s-739-3000-1210-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (공용)2단대쉬용 | 순간이동 | longAtk02 | Loop02 | 분노[회피불가][방막불가][무적불가]" }],
		"s-739-3000-1211-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)뒤로 점프 | BackMove | 공용" }],
		"s-739-3000-1212-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (3페이즈)투명화 | 누킹 | ModeAlarm | End | 공용[회피불가][무적불가]" }],
		"s-739-3000-1213-0": [{ type: "text", sub_type: "message", message: "변이된사자 | 3페이즈 진입 | ModeAlarm | 공용" }],
		"s-739-3000-1301-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)대쉬어택 | 어텐션 | 공용" }],
		"s-739-3000-1302-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)대쉬어택 | 어텐션 | 공용" }],
		"s-739-3000-1306-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)대쉬어택 | 어택 | longAtk02 | End01 | 공용[방막불가]" }],
		"s-739-3000-1307-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)대쉬어택 | 어택 | longAtk02 | End01 | 공용[방막불가]" }],
		"s-739-3000-1308-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)대쉬어택 | 복귀어텐션 | LongAtk02 | Dash | 공용" }],
		"s-739-3000-1309-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)대쉬어택 | 복귀어텐션 | LongAtk02 | Dash | 공용" }],
		"s-739-3000-1310-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)대쉬어택 | 어택순간이동 | 공용[방막불가][무적불가]" }],
		"s-739-3000-1311-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)대쉬어택 | 어택순간이동 | 공용[방막불가][무적불가]" }],
		"s-739-3000-1312-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)대쉬어택 | 근어택순간이동 | MoveAtk01 | Combo01 | 공용[방막불가][무적불가]" }],
		"s-739-3000-1313-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)대쉬어택 | 근어택순간이동 | MoveAtk01 | Combo01 | 공용[방막불가][무적불가]" }],
		"s-739-3000-1314-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)대쉬어택 | 양손평타 | Atk03 | Start,Atk03 | End | 노말[방막불가][무적불가]" }],
		"s-739-3000-1315-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)대쉬어택 | 양손평타 | Atk03 | Start,Atk03 | End | 노말[방막불가][무적불가]" }],
		"s-739-3000-1316-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)점프해서 지면 내려찍기 | UltraAtk01 | 공용" }],
		"s-739-3000-1317-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)점프해서 지면 내려찍기 | UltraAtk01 | 공용" }],
		"s-739-3000-2101-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)오른손평타 | Atk01 | 분노" }],
		"s-739-3000-2102-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)왼손평타 | Atk02 | 분노" }],
		"s-739-3000-2103-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)양손평타 | Atk03 | Start,Atk03 | End | 분노" }],
		"s-739-3000-2104-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)양손평타콤보 | Atk03 | Start,Atk03 | Combo | 분노" }],
		"s-739-3000-2105-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)우측라운드어택 | RoundAtk01 | 분노" }],
		"s-739-3000-2106-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)좌측라운드어택 | RoundAtk02 | 분노" }],
		"s-739-3000-2107-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)무브어택 | MoveAtk | Start,MoveAtk | Loop,MoveAtk | End | 분노" }],
		"s-739-3000-2108-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)무브어택콤보 | MoveAtk01 | Start,MoveAtk01 | Loop,MoveAtk01 | Combo | 분노" }],
		"s-739-3000-2109-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)전방 2회+1회 할퀴기 | HeavyAtk01 | StartEnd01 | 분노" }],
		"s-739-3000-2110-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)전방2회+후방1회 할퀴기+HeavyAtk01 | StartLoopEnd02 | 분노" }],
		"s-739-3000-2111-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)전방2회+후방1회 할퀴기(발사체) | 분노[방막불가]" }],
		"s-739-3000-2112-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)주먹 내지르기 | HeavyAtk02 | 분노" }],
		"s-739-3000-2113-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)점프후착지 | LongAtk01 | StartEnd | 분노" }],
		"s-739-3000-2114-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)양손평타콤보(발사체) | 분노" }],
		"s-739-3000-2115-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)포효 | ModeAlarm01 | End | 분노" }],
		"s-739-3000-2116-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)2연타 | MoveAtk | Loop |  분노" }],
		"s-739-3000-2117-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)순간이동 일격타 | HeavyAtk02 |  분노[회피불가][방막불가][무적불가]" }],
		"s-739-3000-2118-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)갈갈이 | MoveAtk01 | Combo01 | 노말" }],
		"s-739-3000-2119-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (맨손)2대치기 | LongAtk02 | End01 | 분노" }],
		"s-739-3000-2150-0": [{ type: "text", sub_type: "message", message: "변이된사자 | 액티브무브 | ActiveMoveLoop | 분노" }],
		"s-739-3000-2151-0": [{ type: "text", sub_type: "message", message: "변이된사자 | 숨어서 액티브무브 | LongAtk01 | Loop | 분노" }],
		"s-739-3000-2161-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)오른손평타 | Atk01 | 분노" }],
		"s-739-3000-2162-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)왼손평타 | Atk02 | 분노" }],
		"s-739-3000-2163-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)양손평타 | Atk03 | Start,Atk03 | End | 분노" }],
		"s-739-3000-2164-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)양손평타콤보 | Atk03 | Start,Atk03 | Combo | 분노" }],
		"s-739-3000-2165-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)우측라운드어택 | RoundAtk01 | 분노" }],
		"s-739-3000-2166-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)좌측라운드어택 | RoundAtk02 | 분노" }],
		"s-739-3000-2167-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)무브어택 | MoveAtk | Start,MoveAtk | Loop,MoveAtk | End | 분노" }],
		"s-739-3000-2168-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)무브어택콤보 | MoveAtk01 | Start,MoveAtk01 | Loop,MoveAtk01 | Combo | 분노" }],
		"s-739-3000-2169-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)전방 2회+1회 할퀴기 | HeavyAtk01 | StartEnd01 | 분노" }],
		"s-739-3000-2170-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)전방2회+후방1회 할퀴기+HeavyAtk01 | StartLoopEnd02 | 분노" }],
		"s-739-3000-2171-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)전방2회+후방1회 할퀴기(발사체) | 분노[방막불가]" }],
		"s-739-3000-2172-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)주먹 내지르기 | HeavyAtk02 | 분노" }],
		"s-739-3000-2173-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)점프후착지 | LongAtk01 | StartEnd | 분노" }],
		"s-739-3000-2174-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)양손평타콤보(발사체) | 분노[방막불가]" }],
		"s-739-3000-2175-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)포효 | ModeAlarm01 | End | 분노" }],
		"s-739-3000-2176-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)2연타 | MoveAtk | Loop |  분노" }],
		"s-739-3000-2177-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)순간이동 일격타 | HeavyAtk02 |  분노[회피불가][방막불가][무적불가]" }],
		"s-739-3000-2178-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)갈갈이 | MoveAtk01 | Combo01 | 분노" }],
		"s-739-3000-2179-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (클로)2대치기 | LongAtk02 | End01 | 분노" }],
		"s-739-3000-2180-0": [{ type: "text", sub_type: "message", message: "변이된사자 | (3페이즈)누킹 후 찢기 | Atk03 | Combo | 노멀" }],
		"s-739-5001-1101-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk01 | Low(오른손 기본 공격 | 노멀 텐션)" }],
		"s-739-5001-1102-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk02 | Low(더블 래리어트 회전 공격 | 노멀 텐션)" }],
		"s-739-5001-1103-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk03 | Low(백점프 후 동료 공격력 버프 | 노멀 텐션)" }],
		"s-739-5001-1104-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk04 | Low(폭탄 투척 공격 | 노멀 텐션)" }],
		"s-739-5001-1105-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk05 | Low(오른손 길게 전진 공격 | 노멀 텐션)" }],
		"s-739-5001-1106-0": [{ type: "text", sub_type: "message", message: "오칸 | 돌진공격 | UltraAtk01 | 노멀" }],
		"s-739-5001-1201-0": [{ type: "text", sub_type: "message", message: "오칸 50% 헉헉" }],
		"s-739-5001-1202-0": [{ type: "text", sub_type: "message", message: "오칸 20% 헉헉" }],
		"s-739-5001-1203-0": [{ type: "text", sub_type: "message", message: "오칸 사전동작 | 노말" }],
		"s-739-5001-1204-0": [{ type: "text", sub_type: "message", message: "오칸 어그로 체인지" }],
		"s-739-5001-1207-0": [{ type: "text", sub_type: "message", message: "오칸 왼쪽 | 게걸음" }],
		"s-739-5001-1208-0": [{ type: "text", sub_type: "message", message: "오칸 오른쪽 게걸음" }],
		"s-739-5001-1209-0": [{ type: "text", sub_type: "message", message: "오칸 jumpevasion01 | Low(좌측 점프 회피 | 노멀 텐션)" }],
		"s-739-5001-1210-0": [{ type: "text", sub_type: "message", message: "오칸 jumpevasion02 | Low(우측 점프 회피 | 노멀 텐션)" }],
		"s-739-5001-1301-0": [{ type: "text", sub_type: "message", message: "(인던전용)오칸 | 자폭 | ATk03" }],
		"s-739-5001-1302-0": [{ type: "text", sub_type: "message", message: "(인던전용)오칸 | 이상상태디버프공격(공포) | Angry | Q" }],
		"s-739-5001-1303-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk04 | (필드이벤트)알람있는 폭탄 투척" }],
		"s-739-5001-2101-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk01 | 오른손 기본 공격 (분노)" }],
		"s-739-5001-2102-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk02 | 더블 래리어트 회전 공격 (분노)" }],
		"s-739-5001-2103-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk03 | Low | 백점프 후 동료 공격력 버프 (분노)" }],
		"s-739-5001-2104-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk04 폭탄 투척 공격 (분노)" }],
		"s-739-5001-2105-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk05 오른손 길게 전진 공격 (분노)" }],
		"s-739-5001-2106-0": [{ type: "text", sub_type: "message", message: "오칸 | 돌진공격 | UltraAtk01 | 분노" }],
		"s-739-5001-2201-0": [{ type: "text", sub_type: "message", message: "오칸 50% 헉헉 (분노)" }],
		"s-739-5001-2202-0": [{ type: "text", sub_type: "message", message: "오칸 20% 헉헉 (분노)" }],
		"s-739-5001-2203-0": [{ type: "text", sub_type: "message", message: "오칸 사전동작 | 분노)" }],
		"s-739-5001-2204-0": [{ type: "text", sub_type: "message", message: "오칸 어그로 체인지 (분노)" }],
		"s-739-5001-2207-0": [{ type: "text", sub_type: "message", message: "오칸 왼쪽 | 게걸음 (분노)" }],
		"s-739-5001-2208-0": [{ type: "text", sub_type: "message", message: "오칸 오른쪽 게걸음 (분노)" }],
		"s-739-5001-2209-0": [{ type: "text", sub_type: "message", message: "오칸 jumpevasion01 | (좌측 점프 회피) (분노)" }],
		"s-739-5001-2210-0": [{ type: "text", sub_type: "message", message: "오칸 jumpevasion02 | (우측 점프 회피) (분노)" }],
		"s-739-73910-1301-0": [{ type: "text", sub_type: "message", message: "중앙 | 투명npc | 대기 | 공용" }],
		"s-739-73910-1302-0": [{ type: "text", sub_type: "message", message: "중앙 | 투명npc | 인화물질 광역기(발사동작) | 공용" }],
		"s-739-73910-1303-0": [{ type: "text", sub_type: "message", message: "중앙 | 투명npc | 광역기(발사체) 대상스턴 | 공용" }],
		"s-739-73910-1304-0": [{ type: "text", sub_type: "message", message: "중앙 | 투명npc | 광역기(발사체)광역폭발 | 공용" }],
		"s-739-73911-1301-0": [{ type: "text", sub_type: "message", message: "불기둥 | 투명npc | 대기 | 공용" }],
		"s-739-73911-1305-0": [{ type: "text", sub_type: "message", message: "불기둥 | 투명npc | 불기둥 | 공용" }],
		"s-739-73920-1301-0": [{ type: "text", sub_type: "message", message: "투석기돌 | 활성화 대기 | 공용" }],
		"s-739-73920-1306-0": [{ type: "text", sub_type: "message", message: "투석기돌 | 0도 폭파 | 공용[회피불가][방막불가][무적불가]" }],
		"s-739-73920-1307-0": [{ type: "text", sub_type: "message", message: "투석기돌 | 120도 폭파 | 공용[회피불가][방막불가][무적불가]" }],
		"s-739-73920-1308-0": [{ type: "text", sub_type: "message", message: "투석기돌 | 240도 폭파 | 공용[회피불가][방막불가][무적불가]" }],
		"s-739-73921-1301-0": [{ type: "text", sub_type: "message", message: "투명npc | 투석기 대기 | 공용" }],
		"s-739-73921-1302-0": [{ type: "text", sub_type: "message", message: "투명npc | 투석기 활성화 | 공용" }],
		"s-739-73921-1309-0": [{ type: "text", sub_type: "message", message: "투명npc | 투석기 투석누킹 | 공용" }],
		"s-739-73921-1310-0": [{ type: "text", sub_type: "message", message: "투명npc | 투석누킹(발사체) | 투석기스폰 | 공용" }],
		"s-739-73922-1301-0": [{ type: "text", sub_type: "message", message: "투명npc | 투석기 대기 | 공용" }],
		"s-739-73922-1302-0": [{ type: "text", sub_type: "message", message: "투명npc | 투석기 활성화 | 공용" }],
		"s-739-73922-1309-0": [{ type: "text", sub_type: "message", message: "투명npc | 투석기 투석누킹 | 공용" }],
		"s-739-73922-1310-0": [{ type: "text", sub_type: "message", message: "투명npc | 투석누킹(발사체) | 투석기스폰 | 공용" }],
		"s-739-73923-1301-0": [{ type: "text", sub_type: "message", message: "투명npc | 투석기 대기 | 공용" }],
		"s-739-73923-1302-0": [{ type: "text", sub_type: "message", message: "투명npc | 투석기 활성화 | 공용" }],
		"s-739-73923-1309-0": [{ type: "text", sub_type: "message", message: "투명npc | 투석기 투석누킹 | 공용" }],
		"s-739-73923-1310-0": [{ type: "text", sub_type: "message", message: "투명npc | 투석누킹(발사체) | 투석기스폰 | 공용[회피불가][방막불가][무적불가]" }],
		"s-739-73924-1301-0": [{ type: "text", sub_type: "message", message: "투명npc | 투석기 대기 | 공용" }],
		"s-739-73924-1302-0": [{ type: "text", sub_type: "message", message: "투명npc | 투석기 활성화 | 공용" }],
		"s-739-73924-1309-0": [{ type: "text", sub_type: "message", message: "투명npc | 투석기 투석누킹 | 공용" }],
		"s-739-73924-1310-0": [{ type: "text", sub_type: "message", message: "투명npc | 투석누킹(발사체) | 투석기스폰 | 공용[회피불가][방막불가][무적불가]" }],
		"s-739-73925-1301-0": [{ type: "text", sub_type: "message", message: "투명npc | 폭탄2 대기 | 공용" }],
		"s-739-73925-1302-0": [{ type: "text", sub_type: "message", message: "투명npc | 폭탄2 스폰 후 대기 | 공용[패런츠아이디 삭제]" }],
		"s-739-73925-1311-0": [{ type: "text", sub_type: "message", message: "투명npc | 폭탄2 폭발 | 공용[회피불가][방막불가][무적불가]" }],
		"s-739-73925-1323-0": [{ type: "text", sub_type: "message", message: "투명npc | 폭탄2 추격 | 공용" }],
		"s-739-73926-1301-0": [{ type: "text", sub_type: "message", message: "투석기돌 | 활성화 대기 | 공용" }],
		"s-739-73926-1313-0": [{ type: "text", sub_type: "message", message: "투석기 | 끈끈이 | 0도 폭파 | 공용[회피불가][방막불가][무적불가]" }],
		"s-739-73926-1314-0": [{ type: "text", sub_type: "message", message: "투석기 | 끈끈이 | 120도 폭파 | 공용[회피불가][방막불가][무적불가]" }],
		"s-739-73926-1315-0": [{ type: "text", sub_type: "message", message: "투석기 | 끈끈이 | 240도 폭파 | 공용[회피불가][방막불가][무적불가]" }],
		"s-739-73927-1312-0": [{ type: "text", sub_type: "message", message: "투명npc | 폭탄4 십자폭탄 | 공용[회피불가][방막불가][무적불가]" }],
		"s-739-73928-1301-0": [{ type: "text", sub_type: "message", message: "2네임드 | 투명NPC | 대기" }],
		"s-739-73928-1316-0": [{ type: "text", sub_type: "message", message: "2네임드 | 투명NPC | 혼돈의회오리" }],
		"s-739-73929-1301-0": [{ type: "text", sub_type: "message", message: "2네임드 | 중앙 | 투명npc | 대기 | 공용" }],
		"s-739-73931-1317-0": [{ type: "text", sub_type: "message", message: "투명npc | 5인순차누킹 | 노말[방막불가][무적불가]" }],
		"s-739-73932-1318-0": [{ type: "text", sub_type: "message", message: "투명npc | 5인순차누킹 | 노말[방막불가][무적불가]" }],
		"s-739-73933-1319-0": [{ type: "text", sub_type: "message", message: "투명npc | 5인순차누킹 | 노말[방막불가][무적불가]" }],
		"s-739-73934-1320-0": [{ type: "text", sub_type: "message", message: "투명npc | 5인순차누킹 | 노말[방막불가][무적불가]" }],
		"s-739-73935-1321-0": [{ type: "text", sub_type: "message", message: "투명npc | 5인순차누킹 | 노말[방막불가][무적불가]" }]
	};
};