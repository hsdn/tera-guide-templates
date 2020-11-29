// Crucible of Fame


module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		"s-795-201-1101-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 연속 공격" }],
		"s-795-201-1102-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 방패 돌진 공격" }],
		"s-795-201-1103-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 점프 내려 찍기" }],
		"s-795-201-1104-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 | 뒤로물러나며휘두르기 | UltraAtk01 | 노멀" }],
		"s-795-201-1201-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 50% 탈진" }],
		"s-795-201-1202-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 20% 탈진" }],
		"s-795-201-1203-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 스킬 레디" }],
		"s-795-201-1204-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 어그로 변경 소셜" }],
		"s-795-201-1207-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 좌걸음" }],
		"s-795-201-1208-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 우걸음" }],
		"s-795-201-1211-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 대기" }],
		"s-795-201-2101-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 연속 공격(분노)" }],
		"s-795-201-2102-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 방패 돌진 공격(분노)" }],
		"s-795-201-2103-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 점프 내려 찍기(분노)" }],
		"s-795-201-2104-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 | 뒤로물러나며휘두르기 | UltraAtk01 | 분노" }],
		"s-795-201-2203-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 스킬 레디 (분노)" }],
		"s-795-201-2204-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 어그로 변경 소셜 (분노)" }],
		"s-795-201-2207-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 좌걸음 (분노)" }],
		"s-795-201-2208-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 우걸음 (분노)" }],
		"s-795-201-2211-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 대기 (분노)" }],
		"s-795-202-1101-0": [{ type: "text", sub_type: "message", message: "쿠차트수행자 | 내려찍기 | Atk01 | 노멀" }],
		"s-795-202-1102-0": [{ type: "text", sub_type: "message", message: "쿠차트수행자 | 회전공격 | Atk02 | 노멀" }],
		"s-795-202-1103-0": [{ type: "text", sub_type: "message", message: "쿠차트수행자 | 할퀴기공격 | Atk03 | 노멀" }],
		"s-795-202-1201-0": [{ type: "text", sub_type: "message", message: "쿠차트수행자 50% 탈진" }],
		"s-795-202-1202-0": [{ type: "text", sub_type: "message", message: "쿠차트수행자 20% 탈진" }],
		"s-795-202-1203-0": [{ type: "text", sub_type: "message", message: "쿠차트수행자 스킬 레디" }],
		"s-795-202-1204-0": [{ type: "text", sub_type: "message", message: "쿠차트수행자 어그로 변경 소셜" }],
		"s-795-202-1207-0": [{ type: "text", sub_type: "message", message: "쿠차트수행자 좌걸음" }],
		"s-795-202-1208-0": [{ type: "text", sub_type: "message", message: "쿠차트수행자 우걸음" }],
		"s-795-202-1211-0": [{ type: "text", sub_type: "message", message: "쿠차트수행자 대기" }],
		"s-795-202-2101-0": [{ type: "text", sub_type: "message", message: "쿠차트수행자 | 내려찍기 | Atk01 | 분노" }],
		"s-795-202-2102-0": [{ type: "text", sub_type: "message", message: "쿠차트수행자 | 회전공격 | Atk02 | 분노" }],
		"s-795-202-2103-0": [{ type: "text", sub_type: "message", message: "쿠차트수행자 | 할퀴기공격Atk03 | 분노" }],
		"s-795-202-2201-0": [{ type: "text", sub_type: "message", message: "쿠차트수행자 50% 탈진 (분노)" }],
		"s-795-202-2202-0": [{ type: "text", sub_type: "message", message: "쿠차트수행자 20% 탈진 (분노)" }],
		"s-795-202-2203-0": [{ type: "text", sub_type: "message", message: "쿠차트수행자 스킬 레디 (분노)" }],
		"s-795-202-2204-0": [{ type: "text", sub_type: "message", message: "쿠차트수행자 어그로 변경 소셜 (분노)" }],
		"s-795-202-2207-0": [{ type: "text", sub_type: "message", message: "쿠차트수행자 좌걸음 (분노)" }],
		"s-795-202-2208-0": [{ type: "text", sub_type: "message", message: "쿠차트수행자 우걸음 (분노)" }],
		"s-795-202-2211-0": [{ type: "text", sub_type: "message", message: "쿠차트수행자 대기 (분노)" }],
		"s-795-203-1101-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 원거리 수류탄 공격" }],
		"s-795-203-1103-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 중거리 수류탄 공격" }],
		"s-795-203-1104-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 근거리 수류탄 공격" }],
		"s-795-203-1105-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 디버프 공격(디버프)" }],
		"s-795-203-1106-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 광역 힐" }],
		"s-795-203-1201-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 50% 타진" }],
		"s-795-203-1202-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 20% 타진" }],
		"s-795-203-1204-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 어그로 변경 소셜" }],
		"s-795-203-1207-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 좌걸음" }],
		"s-795-203-1208-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 우걸음" }],
		"s-795-203-1209-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 비전투 대기" }],
		"s-795-203-1210-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 대기" }],
		"s-795-203-2101-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 원거리 수류탄 공격 (분노)" }],
		"s-795-203-2103-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 중거리 수류탄 공격 (분노)" }],
		"s-795-203-2104-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 근거리 수류탄 공격 (분노)" }],
		"s-795-203-2105-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 디버프 공격(분노)(디버프)" }],
		"s-795-203-2106-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 광역 힐(분노)" }],
		"s-795-203-2201-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 50% 타진 (분노)" }],
		"s-795-203-2202-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 20% 타진 (분노)" }],
		"s-795-203-2204-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 어그로 변경 소셜 (분노)" }],
		"s-795-203-2207-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 좌걸음 (분노)" }],
		"s-795-203-2208-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 우걸음 (분노)" }],
		"s-795-203-2209-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 비전투 대기 (분노)" }],
		"s-795-203-2210-0": [{ type: "text", sub_type: "message", message: "쿠차트 주술사 대기 (분노)" }],
		"s-795-204-1101-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 연속 공격" }],
		"s-795-204-1102-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 방패 돌진 공격" }],
		"s-795-204-1103-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 점프 내려 찍기" }],
		"s-795-204-1104-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 | 뒤로물러나며휘두르기 | UltraAtk01 | 노멀" }],
		"s-795-204-1201-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 50% 탈진" }],
		"s-795-204-1202-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 20% 탈진" }],
		"s-795-204-1203-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 스킬 레디" }],
		"s-795-204-1204-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 어그로 변경 소셜" }],
		"s-795-204-1207-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 좌걸음" }],
		"s-795-204-1208-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 우걸음" }],
		"s-795-204-1211-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 대기" }],
		"s-795-204-2101-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 연속 공격(분노)" }],
		"s-795-204-2102-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 방패 돌진 공격(분노)" }],
		"s-795-204-2103-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 점프 내려 찍기(분노)" }],
		"s-795-204-2104-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 | 뒤로물러나며휘두르기 | UltraAtk01 | 분노" }],
		"s-795-204-2203-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 스킬 레디 (분노)" }],
		"s-795-204-2204-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 어그로 변경 소셜 (분노)" }],
		"s-795-204-2207-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 좌걸음 (분노)" }],
		"s-795-204-2208-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 우걸음 (분노)" }],
		"s-795-204-2211-0": [{ type: "text", sub_type: "message", message: "쿠차트 전사 대기 (분노)" }],
		"s-795-205-1101-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk01 | Low(오른손 기본 공격 | 노멀 텐션)" }],
		"s-795-205-1102-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk02 | Low(더블 래리어트 회전 공격 | 노멀 텐션)" }],
		"s-795-205-1103-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk03 | Low(백점프 후 동료 공격력 버프 | 노멀 텐션)" }],
		"s-795-205-1104-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk04 | Low(폭탄 투척 공격 | 노멀 텐션)" }],
		"s-795-205-1105-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk05 | Low(오른손 길게 전진 공격 | 노멀 텐션)" }],
		"s-795-205-1106-0": [{ type: "text", sub_type: "message", message: "오칸 | 돌진공격 | UltraAtk01 | 노멀" }],
		"s-795-205-1201-0": [{ type: "text", sub_type: "message", message: "오칸 50% 헉헉" }],
		"s-795-205-1202-0": [{ type: "text", sub_type: "message", message: "오칸 20% 헉헉" }],
		"s-795-205-1203-0": [{ type: "text", sub_type: "message", message: "오칸 사전동작 | 노말" }],
		"s-795-205-1204-0": [{ type: "text", sub_type: "message", message: "오칸 어그로 체인지" }],
		"s-795-205-1207-0": [{ type: "text", sub_type: "message", message: "오칸 왼쪽 | 게걸음" }],
		"s-795-205-1208-0": [{ type: "text", sub_type: "message", message: "오칸 오른쪽 게걸음" }],
		"s-795-205-1209-0": [{ type: "text", sub_type: "message", message: "오칸 jumpevasion01 | Low(좌측 점프 회피 | 노멀 텐션)" }],
		"s-795-205-1210-0": [{ type: "text", sub_type: "message", message: "오칸 jumpevasion02 | Low(우측 점프 회피 | 노멀 텐션)" }],
		"s-795-205-1301-0": [{ type: "text", sub_type: "message", message: "(인던전용)오칸 | 자폭 | ATk03" }],
		"s-795-205-1302-0": [{ type: "text", sub_type: "message", message: "(인던전용)오칸 | 이상상태디버프공격(공포) | Angry | Q" }],
		"s-795-205-2101-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk01 | 오른손 기본 공격 (분노)" }],
		"s-795-205-2102-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk02 | 더블 래리어트 회전 공격 (분노)" }],
		"s-795-205-2103-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk03 | Low | 백점프 후 동료 공격력 버프 (분노)" }],
		"s-795-205-2104-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk04 폭탄 투척 공격 (분노)" }],
		"s-795-205-2105-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk05 오른손 길게 전진 공격 (분노)" }],
		"s-795-205-2106-0": [{ type: "text", sub_type: "message", message: "오칸 | 돌진공격 | UltraAtk01 | 분노" }],
		"s-795-205-2201-0": [{ type: "text", sub_type: "message", message: "오칸 50% 헉헉 (분노)" }],
		"s-795-205-2202-0": [{ type: "text", sub_type: "message", message: "오칸 20% 헉헉 (분노)" }],
		"s-795-205-2203-0": [{ type: "text", sub_type: "message", message: "오칸 사전동작 | 분노)" }],
		"s-795-205-2204-0": [{ type: "text", sub_type: "message", message: "오칸 어그로 체인지 (분노)" }],
		"s-795-205-2207-0": [{ type: "text", sub_type: "message", message: "오칸 왼쪽 | 게걸음 (분노)" }],
		"s-795-205-2208-0": [{ type: "text", sub_type: "message", message: "오칸 오른쪽 게걸음 (분노)" }],
		"s-795-205-2209-0": [{ type: "text", sub_type: "message", message: "오칸 jumpevasion01 | (좌측 점프 회피) (분노)" }],
		"s-795-205-2210-0": [{ type: "text", sub_type: "message", message: "오칸 jumpevasion02 | (우측 점프 회피) (분노)" }],
		"s-795-206-1101-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 양손 오른쪽 내려치기 | Atk01 | 노말" }],
		"s-795-206-1102-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 양주먹 원투 내려찍기 | Atk02 | 노멀" }],
		"s-795-206-1103-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 오른쪽 회전하며 원투 연타찍기 | roundAtk01 | 노말" }],
		"s-795-206-1104-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 왼쪽 회전하며 오른 주먹 내려치고 왼손 비껴 쓸기 | roundAtk02 | 노말" }],
		"s-795-206-1105-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 제자리 고공점프 | reactionAtk" }],
		"s-795-206-1106-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 돌 던지기 | longAtk01 | 노말" }],
		"s-795-206-1107-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 돌 뽑아 앞에 찍고 부수기 | longAtk02 | 노말" }],
		"s-795-206-1108-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 리엑션 발생 후 오른발로 찍고 3회 손바닥으로 후려치기 | heavyAtk01 | 노말" }],
		"s-795-206-1109-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 전방 점프해서 내려찍기 | longMove | 노말" }],
		"s-795-206-1110-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 후방 점프해서 내려찍기 | backMove | 노말" }],
		"s-795-206-1111-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 분노하며 힘을 모은 뒤 날뛰면서 대지진 일으키기 | ModeAlarm | Start | ModeAlarm | Loop | UltraAtk02 | 노말" }],
		"s-795-206-1112-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 힘을 모아서 모자를 벗고 눈에서 석화광선 | UltraAtk01 | 노말" }],
		"s-795-206-1113-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 지면에 계속 충격을 줘서 공격하고 이후 암석 무더기가 떨어짐 | UltraAtk02 | 노말" }],
		"s-795-206-1114-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 힘을 모아서 모자를 벗고 눈에서 석화광선(인던전용) | UltraAtk01 | 노말" }],
		"s-795-206-1115-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 석화광선발사 후 지속데미지 영역(인던전용) | Projectile" }],
		"s-795-206-1116-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 힘을 모아서 모자를 벗고 눈에서 넓게 석화광선(인던전용) | UltraAtk01 | 노말(이펙트 안 붙어있음 주의)" }],
		"s-795-206-1117-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 넓게 석화광선발사 후 지속데미지 영역(인던전용) | Projectile | 노말" }],
		"s-795-206-1118-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 힘을 모아서 모자를 벗고 눈에서 석화광선(인던전용) | UltraAtk01 | 노말" }],
		"s-795-206-1119-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 석화광선발사 후 지속데미지 영역(인던전용) | Projectile" }],
		"s-795-206-1120-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | (투기장 전용 스킬) 필살기 1-1 | UltraAtk01 | 노말" }],
		"s-795-206-1150-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 액티브무브 포효를 터트리고 밟아 공격하면 이동 | activeMove | Start+activeMove | Loop+activeMove | End | 노말" }],
		"s-795-206-1201-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 분노 모드 알람으로 전방에 충격파 | modealarm | Start | modealarm | Loop | modealarm | End | 노말" }],
		"s-795-206-1202-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 탈진 상태에서 뒤로 도망가기 | runAway | 노말" }],
		"s-795-206-1203-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 분노 모드 알람으로 주위에 충격파(360도) | modealarm | Start | modealarm | Loop | modealarm | End | 노말" }],
		"s-795-206-1204-0": [{ type: "text", sub_type: "message", message: "(켈리반의 난파선)싸이클롭스 | 분노 모드 알람으로 주위에 충격파(360도+살아있는 폭탄) | modealarm | Start | modealarm | Loop | modealarm | End | 노말" }],
		"s-795-206-1301-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | (투기장 전용 (투기장 전용 스킬) 필살기) 패턴 1-1" }],
		"s-795-206-1302-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | VIP던전 | 연출용 스킬" }],
		"s-795-206-1303-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 전방 점프해서 내려찍기 | longMove | 노말(장판생성)" }],
		"s-795-206-1304-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 전방점프 후 장판생성(인던전용) | Projectile" }],
		"s-795-206-1305-0": [{ type: "text", sub_type: "message", message: "(켈리반의 난파선)싸이클롭스 | 힘을 모아서 모자를 벗고 눈에서 석화광선 | UltraAtk01 | 노말(석화)" }],
		"s-795-206-1306-0": [{ type: "text", sub_type: "message", message: "(켈리반의 난파선)싸이클롭스 | 리엑션 발생 후 오른발로 찍고 3회 손바닥으로 후려치기 | heavyAtk01 | 노말(+살아있는폭탄)" }],
		"s-795-206-2101-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 양손 오른쪽 내려치기 | Atk01 | 분노" }],
		"s-795-206-2102-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 양주먹 원투 내려찍기 | Atk02 | 노멀" }],
		"s-795-206-2103-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 오른쪽 회전하며 원투 연타찍기 | roundAtk01 | 분노" }],
		"s-795-206-2104-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 왼쪽 회전하며 오른 주먹 내려치고 왼손 비껴 쓸기 | roundAtk02 | 분노" }],
		"s-795-206-2105-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 제자리 고공점프 | reactionAtk" }],
		"s-795-206-2106-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 돌 던지기 | longAtk01 | 분노" }],
		"s-795-206-2107-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 돌 뽑아 앞에 찍고 부수기 | longAtk02 | 분노" }],
		"s-795-206-2108-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 리엑션 발생 후 오른발로 찍고 3회 손바닥으로 후려치기 | heavyAtk01 | 분노" }],
		"s-795-206-2109-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 전방 점프해서 내려찍기 | longMove | 분노" }],
		"s-795-206-2110-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 후방 점프해서 내려찍기 | backMove | 분노" }],
		"s-795-206-2111-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 분노하며 힘을 모은 뒤 날뛰면서 대지진 일으키기 | ModeAlarm | Start | ModeAlarm | Loop | UltraAtk02 | 분노" }],
		"s-795-206-2112-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 힘을 모아서 모자를 벗고 눈에서 석화광선 | UltraAtk01 | 분노" }],
		"s-795-206-2113-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 지면에 계속 충격을 줘서 공격하고 이후 암석 무더기가 떨어짐 | UltraAtk02 | 분노" }],
		"s-795-206-2114-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 힘을 모아서 모자를 벗고 눈에서 석화광선(인던전용) | UltraAtk01 | 분노" }],
		"s-795-206-2115-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 석화광선발사 후 지속데미지 영역(인던전용) | Projectile | 분노" }],
		"s-795-206-2116-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 힘을 모아서 모자를 벗고 눈에서 넓게 석화광선(인던전용) | UltraAtk01 | 분노(이펙트 안 붙어있음 주의)" }],
		"s-795-206-2117-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 넓게 석화광선발사 후 지속데미지 영역(인던전용) | Projectile | 분노" }],
		"s-795-206-2118-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 힘을 모아서 모자를 벗고 눈에서 석화광선(인던전용) | UltraAtk01 | 분노" }],
		"s-795-206-2119-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 석화광선발사 후 지속데미지 영역(인던전용) | Projectile" }],
		"s-795-206-2120-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | (투기장 전용 스킬) 필살기 패턴 1-2 | UltraAtk01 | 분노" }],
		"s-795-206-2150-0": [{ type: "text", sub_type: "message", message: "싸이클롭스 | 액티브무브 포효를 터트리고 밟아 공격하면 이동 | activeMove | Start+activeMove | Loop+activeMove | End | 분노" }],
		"s-795-207-1208-0": [{ type: "text", sub_type: "message", message: "투명NPC | 독 보호막 (부활한 회당)" }],
		"s-795-207-1301-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 매우넓은범위이상상태 | Atk01" }],
		"s-795-207-1302-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 좁은범위이상상태 | Atk01 | 노멀/분노고용" }],
		"s-795-207-1303-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후DOT" }],
		"s-795-207-1304-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후DOT" }],
		"s-795-207-1305-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-795-207-1306-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-795-207-1307-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-795-207-1308-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 누킹" }],
		"s-795-207-1309-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC 누킹 발사체" }],
		"s-795-207-1319-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 벽생성" }],
		"s-795-207-1320-0": [{ type: "text", sub_type: "message", message: "(인던전용)다르칸 | 알람이펙트용" }],
		"s-795-207-1321-0": [{ type: "text", sub_type: "message", message: "(인던전용)엘카라스호 | 불바닥" }],
		"s-795-207-1322-0": [{ type: "text", sub_type: "message", message: "(인던전용)엘카라스호 | 바닥폭발" }],
		"s-795-207-1401-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의 제단 | 공격연출" }],
		"s-795-207-1403-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의제단 | 불구슬연결" }],
		"s-795-207-1601-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 포획1" }],
		"s-795-207-1602-0": [{ type: "text", sub_type: "message", message: "(인던전용) 원거리 시간차 누킹" }],
		"s-795-207-1603-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의 제단 | 뱀머리 공격 누킹" }],
		"s-795-207-1604-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의 제단 | 뱀머리 공격" }],
		"s-795-207-1605-0": [{ type: "text", sub_type: "message", message: "1601 스킬에서 이어지는 스킬" }],
		"s-795-207-1701-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 1 (하르키아의 안식처)" }],
		"s-795-207-1702-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 2 (하르키아의 안식처)" }],
		"s-795-207-1703-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 3 (하르키아의 안식처)" }],
		"s-795-207-1704-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 4 (하르키아의 안식처)" }],
		"s-795-207-1705-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 위산 장판+연기" }],
		"s-795-207-1706-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 용암파도" }],
		"s-795-207-1707-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 용암분출" }],
		"s-795-207-1708-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 수증기" }],
		"s-795-207-1801-0": [{ type: "text", sub_type: "message", message: "대포피격 연출용(중간)" }],
		"s-795-207-2303-0": [{ type: "text", sub_type: "message", message: "포악한 퀴르갈의 동굴 전용 | 보호막 패턴 전용 Dot 스킬" }],
		"s-795-207-2304-0": [{ type: "text", sub_type: "message", message: "포악한 퀴르갈의 동굴 전용 | 보호막 패턴 전용 Dot 스킬 | 발사체" }],
		"s-795-301-1208-0": [{ type: "text", sub_type: "message", message: "투명NPC | 독 보호막 (부활한 회당)" }],
		"s-795-301-1301-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 매우넓은범위이상상태 | Atk01" }],
		"s-795-301-1302-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 좁은범위이상상태 | Atk01 | 노멀/분노고용" }],
		"s-795-301-1303-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후DOT" }],
		"s-795-301-1304-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후DOT" }],
		"s-795-301-1305-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-795-301-1306-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-795-301-1307-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-795-301-1308-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 누킹" }],
		"s-795-301-1309-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC 누킹 발사체" }],
		"s-795-301-1319-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 벽생성" }],
		"s-795-301-1320-0": [{ type: "text", sub_type: "message", message: "(인던전용)다르칸 | 알람이펙트용" }],
		"s-795-301-1321-0": [{ type: "text", sub_type: "message", message: "(인던전용)엘카라스호 | 불바닥" }],
		"s-795-301-1322-0": [{ type: "text", sub_type: "message", message: "(인던전용)엘카라스호 | 바닥폭발" }],
		"s-795-301-1401-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의 제단 | 공격연출" }],
		"s-795-301-1403-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의제단 | 불구슬연결" }],
		"s-795-301-1601-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 포획1" }],
		"s-795-301-1602-0": [{ type: "text", sub_type: "message", message: "(인던전용) 원거리 시간차 누킹" }],
		"s-795-301-1603-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의 제단 | 뱀머리 공격 누킹" }],
		"s-795-301-1604-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의 제단 | 뱀머리 공격" }],
		"s-795-301-1605-0": [{ type: "text", sub_type: "message", message: "1601 스킬에서 이어지는 스킬" }],
		"s-795-301-1701-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 1 (하르키아의 안식처)" }],
		"s-795-301-1702-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 2 (하르키아의 안식처)" }],
		"s-795-301-1703-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 3 (하르키아의 안식처)" }],
		"s-795-301-1704-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 4 (하르키아의 안식처)" }],
		"s-795-301-1705-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 위산 장판+연기" }],
		"s-795-301-1706-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 용암파도" }],
		"s-795-301-1707-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 용암분출" }],
		"s-795-301-1708-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 수증기" }],
		"s-795-301-1801-0": [{ type: "text", sub_type: "message", message: "대포피격 연출용(중간)" }],
		"s-795-301-2303-0": [{ type: "text", sub_type: "message", message: "포악한 퀴르갈의 동굴 전용 | 보호막 패턴 전용 Dot 스킬" }],
		"s-795-301-2304-0": [{ type: "text", sub_type: "message", message: "포악한 퀴르갈의 동굴 전용 | 보호막 패턴 전용 Dot 스킬 | 발사체" }],
		"s-795-302-1208-0": [{ type: "text", sub_type: "message", message: "투명NPC | 독 보호막 (부활한 회당)" }],
		"s-795-302-1301-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 매우넓은범위이상상태 | Atk01" }],
		"s-795-302-1302-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 좁은범위이상상태 | Atk01 | 노멀/분노고용" }],
		"s-795-302-1303-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후DOT" }],
		"s-795-302-1304-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후DOT" }],
		"s-795-302-1305-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-795-302-1306-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-795-302-1307-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-795-302-1308-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 누킹" }],
		"s-795-302-1309-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC 누킹 발사체" }],
		"s-795-302-1319-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 벽생성" }],
		"s-795-302-1320-0": [{ type: "text", sub_type: "message", message: "(인던전용)다르칸 | 알람이펙트용" }],
		"s-795-302-1321-0": [{ type: "text", sub_type: "message", message: "(인던전용)엘카라스호 | 불바닥" }],
		"s-795-302-1322-0": [{ type: "text", sub_type: "message", message: "(인던전용)엘카라스호 | 바닥폭발" }],
		"s-795-302-1401-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의 제단 | 공격연출" }],
		"s-795-302-1403-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의제단 | 불구슬연결" }],
		"s-795-302-1601-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 포획1" }],
		"s-795-302-1602-0": [{ type: "text", sub_type: "message", message: "(인던전용) 원거리 시간차 누킹" }],
		"s-795-302-1603-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의 제단 | 뱀머리 공격 누킹" }],
		"s-795-302-1604-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의 제단 | 뱀머리 공격" }],
		"s-795-302-1605-0": [{ type: "text", sub_type: "message", message: "1601 스킬에서 이어지는 스킬" }],
		"s-795-302-1701-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 1 (하르키아의 안식처)" }],
		"s-795-302-1702-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 2 (하르키아의 안식처)" }],
		"s-795-302-1703-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 3 (하르키아의 안식처)" }],
		"s-795-302-1704-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 4 (하르키아의 안식처)" }],
		"s-795-302-1705-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 위산 장판+연기" }],
		"s-795-302-1706-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 용암파도" }],
		"s-795-302-1707-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 용암분출" }],
		"s-795-302-1708-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 수증기" }],
		"s-795-302-1801-0": [{ type: "text", sub_type: "message", message: "대포피격 연출용(중간)" }],
		"s-795-302-2303-0": [{ type: "text", sub_type: "message", message: "포악한 퀴르갈의 동굴 전용 | 보호막 패턴 전용 Dot 스킬" }],
		"s-795-302-2304-0": [{ type: "text", sub_type: "message", message: "포악한 퀴르갈의 동굴 전용 | 보호막 패턴 전용 Dot 스킬 | 발사체" }],
		"s-795-303-1208-0": [{ type: "text", sub_type: "message", message: "투명NPC | 독 보호막 (부활한 회당)" }],
		"s-795-303-1301-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 매우넓은범위이상상태 | Atk01" }],
		"s-795-303-1302-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 좁은범위이상상태 | Atk01 | 노멀/분노고용" }],
		"s-795-303-1303-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후DOT" }],
		"s-795-303-1304-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후DOT" }],
		"s-795-303-1305-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-795-303-1306-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-795-303-1307-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-795-303-1308-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 누킹" }],
		"s-795-303-1309-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC 누킹 발사체" }],
		"s-795-303-1319-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 벽생성" }],
		"s-795-303-1320-0": [{ type: "text", sub_type: "message", message: "(인던전용)다르칸 | 알람이펙트용" }],
		"s-795-303-1321-0": [{ type: "text", sub_type: "message", message: "(인던전용)엘카라스호 | 불바닥" }],
		"s-795-303-1322-0": [{ type: "text", sub_type: "message", message: "(인던전용)엘카라스호 | 바닥폭발" }],
		"s-795-303-1401-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의 제단 | 공격연출" }],
		"s-795-303-1403-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의제단 | 불구슬연결" }],
		"s-795-303-1601-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 포획1" }],
		"s-795-303-1602-0": [{ type: "text", sub_type: "message", message: "(인던전용) 원거리 시간차 누킹" }],
		"s-795-303-1603-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의 제단 | 뱀머리 공격 누킹" }],
		"s-795-303-1604-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의 제단 | 뱀머리 공격" }],
		"s-795-303-1605-0": [{ type: "text", sub_type: "message", message: "1601 스킬에서 이어지는 스킬" }],
		"s-795-303-1701-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 1 (하르키아의 안식처)" }],
		"s-795-303-1702-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 2 (하르키아의 안식처)" }],
		"s-795-303-1703-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 3 (하르키아의 안식처)" }],
		"s-795-303-1704-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 4 (하르키아의 안식처)" }],
		"s-795-303-1705-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 위산 장판+연기" }],
		"s-795-303-1706-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 용암파도" }],
		"s-795-303-1707-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 용암분출" }],
		"s-795-303-1708-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 수증기" }],
		"s-795-303-1801-0": [{ type: "text", sub_type: "message", message: "대포피격 연출용(중간)" }],
		"s-795-303-2303-0": [{ type: "text", sub_type: "message", message: "포악한 퀴르갈의 동굴 전용 | 보호막 패턴 전용 Dot 스킬" }],
		"s-795-303-2304-0": [{ type: "text", sub_type: "message", message: "포악한 퀴르갈의 동굴 전용 | 보호막 패턴 전용 Dot 스킬 | 발사체" }],
		"s-795-304-1208-0": [{ type: "text", sub_type: "message", message: "투명NPC | 독 보호막 (부활한 회당)" }],
		"s-795-304-1301-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 매우넓은범위이상상태 | Atk01" }],
		"s-795-304-1302-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 좁은범위이상상태 | Atk01 | 노멀/분노고용" }],
		"s-795-304-1303-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후DOT" }],
		"s-795-304-1304-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후DOT" }],
		"s-795-304-1305-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-795-304-1306-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-795-304-1307-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-795-304-1308-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 누킹" }],
		"s-795-304-1309-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC 누킹 발사체" }],
		"s-795-304-1319-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 벽생성" }],
		"s-795-304-1320-0": [{ type: "text", sub_type: "message", message: "(인던전용)다르칸 | 알람이펙트용" }],
		"s-795-304-1321-0": [{ type: "text", sub_type: "message", message: "(인던전용)엘카라스호 | 불바닥" }],
		"s-795-304-1322-0": [{ type: "text", sub_type: "message", message: "(인던전용)엘카라스호 | 바닥폭발" }],
		"s-795-304-1401-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의 제단 | 공격연출" }],
		"s-795-304-1403-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의제단 | 불구슬연결" }],
		"s-795-304-1601-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 포획1" }],
		"s-795-304-1602-0": [{ type: "text", sub_type: "message", message: "(인던전용) 원거리 시간차 누킹" }],
		"s-795-304-1603-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의 제단 | 뱀머리 공격 누킹" }],
		"s-795-304-1604-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의 제단 | 뱀머리 공격" }],
		"s-795-304-1605-0": [{ type: "text", sub_type: "message", message: "1601 스킬에서 이어지는 스킬" }],
		"s-795-304-1701-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 1 (하르키아의 안식처)" }],
		"s-795-304-1702-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 2 (하르키아의 안식처)" }],
		"s-795-304-1703-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 3 (하르키아의 안식처)" }],
		"s-795-304-1704-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 4 (하르키아의 안식처)" }],
		"s-795-304-1705-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 위산 장판+연기" }],
		"s-795-304-1706-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 용암파도" }],
		"s-795-304-1707-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 용암분출" }],
		"s-795-304-1708-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 수증기" }],
		"s-795-304-1801-0": [{ type: "text", sub_type: "message", message: "대포피격 연출용(중간)" }],
		"s-795-304-2303-0": [{ type: "text", sub_type: "message", message: "포악한 퀴르갈의 동굴 전용 | 보호막 패턴 전용 Dot 스킬" }],
		"s-795-304-2304-0": [{ type: "text", sub_type: "message", message: "포악한 퀴르갈의 동굴 전용 | 보호막 패턴 전용 Dot 스킬 | 발사체" }],
		"s-795-401-1208-0": [{ type: "text", sub_type: "message", message: "투명NPC | 독 보호막 (부활한 회당)" }],
		"s-795-401-1301-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 매우넓은범위이상상태 | Atk01" }],
		"s-795-401-1302-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 좁은범위이상상태 | Atk01 | 노멀/분노고용" }],
		"s-795-401-1303-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후DOT" }],
		"s-795-401-1304-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후DOT" }],
		"s-795-401-1305-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-795-401-1306-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-795-401-1307-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 추적후광역공격데미지분산" }],
		"s-795-401-1308-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 누킹" }],
		"s-795-401-1309-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC 누킹 발사체" }],
		"s-795-401-1319-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 벽생성" }],
		"s-795-401-1320-0": [{ type: "text", sub_type: "message", message: "(인던전용)다르칸 | 알람이펙트용" }],
		"s-795-401-1321-0": [{ type: "text", sub_type: "message", message: "(인던전용)엘카라스호 | 불바닥" }],
		"s-795-401-1322-0": [{ type: "text", sub_type: "message", message: "(인던전용)엘카라스호 | 바닥폭발" }],
		"s-795-401-1401-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의 제단 | 공격연출" }],
		"s-795-401-1403-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의제단 | 불구슬연결" }],
		"s-795-401-1601-0": [{ type: "text", sub_type: "message", message: "(인던전용) | 투명NPC | 포획1" }],
		"s-795-401-1602-0": [{ type: "text", sub_type: "message", message: "(인던전용) 원거리 시간차 누킹" }],
		"s-795-401-1603-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의 제단 | 뱀머리 공격 누킹" }],
		"s-795-401-1604-0": [{ type: "text", sub_type: "message", message: "(인던전용)라칸의 제단 | 뱀머리 공격" }],
		"s-795-401-1605-0": [{ type: "text", sub_type: "message", message: "1601 스킬에서 이어지는 스킬" }],
		"s-795-401-1701-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 1 (하르키아의 안식처)" }],
		"s-795-401-1702-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 2 (하르키아의 안식처)" }],
		"s-795-401-1703-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 3 (하르키아의 안식처)" }],
		"s-795-401-1704-0": [{ type: "text", sub_type: "message", message: "투명NPC | 장판 패턴 4 (하르키아의 안식처)" }],
		"s-795-401-1705-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 위산 장판+연기" }],
		"s-795-401-1706-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 용암파도" }],
		"s-795-401-1707-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 용암분출" }],
		"s-795-401-1708-0": [{ type: "text", sub_type: "message", message: "(인던전용)아케론의 염옥 | 수증기" }],
		"s-795-401-1801-0": [{ type: "text", sub_type: "message", message: "대포피격 연출용(중간)" }],
		"s-795-401-2303-0": [{ type: "text", sub_type: "message", message: "포악한 퀴르갈의 동굴 전용 | 보호막 패턴 전용 Dot 스킬" }],
		"s-795-401-2304-0": [{ type: "text", sub_type: "message", message: "포악한 퀴르갈의 동굴 전용 | 보호막 패턴 전용 Dot 스킬 | 발사체" }]
	};
};