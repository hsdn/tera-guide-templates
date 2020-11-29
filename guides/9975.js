// Kelsaik's Raid (20-Person)


module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		"s-975-1000-1101-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 오른발화염공격 | Atk01 | d | 노멀" }],
		"s-975-1000-1102-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 왼발냉기공격 | Atk02 | d | 노멀" }],
		"s-975-1000-1103-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 꼬리공격 | BackAtk | 노멀" }],
		"s-975-1000-1104-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 주변광역냉기마법 | HeavyAtk01 | 노멀" }],
		"s-975-1000-1105-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 주변광역화염마법 | HeavyAtk02 | 노멀" }],
		"s-975-1000-1106-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 전방돌진공격 | MoveAtk | 노멀" }],
		"s-975-1000-1107-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 주변리액션공격 | ReactionAtk | 노멀" }],
		"s-975-1000-1108-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 회전공격(좌부터) | RoundAtk01 | 노멀" }],
		"s-975-1000-1109-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 회전공격(우부터) | RoundAtk02 | 노멀" }],
		"s-975-1000-1110-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 오른발화염DOT공격 | Atk01 | 발사동작 | 노멀" }],
		"s-975-1000-1111-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 오른발화염DOT공격 | Atk01 | 발사체 | 노멀" }],
		"s-975-1000-1112-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 왼발냉기DOT공격 | Atk02 | 발사동작 | 노멀" }],
		"s-975-1000-1113-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 왼발냉기DOT공격 | Atk02 | 발사체 | 노멀" }],
		"s-975-1000-1114-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 전방화염DOT마법 | HeavyAtk02 | 발사동작 | 노멀" }],
		"s-975-1000-1115-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 전방화염DOT마법 | HeavyAtk02 | 발사체 | 노멀" }],
		"s-975-1000-1116-0": [{ type: "text", sub_type: "message", message: "켈사이크 | (화염브레스용)액티브무브 | Run | 노멀" }],
		"s-975-1000-1117-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 화염브레스 | breath | 노멀" }],
		"s-975-1000-1118-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 고공낙하 | jumpAtk | 노멀" }],
		"s-975-1000-1119-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 약한포효 | modealarm | 노멀" }],
		"s-975-1000-1120-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 강한포효 | Roar | 노멀" }],
		"s-975-1000-1121-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 오브젝트소환 | SpwanNpc | 노멀" }],
		"s-975-1000-1122-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 부하소환 | reactionAtk | 노멀" }],
		"s-975-1000-1123-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 자기버프 | Wait | 노멀" }],
		"s-975-1000-1124-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 약한 고공낙하 | 노멀" }],
		"s-975-1000-1125-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 근거리금지 | 발동 | SpawnNpc | 노멀" }],
		"s-975-1000-1126-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 원거리금지 | 발동 | SpawnNpc | 노멀" }],
		"s-975-1000-1127-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 회복금지 | 발동 | SpawnNpc | 노멀" }],
		"s-975-1000-1128-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 근거리금지 | 종료 | SpawnNpc | 노멀" }],
		"s-975-1000-1129-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 원거리금지 | 종료 | SpawnNpc | 노멀" }],
		"s-975-1000-1130-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 회복금지 | 종료 | SpawnNpc | 노멀" }],
		"s-975-1000-1131-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 광역1인스턴 | aggrochange | 노말" }],
		"s-975-1000-1132-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 오브젝트소환(475) | aggrochange | 노말" }],
		"s-975-1000-1133-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 오브젝트소환(975) | aggrochange | 노말" }],
		"s-975-1000-1134-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 광역1인노예 | aggrochange | 노말" }],
		"s-975-1000-1150-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 액티브무브 | Run | 노멀" }],
		"s-975-1000-1201-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 헉헉동작 | Groggy | 노멀" }],
		"s-975-1000-1204-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 어그로체인지 | aggrochange | 노멀" }],
		"s-975-1000-1205-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 전방점프회피 | Jumpevasion | 노멀" }],
		"s-975-1000-1206-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 후방점프회피 | Jumpevasion | 노멀" }],
		"s-975-1000-1209-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 모드알람 | ModeAlarm | 노멀" }],
		"s-975-1000-1210-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 스폰동작 | Spawn | 노멀" }],
		"s-975-1000-1302-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 무적버프 | wait | 노멀" }],
		"s-975-1000-2101-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 오른발화염공격 | Atk01 | d | 분노" }],
		"s-975-1000-2102-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 왼발냉기공격 | Atk02 | d | 분노" }],
		"s-975-1000-2103-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 꼬리공격 | BackAtk | 분노" }],
		"s-975-1000-2104-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 주변광역냉기마법 | HeavyAtk01 | 분노" }],
		"s-975-1000-2105-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 주변광역화염마법 | HeavyAtk02 | 분노" }],
		"s-975-1000-2106-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 전방돌진공격 | MoveAtk | 분노" }],
		"s-975-1000-2107-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 주변리액션공격 | ReactionAtk | 분노" }],
		"s-975-1000-2108-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 회전공격(좌부터) | RoundAtk01 | 분노" }],
		"s-975-1000-2109-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 회전공격(우부터) | RoundAtk02 | 분노" }],
		"s-975-1000-2110-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 오른발화염DOT공격 | Atk01 | 발사동작 | 분노" }],
		"s-975-1000-2111-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 오른발화염DOT공격 | Atk01 | 발사체 | 분노" }],
		"s-975-1000-2112-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 왼발냉기DOT공격 | Atk02 | 발사동작 | 분노" }],
		"s-975-1000-2113-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 왼발냉기DOT공격 | Atk02 | 발사체 | 분노" }],
		"s-975-1000-2114-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 전방화염DOT마법 | HeavyAtk02 | 발사동작 | 분노" }],
		"s-975-1000-2115-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 전방화염DOT마법 | HeavyAtk02 | 발사체 | 분노" }],
		"s-975-1000-2116-0": [{ type: "text", sub_type: "message", message: "켈사이크 | (화염브레스용)액티브무브 | Run | 분노" }],
		"s-975-1000-2117-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 화염브레스 | breath | 분노" }],
		"s-975-1000-2118-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 고공낙하 | jumpAtk | 분노" }],
		"s-975-1000-2119-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 약한포효 | modealarm | 분노" }],
		"s-975-1000-2120-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 강한포효 | Roar | 분노" }],
		"s-975-1000-2121-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 오브젝트소환 | SpwanNpc | 분노" }],
		"s-975-1000-2122-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 부하소환 | reactionAtk | 분노" }],
		"s-975-1000-2123-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 자기버프 | Wait | 분노" }],
		"s-975-1000-2124-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 약한 고공낙하 | 분노" }],
		"s-975-1000-2125-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 근거리금지 | 발동 | SpawnNpc | 분노" }],
		"s-975-1000-2126-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 원거리금지 | 발동 | SpawnNpc | 분노" }],
		"s-975-1000-2127-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 회복금지 | 발동 | SpawnNpc | 분노" }],
		"s-975-1000-2128-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 근거리금지 | 종료 | SpawnNpc | 분노" }],
		"s-975-1000-2129-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 원거리금지 | 종료 | SpawnNpc | 분노" }],
		"s-975-1000-2130-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 회복금지 | 종료 | SpawnNpc | 분노" }],
		"s-975-1000-2131-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 광역1인스턴 | aggrochange | 노말" }],
		"s-975-1000-2132-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 오브젝트소환(475) | aggrochange | 노말" }],
		"s-975-1000-2133-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 오브젝트소환(975) | aggrochange | 노말" }],
		"s-975-1000-2134-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 광역1인노예 | aggrochange | 분노" }],
		"s-975-1000-2150-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 액티브무브 | Run | 분노" }],
		"s-975-1000-2201-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 헉헉동작 | Groggy | 분노" }],
		"s-975-1000-2204-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 어그로체인지 | aggrochange | 분노" }],
		"s-975-1000-2205-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 전방점프회피 | Jumpevasion | 분노" }],
		"s-975-1000-2206-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 후방점프회피 | Jumpevasion | 분노" }],
		"s-975-1000-2209-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 모드알람 | ModeAlarm | 분노" }],
		"s-975-1000-2210-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 스폰동작 | Spawn | 분노" }],
		"s-975-1000-2302-0": [{ type: "text", sub_type: "message", message: "켈사이크 | 무적버프 | wait | 분노" }],
		"s-975-2000-1101-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 1콤보 | combo1 | 노말" }],
		"s-975-2000-1103-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 방패방어 | Defence | 노말" }],
		"s-975-2000-1104-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 강력한돌진 | screwThrough | 노말" }],
		"s-975-2000-1105-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 방패치기 | ShieldStrike | 노말" }],
		"s-975-2000-1106-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 반격찌르기 | Riposte | 노말" }],
		"s-975-2000-1110-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 2콤보 | combo2 | 노말" }],
		"s-975-2000-1111-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 3콤보 | combo3 | 노말" }],
		"s-975-2000-1201-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 헉헉50% | DyingWait" }],
		"s-975-2000-1202-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 헉헉20% | DyingWait" }],
		"s-975-2000-1204-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 어그로체인지 | aggrochange | 노말" }],
		"s-975-2000-1207-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 좌걸음 | SideWalk | left | 노말" }],
		"s-975-2000-1208-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 우걸음 | SideWalk | right | 노말" }],
		"s-975-2000-1300-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 석상전용스킬 | aggrochange | 노말" }],
		"s-975-2000-1301-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 무적버프 | Wait | 노말" }],
		"s-975-2000-2101-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 1콤보 | combo1 | 분노" }],
		"s-975-2000-2103-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 방패방어 | Defence | 분노" }],
		"s-975-2000-2104-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 강력한돌진 | screwThrough | 분노" }],
		"s-975-2000-2105-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 방패치기 | ShieldStrike | 분노" }],
		"s-975-2000-2106-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 반격찌르기 | Riposte | 분노" }],
		"s-975-2000-2110-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 2콤보 | combo2 | 분노" }],
		"s-975-2000-2111-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 3콤보 | combo3 | 분노" }],
		"s-975-2000-2204-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 어그로체인지 | aggrochange | 노말" }],
		"s-975-2000-2207-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 좌걸음 | SideWalk | left | 분노" }],
		"s-975-2000-2208-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 우걸음 | SideWalk | right | 분노" }],
		"s-975-2000-2300-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 석상전용스킬 | aggrochange | 분노" }],
		"s-975-2000-2301-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 무적버프 | Wait | 노말" }],
		"s-975-2100-1101-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 저주형 | modeChange" }],
		"s-975-2100-1102-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 저주형 | Wait" }],
		"s-975-2100-1103-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 저주형 | Death" }],
		"s-975-2100-1104-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 공격형 | modeChange" }],
		"s-975-2100-1105-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 공격형 | Wait" }],
		"s-975-2100-1106-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 공격형 | Death" }],
		"s-975-2100-1107-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 공격대기 | unaremdwait" }],
		"s-975-2100-1108-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 보복의결계발동(2분)" }],
		"s-975-2100-1109-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 응징의결계발동(2분)" }],
		"s-975-2100-1110-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 죽음의결계발동(2분)" }],
		"s-975-2100-1111-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 보복의결계발동(1분)" }],
		"s-975-2100-1112-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 응징의결계발동(1분)" }],
		"s-975-2100-1113-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 죽음의결계발동(1분)" }],
		"s-975-2100-1114-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 결계해제 | unaremdwait" }],
		"s-975-2100-1115-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 자살 | Wait" }],
		"s-975-6001-1101-0": [{ type: "text", sub_type: "message", message: "작동스위치 | PC에게이로운버프 | Atk01 | 노멀/분노공용" }],
		"s-975-6001-1102-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 결계해제 | Wait" }],
		"s-975-6001-1103-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 광역디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-6001-1104-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 화염디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-6001-1105-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 냉기디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-6001-1106-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 버프디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-6001-1107-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 자살" }],
		"s-975-6001-1201-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 전투대기 | Wait | 노멀/분노공용" }],
		"s-975-6002-1101-0": [{ type: "text", sub_type: "message", message: "작동스위치 | PC에게이로운버프 | Atk01 | 노멀/분노공용" }],
		"s-975-6002-1102-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 결계해제 | Wait" }],
		"s-975-6002-1103-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 광역디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-6002-1104-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 화염디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-6002-1105-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 냉기디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-6002-1106-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 버프디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-6002-1201-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 전투대기 | Wait | 노멀/분노공용" }],
		"s-975-6003-1101-0": [{ type: "text", sub_type: "message", message: "작동스위치 | PC에게이로운버프 | Atk01 | 노멀/분노공용" }],
		"s-975-6003-1102-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 결계해제 | Wait" }],
		"s-975-6003-1103-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 광역디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-6003-1104-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 화염디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-6003-1105-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 냉기디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-6003-1106-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 버프디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-6003-1201-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 전투대기 | Wait | 노멀/분노공용" }],
		"s-975-6004-1106-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 버프디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-6005-1301-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 매우넓은범위이상상태 | Atk01" }],
		"s-975-6005-1302-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 좁은범위이상상태 | Atk01 | 노멀/분노고용" }],
		"s-975-6005-1303-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후DOT" }],
		"s-975-6005-1304-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후DOT" }],
		"s-975-6005-1305-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-975-6005-1306-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-975-6006-1301-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 매우넓은범위이상상태 | Atk01" }],
		"s-975-6006-1302-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 좁은범위이상상태 | Atk01 | 노멀/분노고용" }],
		"s-975-6006-1303-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후DOT" }],
		"s-975-6006-1304-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후DOT" }],
		"s-975-6006-1305-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-975-6006-1306-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-975-6006-1307-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-975-7000-1101-0": [{ type: "text", sub_type: "message", message: "방어벽 | 방어 | On | 노말" }],
		"s-975-7000-1102-0": [{ type: "text", sub_type: "message", message: "방어벽 | 방어 | On | 노말" }],
		"s-975-7001-1101-0": [{ type: "text", sub_type: "message", message: "방어벽 | 방어 | On | 노말" }],
		"s-975-7001-1102-0": [{ type: "text", sub_type: "message", message: "방어벽 | 방어 | On | 노말" }],
		"s-975-9001-1101-0": [{ type: "text", sub_type: "message", message: "작동스위치 | PC에게이로운버프 | Atk01 | 노멀/분노공용" }],
		"s-975-9001-1102-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 결계해제 | Wait" }],
		"s-975-9001-1103-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 광역디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-9001-1104-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 화염디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-9001-1105-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 냉기디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-9001-1106-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 버프디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-9001-1201-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 전투대기 | Wait | 노멀/분노공용" }],
		"s-975-9002-1101-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 저주형 | modeChange" }],
		"s-975-9002-1102-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 저주형 | Wait" }],
		"s-975-9002-1103-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 저주형 | Death" }],
		"s-975-9002-1104-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 공격형 | modeChange" }],
		"s-975-9002-1105-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 공격형 | Wait" }],
		"s-975-9002-1106-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 공격형 | Death" }],
		"s-975-9002-1107-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 공격대기 | unaremdwait" }],
		"s-975-9002-1108-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 보복의결계발동(2분)" }],
		"s-975-9002-1109-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 응징의결계발동(2분)" }],
		"s-975-9002-1110-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 죽음의결계발동(2분)" }],
		"s-975-9002-1111-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 보복의결계발동(1분)" }],
		"s-975-9002-1112-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 응징의결계발동(1분)" }],
		"s-975-9002-1113-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 죽음의결계발동(1분)" }],
		"s-975-9002-1114-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 결계해제 | unaremdwait" }],
		"s-975-9002-1115-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 자살 | Wait" }],
		"s-975-9003-1101-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 저주형 | modeChange" }],
		"s-975-9003-1102-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 저주형 | Wait" }],
		"s-975-9003-1103-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 저주형 | Death" }],
		"s-975-9003-1104-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 공격형 | modeChange" }],
		"s-975-9003-1105-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 공격형 | Wait" }],
		"s-975-9003-1106-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 공격형 | Death" }],
		"s-975-9003-1107-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 공격대기 | unaremdwait" }],
		"s-975-9003-1108-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 보복의결계발동(2분)" }],
		"s-975-9003-1109-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 응징의결계발동(2분)" }],
		"s-975-9003-1110-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 죽음의결계발동(2분)" }],
		"s-975-9003-1111-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 보복의결계발동(1분)" }],
		"s-975-9003-1112-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 응징의결계발동(1분)" }],
		"s-975-9003-1113-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 죽음의결계발동(1분)" }],
		"s-975-9003-1114-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 결계해제 | unaremdwait" }],
		"s-975-9003-1115-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 자살 | Wait" }],
		"s-975-9004-1101-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 저주형 | modeChange" }],
		"s-975-9004-1102-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 저주형 | Wait" }],
		"s-975-9004-1103-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 저주형 | Death" }],
		"s-975-9004-1104-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 공격형 | modeChange" }],
		"s-975-9004-1105-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 공격형 | Wait" }],
		"s-975-9004-1106-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 공격형 | Death" }],
		"s-975-9004-1107-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 공격대기 | unaremdwait" }],
		"s-975-9004-1108-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 보복의결계발동(2분)" }],
		"s-975-9004-1109-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 응징의결계발동(2분)" }],
		"s-975-9004-1110-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 죽음의결계발동(2분)" }],
		"s-975-9004-1111-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 보복의결계발동(1분)" }],
		"s-975-9004-1112-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 응징의결계발동(1분)" }],
		"s-975-9004-1113-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 죽음의결계발동(1분)" }],
		"s-975-9004-1114-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 결계해제 | unaremdwait" }],
		"s-975-9004-1115-0": [{ type: "text", sub_type: "message", message: "켈사이크의저주 | 자살 | Wait" }],
		"s-975-9998-1101-0": [{ type: "text", sub_type: "message", message: "작동스위치 | PC에게이로운버프 | Atk01 | 노멀/분노공용" }],
		"s-975-9998-1102-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 결계해제 | Wait" }],
		"s-975-9998-1103-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 광역디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-9998-1104-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 화염디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-9998-1105-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 냉기디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-9998-1106-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 버프디버프 | Atk01 | 노멀/분노공용" }],
		"s-975-9998-1201-0": [{ type: "text", sub_type: "message", message: "작동스위치 | 전투대기 | Wait | 노멀/분노공용" }],
		"s-975-9999-1301-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 매우넓은범위이상상태 | Atk01" }],
		"s-975-9999-1302-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 좁은범위이상상태 | Atk01 | 노멀/분노고용" }],
		"s-975-9999-1303-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적이상상태 | Atk01 | 노멀/분노공용" }]
	};
};