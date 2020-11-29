// Lilith's Keep (Hard)


module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		"s-969-155-1004-0": [{ type: "text", sub_type: "message", message: "투명npc | 주변 범위누킹" }],
		"s-969-156-1000-0": [{ type: "text", sub_type: "message", message: "완전체듀리온 | 원거리체이스이펙트2중타격 | longAtk+LongAtk | Loop+longAtk | End | 노멀" }],
		"s-969-156-1001-0": [{ type: "text", sub_type: "message", message: "완전체듀리온 | 원거리체이스이펙트1타발사체 | 노멀" }],
		"s-969-156-1002-0": [{ type: "text", sub_type: "message", message: "완전체듀리온 | 원거리체이스이펙트2타발사체 | 노멀" }],
		"s-969-157-1400-0": [{ type: "text", sub_type: "message", message: "투명npc 240 | 이펙트용" }],
		"s-969-157-1401-0": [{ type: "text", sub_type: "message", message: "투명npc 800-1100" }],
		"s-969-157-1402-0": [{ type: "text", sub_type: "message", message: "투명npc 두개합친거 | 이펙트용" }],
		"s-969-157-1410-0": [{ type: "text", sub_type: "message", message: "투명npc 240" }],
		"s-969-157-1420-0": [{ type: "text", sub_type: "message", message: "투명npc 두개합친거" }],
		"s-969-159-1300-0": [{ type: "text", sub_type: "message", message: "투명npc | 2넴 | 이상상태 부여용" }],
		"s-969-162-3107-0": [{ type: "text", sub_type: "message", message: "순간이동홀 | 연출용" }],
		"s-969-162-3108-0": [{ type: "text", sub_type: "message", message: "순간이동 하기" }],
		"s-969-163-3105-0": [{ type: "text", sub_type: "message", message: "순간이동홀 | 준비동작" }],
		"s-969-163-3106-0": [{ type: "text", sub_type: "message", message: "순간이동홀" }],
		"s-969-2027-1101-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 기본공격 | 화염구 | 노멀" }],
		"s-969-2027-1103-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 얼음송곳모션 | BlastSoil | 노멀" }],
		"s-969-2027-1104-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 얼음송곳발사체 | 노멀" }],
		"s-969-2027-1105-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 번개의덫모션 | ShockTrap | 노멀" }],
		"s-969-2027-1106-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 번개의덫발사체 | 노멀" }],
		"s-969-2027-1107-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 지옥불소환 | BlastBall | 노멀" }],
		"s-969-2027-1108-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 영기태우기 | AuraBurn | 노멀" }],
		"s-969-2027-1121-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 1차지폭렬구모션 | BlastBall | 노멀" }],
		"s-969-2027-1122-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 1차지폭렬구발사체 | 노멀" }],
		"s-969-2027-1123-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 2차지폭렬구모션 | BlastBall | 노멀" }],
		"s-969-2027-1124-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 2차지폭렬구 | 노멀" }],
		"s-969-2027-1125-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 3차지폭렬구모션 | BlastBall | 노멀" }],
		"s-969-2027-1126-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 3차지폭렬구 | 노멀" }],
		"s-969-2027-1206-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 물러서기(회피) | BackDash | 노멀" }],
		"s-969-2027-1501-0": [{ type: "text", sub_type: "message", message: "(듀리온의 안식처)암흑 구슬화" }],
		"s-969-2027-1502-0": [{ type: "text", sub_type: "message", message: "(듀리온의 안식처)암흑 구슬(프로젝타일)" }],
		"s-969-2027-1503-0": [{ type: "text", sub_type: "message", message: "(듀리온의안식처) | 아크데바마법사 | 죡불소환" }],
		"s-969-2027-2101-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 기본공격 | 화염구 | 분노" }],
		"s-969-2027-2103-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 얼음송곳모션 | BlastSoil | 분노" }],
		"s-969-2027-2104-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 얼음송곳발사체 | 분노" }],
		"s-969-2027-2105-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 번개의덫모션 | ShockTrap | 분노" }],
		"s-969-2027-2106-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 번개의덫발사체 | 분노" }],
		"s-969-2027-2107-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 지옥불소환 | BlastBall | 분노" }],
		"s-969-2027-2108-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 영기태우기 | AuraBurn | 분노" }],
		"s-969-2027-2121-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 1차지폭렬구모션 | BlastBall | 분노" }],
		"s-969-2027-2122-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 1차지폭렬구발사체 | 분노" }],
		"s-969-2027-2123-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 2차지폭렬구모션 | BlastBall | 분노" }],
		"s-969-2027-2124-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 2차지폭렬구 | 분노" }],
		"s-969-2027-2125-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 3차지폭렬구모션 | BlastBall | 분노" }],
		"s-969-2027-2126-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 3차지폭렬구 | 분노" }],
		"s-969-2027-2206-0": [{ type: "text", sub_type: "message", message: "아크데바마법사 | 물러서기(회피) | BackDash | 분노" }],
		"s-969-2028-1101-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Normal Shot" }],
		"s-969-2028-1103-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Arrow Shower | Shot | 1단계" }],
		"s-969-2028-1104-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Arrow Shower | Shot | 2단계" }],
		"s-969-2028-1105-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Arrow Shower | Shot | 3단계" }],
		"s-969-2028-1106-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Charge Arrow | Shot | 1단계" }],
		"s-969-2028-1107-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Charge Arrow | Shot | 2단계" }],
		"s-969-2028-1108-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Charge Arrow | Shot | 3단계" }],
		"s-969-2028-1109-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Piercing Arrow | Shot | 1단계" }],
		"s-969-2028-1110-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Piercing Arrow | Shot | 2단계" }],
		"s-969-2028-1111-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Piercing Arrow | Shot | 3단계" }],
		"s-969-2028-1206-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | 회피" }],
		"s-969-2028-1501-0": [{ type: "text", sub_type: "message", message: "(듀리온의 안식처)암흑 구슬화" }],
		"s-969-2028-1502-0": [{ type: "text", sub_type: "message", message: "(듀리온의 안식처)암흑 구슬(프로젝타일)" }],
		"s-969-2028-1503-0": [{ type: "text", sub_type: "message", message: "(듀리온의안식처)아크데바 | 궁수 | 라인샷 | 1단계" }],
		"s-969-2028-2101-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Normal Shot" }],
		"s-969-2028-2103-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Arrow Shower | Shot | 1단계" }],
		"s-969-2028-2104-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Arrow Shower | Shot | 2단계" }],
		"s-969-2028-2105-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Arrow Shower | Shot | 3단계" }],
		"s-969-2028-2106-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Charge Arrow | Shot | 1단계" }],
		"s-969-2028-2107-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Charge Arrow | Shot | 2단계" }],
		"s-969-2028-2108-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Charge Arrow | Shot | 3단계" }],
		"s-969-2028-2109-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Piercing Arrow | Shot | 1단계" }],
		"s-969-2028-2110-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Piercing Arrow | Shot | 2단계" }],
		"s-969-2028-2111-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | Piercing Arrow | Shot | 3단계" }],
		"s-969-2028-2206-0": [{ type: "text", sub_type: "message", message: "아크데바 | 궁수 | 회피 | 분노" }],
		"s-969-2032-1101-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 콤보2연타 | Combo2 | 노멀" }],
		"s-969-2032-1103-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 콤보3연타 | Combo3 | 노멀" }],
		"s-969-2032-1104-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 콤보4연타 | Combo4 | 노멀" }],
		"s-969-2032-1105-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 도발난무 | Nanmu | 노멀" }],
		"s-969-2032-1106-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 몰아치기 | PointAtk | 노멀" }],
		"s-969-2032-1107-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 기상공격 | RisingAtk | 노멀" }],
		"s-969-2032-1108-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 투지의일격 | PointStrike | 노멀" }],
		"s-969-2032-1205-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 긴급회피(피격무적구간있음) | tumbling | 노멀" }],
		"s-969-2032-1210-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 대기 | Wait | 노멀" }],
		"s-969-2032-2101-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 콤보2연타 | Combo2 | 분노" }],
		"s-969-2032-2103-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 콤보3연타 | Combo3 | 분노" }],
		"s-969-2032-2104-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 콤보4연타 | Combo4 | 분노" }],
		"s-969-2032-2105-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 도발난무 | Nanmu | 분노" }],
		"s-969-2032-2106-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 몰아치기 | PointAtk | 분노" }],
		"s-969-2032-2107-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 기상공격 | RisingAtk | 분노" }],
		"s-969-2032-2108-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 투지의일격 | PointStrike | 분노" }],
		"s-969-2032-2205-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 긴급회피(피격무적구간있음) | tumbling | 분노" }],
		"s-969-2032-2210-0": [{ type: "text", sub_type: "message", message: "아크데바 | 검투사 | 대기 | Wait | 분노" }],
		"s-969-76901-1101-0": [{ type: "text", sub_type: "message", message: "몽마 | 뿔공격 | Atk01 | 노멀" }],
		"s-969-76901-1102-0": [{ type: "text", sub_type: "message", message: "몽마 | 대쉬공격 | Atk02 | 노멀" }],
		"s-969-76901-1103-0": [{ type: "text", sub_type: "message", message: "몽마 | 돌풍공격 | Atk03 | 노멀" }],
		"s-969-76901-1104-0": [{ type: "text", sub_type: "message", message: "몽마 | 뒷발차기 | Atk04 | 노멀" }],
		"s-969-76901-1201-0": [{ type: "text", sub_type: "message", message: "몽마 헉헉(50%)" }],
		"s-969-76901-1202-0": [{ type: "text", sub_type: "message", message: "몽마 헉헉(20%)" }],
		"s-969-76901-1203-0": [{ type: "text", sub_type: "message", message: "몽마 사전동작 (임시 대기 동작)" }],
		"s-969-76901-1204-0": [{ type: "text", sub_type: "message", message: "몽마 어그로 체인지" }],
		"s-969-76901-1207-0": [{ type: "text", sub_type: "message", message: "몽마 왼쪽 사이드 워크" }],
		"s-969-76901-1208-0": [{ type: "text", sub_type: "message", message: "몽마 오른쪽 사이드 워크" }],
		"s-969-76901-1209-0": [{ type: "text", sub_type: "message", message: "몽마 앞발차기" }],
		"s-969-76901-1210-0": [{ type: "text", sub_type: "message", message: "몽마 앞발차기 후 내려찍기 (근폭)" }],
		"s-969-76901-1211-0": [{ type: "text", sub_type: "message", message: "몽마 앞발차기 후 내려찍기 (원폭)" }],
		"s-969-76901-1212-0": [{ type: "text", sub_type: "message", message: "몽마 팩맨 공격 패턴 대기" }],
		"s-969-76901-1213-0": [{ type: "text", sub_type: "message", message: "몽마 팩맨 점프 공격 1차" }],
		"s-969-76901-1214-0": [{ type: "text", sub_type: "message", message: "몽마 팩맨 점프 공격 2차" }],
		"s-969-76901-1215-0": [{ type: "text", sub_type: "message", message: "몽마 팩맨 점프 공격 3차" }],
		"s-969-76901-1216-0": [{ type: "text", sub_type: "message", message: "몽마 전투시작 준비" }],
		"s-969-76901-1217-0": [{ type: "text", sub_type: "message", message: "레디액션2" }],
		"s-969-76901-1218-0": [{ type: "text", sub_type: "message", message: "3초 딜레이" }],
		"s-969-76901-1219-0": [{ type: "text", sub_type: "message", message: "몽마 점프 공격" }],
		"s-969-76901-1220-0": [{ type: "text", sub_type: "message", message: "몽마 점프 공격 장판" }],
		"s-969-76901-2101-0": [{ type: "text", sub_type: "message", message: "몽마 | 뿔공격 | Atk01 | 분노" }],
		"s-969-76901-2102-0": [{ type: "text", sub_type: "message", message: "몽마 | 대쉬공격 | Atk02 | 노멀" }],
		"s-969-76901-2103-0": [{ type: "text", sub_type: "message", message: "몽마 | 돌풍공격 | Atk03 | 분노" }],
		"s-969-76901-2104-0": [{ type: "text", sub_type: "message", message: "몽마 | 뒷발차기 | Atk04 | 분노" }],
		"s-969-76901-2201-0": [{ type: "text", sub_type: "message", message: "몽마 헉헉(50%) (분노)" }],
		"s-969-76901-2202-0": [{ type: "text", sub_type: "message", message: "몽마 헉헉(20%) (분노)" }],
		"s-969-76901-2203-0": [{ type: "text", sub_type: "message", message: "몽마 사전동작 (임시 대기 동작) (분노)" }],
		"s-969-76901-2204-0": [{ type: "text", sub_type: "message", message: "몽마 어그로 체인지 (분노)" }],
		"s-969-76901-2207-0": [{ type: "text", sub_type: "message", message: "몽마 왼쪽 사이드 워크 (분노)" }],
		"s-969-76901-2208-0": [{ type: "text", sub_type: "message", message: "몽마 오른쪽 사이드 워크 (분노)" }],
		"s-969-76901-2209-0": [{ type: "text", sub_type: "message", message: "몽마 앞발차기 | 분노" }],
		"s-969-76901-2210-0": [{ type: "text", sub_type: "message", message: "몽마 앞발차기 후 내려찍기 (근폭) | 분노" }],
		"s-969-76901-2211-0": [{ type: "text", sub_type: "message", message: "몽마 앞발차기 후 내려찍기 (원폭) | 분노" }],
		"s-969-76902-1101-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 기본공격(전방연타) | atk01 | 노말" }],
		"s-969-76902-1103-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 기본공격2(물기) | atk02 | 노말" }],
		"s-969-76902-1106-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 무브어택(굴러서공격) | moveatk | 노말" }],
		"s-969-76902-1107-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 리액션어택(제자리점프공격) | reactionatk | 노말" }],
		"s-969-76902-1108-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 라운드어택(360도공격) | roundatk | 노말" }],
		"s-969-76902-1109-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 짧은 롱무브 | longmove | 노말" }],
		"s-969-76902-1110-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 사전동작있는특수공격(원거리범위공격) | heavyatk | 노말" }],
		"s-969-76902-1111-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 긴 롱무브 | longmove | 노말" }],
		"s-969-76902-1112-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 독걸고점프공격 | UltraAtk01 | 노멀" }],
		"s-969-76902-1150-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 액티브무브공격 | activemoveatk | 노말" }],
		"s-969-76902-1151-0": [{ type: "text", sub_type: "message", message: "왁스파이더 | 오른손 연타" }],
		"s-969-76902-1152-0": [{ type: "text", sub_type: "message", message: "왁스파이더 | 왼손 연타" }],
		"s-969-76902-1153-0": [{ type: "text", sub_type: "message", message: "왁스파이더 | 원폭 후 점프" }],
		"s-969-76902-1154-0": [{ type: "text", sub_type: "message", message: "왁스파이더 | 전방 방어불가 브레스" }],
		"s-969-76902-1155-0": [{ type: "text", sub_type: "message", message: "왁스파이더 | 방어회피불가 근폭" }],
		"s-969-76902-1156-0": [{ type: "text", sub_type: "message", message: "왁스파이더 | 원거리 누킹 | long atk" }],
		"s-969-76902-1157-0": [{ type: "text", sub_type: "message", message: "왁스파이더 | 원거리 누킹(발사체) | long atk" }],
		"s-969-76902-1301-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 방어 | defence | 노말" }],
		"s-969-76902-2101-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 기본공격(전방연타) | atk01 | 분노" }],
		"s-969-76902-2103-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 기본공격2(물기) | atk02 | 분노" }],
		"s-969-76902-2106-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 무브어택(굴러서공격) | moveatk | 분노" }],
		"s-969-76902-2107-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 리액션어택(제자리점프공격) | reactionatk | 분노" }],
		"s-969-76902-2108-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 라운드어택(360도공격) | roundatk | 분노" }],
		"s-969-76902-2109-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 짧은 롱무브 | longmove | 분노" }],
		"s-969-76902-2110-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 사전동작있는특수공격(원거리범위공격) | heavyatk | 분노" }],
		"s-969-76902-2111-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 긴 롱무브 | longmove | 분노" }],
		"s-969-76902-2112-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 독걸고점프공격 | UltraAtk01 | 분노" }],
		"s-969-76902-2150-0": [{ type: "text", sub_type: "message", message: "교활한아라크네 | 액티브무브공격 | activemoveatk | 분노" }],
		"s-969-76902-2151-0": [{ type: "text", sub_type: "message", message: "왁스파이더 | 오른손 연타 | 분노" }],
		"s-969-76902-2152-0": [{ type: "text", sub_type: "message", message: "왁스파이더 | 왼손 연타 | 분노" }],
		"s-969-76902-2153-0": [{ type: "text", sub_type: "message", message: "왁스파이더 | 원폭 후 점프 | 분노" }],
		"s-969-76902-2154-0": [{ type: "text", sub_type: "message", message: "왁스파이더 | 전방 방어불가 브레스 | 분노" }],
		"s-969-76902-2155-0": [{ type: "text", sub_type: "message", message: "왁스파이더 | 방어회피불가 근폭 | 분노" }],
		"s-969-76902-2156-0": [{ type: "text", sub_type: "message", message: "왁스파이더 | 원거리 누킹 | long atk | 분노" }],
		"s-969-76902-2157-0": [{ type: "text", sub_type: "message", message: "왁스파이더 | 원거리 누킹(발사체) | long atk | 분노" }],
		"s-969-76903-1102-0": [{ type: "text", sub_type: "message", message: "릴리스 기본 공격 | atk01 | end" }],
		"s-969-76903-1103-0": [{ type: "text", sub_type: "message", message: "릴리스 기본 공격 후 전방 찍기 | atk01 | end01" }],
		"s-969-76903-1104-0": [{ type: "text", sub_type: "message", message: "릴리스 기본 공격 후 후방 견제 | atk01 | end02" }],
		"s-969-76903-1105-0": [{ type: "text", sub_type: "message", message: "릴리스 좌측 라운드 어택 | roundAtk01" }],
		"s-969-76903-1106-0": [{ type: "text", sub_type: "message", message: "릴리스 우측 라운드 어택 | rodunAtk02" }],
		"s-969-76903-1107-0": [{ type: "text", sub_type: "message", message: "릴리스 후방 어택 | backAtk" }],
		"s-969-76903-1108-0": [{ type: "text", sub_type: "message", message: "릴리스 전방 올려치고 공중에서 내려찍기 사전모션 | atk04 | end1" }],
		"s-969-76903-1109-0": [{ type: "text", sub_type: "message", message: "릴리스 구슬 발사 동작 | Atk04 End2" }],
		"s-969-76903-1110-0": [{ type: "text", sub_type: "message", message: "릴리스 구슬 발사체(프로젝타일)" }],
		"s-969-76903-1111-0": [{ type: "text", sub_type: "message", message: "릴리스 공중에서 돌진 | HeavyAtk01 | End02" }],
		"s-969-76903-1112-0": [{ type: "text", sub_type: "message", message: "릴리스 한바퀴 후방 회전 후 공중에서 회전 | HeavyAtk02 | End" }],
		"s-969-76903-1113-0": [{ type: "text", sub_type: "message", message: "릴리스 | DynamicSpawn용 모션 | Modealram" }],
		"s-969-76903-1115-0": [{ type: "text", sub_type: "message", message: "릴리스 전진 회전 2바퀴 | HeavyAtk04" }],
		"s-969-76903-1116-0": [{ type: "text", sub_type: "message", message: "릴리스 후방 회피 | jumpevasion" }],
		"s-969-76903-1117-0": [{ type: "text", sub_type: "message", message: "릴리스 리액션 | reaction" }],
		"s-969-76903-1118-0": [{ type: "text", sub_type: "message", message: "릴리스 회전하며 전방찍기 | Atk02" }],
		"s-969-76903-1119-0": [{ type: "text", sub_type: "message", message: "릴리스 전방 내려찍기 | Atk03 Start | Atk03 End" }],
		"s-969-76903-1120-0": [{ type: "text", sub_type: "message", message: "릴리스 발사체 사전 연결동작" }],
		"s-969-76903-1121-0": [{ type: "text", sub_type: "message", message: "릴리스 올려치고 3단 원근폭(방어불가) | Atk04 Start+Loop+End01" }],
		"s-969-76903-1122-0": [{ type: "text", sub_type: "message", message: "릴리스 1108,2108 연결스킬 | 방어회피불가 원근폭 | Atk04 End1" }],
		"s-969-76903-1123-0": [{ type: "text", sub_type: "message", message: "릴리스 전방 찍고 후려치기 | Atk03 Start | Atk03 End01" }],
		"s-969-76903-1124-0": [{ type: "text", sub_type: "message", message: "릴리스 1108,2108 연결스킬 | 방어불가 다중 원근폭 | Atk04 End2" }],
		"s-969-76903-1125-0": [{ type: "text", sub_type: "message", message: "릴리스 전방 올려치고 공중에서 내려찍기 사전모션 | atk04 | end1" }],
		"s-969-76903-1126-0": [{ type: "text", sub_type: "message", message: "릴리스 전방 내려찍기 | next방어불가 찍기 | atk03 start" }],
		"s-969-76903-1127-0": [{ type: "text", sub_type: "message", message: "릴리스 전방 내려찍기 | 방어불가atk02" }],
		"s-969-76903-1128-0": [{ type: "text", sub_type: "message", message: "릴리스 원딜 견제용 | 직선 브레스 | heavyAtk03" }],
		"s-969-76903-1129-0": [{ type: "text", sub_type: "message", message: "올려치고 3단 원근폭2(방어불가)" }],
		"s-969-76903-1130-0": [{ type: "text", sub_type: "message", message: "릴리스 올려치기 훼이크 | Atk04 Move+MoveEnd" }],
		"s-969-76903-1200-0": [{ type: "text", sub_type: "message", message: "릴리스 콤보 사전 공격1 | Atk02" }],
		"s-969-76903-1201-0": [{ type: "text", sub_type: "message", message: "릴리스 콤보 사전 공격2 | Atk04" }],
		"s-969-76903-1202-0": [{ type: "text", sub_type: "message", message: "릴리스 콤보 연결동작 | Atk03 Start" }],
		"s-969-76903-1203-0": [{ type: "text", sub_type: "message", message: "릴리스 콤보 연결동작Loop | Atk03 Loop" }],
		"s-969-76903-1204-0": [{ type: "text", sub_type: "message", message: "릴리스 콤보 | 낫손잡이로 후방 찍기 | Atk03 End02" }],
		"s-969-76903-1205-0": [{ type: "text", sub_type: "message", message: "릴리스 콤보 | 제자리 점프 돌기 | Atk03End | Spawn" }],
		"s-969-76903-1300-0": [{ type: "text", sub_type: "message", message: "릴리스 매혹 포획" }],
		"s-969-76903-1301-0": [{ type: "text", sub_type: "message", message: "릴리스 매혹 | Shot" }],
		"s-969-76903-1302-0": [{ type: "text", sub_type: "message", message: "릴리스 콤보 후방찍기 후 | 프로젝타일" }],
		"s-969-76903-1303-0": [{ type: "text", sub_type: "message", message: "릴리스 밖에서안으로 터져라 근폭 | 맞으면 암석화" }],
		"s-969-76903-1304-0": [{ type: "text", sub_type: "message", message: "릴리스 매혹 포획 | 개인용" }],
		"s-969-76903-1305-0": [{ type: "text", sub_type: "message", message: "릴리스 매혹 | Shot | 개인용" }],
		"s-969-76903-1306-0": [{ type: "text", sub_type: "message", message: "수면걸기스킬추가용" }],
		"s-969-76903-1400-0": [{ type: "text", sub_type: "message", message: "릴리스 DynamicSpawn | HeavyAtk03" }],
		"s-969-76903-1401-0": [{ type: "text", sub_type: "message", message: "릴리스 DynamicSpawn | HeavyAtk03" }],
		"s-969-76903-1402-0": [{ type: "text", sub_type: "message", message: "릴리스 DynamicSpawn | HeavyAtk03" }],
		"s-969-76903-1403-0": [{ type: "text", sub_type: "message", message: "릴리스 DynamicSpawn | HeavyAtk03" }],
		"s-969-76903-2102-0": [{ type: "text", sub_type: "message", message: "릴리스 기본 공격 | atk01 | end | 분노" }],
		"s-969-76903-2103-0": [{ type: "text", sub_type: "message", message: "릴리스 기본 공격 후 전방 찍기 | atk01 | end01 | 분노" }],
		"s-969-76903-2104-0": [{ type: "text", sub_type: "message", message: "릴리스 기본 공격 후 후방 견제 | atk01 | end02 | 분노" }],
		"s-969-76903-2105-0": [{ type: "text", sub_type: "message", message: "릴리스 좌측 라운드 어택 | roundAtk01 | 분노" }],
		"s-969-76903-2106-0": [{ type: "text", sub_type: "message", message: "릴리스 우측 라운드 어택 | rodunAtk02 | 분노" }],
		"s-969-76903-2107-0": [{ type: "text", sub_type: "message", message: "릴리스 후방 어택 | backAtk | 분노" }],
		"s-969-76903-2108-0": [{ type: "text", sub_type: "message", message: "릴리스 전방 올려치고 공중에서 내려찍기 사전모션 | atk04 | end1 | 분노" }],
		"s-969-76903-2109-0": [{ type: "text", sub_type: "message", message: "릴리스 구슬 발사 동작 | Atk04 End2" }],
		"s-969-76903-2110-0": [{ type: "text", sub_type: "message", message: "릴리스 구슬 발사체(프로젝타일)" }],
		"s-969-76903-2111-0": [{ type: "text", sub_type: "message", message: "릴리스 공중에서 돌진 | HeavyAtk01 | End02 | 분노" }],
		"s-969-76903-2112-0": [{ type: "text", sub_type: "message", message: "릴리스 한바퀴 후방 회전 후 공중에서 회전 | HeavyAtk02 | End | 분노" }],
		"s-969-76903-2113-0": [{ type: "text", sub_type: "message", message: "릴리스 | DynamicSpawn용 모션 | Modealram | 분노" }],
		"s-969-76903-2115-0": [{ type: "text", sub_type: "message", message: "릴리스 전진 회전 2바퀴 | HeavyAtk04 | 분노" }],
		"s-969-76903-2116-0": [{ type: "text", sub_type: "message", message: "릴리스 후방 회피 | jumpevasion | 분노" }],
		"s-969-76903-2117-0": [{ type: "text", sub_type: "message", message: "릴리스 리액션 | reaction | 분노" }],
		"s-969-76903-2118-0": [{ type: "text", sub_type: "message", message: "릴리스 회전하며 전방찍기 | Atk02 | 분노" }],
		"s-969-76903-2119-0": [{ type: "text", sub_type: "message", message: "릴리스 전방 내려찍기 | Atk03 Start | Atk03 End | 분노" }],
		"s-969-76903-2120-0": [{ type: "text", sub_type: "message", message: "릴리스 발사체 사전 연결동작 | 분노" }],
		"s-969-76903-2121-0": [{ type: "text", sub_type: "message", message: "릴리스 올려치고 3단 원근폭(방어불가) | Atk04 Start+Loop+End01 | 분노" }],
		"s-969-76903-2122-0": [{ type: "text", sub_type: "message", message: "릴리스 1108,2108 연결스킬 | 방어회피불가 원근폭 | Atk04 End1 | 분노" }],
		"s-969-76903-2123-0": [{ type: "text", sub_type: "message", message: "릴리스 전방 찍고 후려치기 | Atk03 Start | Atk03 End01" }],
		"s-969-76903-2124-0": [{ type: "text", sub_type: "message", message: "릴리스 1108,2108 연결스킬 | 방어불가 다중 원근폭 | Atk04 End2 | 분노" }],
		"s-969-76903-2125-0": [{ type: "text", sub_type: "message", message: "릴리스 전방 올려치고 공중에서 내려찍기 사전모션 | atk04 | end1 | 분노" }],
		"s-969-76903-2126-0": [{ type: "text", sub_type: "message", message: "릴리스 전방 내려찍기 | next방어불가 찍기 | atk03 start" }],
		"s-969-76903-2127-0": [{ type: "text", sub_type: "message", message: "릴리스 전방 내려찍기 | 방어불가atk02" }],
		"s-969-76903-2128-0": [{ type: "text", sub_type: "message", message: "릴리스 원딜 견제용 | 직선 브레스 | heavyAtk03" }],
		"s-969-76903-2129-0": [{ type: "text", sub_type: "message", message: "올려치고 3단 원근폭2(방어불가)" }],
		"s-969-76903-2130-0": [{ type: "text", sub_type: "message", message: "릴리스 올려치기 훼이크 | Atk04 Move+MoveEnd | 분노" }],
		"s-969-76903-2200-0": [{ type: "text", sub_type: "message", message: "릴리스 콤보 사전 공격1 | Atk02 | 분노" }],
		"s-969-76903-2201-0": [{ type: "text", sub_type: "message", message: "릴리스 콤보 사전 공격2 | Atk04 | 분노" }],
		"s-969-76903-2202-0": [{ type: "text", sub_type: "message", message: "릴리스 콤보 연결동작 | Atk03 Start | 분노" }],
		"s-969-76903-2203-0": [{ type: "text", sub_type: "message", message: "릴리스 콤보 연결동작Loop | Atk03 Loop | 분노" }],
		"s-969-76903-2204-0": [{ type: "text", sub_type: "message", message: "릴리스 콤보 | 낫손잡이로 후방 찍기 | Atk03 End02 | 분노" }],
		"s-969-76903-2205-0": [{ type: "text", sub_type: "message", message: "릴리스 콤보 | 제자리 점프 돌기 | Atk03End | Spawn | 분노" }],
		"s-969-769012-2001-0": [{ type: "text", sub_type: "message", message: "릴리스 1네임드 몽마 전용 스킬(도너츠 지속 불기둥) 1차" }],
		"s-969-769012-2002-0": [{ type: "text", sub_type: "message", message: "릴리스 1네임드 몽마 전용 스킬(도너츠 지속 불기둥) 1차" }],
		"s-969-769013-2003-0": [{ type: "text", sub_type: "message", message: "릴리스 1네임드 몽마 전용 스킬(도너츠 지속 불기둥) 2차" }],
		"s-969-769013-2004-0": [{ type: "text", sub_type: "message", message: "릴리스 1네임드 몽마 전용 스킬(도너츠 지속 불기둥 바닥) 2차" }],
		"s-969-769014-2005-0": [{ type: "text", sub_type: "message", message: "릴리스 1네임드 몽마 전용 스킬(도너츠 지속 불기둥) 3차" }],
		"s-969-769014-2006-0": [{ type: "text", sub_type: "message", message: "릴리스 1네임드 몽마 전용 스킬(도너츠 지속 불기둥 바닥) 3차" }],
		"s-969-769015-1101-0": [{ type: "text", sub_type: "message", message: "물의정령 | 전방 2회공격 | atk01 | 노말" }],
		"s-969-769015-1104-0": [{ type: "text", sub_type: "message", message: "물의정령 | 물분수 누킹 공격(이속저하 이상상태) | akt04 | 노말" }],
		"s-969-769015-2101-0": [{ type: "text", sub_type: "message", message: "물의정령 | 전방 2회공격 | atk01 | 분노" }],
		"s-969-769015-2104-0": [{ type: "text", sub_type: "message", message: "물의정령 | 물분수 누킹 공격(이속저하 이상상태) | akt04 | 분노" }],
		"s-969-769015-3102-0": [{ type: "text", sub_type: "message", message: "오르카의 신전 | 일반구간 대기" }],
		"s-969-769015-3106-0": [{ type: "text", sub_type: "message", message: "불의 정령 30도 장판" }]
	};
};