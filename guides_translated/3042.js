// Gardan's Trial


module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		"s-3042-1000-1101-0": [{ type: "text", sub_type: "message", message: "Atk01 | flat 1R" }],
		"s-3042-1000-1102-0": [{ type: "text", sub_type: "message", message: "Atk01 | flat 1 | for linkage" }],
		"s-3042-1000-1103-0": [{ type: "text", sub_type: "message", message: "Atk02 | flat 2R" }],
		"s-3042-1000-1104-0": [{ type: "text", sub_type: "message", message: "Atk02 | flat 2 | for linkage" }],
		"s-3042-1000-1105-0": [{ type: "text", sub_type: "message", message: "Atk03 | flat 3" }],
		"s-3042-1000-1106-0": [{ type: "text", sub_type: "message", message: "Atk04 | ComboAtk01 | Rotate 2 times" }],
		"s-3042-1000-1108-0": [{ type: "text", sub_type: "message", message: "Atk06 | ComboAtk02 / normal" }],
		"s-3042-1000-1109-0": [{ type: "text", sub_type: "message", message: "JumpAtk01 / normal" }],
		"s-3042-1000-1111-0": [{ type: "text", sub_type: "message", message: "HeavyAtk01 | heavy / knockback" }],
		"s-3042-1000-1201-0": [{ type: "text", sub_type: "message", message: "Gather / short | validation" }],
		"s-3042-1000-1202-0": [{ type: "text", sub_type: "message", message: "Gathering / intermediate / validation" }],
		"s-3042-1000-1203-0": [{ type: "text", sub_type: "message", message: "Collecting / pooling | validation" }],
		"s-3042-1000-1204-0": [{ type: "text", sub_type: "message", message: "Collecting | full charging | verification | Rage | 2 others" }],
		"s-3042-1000-1205-0": [{ type: "text", sub_type: "message", message: "vortex / short | validation" }],
		"s-3042-1000-1206-0": [{ type: "text", sub_type: "message", message: "Vortex / intermediate | validation" }],
		"s-3042-1000-1207-0": [{ type: "text", sub_type: "message", message: "Vortex / fullcharging | validation" }],
		"s-3042-1000-1208-0": [{ type: "text", sub_type: "message", message: "MovingCharge / Public" }],
		"s-3042-1000-1209-0": [{ type: "text", sub_type: "message", message: "Chrage01 / Public" }],
		"s-3042-1000-1210-0": [{ type: "text", sub_type: "message", message: "Chrage02 / Public" }],
		"s-3042-1000-1211-0": [{ type: "text", sub_type: "message", message: "Icebreak" }],
		"s-3042-1000-1212-0": [{ type: "text", sub_type: "message", message: "Charge | Cancle01 | Loop" }],
		"s-3042-1000-1213-0": [{ type: "text", sub_type: "message", message: "Charge | Cancle01 | Move" }],
		"s-3042-1000-1214-0": [{ type: "text", sub_type: "message", message: "Charge | Cancle01 | Atk" }],
		"s-3042-1000-1215-0": [{ type: "text", sub_type: "message", message: "Charge | Cancle02 | Loop" }],
		"s-3042-1000-1216-0": [{ type: "text", sub_type: "message", message: "Charge | Cancle02 | Move" }],
		"s-3042-1000-1217-0": [{ type: "text", sub_type: "message", message: "Charge | Cancle02 | Atk" }],
		"s-3042-1000-1220-0": [{ type: "text", sub_type: "message", message: "Collecting | full charging | verification [Normal / future changes]" }],
		"s-3042-1000-1221-0": [{ type: "text", sub_type: "message", message: "Gathering | full charging | Verification[Anger / future changes]" }],
		"s-3042-1000-1301-0": [{ type: "text", sub_type: "message", message: "Rage | L | Atk01" }],
		"s-3042-1000-1302-0": [{ type: "text", sub_type: "message", message: "Rage | L | Atk01 | for linkage" }],
		"s-3042-1000-1303-0": [{ type: "text", sub_type: "message", message: "Rage | R | Atk02" }],
		"s-3042-1000-1304-0": [{ type: "text", sub_type: "message", message: "Rage | R | Atk02 | for linkage" }],
		"s-3042-1000-1305-0": [{ type: "text", sub_type: "message", message: "Rage | Dual | Atk01" }],
		"s-3042-1000-1306-0": [{ type: "text", sub_type: "message", message: "Rage | Whirlwind | Start" }],
		"s-3042-1000-1307-0": [{ type: "text", sub_type: "message", message: "Rage | Whirlwind | Shot | Loop | [1106 Link]" }],
		"s-3042-1000-1308-0": [{ type: "text", sub_type: "message", message: "Rage | Whirlwind | End | [1107 Link]" }],
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
		"s-3042-1000-1320-0": [{ type: "text", sub_type: "message", message: "RageModeOff | for scripts" }],
		"s-3042-1000-1321-0": [{ type: "text", sub_type: "message", message: "Rage | Aggro | 01 | Forward" }],
		"s-3042-1000-1322-0": [{ type: "text", sub_type: "message", message: "Rage | Aggro | 02 | Reverse" }],
		"s-3042-1000-1323-0": [{ type: "text", sub_type: "message", message: "Rage | RandomAtk01 | Public" }],
		"s-3042-1000-1324-0": [{ type: "text", sub_type: "message", message: "Rage | Aggro | 65% | Public" }],
		"s-3042-1000-1325-0": [{ type: "text", sub_type: "message", message: "Rage | RandomAtk02 | 1% only" }],
		"s-3042-1000-1501-0": [{ type: "text", sub_type: "message", message: "HP1% | Invincible / shield / Cast" }],
		"s-3042-1000-1502-0": [{ type: "text", sub_type: "message", message: "Runaway / Change of shell leaf | 1%" }],
		"s-3042-1000-1503-0": [{ type: "text", sub_type: "message", message: "UltraAtk01 / Wide area / Shove" }],
		"s-3042-1000-1505-0": [{ type: "text", sub_type: "message", message: "UltraAtk02 / Target / pull | 1%" }],
		"s-3042-1000-1506-0": [{ type: "text", sub_type: "message", message: "Watch | Normal distance targeting" }],
		"s-3042-1000-1507-0": [{ type: "text", sub_type: "message", message: "Distance lanta / pull" }],
		"s-3042-1000-1508-0": [{ type: "text", sub_type: "message", message: "HeavyAtk05 | Geonjungwon / 01" }],
		"s-3042-1000-1509-0": [{ type: "text", sub_type: "message", message: "HeavyAtk05 | Wonjungun / 01" }],
		"s-3042-1000-1510-0": [{ type: "text", sub_type: "message", message: "Boss enhancement | Public A" }],
		"s-3042-1000-1511-0": [{ type: "text", sub_type: "message", message: "RotateAtk01 | Shot" }],
		"s-3042-1000-1512-0": [{ type: "text", sub_type: "message", message: "RotateAtk01 | Start" }],
		"s-3042-1000-1513-0": [{ type: "text", sub_type: "message", message: "Boss enhancement | Public B" }],
		"s-3042-1000-1514-0": [{ type: "text", sub_type: "message", message: "Boss enhancement | Public C" }],
		"s-3042-1000-1515-0": [{ type: "text", sub_type: "message", message: "Watch | Normal near targeting" }],
		"s-3042-1000-1516-0": [{ type: "text", sub_type: "message", message: "HeavyAtk05 | Geonjungwon / 01" }],
		"s-3042-1000-1517-0": [{ type: "text", sub_type: "message", message: "HeavyAtk05 | Wonjungun / 01" }],
		"s-3042-1000-1518-0": [{ type: "text", sub_type: "message", message: "Runaway | Change the shell | 65%" }],
		"s-3042-1000-1519-0": [{ type: "text", sub_type: "message", message: "Runaway | Change the shell leaf / 35%" }],
		"s-3042-1000-1520-0": [{ type: "text", sub_type: "message", message: "UltraAtk02 / Target / pull | 65%" }],
		"s-3042-1000-1521-0": [{ type: "text", sub_type: "message", message: "UltraAtk02 / Target / pull | 35%" }],
		"s-3042-1000-2101-0": [{ type: "text", sub_type: "message", message: "Atk01 | flat 1R / rage" }],
		"s-3042-1000-2102-0": [{ type: "text", sub_type: "message", message: "Atk01 / flat 1 / for linkage / rage" }],
		"s-3042-1000-2103-0": [{ type: "text", sub_type: "message", message: "Atk02 | flat 2R / rage" }],
		"s-3042-1000-2104-0": [{ type: "text", sub_type: "message", message: "Atk02 / flat 2 / for linkage / rage" }],
		"s-3042-1000-2105-0": [{ type: "text", sub_type: "message", message: "Atk03 | flat 3 / rage" }],
		"s-3042-1000-2106-0": [{ type: "text", sub_type: "message", message: "Atk04 / ComboAtk01 / 2 turns / Rage" }],
		"s-3042-1000-2108-0": [{ type: "text", sub_type: "message", message: "Atk06 | ComboAtk02 | rage" }],
		"s-3042-1000-2109-0": [{ type: "text", sub_type: "message", message: "JumpAtk01 / rage" }],
		"s-3042-1000-2111-0": [{ type: "text", sub_type: "message", message: "HeavyAtk01 | Heavy / knockback / rage" }],
		"s-3042-1000-2201-0": [{ type: "text", sub_type: "message", message: "Gather / short / validation / anger" }],
		"s-3042-1000-2202-0": [{ type: "text", sub_type: "message", message: "Gather / medium | validation / anger" }],
		"s-3042-1000-2203-0": [{ type: "text", sub_type: "message", message: "Gathering / pooling | validation | anger" }],
		"s-3042-1000-2204-0": [{ type: "text", sub_type: "message", message: "Collecting | full charging | verification | Rage | 2 others" }],
		"s-3042-1000-2205-0": [{ type: "text", sub_type: "message", message: "vortex / short / validation | rage" }],
		"s-3042-1000-2206-0": [{ type: "text", sub_type: "message", message: "Vortex / medium | validation | rage" }],
		"s-3042-1000-2207-0": [{ type: "text", sub_type: "message", message: "Vortex / fullcharging | validation | rage" }],
		"s-3042-1000-2208-0": [{ type: "text", sub_type: "message", message: "MovingCharge / Public" }],
		"s-3042-1000-2209-0": [{ type: "text", sub_type: "message", message: "Chrage01 / public / anger" }],
		"s-3042-1000-2210-0": [{ type: "text", sub_type: "message", message: "Chrage02 / public / anger" }],
		"s-3042-1000-2211-0": [{ type: "text", sub_type: "message", message: "Icebreak / anger" }],
		"s-3042-1000-2212-0": [{ type: "text", sub_type: "message", message: "Charge / Cancle01 | Loop / Rage" }],
		"s-3042-1000-2213-0": [{ type: "text", sub_type: "message", message: "Charge / Cancle01 / Move / rage" }],
		"s-3042-1000-2214-0": [{ type: "text", sub_type: "message", message: "Charge / Cancle01 | Atk / rage" }],
		"s-3042-1000-2215-0": [{ type: "text", sub_type: "message", message: "Charge / Cancle02 | Loop / Rage" }],
		"s-3042-1000-2216-0": [{ type: "text", sub_type: "message", message: "Charge / Cancle02 / Move / rage" }],
		"s-3042-1000-2217-0": [{ type: "text", sub_type: "message", message: "Charge / Cancle02 | Atk / rage" }],
		"s-3042-1000-2220-0": [{ type: "text", sub_type: "message", message: "Collecting | full charging | verification [Normal / future changes]" }],
		"s-3042-1000-2221-0": [{ type: "text", sub_type: "message", message: "Gathering | full charging | Verification[Anger / future changes]" }],
		"s-3042-1001-1301-0": [{ type: "text", sub_type: "message", message: "Rage | L | Atk01" }],
		"s-3042-1001-1302-0": [{ type: "text", sub_type: "message", message: "Rage | L | Atk01 | for linkage" }],
		"s-3042-1001-1303-0": [{ type: "text", sub_type: "message", message: "Rage | R | Atk02" }],
		"s-3042-1001-1304-0": [{ type: "text", sub_type: "message", message: "Rage | R | Atk02 | for linkage" }],
		"s-3042-1001-1305-0": [{ type: "text", sub_type: "message", message: "Rage | Dual | Atk01" }],
		"s-3042-1001-1306-0": [{ type: "text", sub_type: "message", message: "Rage | Whirlwind | Start" }],
		"s-3042-1001-1307-0": [{ type: "text", sub_type: "message", message: "Rage | Whirlwind | Shot | Loop | [1106 Link]" }],
		"s-3042-1001-1308-0": [{ type: "text", sub_type: "message", message: "Rage | Whirlwind | End | [1107 Link]" }],
		"s-3042-1001-1309-0": [{ type: "text", sub_type: "message", message: "Rage | Dual | Atk01" }],
		"s-3042-1001-1310-0": [{ type: "text", sub_type: "message", message: "Rage | Dual | Atk02" }],
		"s-3042-1001-1311-0": [{ type: "text", sub_type: "message", message: "Rage | Dual | Atk03" }],
		"s-3042-1001-1312-0": [{ type: "text", sub_type: "message", message: "Rage | RushAtk01" }],
		"s-3042-1002-1101-0": [{ type: "text", sub_type: "message", message: "ScreamingGiant | Straight Long Range Attack | Atk01 | Normal/Rage" }],
		"s-3042-1002-1102-0": [{ type: "text", sub_type: "message", message: "Fire attack / Straight line / Wide" }],
		"s-3042-1002-1104-0": [{ type: "text", sub_type: "message", message: "Projectile | A" }],
		"s-3042-1002-1105-0": [{ type: "text", sub_type: "message", message: "Projectile | B" }],
		"s-3042-1002-1106-0": [{ type: "text", sub_type: "message", message: "Forward Projectile attack | A" }],
		"s-3042-1002-1107-0": [{ type: "text", sub_type: "message", message: "Forward Projectile attack | B" }],
		"s-3042-1002-1108-0": [{ type: "text", sub_type: "message", message: "Projectile | C" }],
		"s-3042-1002-1109-0": [{ type: "text", sub_type: "message", message: "Forward Projectile attack | C" }],
		"s-3042-1002-1201-0": [{ type: "text", sub_type: "message", message: "ScreamingGiant | Wait | Normal | Rage" }],
		"s-3042-1003-1505-0": [{ type: "text", sub_type: "message", message: "Dummy skill / 20 seconds" }],
		"s-3042-1004-3206-0": [{ type: "text", sub_type: "message", message: "Burst | for spawn kill / Forward" }],
		"s-3042-1005-1333-0": [{ type: "text", sub_type: "message", message: "TNPC | RandomMove" }],
		"s-3042-1011-3207-0": [{ type: "text", sub_type: "message", message: "Giant / Projectile / Explosive / Forward" }],
		"s-3042-1012-3208-0": [{ type: "text", sub_type: "message", message: "Giant / Projectile / Explosive / Forward" }],
		"s-3042-1050-3111-0": [{ type: "text", sub_type: "message", message: "For locking / 20 seconds" }],
		"s-3042-1051-3112-0": [{ type: "text", sub_type: "message", message: "Ice sheet | 90 seconds" }],
		"s-3042-1052-3209-0": [{ type: "text", sub_type: "message", message: "Burst | for spawn kill / reverse" }],
		"s-3042-1054-3113-0": [{ type: "text", sub_type: "message", message: "For TNPC | sheet | decal display" }],
		"s-3042-1054-3114-0": [{ type: "text", sub_type: "message", message: "TNPC | for decals | PC chase" }],
		"s-3042-1055-3115-0": [{ type: "text", sub_type: "message", message: "For locking / 20 seconds" }],
		"s-3042-1057-3116-0": [{ type: "text", sub_type: "message", message: "For locking / 20 seconds" }],
		"s-3042-2000-1101-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 1 Combo | combo1 / Normal" }],
		"s-3042-2000-1103-0": [{ type: "text", sub_type: "message", message: "Dark / Knight / Shield / Defense / Normal" }],
		"s-3042-2000-1104-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | Powerful | screwThrough | Normal" }],
		"s-3042-2000-1105-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | Shield | ShieldStrike / Normal" }],
		"s-3042-2000-1106-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | Strike | Riposte / Normal" }],
		"s-3042-2000-1110-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 2 Combo | combo2 / Normal" }],
		"s-3042-2000-1111-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 3 Combo | combo3 / Normal" }],
		"s-3042-2000-1112-0": [{ type: "text", sub_type: "message", message: "Will of the battle of the Spearmen of the High Elf Nam Heavy Armor 5 spearmen of the battle of the spearmen of the battle of the spearmen of the battle of the spearmen of the battle of the spearmen of the High Elf" }],
		"s-3042-2000-1113-0": [{ type: "text", sub_type: "message", message: "Hielf Nam Heavy Armor 5 Spearman Spearman Trust Aura III" }],
		"s-3042-2000-1114-0": [{ type: "text", sub_type: "message", message: "High Elf Nam Heavy Armor 5 Spearman Spearman Anger trigger" }],
		"s-3042-2000-1201-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 50% / DyingWait" }],
		"s-3042-2000-1202-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 20% | DyingWait" }],
		"s-3042-2000-1204-0": [{ type: "text", sub_type: "message", message: "Dark / Knight | aggrochange | aggrochange / Normal" }],
		"s-3042-2000-1207-0": [{ type: "text", sub_type: "message", message: "Dark / Knight / Left / SideWalk / left / Normal" }],
		"s-3042-2000-1208-0": [{ type: "text", sub_type: "message", message: "Dark / Knight | right / SideWalk / right / normal" }],
		"s-3042-2000-1300-0": [{ type: "text", sub_type: "message", message: "(for groundwater only)Dark | Knight / Agroskill | aggrochange / Normal" }],
		"s-3042-2000-1301-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | Invincible Buff / Wait | Normal" }],
		"s-3042-2000-1302-0": [{ type: "text", sub_type: "message", message: "(Indon only)spearman / Suicide" }],
		"s-3042-2000-2101-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 1 Combo | combo1 / Rage" }],
		"s-3042-2000-2103-0": [{ type: "text", sub_type: "message", message: "Dark / Knight / Shield / Defense / Fury" }],
		"s-3042-2000-2104-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | Powerful Thrust | screwThrough | Fury" }],
		"s-3042-2000-2105-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | Shield | ShieldStrike / Fury" }],
		"s-3042-2000-2106-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | Fight Back | Riposte | Rage" }],
		"s-3042-2000-2110-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 2 Combo | combo2 / Rage" }],
		"s-3042-2000-2111-0": [{ type: "text", sub_type: "message", message: "Dark | Knight | 3 Combo | combo3 / Rage" }],
		"s-3042-2000-2204-0": [{ type: "text", sub_type: "message", message: "Dark / Knight | aggrochange | aggrochange / Normal" }],
		"s-3042-2000-2207-0": [{ type: "text", sub_type: "message", message: "Dark / Knight / Left / SideWalk / left / Rage" }],
		"s-3042-2000-2208-0": [{ type: "text", sub_type: "message", message: "Dark / Knight | right / SideWalk / right / anger" }],
		"s-3042-2000-2300-0": [{ type: "text", sub_type: "message", message: "(for groundwater only)Dark | Knight | Agroskill / aggrochange / Rage" }],
		"s-3042-6001-1101-0": [{ type: "text", sub_type: "message", message: "Homebuff" }],
		"s-3042-6002-1101-0": [{ type: "text", sub_type: "message", message: "Elemental buff" }]
	};
};