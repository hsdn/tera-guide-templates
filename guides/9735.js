// RK-9 Kennel


module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		"s-735-100-1201-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-전체공용-TNPC-대기" }],
		"s-735-100-1202-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-전체공용-TNPC-이동포탈-순간이동-1네임드[막기불가][회피불가][무적불가][평화유지]" }],
		"s-735-101-1201-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-전체공용-TNPC-대기" }],
		"s-735-101-1202-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-전체공용-TNPC-이동포탈-순간이동-미니게임[막기불가][회피불가][무적불가][평화유지]" }],
		"s-735-102-1201-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-전체공용-TNPC-대기" }],
		"s-735-102-1202-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-전체공용-TNPC-이동포탈-순간이동-2네임드[막기불가][회피불가][무적불가][평화유지]" }],
		"s-735-103-1201-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-전체공용-TNPC-대기" }],
		"s-735-103-1202-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-전체공용-TNPC-이동포탈-순간이동-3네임드[막기불가][회피불가][무적불가][평화유지]" }],
		"s-735-1000-1101-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-전방공격[Atk01]노멀" }],
		"s-735-1000-1103-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-레이저공격[막기불가][heavyAtk01]노멀" }],
		"s-735-1000-1104-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-전방스턴공격[막기불가][HeavyAtk02]노멀" }],
		"s-735-1000-1105-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-전진비행공격(근)[moveAtk]노멀" }],
		"s-735-1000-1106-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-전진비행공격(중)[MoveAtk]노멀" }],
		"s-735-1000-1107-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-전진비행공격(원)[MoveAtk]노멀" }],
		"s-735-1000-1108-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-회전공격[ReactionAtk]노멀" }],
		"s-735-1000-1109-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-좌측면공격[RoundAtk01]노멀" }],
		"s-735-1000-1110-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-우측면공격[RoundAtk02]노멀" }],
		"s-735-1000-1111-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-앞뒤공격[Atk02End01]노멀" }],
		"s-735-1000-1112-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-뒤공격[Atk02End02]노멀" }],
		"s-735-1000-1113-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-근거리폭발[막기불가][modeAlarm]노멀" }],
		"s-735-1000-1150-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-전방이동[Run]노멀" }],
		"s-735-1000-1201-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-그로기[Groggy]공용" }],
		"s-735-1000-1202-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-어그로체인지[AggroChange]공용" }],
		"s-735-1000-1203-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-날아서전방이동[Longmove]공용" }],
		"s-735-1000-1204-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-모드알람[modeAlarm]공용" }],
		"s-735-1000-1205-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-후방이동[BackMove]공용" }],
		"s-735-1000-1206-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-리액션[Reaction]공용" }],
		"s-735-1000-1301-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-돌진공격1타[MoveAtk]공용" }],
		"s-735-1000-1302-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-돌진공격1타[MoveAtk]공용" }],
		"s-735-1000-1303-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-돌진공격1타[MoveAtk]공용" }],
		"s-735-1000-1304-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-시작 | 근거리폭발[막기불가][modeAlarm]공용" }],
		"s-735-1000-1305-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-시작 | 원거리폭발[막기불가][modeAlarm]공용" }],
		"s-735-1000-1306-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-시한폭탄스폰[flinch]공용" }],
		"s-735-1000-1307-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-포획[막기불가][flinch]공용" }],
		"s-735-1000-1309-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-전멸기[막기불가][UltraAtk]공용" }],
		"s-735-1000-1311-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(146 | 3578 | 2)[막기불가][ModeA+UltraAtk]노멀" }],
		"s-735-1000-1312-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(146 | 2578 | 3)[막기불가][ModeA+UltraAtk]노멀" }],
		"s-735-1000-1313-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(146 | 2378 | 5)[막기불가][ModeA+UltraAtk]노멀" }],
		"s-735-1000-1314-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(146 | 2357 | 8)[막기불가][ModeA+UltraAtk]노멀" }],
		"s-735-1000-1315-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(258 | 3467 | 1)[막기불가][ModeA+UltraAtk]노멀" }],
		"s-735-1000-1316-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(258 | 1367 | 4)[막기불가][ModeA+UltraAtk]노멀" }],
		"s-735-1000-1317-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(258 | 1347 | 6)[막기불가][ModeA+UltraAtk]노멀" }],
		"s-735-1000-1318-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(258 | 1346 | 7)[막기불가][ModeA+UltraAtk]노멀" }],
		"s-735-1000-1319-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(368 | 2457 | 1)[막기불가][ModeA+UltraAtk]노멀" }],
		"s-735-1000-1320-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(368 | 1257 | 4)[막기불가][ModeA+UltraAtk]노멀" }],
		"s-735-1000-1321-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(368 | 1247 | 5)[막기불가][ModeA+UltraAtk]노멀" }],
		"s-735-1000-1322-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(368 | 1245 | 7)[막기불가][ModeA+UltraAtk]노멀" }],
		"s-735-1000-1323-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(147 | 3568 | 2)[막기불가][ModeA+UltraAtk]노멀" }],
		"s-735-1000-1324-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(147 | 2568 | 3)[막기불가][ModeA+UltraAtk]노멀" }],
		"s-735-1000-1325-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(147 | 2358 | 6)[막기불가][ModeA+UltraAtk]노멀" }],
		"s-735-1000-1326-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(147 | 2356 | 8)[막기불가][ModeA+UltraAtk]노멀" }],
		"s-735-1000-2101-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-전방공격[Atk01]분노" }],
		"s-735-1000-2103-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-레이저공격[막기불가][heavyAtk01]분노" }],
		"s-735-1000-2104-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-전방스턴공격[막기불가][HeavyAtk02]분노" }],
		"s-735-1000-2105-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-전진비행공격(근)[moveAtk]분노" }],
		"s-735-1000-2106-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-전진비행공격(중)[MoveAtk]분노" }],
		"s-735-1000-2107-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-전진비행공격(원)[MoveAtk]분노" }],
		"s-735-1000-2108-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-회전공격[ReactionAtk]분노" }],
		"s-735-1000-2109-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-좌측면공격[RoundAtk01]분노" }],
		"s-735-1000-2110-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-우측면공격[RoundAtk02]분노" }],
		"s-735-1000-2111-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-앞뒤공격[Atk02End01]분노" }],
		"s-735-1000-2112-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-뒤공격[Atk02End02]분노" }],
		"s-735-1000-2113-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-근거리폭발[막기불가][modeAlarm]분노" }],
		"s-735-1000-2150-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-전방이동[Run]분노" }],
		"s-735-1000-2311-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(146 | 3578 | 2)[막기불가][ModeA+UltraAtk]분노" }],
		"s-735-1000-2312-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(146 | 2578 | 3)[막기불가][ModeA+UltraAtk]분노" }],
		"s-735-1000-2313-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(146 | 2378 | 5)[막기불가][ModeA+UltraAtk]분노" }],
		"s-735-1000-2314-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(146 | 2357 | 8)[막기불가][ModeA+UltraAtk]분노" }],
		"s-735-1000-2315-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(258 | 3467 | 1)[막기불가][ModeA+UltraAtk]분노" }],
		"s-735-1000-2316-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(258 | 1367 | 4)[막기불가][ModeA+UltraAtk]분노" }],
		"s-735-1000-2317-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(258 | 1347 | 6)[막기불가][ModeA+UltraAtk]분노" }],
		"s-735-1000-2318-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(258 | 1346 | 7)[막기불가][ModeA+UltraAtk]분노" }],
		"s-735-1000-2319-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(368 | 2457 | 1)[막기불가][ModeA+UltraAtk]분노" }],
		"s-735-1000-2320-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(368 | 1257 | 4)[막기불가][ModeA+UltraAtk]분노" }],
		"s-735-1000-2321-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(368 | 1247 | 5)[막기불가][ModeA+UltraAtk]분노" }],
		"s-735-1000-2322-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(368 | 1245 | 7)[막기불가][ModeA+UltraAtk]분노" }],
		"s-735-1000-2323-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(147 | 3568 | 2)[막기불가][ModeA+UltraAtk]분노" }],
		"s-735-1000-2324-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(147 | 2568 | 3)[막기불가][ModeA+UltraAtk]분노" }],
		"s-735-1000-2325-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(147 | 2358 | 6)[막기불가][ModeA+UltraAtk]분노" }],
		"s-735-1000-2326-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-3단충격파(147 | 2356 | 8)[막기불가][ModeA+UltraAtk]분노" }],
		"s-735-1001-1201-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-TNPC-SetPos-대기" }],
		"s-735-1001-1203-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-TNPC-SetPos-밀어내기" }],
		"s-735-1001-1204-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-TNPC-SetPos-SetPos2Air[막기불가][회피불가][무적불가][평화유지]" }],
		"s-735-1002-1201-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-TNPC-시한폭탄컨트롤러-대기" }],
		"s-735-1003-1201-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-TNPC-환풍기-대기" }],
		"s-735-1003-1205-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-TNPC-환풍기-밀어내기[막기불가][회피불가][무적불가]" }],
		"s-735-1009-1201-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-MNPC-시한폭탄-대기[Wait]공용" }],
		"s-735-1009-1301-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-MNPC-시한폭탄-폭발[막기불가][DaethWait]공용" }],
		"s-735-1009-1302-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-MNPC-시한폭탄-자폭[막기불가][DaethWait]공용" }],
		"s-735-1010-1201-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-TNPC-환풍기컨트롤러-대기" }],
		"s-735-1011-1305-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-TNPC-전멸기-플라즈마폭풍[막기불가][회피불가][무적불가]" }],
		"s-735-1014-1204-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-벤타론-TNPC-SetPos-SetPos2Ground[막기불가][회피불가][무적불가][평화유지]" }],
		"s-735-2000-1101-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-기본공격[atk01]노멀" }],
		"s-735-2000-1102-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-전방톱날공격[막기불가][atk02]노멀" }],
		"s-735-2000-1103-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-원거리누킹[longatk01]노멀" }],
		"s-735-2000-1104-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-도넛범위공격[막기불가][heavyatk01]노멀" }],
		"s-735-2000-1105-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-톱날회전공격[atk03]노멀" }],
		"s-735-2000-1106-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-왼쪽공격[roundatk01]노멀" }],
		"s-735-2000-1107-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-오른쪽공격[roundatk02]노멀" }],
		"s-735-2000-1108-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-뒤공격[backatk]노멀" }],
		"s-735-2000-1109-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-광범위공격[modealram]노멀" }],
		"s-735-2000-1110-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-후방점프공격[막기불가][회피불가][무적불가][backmove]노멀" }],
		"s-735-2000-1111-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-근거리폭발[막기불가][heavyAtk01]노멀" }],
		"s-735-2000-1150-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-전방이동[activemove]노멀" }],
		"s-735-2000-1201-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-그로기[groggy]공용" }],
		"s-735-2000-1301-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-전류폭탄-소환[막기불가][longatk01]공용" }],
		"s-735-2000-1302-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-전류폭탄-근거리폭발[막기불가][heavyAtk01]공용" }],
		"s-735-2000-1303-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-전류폭탄-원거리폭발[막기불가][heavyAtk01]공용" }],
		"s-735-2000-1304-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-광역근거리폭발[막기불가][회피불가][무적불가][UltraAtk]공용" }],
		"s-735-2000-1305-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-원거리당기기공격[막기불가][회피불가][무적불가][modealram]공용" }],
		"s-735-2000-1306-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-연속톱날공격-쉬움-1Set[막기불가][회피불가][무적불가][heavyAtk02]공용" }],
		"s-735-2000-1307-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-연속톱날공격-쉬움-2Set[막기불가][회피불가][무적불가][heavyAtk02]공용" }],
		"s-735-2000-1308-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-연속톱날공격-어려움-1Set[막기불가][회피불가][무적불가][heavyAtk02]공용" }],
		"s-735-2000-1309-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-연속톱날공격-어려움-2Set[막기불가][회피불가][무적불가][heavyAtk02]공용" }],
		"s-735-2000-2101-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-기본공격[atk01]분노" }],
		"s-735-2000-2102-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-전방톱날공격[막기불가][atk02]분노" }],
		"s-735-2000-2103-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-원거리누킹[longatk01]분노" }],
		"s-735-2000-2104-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-도넛범위공격[막기불가][heavyatk01]분노" }],
		"s-735-2000-2105-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-톱날회전공격[atk03]분노" }],
		"s-735-2000-2106-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-왼쪽공격[roundatk01]분노" }],
		"s-735-2000-2107-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-오른쪽공격[roundatk02]분노" }],
		"s-735-2000-2108-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-뒤공격[backatk]분노" }],
		"s-735-2000-2109-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-광범위공격[modealarm]분노" }],
		"s-735-2000-2110-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-후방점프공격[막기불가][회피불가][무적불가][backmove]분노" }],
		"s-735-2000-2111-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-근거리폭발[막기불가][heavyAtk01]분노" }],
		"s-735-2000-2150-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-전방이동[activemove]분노" }],
		"s-735-2001-1301-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-프레스-내려찍기-1단계[막기불가][회피불가][무적불가][attack01]공용" }],
		"s-735-2001-1302-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-MNPC-프레스-내려찍기-2단계[막기불가][attack01]공용" }],
		"s-735-2001-1303-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-MNPC-프레스-올라가기-1단계[Reverse]공용" }],
		"s-735-2001-1304-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-MNPC-프레스-올라가기-2단계[Reverse01]공용" }],
		"s-735-2001-1305-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-MNPC-프레스-대기-1단계[wait]공용" }],
		"s-735-2001-1306-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-MNPC-프레스-대기-2단계[wait01]공용" }],
		"s-735-2001-1308-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-MNPC-프레스-내려찍기-균열[Projectile]공용" }],
		"s-735-2007-1201-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-TNPC-전류폭탄-대기" }],
		"s-735-2007-1306-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-TNPC-전류폭탄-십자폭발[막기불가][회피불가][무적불가]" }],
		"s-735-2007-1307-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-헥사플레온-TNPC-전류폭탄-근거리폭발[막기불가]" }],
		"s-735-3000-1101-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-왼손전방공격[LeftHandAtk]노멀" }],
		"s-735-3000-1102-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-오른손전방공격[RightHandAtk]노멀" }],
		"s-735-3000-1103-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-양손전방공격[DoubleBlow]노멀" }],
		"s-735-3000-1104-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-양손후방공격[BackAtk]노멀" }],
		"s-735-3000-1105-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-후방이동[BackMove]노멀" }],
		"s-735-3000-1106-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-전방이동[ShortCharging]노멀" }],
		"s-735-3000-1107-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-원거리공격-[LongAtk]노멀" }],
		"s-735-3000-1108-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-좌측면공격[roundAtk01]노멀" }],
		"s-735-3000-1109-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-우측면공격[roundAtk02]노멀" }],
		"s-735-3000-1110-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-좌우발공격[LeftFootAtk]노멀" }],
		"s-735-3000-1111-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-우좌발공격[RightFootAtk]노멀" }],
		"s-735-3000-1112-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-로켓우측면공격[RocketRoundAtkRight]노멀" }],
		"s-735-3000-1113-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-로켓좌측면공격[RocketRoundAtkLeft]노멀" }],
		"s-735-3000-1114-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-로켓원거리공격[RocketAwayBlow]노멀" }],
		"s-735-3000-1115-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-로켓근거리공격[RocketNearBlow]노멀" }],
		"s-735-3000-1116-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-ClairDeLune[연결됨 | 1120 | 1122][ReadyAction+RHAtk]노멀" }],
		"s-735-3000-1117-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-ClairDeLune[연결됨 | 1121 | 1123][ReadyAction+LHAtk]노멀" }],
		"s-735-3000-1118-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-ClairDeLune[연결됨 | 1121 | 1123][ReadyAction+RHAtk+RHLAtk]노멀" }],
		"s-735-3000-1119-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-ClairDeLune[연결됨 | 1120 | 1122][ReadyAction+LHAtk+LHRAtk]노멀" }],
		"s-735-3000-1120-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-ClairDeLune[막기불가][회피불가][무적불가][RHRFB]노멀" }],
		"s-735-3000-1121-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-ClairDeLune[막기불가][회피불가][무적불가][LHRFB]노멀" }],
		"s-735-3000-1122-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-ClairDeLune[막기불가][회피불가][무적불가][RHRFB+LHRFB]노멀" }],
		"s-735-3000-1123-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-ClairDeLune[막기불가][회피불가][무적불가][LHRFB+RHRFB]노멀" }],
		"s-735-3000-1124-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-오른발콤보-오른발+전방연속공격[연결됨 | 1125][RFAtk+LHAtk+LHRHAtk]노멀" }],
		"s-735-3000-1125-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-오른발콤보-전방양손공격[RocketFrontAtk]노멀" }],
		"s-735-3000-1126-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-양손콤보-전방양손공격[연결됨 | 1127][DBlow x 2]노멀" }],
		"s-735-3000-1127-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-양손콤보-후방양손공격[BAtk]노멀" }],
		"s-735-3000-1128-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-로켓전후방콤보-전방연속공격[연결됨 | 1129][RHAtk+LHAtk+RHAtk]노멀" }],
		"s-735-3000-1129-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-로켓전후방콤보-전방로켓공격[연결됨 | 1130][막기불가][RocketFront]노멀" }],
		"s-735-3000-1130-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-로켓전후방콤보-전방양손공격[연결됨 | 1131][DoubleBlow]노멀" }],
		"s-735-3000-1131-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-로켓전후방콤보-로켓후방공격[막기불가][회피불가][무적불가][BackRocket]노멀" }],
		"s-735-3000-1201-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-대기-[wait]공용" }],
		"s-735-3000-1202-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-리액션-[Reaction]공용" }],
		"s-735-3000-1203-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-그로기-[Groggy]공용" }],
		"s-735-3000-1301-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-락온누킹-1set[막기불가][회피불가][무적불가][PartternAtk01]공용" }],
		"s-735-3000-1302-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-락온누킹-1set[Projectile]공용" }],
		"s-735-3000-1303-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-락온누킹-2set[막기불가][회피불가][무적불가][PartternAtk01]공용" }],
		"s-735-3000-1304-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-락온누킹-2set[Projectile]공용" }],
		"s-735-3000-1305-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-열감지프로토콜-시전모션[LongAtkEnd]공용" }],
		"s-735-3000-1306-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-열감지프로토콜-짧은대기[ModeA]공용" }],
		"s-735-3000-1307-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-열감지프로토콜-긴대기[ModeA]공용" }],
		"s-735-3000-1308-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-열감지프로토콜-근거리1타[막기불가][회피불가][무적불가][ModeA]공용" }],
		"s-735-3000-1309-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-열감지프로토콜-원거리1타[막기불가][회피불가][무적불가][ModeA]공용" }],
		"s-735-3000-1310-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-열감지프로토콜-전체1타[막기불가][ModeA]공용" }],
		"s-735-3000-1311-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-열감지프로토콜-전체1타[Projectile]공용" }],
		"s-735-3000-1312-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-열감지프로토콜-근거리2타[막기불가][회피불가][무적불가][ModeA]공용" }],
		"s-735-3000-1313-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-열감지프로토콜-원거리2타[막기불가][회피불가][무적불가][ModeA]공용" }],
		"s-735-3000-1314-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-열감지프로토콜-전체2타[막기불가][ModeA]공용" }],
		"s-735-3000-1315-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-열감지프로토콜-전체2타[Projectile]공용" }],
		"s-735-3000-1316-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-열감지프로토콜-근거리3타[막기불가][회피불가][무적불가][PatternAtk02]공용" }],
		"s-735-3000-1317-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-열감지프로토콜-원거리3타[막기불가][회피불가][무적불가][PatternAtk02]공용" }],
		"s-735-3000-1318-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-열감지프로토콜-전체3타[막기불가][PatternAtk02]공용" }],
		"s-735-3000-1319-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-열감지프로토콜-전체3타[Projectile]공용" }],
		"s-735-3000-1320-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-부위파괴-보호막시전[연결됨 | 1322][PartternAtk01]공용" }],
		"s-735-3000-1321-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-보호막-보호막시전[연결됨 | 1322][PartternAtk01]공용" }],
		"s-735-3000-1322-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-부위파괴/보호막-전멸기[막기불가][회피불가][무적불가][PartternAtk01End]공용" }],
		"s-735-3000-1323-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-레이더-시전알람[연결됨 | 1324 | 1325][ModeA]공용" }],
		"s-735-3000-1324-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-레이더-근거리공격[막기불가][NearBlow]공용" }],
		"s-735-3000-1325-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-레이더-원거리공격[막기불가][AwayBlow]공용" }],
		"s-735-3000-2101-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-왼손전방공격[LeftHandAtk]분노" }],
		"s-735-3000-2102-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-오른손전방공격[RightHandAtk]분노" }],
		"s-735-3000-2103-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-양손전방공격[DoubleBlow]분노" }],
		"s-735-3000-2104-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-양손후방공격[BackAtk]분노" }],
		"s-735-3000-2105-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-후방이동[BackMove]분노" }],
		"s-735-3000-2106-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-전방이동[ShortCharging]분노" }],
		"s-735-3000-2107-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-원거리공격-[LongAtk]분노" }],
		"s-735-3000-2108-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-좌측면공격[roundAtk01]분노" }],
		"s-735-3000-2109-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-우측면공격[roundAtk02]분노" }],
		"s-735-3000-2110-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-좌우발공격[LeftFootAtk]분노" }],
		"s-735-3000-2111-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-우좌발공격[RightFootAtk]분노" }],
		"s-735-3000-2112-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-로켓우측면공격[RocketRoundAtkRight]분노" }],
		"s-735-3000-2113-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-로켓좌측면공격[RocketRoundAtkLeft]분노" }],
		"s-735-3000-2114-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-로켓원거리공격[RocketAwayBlow]분노" }],
		"s-735-3000-2115-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-로켓근거리공격[RocketNearBlow]분노" }],
		"s-735-3000-2116-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-ClairDeLune[연결됨 | 2120 | 2122][ReadyAction+RHAtk]분노" }],
		"s-735-3000-2117-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-ClairDeLune[연결됨 | 2121 | 2123][ReadyAction+LHAtk]분노" }],
		"s-735-3000-2118-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-ClairDeLune[연결됨 | 2121 | 2123][ReadyAction+RHAtk+RHLAtk]분노" }],
		"s-735-3000-2119-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-ClairDeLune[연결됨 | 2120 | 2122][ReadyAction+LHAtk+LHRAtk]분노" }],
		"s-735-3000-2120-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-ClairDeLune[막기불가][회피불가][무적불가][RHRFB]분노" }],
		"s-735-3000-2121-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-ClairDeLune[막기불가][회피불가][무적불가][LHRFB]분노" }],
		"s-735-3000-2122-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-ClairDeLune[막기불가][회피불가][무적불가][RHRFB+LHRFB]분노" }],
		"s-735-3000-2123-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-ClairDeLune[막기불가][회피불가][무적불가][LHRFB+RHRFB]분노" }],
		"s-735-3000-2124-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-오른발콤보-오른발+전방연속공격[연결됨 | 2125][RFAtk+LHAtk+LHRHAtk]분노" }],
		"s-735-3000-2125-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-오른발콤보-전방양손공격[RocketFrontAtk]분노" }],
		"s-735-3000-2126-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-양손콤보-전방양손공격[연결됨 | 2127][DBlow x 2]분노" }],
		"s-735-3000-2127-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-양손콤보-후방양손+전방로켓공격[BDBlowRFAtk]분노" }],
		"s-735-3000-2128-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-로켓전후방콤보-전방연속공격[연결됨 | 2129][RHAtk+LHAtk+RHAtk]분노" }],
		"s-735-3000-2129-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-로켓전후방콤보-전방로켓공격[연결됨 | 2130][막기불가][RocketFront]분노" }],
		"s-735-3000-2130-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-로켓전후방콤보-전방양손공격[연결됨 | 2131][DoubleBlow]분노" }],
		"s-735-3000-2131-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-로켓전후방콤보-로켓후방공격[막기불가][회피불가][무적불가][BackRocket]분노" }],
		"s-735-3200-1201-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-Rk-9-TNPC-부위파괴-대기" }],
		"s-735-4001-1303-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-미니게임1-TNPC-회전공격-시계방향-공용[막기불가][회피불가][무적불가][평화유지]" }],
		"s-735-4001-1304-0": [{ type: "text", sub_type: "message", message: "RK-9격납고-미니게임1-TNPC-회전공격-반시계방향-공용[막기불가][회피불가][무적불가][평화유지]" }]
	};
};