// Gardan's Trial


module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		"s-3042-1000-1101-0": [{ type: "text", sub_type: "message", message: "Atk01 | 평타1R" }],
		"s-3042-1000-1102-0": [{ type: "text", sub_type: "message", message: "Atk01 | 평타1 | 연계용" }],
		"s-3042-1000-1103-0": [{ type: "text", sub_type: "message", message: "Atk02 | 평타2R" }],
		"s-3042-1000-1104-0": [{ type: "text", sub_type: "message", message: "Atk02 | 평타2 | 연계용" }],
		"s-3042-1000-1105-0": [{ type: "text", sub_type: "message", message: "Atk03 | 평타3" }],
		"s-3042-1000-1106-0": [{ type: "text", sub_type: "message", message: "Atk04 | ComboAtk01 | 2회 회전" }],
		"s-3042-1000-1108-0": [{ type: "text", sub_type: "message", message: "Atk06 | ComboAtk02 | 노말" }],
		"s-3042-1000-1109-0": [{ type: "text", sub_type: "message", message: "JumpAtk01 | 노말" }],
		"s-3042-1000-1111-0": [{ type: "text", sub_type: "message", message: "HeavyAtk01 | 대지치기 | 넉백" }],
		"s-3042-1000-1201-0": [{ type: "text", sub_type: "message", message: "모아치기 | 짧은 | 베리에이션" }],
		"s-3042-1000-1202-0": [{ type: "text", sub_type: "message", message: "모아치기 | 중간 | 베리에이션" }],
		"s-3042-1000-1203-0": [{ type: "text", sub_type: "message", message: "모아치기 | 풀차징 | 베리에이션" }],
		"s-3042-1000-1204-0": [{ type: "text", sub_type: "message", message: "모아치기 | 풀차징 | 베리에이션 | 분노용 | 2타" }],
		"s-3042-1000-1205-0": [{ type: "text", sub_type: "message", message: "소용돌이 | 짧은 | 베리에이션" }],
		"s-3042-1000-1206-0": [{ type: "text", sub_type: "message", message: "소용돌이 | 중간 | 베리에이션" }],
		"s-3042-1000-1207-0": [{ type: "text", sub_type: "message", message: "소용돌이 | 풀차징 | 베리에이션" }],
		"s-3042-1000-1208-0": [{ type: "text", sub_type: "message", message: "MovingCharge | 공용" }],
		"s-3042-1000-1209-0": [{ type: "text", sub_type: "message", message: "Chrage01 | 공용" }],
		"s-3042-1000-1210-0": [{ type: "text", sub_type: "message", message: "Chrage02 | 공용" }],
		"s-3042-1000-1211-0": [{ type: "text", sub_type: "message", message: "Icebreak" }],
		"s-3042-1000-1212-0": [{ type: "text", sub_type: "message", message: "Charge | Cancle01 | Loop" }],
		"s-3042-1000-1213-0": [{ type: "text", sub_type: "message", message: "Charge | Cancle01 | Move" }],
		"s-3042-1000-1214-0": [{ type: "text", sub_type: "message", message: "Charge | Cancle01 | Atk" }],
		"s-3042-1000-1215-0": [{ type: "text", sub_type: "message", message: "Charge | Cancle02 | Loop" }],
		"s-3042-1000-1216-0": [{ type: "text", sub_type: "message", message: "Charge | Cancle02 | Move" }],
		"s-3042-1000-1217-0": [{ type: "text", sub_type: "message", message: "Charge | Cancle02 | Atk" }],
		"s-3042-1000-1220-0": [{ type: "text", sub_type: "message", message: "모아치기 | 풀차징 | 베리에이션[노말 | 추후변경]" }],
		"s-3042-1000-1221-0": [{ type: "text", sub_type: "message", message: "모아치기 | 풀차징 | 베리에이션[분노 | 추후변경]" }],
		"s-3042-1000-1301-0": [{ type: "text", sub_type: "message", message: "Rage | L | Atk01" }],
		"s-3042-1000-1302-0": [{ type: "text", sub_type: "message", message: "Rage | L | Atk01 | 연계용" }],
		"s-3042-1000-1303-0": [{ type: "text", sub_type: "message", message: "Rage | R | Atk02" }],
		"s-3042-1000-1304-0": [{ type: "text", sub_type: "message", message: "Rage | R | Atk02 | 연계용" }],
		"s-3042-1000-1305-0": [{ type: "text", sub_type: "message", message: "Rage | Dual | Atk01" }],
		"s-3042-1000-1306-0": [{ type: "text", sub_type: "message", message: "Rage | Whirlwind | Start" }],
		"s-3042-1000-1307-0": [{ type: "text", sub_type: "message", message: "Rage | Whirlwind | Shot | Loop | [1106연계]" }],
		"s-3042-1000-1308-0": [{ type: "text", sub_type: "message", message: "Rage | Whirlwind | End | [1107연계]" }],
		"s-3042-1000-1309-0": [{ type: "text", sub_type: "message", message: "Rage | Dual | Atk01" }],
		"s-3042-1000-1310-0": [{ type: "text", sub_type: "message", message: "Rage | Dual | Atk02" }],
		"s-3042-1000-1311-0": [{ type: "text", sub_type: "message", message: "Rage | Dual | Atk03" }],
		"s-3042-1000-1312-0": [{ type: "text", sub_type: "message", message: "Rage | RushAtk01" }],
		"s-3042-1000-1313-0": [{ type: "text", sub_type: "message", message: "Rage | RushAtk02" }],
		"s-3042-1000-1314-0": [{ type: "text", sub_type: "message", message: "Rage | RushAtk03" }],
		"s-3042-1000-1315-0": [{ type: "text", sub_type: "message", message: "Rage | RushAtk04" }],
		"s-3042-1000-1316-0": [{ type: "text", sub_type: "message", message: "Rage | RushAtk05" }],
		"s-3042-1000-1317-0": [{ type: "text", sub_type: "message", message: "Rage | RushAtk06" }],
		"s-3042-1000-1318-0": [{ type: "text", sub_type: "message", message: "Rage | RushAtk07" }],
		"s-3042-1000-1319-0": [{ type: "text", sub_type: "message", message: "Rage | RushAtk08" }],
		"s-3042-1000-1320-0": [{ type: "text", sub_type: "message", message: "RageModeOff | 스크립트용" }],
		"s-3042-1000-1321-0": [{ type: "text", sub_type: "message", message: "Rage | Aggro | 01 | 정방향" }],
		"s-3042-1000-1322-0": [{ type: "text", sub_type: "message", message: "Rage | Aggro | 02 | 역방향" }],
		"s-3042-1000-1323-0": [{ type: "text", sub_type: "message", message: "Rage | RandomAtk01 | 공용" }],
		"s-3042-1000-1324-0": [{ type: "text", sub_type: "message", message: "Rage | Aggro | 65% | 공용" }],
		"s-3042-1000-1325-0": [{ type: "text", sub_type: "message", message: "Rage | RandomAtk02 | 1%전용" }],
		"s-3042-1000-1501-0": [{ type: "text", sub_type: "message", message: "HP1% | 무적 | 보호막 | 시전" }],
		"s-3042-1000-1502-0": [{ type: "text", sub_type: "message", message: "폭주 | 쉐잎변경 | 1%" }],
		"s-3042-1000-1503-0": [{ type: "text", sub_type: "message", message: "UltraAtk01 | 광역 | 밀치기" }],
		"s-3042-1000-1505-0": [{ type: "text", sub_type: "message", message: "UltraAtk02 | 대상 | 당기기 | 1%" }],
		"s-3042-1000-1506-0": [{ type: "text", sub_type: "message", message: "주시 | 노말 원거리타겟팅" }],
		"s-3042-1000-1507-0": [{ type: "text", sub_type: "message", message: "거리랜타 | 끌어오기" }],
		"s-3042-1000-1508-0": [{ type: "text", sub_type: "message", message: "HeavyAtk05 | 근중원 | 01" }],
		"s-3042-1000-1509-0": [{ type: "text", sub_type: "message", message: "HeavyAtk05 | 원중근 | 01" }],
		"s-3042-1000-1510-0": [{ type: "text", sub_type: "message", message: "보스강화 | 공용A" }],
		"s-3042-1000-1511-0": [{ type: "text", sub_type: "message", message: "RotateAtk01 | Shot" }],
		"s-3042-1000-1512-0": [{ type: "text", sub_type: "message", message: "RotateAtk01 | Start" }],
		"s-3042-1000-1513-0": [{ type: "text", sub_type: "message", message: "보스강화 | 공용B" }],
		"s-3042-1000-1514-0": [{ type: "text", sub_type: "message", message: "보스강화 | 공용C" }],
		"s-3042-1000-1515-0": [{ type: "text", sub_type: "message", message: "주시 | 노말 근거리타겟팅" }],
		"s-3042-1000-1516-0": [{ type: "text", sub_type: "message", message: "HeavyAtk05 | 근중원 | 01" }],
		"s-3042-1000-1517-0": [{ type: "text", sub_type: "message", message: "HeavyAtk05 | 원중근 | 01" }],
		"s-3042-1000-1518-0": [{ type: "text", sub_type: "message", message: "폭주 | 쉐잎변경 | 65%" }],
		"s-3042-1000-1519-0": [{ type: "text", sub_type: "message", message: "폭주 | 쉐잎변경 | 35%" }],
		"s-3042-1000-1520-0": [{ type: "text", sub_type: "message", message: "UltraAtk02 | 대상 | 당기기 | 65%" }],
		"s-3042-1000-1521-0": [{ type: "text", sub_type: "message", message: "UltraAtk02 | 대상 | 당기기 | 35%" }],
		"s-3042-1000-2101-0": [{ type: "text", sub_type: "message", message: "Atk01 | 평타1R | 분노" }],
		"s-3042-1000-2102-0": [{ type: "text", sub_type: "message", message: "Atk01 | 평타1 | 연계용 | 분노" }],
		"s-3042-1000-2103-0": [{ type: "text", sub_type: "message", message: "Atk02 | 평타2R | 분노" }],
		"s-3042-1000-2104-0": [{ type: "text", sub_type: "message", message: "Atk02 | 평타2 | 연계용 | 분노" }],
		"s-3042-1000-2105-0": [{ type: "text", sub_type: "message", message: "Atk03 | 평타3 | 분노" }],
		"s-3042-1000-2106-0": [{ type: "text", sub_type: "message", message: "Atk04 | ComboAtk01 | 2회 회전 | 분노" }],
		"s-3042-1000-2108-0": [{ type: "text", sub_type: "message", message: "Atk06 | ComboAtk02 | 분노" }],
		"s-3042-1000-2109-0": [{ type: "text", sub_type: "message", message: "JumpAtk01 | 분노" }],
		"s-3042-1000-2111-0": [{ type: "text", sub_type: "message", message: "HeavyAtk01 | 대지치기 | 넉백 | 분노" }],
		"s-3042-1000-2201-0": [{ type: "text", sub_type: "message", message: "모아치기 | 짧은 | 베리에이션 | 분노" }],
		"s-3042-1000-2202-0": [{ type: "text", sub_type: "message", message: "모아치기 | 중간 | 베리에이션 | 분노" }],
		"s-3042-1000-2203-0": [{ type: "text", sub_type: "message", message: "모아치기 | 풀차징 | 베리에이션 | 분노" }],
		"s-3042-1000-2204-0": [{ type: "text", sub_type: "message", message: "모아치기 | 풀차징 | 베리에이션 | 분노용 | 2타" }],
		"s-3042-1000-2205-0": [{ type: "text", sub_type: "message", message: "소용돌이 | 짧은 | 베리에이션 | 분노" }],
		"s-3042-1000-2206-0": [{ type: "text", sub_type: "message", message: "소용돌이 | 중간 | 베리에이션 | 분노" }],
		"s-3042-1000-2207-0": [{ type: "text", sub_type: "message", message: "소용돌이 | 풀차징 | 베리에이션 | 분노" }],
		"s-3042-1000-2208-0": [{ type: "text", sub_type: "message", message: "MovingCharge | 공용" }],
		"s-3042-1000-2209-0": [{ type: "text", sub_type: "message", message: "Chrage01 | 공용 | 분노" }],
		"s-3042-1000-2210-0": [{ type: "text", sub_type: "message", message: "Chrage02 | 공용 | 분노" }],
		"s-3042-1000-2211-0": [{ type: "text", sub_type: "message", message: "Icebreak | 분노" }],
		"s-3042-1000-2212-0": [{ type: "text", sub_type: "message", message: "Charge | Cancle01 | Loop | 분노" }],
		"s-3042-1000-2213-0": [{ type: "text", sub_type: "message", message: "Charge | Cancle01 | Move | 분노" }],
		"s-3042-1000-2214-0": [{ type: "text", sub_type: "message", message: "Charge | Cancle01 | Atk | 분노" }],
		"s-3042-1000-2215-0": [{ type: "text", sub_type: "message", message: "Charge | Cancle02 | Loop | 분노" }],
		"s-3042-1000-2216-0": [{ type: "text", sub_type: "message", message: "Charge | Cancle02 | Move | 분노" }],
		"s-3042-1000-2217-0": [{ type: "text", sub_type: "message", message: "Charge | Cancle02 | Atk | 분노" }],
		"s-3042-1000-2220-0": [{ type: "text", sub_type: "message", message: "모아치기 | 풀차징 | 베리에이션[노말 | 추후변경]" }],
		"s-3042-1000-2221-0": [{ type: "text", sub_type: "message", message: "모아치기 | 풀차징 | 베리에이션[분노 | 추후변경]" }],
		"s-3042-1001-1301-0": [{ type: "text", sub_type: "message", message: "Rage | L | Atk01" }],
		"s-3042-1001-1302-0": [{ type: "text", sub_type: "message", message: "Rage | L | Atk01 | 연계용" }],
		"s-3042-1001-1303-0": [{ type: "text", sub_type: "message", message: "Rage | R | Atk02" }],
		"s-3042-1001-1304-0": [{ type: "text", sub_type: "message", message: "Rage | R | Atk02 | 연계용" }],
		"s-3042-1001-1305-0": [{ type: "text", sub_type: "message", message: "Rage | Dual | Atk01" }],
		"s-3042-1001-1306-0": [{ type: "text", sub_type: "message", message: "Rage | Whirlwind | Start" }],
		"s-3042-1001-1307-0": [{ type: "text", sub_type: "message", message: "Rage | Whirlwind | Shot | Loop | [1106연계]" }],
		"s-3042-1001-1308-0": [{ type: "text", sub_type: "message", message: "Rage | Whirlwind | End | [1107연계]" }],
		"s-3042-1001-1309-0": [{ type: "text", sub_type: "message", message: "Rage | Dual | Atk01" }],
		"s-3042-1001-1310-0": [{ type: "text", sub_type: "message", message: "Rage | Dual | Atk02" }],
		"s-3042-1001-1311-0": [{ type: "text", sub_type: "message", message: "Rage | Dual | Atk03" }],
		"s-3042-1001-1312-0": [{ type: "text", sub_type: "message", message: "Rage | RushAtk01" }],
		"s-3042-1002-1101-0": [{ type: "text", sub_type: "message", message: "ScreamingGiant | 직선형장거리공격 | Atk01 | 노멀/분노공용" }],
		"s-3042-1002-1102-0": [{ type: "text", sub_type: "message", message: "불뿜기공격 | 일직선 | 광범위" }],
		"s-3042-1002-1104-0": [{ type: "text", sub_type: "message", message: "발사체 | A" }],
		"s-3042-1002-1105-0": [{ type: "text", sub_type: "message", message: "발사체 | B" }],
		"s-3042-1002-1106-0": [{ type: "text", sub_type: "message", message: "전방 발사체공격 | A" }],
		"s-3042-1002-1107-0": [{ type: "text", sub_type: "message", message: "전방 발사체공격 | B" }],
		"s-3042-1002-1108-0": [{ type: "text", sub_type: "message", message: "발사체 | C" }],
		"s-3042-1002-1109-0": [{ type: "text", sub_type: "message", message: "전방 발사체공격 | C" }],
		"s-3042-1002-1201-0": [{ type: "text", sub_type: "message", message: "ScreamingGiant | 전투대기 | Wait | 노멀/분노공용" }],
		"s-3042-1003-1505-0": [{ type: "text", sub_type: "message", message: "더미스킬 | 20초지속" }],
		"s-3042-1004-3206-0": [{ type: "text", sub_type: "message", message: "터져라 | 스폰스킬용 | 정방향" }],
		"s-3042-1005-1333-0": [{ type: "text", sub_type: "message", message: "TNPC | RandomMove" }],
		"s-3042-1011-3207-0": [{ type: "text", sub_type: "message", message: "거인 | 발사체 | 폭발용 | 정방향" }],
		"s-3042-1012-3208-0": [{ type: "text", sub_type: "message", message: "거인 | 발사체 | 폭발용 | 정방향" }],
		"s-3042-1050-3111-0": [{ type: "text", sub_type: "message", message: "가두기용 | 20초지속" }],
		"s-3042-1051-3112-0": [{ type: "text", sub_type: "message", message: "얼음장판 | 90초지속" }],
		"s-3042-1052-3209-0": [{ type: "text", sub_type: "message", message: "터져라 | 스폰스킬용 | 역방향" }],
		"s-3042-1054-3113-0": [{ type: "text", sub_type: "message", message: "TNPC | 장판 | 데칼표시용" }],
		"s-3042-1054-3114-0": [{ type: "text", sub_type: "message", message: "TNPC | 데칼용 | PC추격" }],
		"s-3042-1055-3115-0": [{ type: "text", sub_type: "message", message: "가두기용 | 20초지속" }],
		"s-3042-1057-3116-0": [{ type: "text", sub_type: "message", message: "가두기용 | 20초지속" }],
		"s-3042-2000-1101-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 1콤보 | combo1 | 노말" }],
		"s-3042-2000-1103-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 방패방어 | Defence | 노말" }],
		"s-3042-2000-1104-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 강력한돌진 | screwThrough | 노말" }],
		"s-3042-2000-1105-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 방패치기 | ShieldStrike | 노말" }],
		"s-3042-2000-1106-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 반격찌르기 | Riposte | 노말" }],
		"s-3042-2000-1110-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 2콤보 | combo2 | 노말" }],
		"s-3042-2000-1111-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 3콤보 | combo3 | 노말" }],
		"s-3042-2000-1112-0": [{ type: "text", sub_type: "message", message: "하이엘프 남 중갑5 창기사 창기사 전투의 의지" }],
		"s-3042-2000-1113-0": [{ type: "text", sub_type: "message", message: "하이엘프 남 중갑5 창기사 창기사 신뢰의 오라 III" }],
		"s-3042-2000-1114-0": [{ type: "text", sub_type: "message", message: "하이엘프 남 중갑5 창기사 창기사 분노 유발" }],
		"s-3042-2000-1201-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 헉헉50% | DyingWait" }],
		"s-3042-2000-1202-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 헉헉20% | DyingWait" }],
		"s-3042-2000-1204-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 어그로체인지 | aggrochange | 노말" }],
		"s-3042-2000-1207-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 좌걸음 | SideWalk | left | 노말" }],
		"s-3042-2000-1208-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 우걸음 | SideWalk | right | 노말" }],
		"s-3042-2000-1300-0": [{ type: "text", sub_type: "message", message: "(지하수로전용)Dark | Knight | 어그로스킬 | aggrochange | 노말" }],
		"s-3042-2000-1301-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 무적버프 | Wait | 노말" }],
		"s-3042-2000-1302-0": [{ type: "text", sub_type: "message", message: "(인던전용)창기사 | 자살" }],
		"s-3042-2000-2101-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 1콤보 | combo1 | 분노" }],
		"s-3042-2000-2103-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 방패방어 | Defence | 분노" }],
		"s-3042-2000-2104-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 강력한돌진 | screwThrough | 분노" }],
		"s-3042-2000-2105-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 방패치기 | ShieldStrike | 분노" }],
		"s-3042-2000-2106-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 반격찌르기 | Riposte | 분노" }],
		"s-3042-2000-2110-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 2콤보 | combo2 | 분노" }],
		"s-3042-2000-2111-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 3콤보 | combo3 | 분노" }],
		"s-3042-2000-2204-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 어그로체인지 | aggrochange | 노말" }],
		"s-3042-2000-2207-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 좌걸음 | SideWalk | left | 분노" }],
		"s-3042-2000-2208-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 우걸음 | SideWalk | right | 분노" }],
		"s-3042-2000-2300-0": [{ type: "text", sub_type: "message", message: "(지하수로전용)Dark | Knight | 어그로스킬 | aggrochange | 분노" }],
		"s-3042-6001-1101-0": [{ type: "text", sub_type: "message", message: "사제버프" }],
		"s-3042-6002-1101-0": [{ type: "text", sub_type: "message", message: "정령버프" }]
	};
};