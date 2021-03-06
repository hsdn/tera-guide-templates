// Kezzel's Gorge (5-Person)


module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		"s-453-10-1101-0": [{ type: "text", sub_type: "message", message: "오칸미니미 | 기본공격 | atk01 | 노말" }],
		"s-453-10-1103-0": [{ type: "text", sub_type: "message", message: "오칸미니미 | 2번휘두르기 | atk02 | 노말" }],
		"s-453-10-1104-0": [{ type: "text", sub_type: "message", message: "오칸미니미 | 돌진공격 | atk03 | 노말" }],
		"s-453-10-1205-0": [{ type: "text", sub_type: "message", message: "오칸미니미 | 명령수신 | commandreceive | 노말" }],
		"s-453-10-1206-0": [{ type: "text", sub_type: "message", message: "오칸미니미 | 좌회피 | jumpevasion01 | 노말" }],
		"s-453-10-1207-0": [{ type: "text", sub_type: "message", message: "오칸미니미 | 좌걸음 | sidewalk01 | 노말" }],
		"s-453-10-1208-0": [{ type: "text", sub_type: "message", message: "오칸미니미 | 우걸음 | sidewalk02 | 노말" }],
		"s-453-10-1209-0": [{ type: "text", sub_type: "message", message: "오칸미니미 | 우회피 | jumpevasion02 | 노말" }],
		"s-453-10-2101-0": [{ type: "text", sub_type: "message", message: "오칸미니미 | 기본공격 | atk01 | 분노" }],
		"s-453-10-2103-0": [{ type: "text", sub_type: "message", message: "오칸미니미 | 2번휘두르기 | atk02 | 분노" }],
		"s-453-10-2104-0": [{ type: "text", sub_type: "message", message: "오칸미니미 | 돌진공격 | atk03 | 분노" }],
		"s-453-10-2205-0": [{ type: "text", sub_type: "message", message: "오칸미니미 | 명령수신 | commandreceive | 분노" }],
		"s-453-10-2206-0": [{ type: "text", sub_type: "message", message: "오칸미니미 | 좌회피 | jumpevasion01 | 분노" }],
		"s-453-10-2207-0": [{ type: "text", sub_type: "message", message: "오칸미니미 | 좌걸음 | sidewalk01 | 분노" }],
		"s-453-10-2208-0": [{ type: "text", sub_type: "message", message: "오칸미니미 | 우걸음 | sidewalk02 | 분노" }],
		"s-453-10-2209-0": [{ type: "text", sub_type: "message", message: "오칸미니미 | 우회피 | jumpevasion02 | 분노" }],
		"s-453-20-1101-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk01 | Low(오른손 기본 공격 | 노멀 텐션)" }],
		"s-453-20-1102-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk02 | Low(더블 래리어트 회전 공격 | 노멀 텐션)" }],
		"s-453-20-1103-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk03 | Low(백점프 후 동료 공격력 버프 | 노멀 텐션)" }],
		"s-453-20-1104-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk04 | Low(폭탄 투척 공격 | 노멀 텐션)" }],
		"s-453-20-1105-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk05 | Low(오른손 길게 전진 공격 | 노멀 텐션)" }],
		"s-453-20-1106-0": [{ type: "text", sub_type: "message", message: "오칸 | 돌진공격 | UltraAtk01 | 노멀" }],
		"s-453-20-1201-0": [{ type: "text", sub_type: "message", message: "오칸 50% 헉헉" }],
		"s-453-20-1202-0": [{ type: "text", sub_type: "message", message: "오칸 20% 헉헉" }],
		"s-453-20-1203-0": [{ type: "text", sub_type: "message", message: "오칸 사전동작 | 노말" }],
		"s-453-20-1204-0": [{ type: "text", sub_type: "message", message: "오칸 어그로 체인지" }],
		"s-453-20-1207-0": [{ type: "text", sub_type: "message", message: "오칸 왼쪽 | 게걸음" }],
		"s-453-20-1208-0": [{ type: "text", sub_type: "message", message: "오칸 오른쪽 게걸음" }],
		"s-453-20-1209-0": [{ type: "text", sub_type: "message", message: "오칸 jumpevasion01 | Low(좌측 점프 회피 | 노멀 텐션)" }],
		"s-453-20-1210-0": [{ type: "text", sub_type: "message", message: "오칸 jumpevasion02 | Low(우측 점프 회피 | 노멀 텐션)" }],
		"s-453-20-1301-0": [{ type: "text", sub_type: "message", message: "(인던전용)오칸 | 자폭 | ATk03" }],
		"s-453-20-1302-0": [{ type: "text", sub_type: "message", message: "(인던전용)오칸 | 이상상태디버프공격(공포) | Angry | Q" }],
		"s-453-20-2101-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk01 | 오른손 기본 공격 (분노)" }],
		"s-453-20-2102-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk02 | 더블 래리어트 회전 공격 (분노)" }],
		"s-453-20-2103-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk03 | Low | 백점프 후 동료 공격력 버프 (분노)" }],
		"s-453-20-2104-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk04 폭탄 투척 공격 (분노)" }],
		"s-453-20-2105-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk05 오른손 길게 전진 공격 (분노)" }],
		"s-453-20-2106-0": [{ type: "text", sub_type: "message", message: "오칸 | 돌진공격 | UltraAtk01 | 분노" }],
		"s-453-20-2201-0": [{ type: "text", sub_type: "message", message: "오칸 50% 헉헉 (분노)" }],
		"s-453-20-2202-0": [{ type: "text", sub_type: "message", message: "오칸 20% 헉헉 (분노)" }],
		"s-453-20-2203-0": [{ type: "text", sub_type: "message", message: "오칸 사전동작 | 분노)" }],
		"s-453-20-2204-0": [{ type: "text", sub_type: "message", message: "오칸 어그로 체인지 (분노)" }],
		"s-453-20-2207-0": [{ type: "text", sub_type: "message", message: "오칸 왼쪽 | 게걸음 (분노)" }],
		"s-453-20-2208-0": [{ type: "text", sub_type: "message", message: "오칸 오른쪽 게걸음 (분노)" }],
		"s-453-20-2209-0": [{ type: "text", sub_type: "message", message: "오칸 jumpevasion01 | (좌측 점프 회피) (분노)" }],
		"s-453-20-2210-0": [{ type: "text", sub_type: "message", message: "오칸 jumpevasion02 | (우측 점프 회피) (분노)" }],
		"s-453-30-1101-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk01 | Low(오른손 기본 공격 | 노멀 텐션)" }],
		"s-453-30-1102-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk02 | Low(더블 래리어트 회전 공격 | 노멀 텐션)" }],
		"s-453-30-1103-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk03 | Low(백점프 후 동료 공격력 버프 | 노멀 텐션)" }],
		"s-453-30-1104-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk04 | Low(폭탄 투척 공격 | 노멀 텐션)" }],
		"s-453-30-1105-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk05 | Low(오른손 길게 전진 공격 | 노멀 텐션)" }],
		"s-453-30-1106-0": [{ type: "text", sub_type: "message", message: "오칸 | 돌진공격 | UltraAtk01 | 노멀" }],
		"s-453-30-1201-0": [{ type: "text", sub_type: "message", message: "오칸 50% 헉헉" }],
		"s-453-30-1202-0": [{ type: "text", sub_type: "message", message: "오칸 20% 헉헉" }],
		"s-453-30-1203-0": [{ type: "text", sub_type: "message", message: "오칸 사전동작 | 노말" }],
		"s-453-30-1204-0": [{ type: "text", sub_type: "message", message: "오칸 어그로 체인지" }],
		"s-453-30-1207-0": [{ type: "text", sub_type: "message", message: "오칸 왼쪽 | 게걸음" }],
		"s-453-30-1208-0": [{ type: "text", sub_type: "message", message: "오칸 오른쪽 게걸음" }],
		"s-453-30-1209-0": [{ type: "text", sub_type: "message", message: "오칸 jumpevasion01 | Low(좌측 점프 회피 | 노멀 텐션)" }],
		"s-453-30-1210-0": [{ type: "text", sub_type: "message", message: "오칸 jumpevasion02 | Low(우측 점프 회피 | 노멀 텐션)" }],
		"s-453-30-1301-0": [{ type: "text", sub_type: "message", message: "(인던전용)오칸 | 자폭 | ATk03" }],
		"s-453-30-1302-0": [{ type: "text", sub_type: "message", message: "(인던전용)오칸 | 이상상태디버프공격(공포) | Angry | Q" }],
		"s-453-30-2101-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk01 | 오른손 기본 공격 (분노)" }],
		"s-453-30-2102-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk02 | 더블 래리어트 회전 공격 (분노)" }],
		"s-453-30-2103-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk03 | Low | 백점프 후 동료 공격력 버프 (분노)" }],
		"s-453-30-2104-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk04 폭탄 투척 공격 (분노)" }],
		"s-453-30-2105-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk05 오른손 길게 전진 공격 (분노)" }],
		"s-453-30-2106-0": [{ type: "text", sub_type: "message", message: "오칸 | 돌진공격 | UltraAtk01 | 분노" }],
		"s-453-30-2201-0": [{ type: "text", sub_type: "message", message: "오칸 50% 헉헉 (분노)" }],
		"s-453-30-2202-0": [{ type: "text", sub_type: "message", message: "오칸 20% 헉헉 (분노)" }],
		"s-453-30-2203-0": [{ type: "text", sub_type: "message", message: "오칸 사전동작 | 분노)" }],
		"s-453-30-2204-0": [{ type: "text", sub_type: "message", message: "오칸 어그로 체인지 (분노)" }],
		"s-453-30-2207-0": [{ type: "text", sub_type: "message", message: "오칸 왼쪽 | 게걸음 (분노)" }],
		"s-453-30-2208-0": [{ type: "text", sub_type: "message", message: "오칸 오른쪽 게걸음 (분노)" }],
		"s-453-30-2209-0": [{ type: "text", sub_type: "message", message: "오칸 jumpevasion01 | (좌측 점프 회피) (분노)" }],
		"s-453-30-2210-0": [{ type: "text", sub_type: "message", message: "오칸 jumpevasion02 | (우측 점프 회피) (분노)" }],
		"s-453-40-1101-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk01 | Low(오른손 기본 공격 | 노멀 텐션)" }],
		"s-453-40-1102-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk02 | Low(더블 래리어트 회전 공격 | 노멀 텐션)" }],
		"s-453-40-1103-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk03 | Low(백점프 후 동료 공격력 버프 | 노멀 텐션)" }],
		"s-453-40-1104-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk04 | Low(폭탄 투척 공격 | 노멀 텐션)" }],
		"s-453-40-1105-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk05 | Low(오른손 길게 전진 공격 | 노멀 텐션)" }],
		"s-453-40-1106-0": [{ type: "text", sub_type: "message", message: "오칸 | 돌진공격 | UltraAtk01 | 노멀" }],
		"s-453-40-1201-0": [{ type: "text", sub_type: "message", message: "오칸 50% 헉헉" }],
		"s-453-40-1202-0": [{ type: "text", sub_type: "message", message: "오칸 20% 헉헉" }],
		"s-453-40-1203-0": [{ type: "text", sub_type: "message", message: "오칸 사전동작 | 노말" }],
		"s-453-40-1204-0": [{ type: "text", sub_type: "message", message: "오칸 어그로 체인지" }],
		"s-453-40-1207-0": [{ type: "text", sub_type: "message", message: "오칸 왼쪽 | 게걸음" }],
		"s-453-40-1208-0": [{ type: "text", sub_type: "message", message: "오칸 오른쪽 게걸음" }],
		"s-453-40-1209-0": [{ type: "text", sub_type: "message", message: "오칸 jumpevasion01 | Low(좌측 점프 회피 | 노멀 텐션)" }],
		"s-453-40-1210-0": [{ type: "text", sub_type: "message", message: "오칸 jumpevasion02 | Low(우측 점프 회피 | 노멀 텐션)" }],
		"s-453-40-1301-0": [{ type: "text", sub_type: "message", message: "(인던전용)오칸 | 자폭 | ATk03" }],
		"s-453-40-1302-0": [{ type: "text", sub_type: "message", message: "(인던전용)오칸 | 이상상태디버프공격(공포) | Angry | Q" }],
		"s-453-40-2101-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk01 | 오른손 기본 공격 (분노)" }],
		"s-453-40-2102-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk02 | 더블 래리어트 회전 공격 (분노)" }],
		"s-453-40-2103-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk03 | Low | 백점프 후 동료 공격력 버프 (분노)" }],
		"s-453-40-2104-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk04 폭탄 투척 공격 (분노)" }],
		"s-453-40-2105-0": [{ type: "text", sub_type: "message", message: "오칸 | Atk05 오른손 길게 전진 공격 (분노)" }],
		"s-453-40-2106-0": [{ type: "text", sub_type: "message", message: "오칸 | 돌진공격 | UltraAtk01 | 분노" }],
		"s-453-40-2201-0": [{ type: "text", sub_type: "message", message: "오칸 50% 헉헉 (분노)" }],
		"s-453-40-2202-0": [{ type: "text", sub_type: "message", message: "오칸 20% 헉헉 (분노)" }],
		"s-453-40-2203-0": [{ type: "text", sub_type: "message", message: "오칸 사전동작 | 분노)" }],
		"s-453-40-2204-0": [{ type: "text", sub_type: "message", message: "오칸 어그로 체인지 (분노)" }],
		"s-453-40-2207-0": [{ type: "text", sub_type: "message", message: "오칸 왼쪽 | 게걸음 (분노)" }],
		"s-453-40-2208-0": [{ type: "text", sub_type: "message", message: "오칸 오른쪽 게걸음 (분노)" }],
		"s-453-40-2209-0": [{ type: "text", sub_type: "message", message: "오칸 jumpevasion01 | (좌측 점프 회피) (분노)" }],
		"s-453-40-2210-0": [{ type: "text", sub_type: "message", message: "오칸 jumpevasion02 | (우측 점프 회피) (분노)" }],
		"s-453-50-1101-0": [{ type: "text", sub_type: "message", message: "두꺼비 | 주변독가스공격 | Atk01 | 노멀" }],
		"s-453-50-1201-0": [{ type: "text", sub_type: "message", message: "두꺼비 | 기본소셜 | Idle" }],
		"s-453-100-1101-0": [{ type: "text", sub_type: "message", message: "드릴창 | 공격(NPC디버프/PC데미지) | Atk01 | 공용" }],
		"s-453-100-1102-0": [{ type: "text", sub_type: "message", message: "드릴창 | 사전동작 | ReadyAction | 공용" }],
		"s-453-400-1101-0": [{ type: "text", sub_type: "message", message: "오크통 폭발" }],
		"s-453-500-1101-0": [{ type: "text", sub_type: "message", message: "대포 | 공격 | FireAtk01 | 공용" }],
		"s-453-500-1102-0": [{ type: "text", sub_type: "message", message: "대포 | 할로윈 | 공격 | FireAtk01" }],
		"s-453-500-1103-0": [{ type: "text", sub_type: "message", message: "대포 | 화염공격 | FireAtk01 | 공용" }],
		"s-453-500-1104-0": [{ type: "text", sub_type: "message", message: "대포 | 냉기공격 | FireAtk01 | 공용" }],
		"s-453-500-1201-0": [{ type: "text", sub_type: "message", message: "대포 | 하차" }],
		"s-453-501-1101-0": [{ type: "text", sub_type: "message", message: "대포 | 공격 | FireAtk01 | 공용" }],
		"s-453-501-1102-0": [{ type: "text", sub_type: "message", message: "대포 | 할로윈 | 공격 | FireAtk01" }],
		"s-453-501-1103-0": [{ type: "text", sub_type: "message", message: "대포 | 화염공격 | FireAtk01 | 공용" }],
		"s-453-501-1104-0": [{ type: "text", sub_type: "message", message: "대포 | 냉기공격 | FireAtk01 | 공용" }],
		"s-453-501-1201-0": [{ type: "text", sub_type: "message", message: "대포 | 하차" }],
		"s-453-999-1101-0": [{ type: "text", sub_type: "message", message: "돌거인 | 오른손 휘둘러 쳐내기 | atk01 | 1 | 노말" }],
		"s-453-999-1102-0": [{ type: "text", sub_type: "message", message: "돌거인 | 왼손 휘둘러 쳐내기 | atk01 | 2 | 노말" }],
		"s-453-999-1103-0": [{ type: "text", sub_type: "message", message: "돌거인 | 왼쪽 회전하며 손을 휘두르고 바위 조각을 뿜기 | roundAtk01 | 노말" }],
		"s-453-999-1104-0": [{ type: "text", sub_type: "message", message: "돌거인 | 오른쪽 회전하며 손을 휘두르고 바위 조각을 뿜기 | roundAtk02 | 노말" }],
		"s-453-999-1105-0": [{ type: "text", sub_type: "message", message: "돌거인 | 몸의 돌을 모아 만든 바위를 내려찍기 | reactionAtk | 노말" }],
		"s-453-999-1106-0": [{ type: "text", sub_type: "message", message: "돌거인 | 오른손을 내밀어 팔의 바위를 회전시키며 화염을 모으다가 화염광선을 발사 | longAtk | Start+longAtk | Loop+longAtk | End | 노말" }],
		"s-453-999-1107-0": [{ type: "text", sub_type: "message", message: "돌거인 | 돌채찍 공격 | longAtk02 | 노말" }],
		"s-453-999-1108-0": [{ type: "text", sub_type: "message", message: "돌거인 | 몸의 돌을 주먹에 모아 만든 커다란 돌 주먹 내려 치기 | heavyAtk01 | Start+heavyAtk01 | Loop+heavyAtk01 | End | 노말(루프 적용 필요)" }],
		"s-453-999-1109-0": [{ type: "text", sub_type: "message", message: "돌거인 | 몸을 회전하여 땅을 파고 사라졌다가 땅속에서 회전하며 튀어올라 내려찍기 | longMove | Start+longMove | End | 노말" }],
		"s-453-999-1110-0": [{ type: "text", sub_type: "message", message: "돌거인 | 뒷걸음질 치며 물러나기 | backMove | 노말." }],
		"s-453-999-1111-0": [{ type: "text", sub_type: "message", message: "돌거인 | 오른발 들어 찍고 왼발 들어 찍기 | atk02 | 1+atk02 | 2 | 노말" }],
		"s-453-999-1112-0": [{ type: "text", sub_type: "message", message: "돌거인 | 왼발 크게 들어올려 내려찍기 | atk02 | 2 | 노말" }],
		"s-453-999-1113-0": [{ type: "text", sub_type: "message", message: "돌거인 | 앞으로 굴러서 공격 | moveAtk01 | Start+moveAtk01 | Loop+moveAtk01 | End | 노말" }],
		"s-453-999-1114-0": [{ type: "text", sub_type: "message", message: "돌거인 | 오른손을 내밀어 팔의 바위를 회전시키면서 화염을 모아 화염탄 발사 | longAtk01 | Stat+longAtk01 | End | 노말 " }],
		"s-453-999-1115-0": [{ type: "text", sub_type: "message", message: "돌거인 | 화염공격 발사체 | 노말" }],
		"s-453-999-1116-0": [{ type: "text", sub_type: "message", message: "돌거인 | 보호막-보호막시전" }],
		"s-453-999-1117-0": [{ type: "text", sub_type: "message", message: "돌거인 | 보호막-전멸기[막기불가][회피불가][무적불가]" }],
		"s-453-999-1118-0": [{ type: "text", sub_type: "message", message: "돌거인-대기-[wait]공용" }],
		"s-453-999-1119-0": [{ type: "text", sub_type: "message", message: "돌거인 | 몸을 회전하여 땅을 파고 사라졌다가 땅속에서 회전하며 튀어올라 내려찍기 | longMove | Start+longMove | End | 노말" }],
		"s-453-999-1120-0": [{ type: "text", sub_type: "message", message: "돌거인 | 필살기" }],
		"s-453-999-1151-0": [{ type: "text", sub_type: "message", message: "돌거인 | 몸의 돌덩이들은 주변에 펼치며 푸른 불길을 내뿜고 돌덩이와 푸른 불길을 망토처럼 걸치고 걸어간다 | activeMove | Start+activeMove | Loop+activeMove | End" }],
		"s-453-999-1201-0": [{ type: "text", sub_type: "message", message: "돌거인 | 본노모드 알람 | modealram | 노말" }],
		"s-453-999-1202-0": [{ type: "text", sub_type: "message", message: "돌거인 | 탈진 상태에서 뒤로 도망감 | runAway | 노말" }],
		"s-453-999-2101-0": [{ type: "text", sub_type: "message", message: "돌거인 | 오른손 휘둘러 쳐내기 | atk01 | 1 | 노말" }],
		"s-453-999-2102-0": [{ type: "text", sub_type: "message", message: "돌거인 | 왼손 휘둘러 쳐내기 | atk01 | 2 | 노말" }],
		"s-453-999-2103-0": [{ type: "text", sub_type: "message", message: "돌거인 | 왼쪽 회전하며 손을 휘두르고 바위 조각을 뿜기 | roundAtk01 | 노말" }],
		"s-453-999-2104-0": [{ type: "text", sub_type: "message", message: "돌거인 | 오른쪽 회전하며 손을 휘두르고 바위 조각을 뿜기 | roundAtk02 | 노말" }],
		"s-453-999-2105-0": [{ type: "text", sub_type: "message", message: "돌거인 | 몸의 돌을 모아 만든 바위를 내려찍기 | reactionAtk | 노말" }],
		"s-453-999-2106-0": [{ type: "text", sub_type: "message", message: "돌거인 | 오른손을 내밀어 팔의 바위를 회전시키며 화염을 모으다가 화염광선을 발사 | longAtk | Start+longAtk | Loop+longAtk | End | 노말" }],
		"s-453-999-2107-0": [{ type: "text", sub_type: "message", message: "돌거인 | 돌채찍 공격 | longAtk02 | 노말" }],
		"s-453-999-2108-0": [{ type: "text", sub_type: "message", message: "돌거인 | 몸의 돌을 주먹에 모아 만든 커다란 돌 주먹 내려 치기 | heavyAtk01 | Start+heavyAtk01 | Loop+heavyAtk01 | End | 노말(루프 적용 필요)" }],
		"s-453-999-2109-0": [{ type: "text", sub_type: "message", message: "돌거인 | 몸을 회전하여 땅을 파고 사라졌다가 땅속에서 회전하며 튀어올라 내려찍기 | longMove | Start+longMove | End | 노말" }],
		"s-453-999-2110-0": [{ type: "text", sub_type: "message", message: "돌거인 | 뒷걸음질 치며 물러나기 | backMove | 노말." }],
		"s-453-999-2111-0": [{ type: "text", sub_type: "message", message: "돌거인 | 오른발 들어 찍고 왼발 들어 찍기 | atk02 | 1+atk02 | 2 | 노말" }],
		"s-453-999-2112-0": [{ type: "text", sub_type: "message", message: "돌거인 | 왼발 크게 들어올려 내려찍기 | atk02 | 2 | 노말" }],
		"s-453-999-2113-0": [{ type: "text", sub_type: "message", message: "돌거인 | 앞으로 굴러서 공격 | moveAtk01 | Start+moveAtk01 | Loop+moveAtk01 | End | 노말" }],
		"s-453-999-2114-0": [{ type: "text", sub_type: "message", message: "돌거인 | 오른손을 내밀어 팔의 바위를 회전시키면서 화염을 모아 화염탄 발사 | longAtk01 | Stat+longAtk01 | End | 노말 " }],
		"s-453-999-2115-0": [{ type: "text", sub_type: "message", message: "돌거인 | 화염공격 발사체 | 노말" }],
		"s-453-999-2119-0": [{ type: "text", sub_type: "message", message: "돌거인 | 몸을 회전하여 땅을 파고 사라졌다가 땅속에서 회전하며 튀어올라 내려찍기 | longMove | Start+longMove | End | 노말" }],
		"s-453-999-2151-0": [{ type: "text", sub_type: "message", message: "돌거인 | 몸의 돌덩이들은 주변에 펼치며 푸른 불길을 내뿜고 돌덩이와 푸른 불길을 망토처럼 걸치고 걸어간다 | activeMove | Start+activeMove | Loop+activeMove | End" }],
		"s-453-2000-1101-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 기본 공격 | Atk01" }],
		"s-453-2000-1102-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 긴 이동 공격 | MoveAtk01" }],
		"s-453-2000-1103-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 오른 손 내려 찍기 | Atk02" }],
		"s-453-2000-1104-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 양 손 번갈아 내려 찍기 | Atk03" }],
		"s-453-2000-1105-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 좌 회전 공격 | RoundAtk01" }],
		"s-453-2000-1106-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 우 회전 공격 | RoundAtk02" }],
		"s-453-2000-1107-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 죽은척 하다 회전 공격 | RoundAtk03" }],
		"s-453-2000-1108-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 연속 회전 공격 | HeavyAtk01" }],
		"s-453-2000-1109-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 3연속 발사체 공격 | HeavyAtk02" }],
		"s-453-2000-1110-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 짧은 이동 공격 | MoveAtk02" }],
		"s-453-2000-1111-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 연속 내려 찍기 | ReactionAtk01" }],
		"s-453-2000-1112-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 발사체 공격 | ReactionAtk02" }],
		"s-453-2000-1113-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 강하게 내려 찍기 | ReactionAtk03" }],
		"s-453-2000-1114-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 빠른 발사체 공격 | LongRangeAtk01" }],
		"s-453-2000-1115-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 폭풍회오리 | UltraAtk | 노멀" }],
		"s-453-2000-1116-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | (인던전용)범위지속성DOT마법 | 발사동작 | 노멀" }],
		"s-453-2000-1117-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | (인던전용)범위지속성 DOT마법 | 발사체 | 노멀" }],
		"s-453-2000-1118-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | (인던전용)3연속 대포 공격 | HeavyAtk02 | 노멀" }],
		"s-453-2000-1150-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 이동 공격 | RunAttackSkill" }],
		"s-453-2000-1151-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | (인던전용)액티브무브 | RunAttackSkill | 노멀" }],
		"s-453-2000-1201-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 그로기 | Groggy" }],
		"s-453-2000-1203-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 스킬 사전 동작" }],
		"s-453-2000-1204-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 어그로 체인지 | Aggrochange" }],
		"s-453-2000-1209-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 3초 대기 | Wait" }],
		"s-453-2000-1210-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 5초 대기 | Wait" }],
		"s-453-2000-1211-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 스폰 동작 | SpawnAniForBattleStart" }],
		"s-453-2000-1212-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 백무브 |  BackMove" }],
		"s-453-2000-1301-0": [{ type: "text", sub_type: "message", message: "블러드골렘 | 자연회복 | Wait | 노멀/분노공용" }],
		"s-453-2000-1302-0": [{ type: "text", sub_type: "message", message: "(검은틈전용)블러드 골렘 | 광폭화이상상태버프걸기 | aggrochange | 공용" }],
		"s-453-2000-2101-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 기본 공격 | Atk01 | 분노" }],
		"s-453-2000-2102-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 긴 이동 공격 | MoveAtk01 | 분노" }],
		"s-453-2000-2103-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 오른 손 내려 찍기 | Atk02 | 분노" }],
		"s-453-2000-2104-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 양 손 번갈아 내려 찍기 | Atk03 | 분노" }],
		"s-453-2000-2105-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 좌 회전 공격 | RoundAtk01 | 분노" }],
		"s-453-2000-2106-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 우 회전 공격 | RoundAtk0 | 분노2" }],
		"s-453-2000-2107-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 죽은척 하다 회전 공격 | RoundAtk03 | 분노" }],
		"s-453-2000-2108-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 연속 회전 공격 | HeavyAtk01 | 분노" }],
		"s-453-2000-2109-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 3연속 발사체 공격 | HeavyAtk02 | 분노" }],
		"s-453-2000-2110-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 짧은 이동 공격 | MoveAtk02 | 분노" }],
		"s-453-2000-2111-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 연속 내려 찍기 | ReactionAtk01 | 분노" }],
		"s-453-2000-2112-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 발사체 공격 | ReactionAtk02 | 분노" }],
		"s-453-2000-2113-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 강하게 내려 찍기 | ReactionAtk03 | 분노" }],
		"s-453-2000-2114-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 빠른 발사체 공격 | LongRangeAtk01 | 분노" }],
		"s-453-2000-2115-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 폭풍회오리 | UltraAtk | 분노" }],
		"s-453-2000-2116-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | (인던전용)범위지속성DOT마법 | 발사동작 | 분노" }],
		"s-453-2000-2117-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | (인던전용)범위지속성 DOT마법 | 발사체 | 분노" }],
		"s-453-2000-2118-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | (인던전용)3연속 대포 공격 | HeavyAtk02 | 분노" }],
		"s-453-2000-2150-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 이동 공격 | RunAttackSkill | 분노" }],
		"s-453-2000-2151-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | (인던전용)액티브무브 | RunAttackSkill | 분노" }],
		"s-453-2000-2203-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 스킬 사전 동작 | 분노" }],
		"s-453-2000-2204-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 어그로 체인지 | Aggrochange | 분노" }],
		"s-453-2000-2209-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 3초 대기 | Wait | 분노" }],
		"s-453-2000-2210-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 5초 대기 | Wait | 분노" }],
		"s-453-2000-2211-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 스폰 동작 | SpawnAniForBattleStart | 분노" }],
		"s-453-2000-2212-0": [{ type: "text", sub_type: "message", message: "블러드 골렘 | 백무브 |  BackMove | 분노" }],
		"s-453-3000-1101-0": [{ type: "text", sub_type: "message", message: "스톤헤드 | 돌진기본공격 | Atk01 | 노말" }],
		"s-453-3000-1103-0": [{ type: "text", sub_type: "message", message: "스톤헤드 | 모래바람공격 | Atk02 | 노말" }],
		"s-453-3000-1201-0": [{ type: "text", sub_type: "message", message: "스톤헤드 | 헉헉50%" }],
		"s-453-3000-1202-0": [{ type: "text", sub_type: "message", message: "스톤헤드 | 헉헉20%" }],
		"s-453-3000-1205-0": [{ type: "text", sub_type: "message", message: "스톤헤드 | 명령수신 | CommandReceive | 노말" }],
		"s-453-3000-1207-0": [{ type: "text", sub_type: "message", message: "스톤헤드 | 좌걸음 | SideWalk01 | 노말" }],
		"s-453-3000-1208-0": [{ type: "text", sub_type: "message", message: "스톤헤드 | 우걸음 | SideWalk02 | 노말" }],
		"s-453-3000-2101-0": [{ type: "text", sub_type: "message", message: "스톤헤드 | 돌진기본공격 | Atk01 | 분노" }],
		"s-453-3000-2103-0": [{ type: "text", sub_type: "message", message: "스톤헤드 | 모래바람공격 | Atk02 | 분노" }],
		"s-453-3000-2205-0": [{ type: "text", sub_type: "message", message: "스톤헤드 | 명령수신 | CommandReceive | 분노" }],
		"s-453-3000-2207-0": [{ type: "text", sub_type: "message", message: "스톤헤드 | 좌걸음 | SideWalk01 | 분노" }],
		"s-453-3000-2208-0": [{ type: "text", sub_type: "message", message: "스톤헤드 | 우걸음 | SideWalk02 | 분노" }],
		"s-453-4501-1101-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 1콤보 | combo1 | 노말" }],
		"s-453-4501-1103-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 회전베기 | SwordDance | 노말" }],
		"s-453-4501-1104-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 후려치기 | HandySlash | 노말" }],
		"s-453-4501-1110-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 2콤보 | combo2 | 노말" }],
		"s-453-4501-1111-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 3콤보 | combo3 | 노말" }],
		"s-453-4501-1112-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 4콤보 | combo4 | 노말" }],
		"s-453-4501-1206-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 회피 | tumbling | 노말" }],
		"s-453-4501-2101-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 1콤보 | combo1 | 분노" }],
		"s-453-4501-2103-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 회전베기 | SwordDance | 분노" }],
		"s-453-4501-2104-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 후려치기 | HandySlash | 분노" }],
		"s-453-4501-2110-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 2콤보 | combo2 | 분노" }],
		"s-453-4501-2111-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 3콤보 | combo3 | 분노" }],
		"s-453-4501-2112-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 4콤보 | combo4 | 분노" }],
		"s-453-4501-2206-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 회피 | tumbling | 분노" }],
		"s-453-4501-3000-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 폭탄 던지기" }],
		"s-453-4502-1101-0": [{ type: "text", sub_type: "message", message: "군인하사관(바라카 남자 광전사) | 기본 공격1 | Combo1 | 노말" }],
		"s-453-4502-1103-0": [{ type: "text", sub_type: "message", message: "군인하사관(바라카 남자 광전사) | 무기방어 | Axe Defence | 노말" }],
		"s-453-4502-1104-0": [{ type: "text", sub_type: "message", message: "군인하사관(바라카 남자 광전사) | 대지치기 | Weapon Bash | 노말" }],
		"s-453-4502-1105-0": [{ type: "text", sub_type: "message", message: "군인하사관(바라카 남자 광전사) | 모아치기 | Blast Slash | 노말" }],
		"s-453-4502-1106-0": [{ type: "text", sub_type: "message", message: "군인하사관(바라카 남자 광전사) | 광폭화 | Berserk | 노말" }],
		"s-453-4502-1110-0": [{ type: "text", sub_type: "message", message: "군인하사관(바라카 남자 광전사) | 기본 공격2 | Combo2 | 노말" }],
		"s-453-4502-1111-0": [{ type: "text", sub_type: "message", message: "군인하사관(바라카 남자 광전사) | 기본 공격3 | Combo3 | 노말" }],
		"s-453-4502-1112-0": [{ type: "text", sub_type: "message", message: "군인하사관(바라카 남자 광전사) | 기본 공격4 | Combo4 | 노말" }],
		"s-453-4502-2101-0": [{ type: "text", sub_type: "message", message: "군인하사관(바라카 남자 광전사) | 기본 공격1 | Combo1 | 분노" }],
		"s-453-4502-2103-0": [{ type: "text", sub_type: "message", message: "군인하사관(바라카 남자 광전사) | 무기방어 | Axe Defence | 분노" }],
		"s-453-4502-2104-0": [{ type: "text", sub_type: "message", message: "군인하사관(바라카 남자 광전사) | 대지치기 | Weapon Bash | 분노" }],
		"s-453-4502-2105-0": [{ type: "text", sub_type: "message", message: "군인하사관(바라카 남자 광전사) | 모아치기 | Blast Slash | 분노" }],
		"s-453-4502-2106-0": [{ type: "text", sub_type: "message", message: "군인하사관(바라카 남자 광전사) | 광폭화 | Berserk | 분노" }],
		"s-453-4502-2110-0": [{ type: "text", sub_type: "message", message: "군인하사관(바라카 남자 광전사) | 기본 공격2 | Combo2 | 분노" }],
		"s-453-4502-2111-0": [{ type: "text", sub_type: "message", message: "군인하사관(바라카 남자 광전사) | 기본 공격3 | Combo3 | 분노" }],
		"s-453-4502-2112-0": [{ type: "text", sub_type: "message", message: "군인하사관(바라카 남자 광전사) | 기본 공격4 | Combo4 | 분노" }],
		"s-453-4502-3000-0": [{ type: "text", sub_type: "message", message: "군인하사관(바라카 남자 광전사) | 폭탄 던지기" }],
		"s-453-4503-1101-0": [{ type: "text", sub_type: "message", message: "사제 | 징벌의 빛 | Holy Shot | Cast 01" }],
		"s-453-4503-1103-0": [{ type: "text", sub_type: "message", message: "사제 | 재생의 바람 | Wide Heal | Cast 01" }],
		"s-453-4503-1104-0": [{ type: "text", sub_type: "message", message: "사제 | 치유의 바람 | Concentrate Heal | Cast 01" }],
		"s-453-4503-1105-0": [{ type: "text", sub_type: "message", message: "사제 | 보호의 축복 | Defence Up Bless | Cast 01" }],
		"s-453-4503-1106-0": [{ type: "text", sub_type: "message", message: "사제 | 힘의 축복 | Attack Up Bless | Cast 01" }],
		"s-453-4503-1107-0": [{ type: "text", sub_type: "message", message: "사제 | 각성 | Recovery | Cast 01" }],
		"s-453-4503-1108-0": [{ type: "text", sub_type: "message", message: "사제 | 안식의 축복 | Sleep Ball | Cast 01" }],
		"s-453-4503-1109-0": [{ type: "text", sub_type: "message", message: "사제 | 안식의 축복 발사체 | Sleep Ball | Projectile 01" }],
		"s-453-4503-1110-0": [{ type: "text", sub_type: "message", message: "사제 | 징벌의 장막 | Retrbutionwave | Cast 01" }],
		"s-453-4503-1111-0": [{ type: "text", sub_type: "message", message: "사제 | 신성 폭발 | Holy Blast | Cast 01" }],
		"s-453-4503-2101-0": [{ type: "text", sub_type: "message", message: "사제 | 징벌의 빛 | Holy Shot | Cast 01" }],
		"s-453-4503-2103-0": [{ type: "text", sub_type: "message", message: "사제 | 재생의 바람 | Wide Heal | Cast 01" }],
		"s-453-4503-2104-0": [{ type: "text", sub_type: "message", message: "사제 | 치유의 바람 | Concentrate Heal | Cast 01" }],
		"s-453-4503-2105-0": [{ type: "text", sub_type: "message", message: "사제 | 보호의 축복 | Defence Up Bless | Cast 01" }],
		"s-453-4503-2106-0": [{ type: "text", sub_type: "message", message: "사제 | 힘의 축복 | Attack Up Bless | Cast 01" }],
		"s-453-4503-2107-0": [{ type: "text", sub_type: "message", message: "사제 | 각성 | Recovery | Cast 01" }],
		"s-453-4503-2108-0": [{ type: "text", sub_type: "message", message: "사제 | 안식의 축복 | Sleep Ball | Cast 01" }],
		"s-453-4503-2109-0": [{ type: "text", sub_type: "message", message: "사제 | 안식의 축복 발사체 | Sleep Ball | Projectile 01" }],
		"s-453-4503-2110-0": [{ type: "text", sub_type: "message", message: "사제 | 징벌의 장막 | Retrbutionwave | Cast 01" }],
		"s-453-4503-2111-0": [{ type: "text", sub_type: "message", message: "사제 | 신성 폭발 | Holy Blast | Cast 01" }],
		"s-453-4503-3000-0": [{ type: "text", sub_type: "message", message: "사제 | 폭탄 던지기" }],
		"s-453-4504-1101-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 정령탄 | Magic Arrow | Cast 01" }],
		"s-453-4504-1103-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 광기의 정령 | Rage Bless | Cast 01" }],
		"s-453-4504-1104-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 신속의 정령 | Haste Bless | Cast 01" }],
		"s-453-4504-1105-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 구속탄 | Slow Ball | Cast 01" }],
		"s-453-4504-1106-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 구속탄 | Slow Ball | Projectile 01" }],
		"s-453-4504-1107-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 회복탄 | Heal | Cast 01" }],
		"s-453-4504-1108-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 섬광탄 | Flash Bomb | Cast 01" }],
		"s-453-4504-1109-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 섬광탄 | Flash Bomb | Projectile 01" }],
		"s-453-4504-1110-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 징벌의 장막 | elementalStrike 01" }],
		"s-453-4504-1111-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 정화탄 | purify | Cast A 01" }],
		"s-453-4504-1112-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 정화탄 | purify | Projectile A 01" }],
		"s-453-4504-1113-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 정기 흡수 | MP Supply Charge | Drain 00" }],
		"s-453-4504-2101-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 정령탄 | Magic Arrow | Cast 01" }],
		"s-453-4504-2103-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 광기의 정령 | Rage Bless | Cast 01" }],
		"s-453-4504-2104-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 신속의 정령 | Haste Bless | Cast 01" }],
		"s-453-4504-2105-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 구속탄 | Slow Ball | Cast 01" }],
		"s-453-4504-2106-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 구속탄 | Slow Ball | Projectile 01" }],
		"s-453-4504-2107-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 회복탄 | Heal | Cast 01" }],
		"s-453-4504-2108-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 섬광탄 | Flash Bomb | Cast 01" }],
		"s-453-4504-2109-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 섬광탄 | Flash Bomb | Projectile 01" }],
		"s-453-4504-2110-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 징벌의 장막 | elementalStrike 01" }],
		"s-453-4504-2111-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 정화탄 | purify | Cast A 01" }],
		"s-453-4504-2112-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 정화탄 | purify | Projectile A 01" }],
		"s-453-4504-2113-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 정기 흡수 | MP Supply Charge | Drain 00" }],
		"s-453-4504-3000-0": [{ type: "text", sub_type: "message", message: "휴먼 남 로브5(정령사) | 폭탄 던지기" }],
		"s-453-4505-1101-0": [{ type: "text", sub_type: "message", message: "아만 남 경갑5 무사 | 1콤보 | combo1 | 노말" }],
		"s-453-4505-1103-0": [{ type: "text", sub_type: "message", message: "아만 남 경갑5 무사 | 회전베기 | SwordDance | 노말" }],
		"s-453-4505-1104-0": [{ type: "text", sub_type: "message", message: "아만 남 경갑5 무사 | 후려치기 | HandySlash | 노말" }],
		"s-453-4505-1110-0": [{ type: "text", sub_type: "message", message: "아만 남 경갑5 무사 | 2콤보 | combo2 | 노말" }],
		"s-453-4505-1111-0": [{ type: "text", sub_type: "message", message: "아만 남 경갑5 무사 | 3콤보 | combo3 | 노말" }],
		"s-453-4505-1112-0": [{ type: "text", sub_type: "message", message: "아만 남 경갑5 무사 | 4콤보 | combo4 | 노말" }],
		"s-453-4505-1206-0": [{ type: "text", sub_type: "message", message: "아만 남 경갑5 무사 | 회피 | tumbling | 노말" }],
		"s-453-4505-2101-0": [{ type: "text", sub_type: "message", message: "아만 남 경갑5 무사 | 1콤보 | combo1 | 분노" }],
		"s-453-4505-2103-0": [{ type: "text", sub_type: "message", message: "아만 남 경갑5 무사 | 회전베기 | SwordDance | 분노" }],
		"s-453-4505-2104-0": [{ type: "text", sub_type: "message", message: "아만 남 경갑5 무사 | 후려치기 | HandySlash | 분노" }],
		"s-453-4505-2110-0": [{ type: "text", sub_type: "message", message: "아만 남 경갑5 무사 | 2콤보 | combo2 | 분노" }],
		"s-453-4505-2111-0": [{ type: "text", sub_type: "message", message: "아만 남 경갑5 무사 | 3콤보 | combo3 | 분노" }],
		"s-453-4505-2112-0": [{ type: "text", sub_type: "message", message: "아만 남 경갑5 무사 | 4콤보 | combo4 | 분노" }],
		"s-453-4505-2206-0": [{ type: "text", sub_type: "message", message: "아만 남 경갑5 무사 | 회피 | tumbling | 분노" }],
		"s-453-4505-3000-0": [{ type: "text", sub_type: "message", message: "아만 남 경갑5 무사 | 폭탄 던지기" }],
		"s-453-4511-1101-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 1콤보 | combo1 | 노말" }],
		"s-453-4511-1103-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 회전베기 | SwordDance | 노말" }],
		"s-453-4511-1104-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 후려치기 | HandySlash | 노말" }],
		"s-453-4511-1110-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 2콤보 | combo2 | 노말" }],
		"s-453-4511-1111-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 3콤보 | combo3 | 노말" }],
		"s-453-4511-1112-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 4콤보 | combo4 | 노말" }],
		"s-453-4511-1206-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 회피 | tumbling | 노말" }],
		"s-453-4511-2101-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 1콤보 | combo1 | 분노" }],
		"s-453-4511-2103-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 회전베기 | SwordDance | 분노" }],
		"s-453-4511-2104-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 후려치기 | HandySlash | 분노" }],
		"s-453-4511-2110-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 2콤보 | combo2 | 분노" }],
		"s-453-4511-2111-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 3콤보 | combo3 | 분노" }],
		"s-453-4511-2112-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 4콤보 | combo4 | 분노" }],
		"s-453-4511-2206-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 회피 | tumbling | 분노" }],
		"s-453-4511-3000-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 폭탄 던지기" }],
		"s-453-4521-1101-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 1콤보 | combo1 | 노말" }],
		"s-453-4521-1103-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 회전베기 | SwordDance | 노말" }],
		"s-453-4521-1104-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 후려치기 | HandySlash | 노말" }],
		"s-453-4521-1110-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 2콤보 | combo2 | 노말" }],
		"s-453-4521-1111-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 3콤보 | combo3 | 노말" }],
		"s-453-4521-1112-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 4콤보 | combo4 | 노말" }],
		"s-453-4521-1206-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 회피 | tumbling | 노말" }],
		"s-453-4521-2101-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 1콤보 | combo1 | 분노" }],
		"s-453-4521-2103-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 회전베기 | SwordDance | 분노" }],
		"s-453-4521-2104-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 후려치기 | HandySlash | 분노" }],
		"s-453-4521-2110-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 2콤보 | combo2 | 분노" }],
		"s-453-4521-2111-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 3콤보 | combo3 | 분노" }],
		"s-453-4521-2112-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 4콤보 | combo4 | 분노" }],
		"s-453-4521-2206-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 회피 | tumbling | 분노" }],
		"s-453-4521-3000-0": [{ type: "text", sub_type: "message", message: "카이아의 검 남병사 | 폭탄 던지기" }],
		"s-453-4700-1101-0": [{ type: "text", sub_type: "message", message: "투명NPC | 이상상태 걸기" }]
	};
};