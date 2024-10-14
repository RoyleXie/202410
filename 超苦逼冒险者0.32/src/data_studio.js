var MAKE_DATA = {
    knife:{
        timeNeed:3,
        require:{'iron':3}
    },
    flyKnife:{
        timeNeed:2,
        require:{'knife':1},
        science:'smith_2',
    },
    stick:{
        timeNeed:2,
        require:{"wood":4},
        science:'tool',
    },
    axe:{
        timeNeed:3,
        require:{"wood":4,'iron':4}
    },
    blockAxe:{
        timeNeed:5,
        require:{"axe":1,'iron':40},
        science:'smith_2',
    },
    hoe:{
        timeNeed:3,
        require:{"wood":4,'iron':4},
        science:'tool',
    },
    pickaxe:{
        timeNeed:3,
        require:{"wood":4,'iron':4},
        science:'tool',
    },
    shovel:{
        timeNeed:3,
        require:{"wood":4,'iron':4},
        science:'tool',
    },
    poizondKnife:{
        timeNeed:3,
        require:{"poizon":4,'knife':1},
        science:'smith_1'
    },
    shortSword:{
        timeNeed:3,
        require:{"wood":2,'iron':6},
    },
    longSword:{
        timeNeed:3,
        require:{"wood":2,'iron':8},
        science:'smith_1'
    },
    boneBar:{
        timeNeed:3,
        require:{"bone":20,'stick':1},
        science:'smith_1'
    },
    spear:{
        timeNeed:3,
        require:{"wood":12,'knife':1},
        science:'smith_1'
    },
    foolHammer:{
        timeNeed:3,
        require:{"part":20,'iron':20},
        science:'smith_1'
    },
    milHammer:{
        timeNeed:4,
        require:{"mithril":100},
        science:'smith_2'
    },
    teethAxe:{
        timeNeed:3,
        require:{"wood":10,'teeth':5},
        science:'smith_2'
    },
    lightHammer:{
        timeNeed:3,
        require:{"part":100,'iron':100},
        science:'magicWeapon'
    },
    dragonSword:{
        timeNeed:5,
        require:{"dragonBone":20,'mithril':5,},
        event:'dragonQuest'
    },
    dragonBow:{
        timeNeed:5,
        require:{"dragonBone":40,'crystal':5,},
        event:'dragonQuest'
    },
    bow:{
        timeNeed:3,
        require:{"wood":10,'cirrus':4},
    },
    hornBow:{
        timeNeed:3,
        require:{"horn":4,'bow':1},
        science:'smith_1'
    },
    poizondBow:{
        timeNeed:3,
        require:{"poizon":4,'bow':1},
        science:'smith_1'
    },
    poizondHornBow:{
        timeNeed:3,
        require:{"horn":4,"poizon":4,'bow':1},
        science:'smith_1'
    },
    slingshot:{
        timeNeed:3,
        require:{"wood":4,'part':4,'cirrus':4},
        science:'smith_1'
    },
    boneSlingshot:{
        timeNeed:3,
        require:{"bone":20,'part':10,'slingshot':1},
        science:'smith_2',
    },
    handGun:{
        timeNeed:3,
        require:{"part":20,'iron':10},
        science:'smith_1',
    },
    gun:{
        timeNeed:3,
        require:{"part":30,'iron':25,'wood':10},
        science:'smith_1',
    },
    sniper:{
        timeNeed:3,
        require:{"part":80,'iron':45,'wood':20},
        science:'smith_2',
    },
    shotGun:{
        timeNeed:5,
        require:{"gun":1,'part':100},
        science:'gun_expert',
    },
    goodSniper:{
        timeNeed:5,
        require:{"sniper":1,'eagleEye':4,'part':60},
        science:'gun_expert',
    },
    jtlGun:{
        timeNeed:5,
        require:{mithril:100,part:100,iron:60},
        science:'gun_expert',
    },
    iceGun:{
        timeNeed:3,
        require:{"gold":10,"part":80},
        event:'goblin_3',
    },


    slightArm:{
        timeNeed:3,
        require:{"wood":10,"part":4},
        science:'smith_1',
    },
    ironArm:{
        timeNeed:3,
        require:{"iron":20,"part":8},
        science:'smith_2',
    },
    jacket:{
        timeNeed:4,
        require:{"silk":8,"fur":8},
        science:'tailor_1',
    },
    glove:{
        timeNeed:3,
        require:{"silk":2,"fur":6},
        science:'tailor_1',
    },
    searchGlove:{
        timeNeed:4,
        require:{"silk":8,"fur":12},
        science:'tailor_2',
    },
    brassart:{
        timeNeed:3,
        require:{"iron":18,"part":2},
        science:'tailor_2',
    },
    strGlove:{
        timeNeed:3,
        require:{"silk":6,"bark":4},
        science:'tailor_1',
    },
    hunterGlove:{
        timeNeed:3,
        require:{"silk":10,'eagleEye':4},
        science:'tailor_2',
    },
    compass:{
        timeNeed:8,
        require:{"gold":4,"part":8},
        event:'goblin_1',
    },

    shoe:{
        timeNeed:3,
        require:{"fur":4,"silk":4,"rope":2},
        science:'tailor_1',
    },
    runShoe:{
        timeNeed:3,
        require:{"feather":4,"fur":3},
        science:'tailor_1',
    },
    fastShoe:{
        timeNeed:3,
        require:{"feather":4,"fur":3},
        science:'tailor_2',
    },
    luckyShoe:{
        timeNeed:3,
        require:{"silk":4,"fur":3,'gold':2},
        science:'magicWeapon',
    },

    advanHat:{
        timeNeed:3,
        require:{'feather':2,"silk":4,"rope":1},
        science:'magicWeapon',
    },
    probeHat:{
        timeNeed:3,
        require:{'eagleEye':1,"iron":10,"part":20},
        event:'goblin_4',
    },
    meleeHat:{
        timeNeed:3,
        require:{'iron':10,"horn":2},
        science:'tailor_2',
    },
    tc130:{
        timeNeed:3,
        require:{'gold':4,"part":10},
        event:'goblin_2',
    },

    fearlessAxe:{
        timeNeed:5,
        require:{'darkGold':5},
        event:'iceTownEvent_1',
    },
    fearlessArm:{
        timeNeed:3,
        require:{'darkGold':5},
        event:'iceTownEvent_2',
    },
    fearlessHat:{
        timeNeed:3,
        require:{'darkGold':5},
        event:'iceTownEvent_3',
    },

    dungeonRope:{
        timeNeed:1,
        require:{"rope":2},
        science:'dungeonRopeScience',
    },
    rope:{
        timeNeed:1,
        require:{"hay":5},
        science:'meterial',
    },
    paper:{
        timeNeed:1,
        require:{"bark":2,'water':1},
        science:'meterial',
    },
    part:{
        timeNeed:1,
        require:{"iron":2},
        science:'meterial',
    },
    
    bumb:{
        timeNeed:1,
        require:{alco:1,powder:2,part:1},
        science:'smith_2'
    },
    arrow:{
        timeNeed:0.1,
        require:{"wood":1},
    },
    powder:{
        timeNeed:0.1,
        require:{"saltpeter":1},
        science:'smith_1'
    },
    bullet:{
        timeNeed:0.1,
        require:{"powder":1,"iron":1},
        science:'smith_1'
    },
}
var ALCHEMY_DATA = {
    fertilizer:{
        timeNeed:0.2,
        require:{"shit":1},
    },
    poizon:{
        timeNeed:2,
        require:{"poizonRoot":2},
    },
    water:{
        timeNeed:0.5,
        amount:5,
        require:{"jellyfish":1},
        event:'gulf',
    },
    soul:{
        timeNeed:0.5,
        amount:3,
        require:{"reiPart":1},
        science:'potion_2',
    },
    healPotion:{
        timeNeed:1,
        require:{"alco":1,'bark':1},
    },
    hpPotion:{
        timeNeed:2,
        require:{"herb":2,'water':1},
        science:'potion_1',
    },
    icePotion:{
        timeNeed:1,
        require:{"ice":2},
        science:'potion_1',
    },
    psPotion:{
        timeNeed:2,
        require:{'water':1,"clawRoot":1},
        science:'potion_1',
    },
    bigPsPotion:{
        timeNeed:3,
        require:{"bile":1,'clawRoot':1},
        science:'potion_2',
    },
    smallSanPotion:{
        timeNeed:1,
        require:{"alco":1,'clawRoot':1},
        science:'potion_1',
    },
    bighpPotion:{
        timeNeed:3,
        require:{"hpPotion":2,'water':1},
        science:'potion_2',
    },
    poizonBumb:{
        timeNeed:1,
        require:{"poizon":1,'part':3},
        science:'potion_2',
    },
    // magicPotion:{
    //     timeNeed:1,
    //     require:{'clawRoot':7,'ice':4,'dust':4},
    //     science:'potion_2',
    //     building:'magicTable',
    // },
    // strPotion:{
    //     timeNeed:1,
    //     require:{'clawRoot':7,'fire':4,'teeth':4},
    //     science:'potion_2',
    // },
    // shootPotion:{
    //     timeNeed:1,
    //     require:{'clawRoot':7,'spiderEgg':4,'eagleEye':4},
    //     science:'potion_2',
    // },
    // agiPotion:{
    //     timeNeed:1,
    //     require:{'clawRoot':7,'feather':4,'soul':4},
    //     science:'potion_2',
    // },
    // defPotion:{
    //     timeNeed:1,
    //     require:{'clawRoot':7,'bile':4,'bone':4},
    //     science:'potion_2',
    // },
}
var SCIENCE_DATA = {
    heatedBed:{
        timeNeed:4,
        require:{"wood":3,'iron':3},
        building:'sleepPlace',
    },
    tool:{
        timeNeed:4,
        require:{"wood":4},
        building:'makeTable',
    },
    meterial:{
        timeNeed:4,
        require:{"wood":4},
        building:'makeTable',
    },
    bagSize_1:{
        timeNeed:4,
        require:{"part":4,'bark':4,'rope':2}
    },
    bagSize_2:{
        timeNeed:4,
        require:{"part":8,'bark':4,'rope':2},
        science:'bagSize_1'
    },
    bagSize_3:{
        timeNeed:4,
        require:{"part":16,'bark':4,'rope':2},
        science:'bagSize_2'
    },
    bagSize_4:{
        timeNeed:4,
        require:{"part":32,'bark':4,'rope':2},
        science:'bagSize_3'
    },

    bagSize_5:{
        timeNeed:4,
        require:{"crystal":10,'gem':10},
        science:'bagSize_4'
    },
    bagSize_6:{
        timeNeed:4,
        require:{"crystal":10,'gem':10},
        science:'bagSize_5'
    },
    bagSize_7:{
        timeNeed:4,
        require:{"crystal":10,'gem':10},
        science:'bagSize_6'
    },
    bagSize_8:{
        timeNeed:4,
        require:{"crystal":10,'gem':10},
        science:'bagSize_7'
    },


    trapSize_1:{
        timeNeed:4,
        require:{"part":4,'iron':4},
        building:'trap'
    },
    trapSize_2:{
        timeNeed:4,
        require:{"part":8,'iron':8},
        science:'trapSize_1'
    },

    trapGet_1:{
        timeNeed:4,
        require:{"iron":12,'teeth':12},
    },
    trapGet_2:{
        timeNeed:4,
        require:{"iron":24,'teeth':24},
        science:'trapGet_1'
    },
    trapGet_3:{
        timeNeed:4,
        require:{"iron":36,'teeth':36},
        science:'trapGet_2'
    },

    trapChance_1:{
        timeNeed:4,
        require:{"feather":12,'meat':12},
    },
    trapChance_2:{
        timeNeed:4,
        require:{"feather":24,'meat':24},
        science:'trapChance_1'
    },
    trapChance_3:{
        timeNeed:4,
        require:{"feather":36,'meat':36},
        science:'trapChance_2'
    },


    farmSize_1:{
        timeNeed:4,
        require:{'wood':30,"fertilizer":6},
        building:'farm'
    },
    farmSize_2:{
        timeNeed:4,
        require:{'wood':50,"fertilizer":10},
        science:'farmSize_1'
    },
    farmSize_3:{
        timeNeed:4,
        require:{'wood':70,"fertilizer":20},
        science:'farmSize_2'
    },
    farmSize_4:{
        timeNeed:4,
        require:{'wood':100,"fertilizer":30},
        science:'farmSize_3'
    },
    farmSize_5:{
        timeNeed:4,
        require:{'wood':200,"fertilizer":40},
        science:'farmSize_4'
    },
    farmSize_6:{
        timeNeed:4,
        require:{'wood':300,"fertilizer":50},
        science:'farmSize_5'
    },

    alcoSize_1:{
        timeNeed:4,
        require:{"wood":12,'bark':2,'rope':2},
        building:'farm'
    },
    alcoSize_2:{
        timeNeed:4,
        require:{"wood":24,'bark':4,'rope':3},
        science:'alcoSize_1'
    },
    alcoSize_3:{
        timeNeed:4,
        require:{"wood":44,'bark':6,'rope':4},
        science:'alcoSize_2'
    },
    alcoSize_4:{
        timeNeed:4,
        require:{"wood":64,'bark':8,'rope':5},
        science:'alcoSize_3'
    },
    alcoSize_5:{
        timeNeed:4,
        require:{"wood":100,'bark':12,'rope':6},
        science:'alcoSize_4'
    },
    alcoSize_6:{
        timeNeed:4,
        require:{"wood":200,'bark':20,'rope':8},
        science:'alcoSize_5'
    },
    potion_1:{
        timeNeed:4,
        building:'alchemyTable',
        require:{'bark':4,'part':4}
    },
    potion_2:{
        timeNeed:4,
        require:{"bone":10,'bark':4,'part':4},
        science:'potion_1'
    },
    smith_1:{
        timeNeed:4,
        require:{"iron":10,'wood':10}
    },
    smith_2:{
        timeNeed:6,
        require:{"iron":20,'wood':20},
        building:'makeTable',
        science:'smith_1',
    },

    antiRogue:{
        timeNeed:6,
        require:{'gold':10},
    },
    lock_1:{
        timeNeed:6,
        require:{"iron":20},
    },
    lock_2:{
        timeNeed:6,
        require:{"part":40},
        science:'lock_1',
    },
    lock_3:{
        timeNeed:6,
        require:{"gold":60},
        science:'lock_2',
    },
    securityBox_1:{
        timeNeed:4,
        require:{"wood":30,'part':10},
    },
    securityBox_2:{
        timeNeed:4,
        require:{"iron":80,'part':30},
        science:'securityBox_1',
    },
    securityBox_3:{
        timeNeed:4,
        require:{"gold":100,'part':50},
        science:'securityBox_2',
    },
    securityBox_4:{
        timeNeed:4,
        require:{"crystal":100,'part':80},
        science:'securityBox_3',
    },
    securityBox_5:{
        timeNeed:4,
        require:{"gem":100,'part':100},
        science:'securityBox_4',
    },

    makeSpeed_1:{
        timeNeed:6,
        require:{"gold":100},
        building:'makeTable',
        science:'smith_2',
        event:'goblin_5',
    },
    makeSpeed_2:{
        timeNeed:6,
        require:{"gold":200},
        science:'makeSpeed_1',
    },
    makeSpeed_3:{
        timeNeed:6,
        require:{"gold":300},
        science:'makeSpeed_2',
    },
    makeSpeed_4:{
        timeNeed:6,
        require:{"gold":400},
        science:'makeSpeed_3',
    },
    makeSpeed_5:{
        timeNeed:6,
        require:{"gold":500},
        science:'makeSpeed_4',
    },

    collectDec_1:{
        timeNeed:6,
        require:{wood:100,part:10},
        building:'makeTable',
        science:'smith_2',
    },
    collectDec_2:{
        timeNeed:6,
        require:{iron:200,part:30},
        science:'collectDec_1',
    },
    collectDec_3:{
        timeNeed:6,
        require:{iron:300,part:50},
        science:'collectDec_2',
    },
    collectDec_4:{
        timeNeed:6,
        require:{iron:400,part:80},
        science:'collectDec_3',
    },


    gun_expert:{
        timeNeed:6,
        require:{"iron":20,'part':20},
        building:'makeTable',
        science:'smith_2',
    },
    durableUpdate_1:{
        timeNeed:4,
        require:{"part":10,'iron':10},
        science:'smith_2',
    },
    durableUpdate_2:{
        timeNeed:4,
        require:{"part":30,'iron':30},
        building:'makeTable',
        science:'durableUpdate_1',
    },
    durableUpdate_3:{
        timeNeed:4,
        require:{"part":60,'iron':60},
        science:'durableUpdate_2',
    },

    magicDurableUpdate_1:{
        timeNeed:4,
        require:{"gem":3,'soul':8},
        science:'magicWeapon',
        building:'magicTable',
    },
    magicDurableUpdate_2:{
        timeNeed:4,
        require:{"gem":6,'soul':16},
        science:'magicDurableUpdate_1',
    },
    magicDurableUpdate_3:{
        timeNeed:4,
        require:{"gem":9,'soul':32},
        science:'magicDurableUpdate_2',
    },

    tailor_1:{
        timeNeed:4,
        require:{"part":10,'wood':10},
        science:'smith_1',
    },
    tailor_2:{
        timeNeed:4,
        require:{"part":20,'wood':20},
        science:'tailor_1',
    },
    beacon:{
        timeNeed:4,
        require:{"part":12,'iron':12}
    },
    beacon_2:{
        timeNeed:4,
        require:{"part":24,'wood':24,'paper':1},
        science:'beacon',
    },
    beaconMax_1:{
        timeNeed:4,
        require:{wood:100,iron:20},
        science:'beacon_2',
    },
    beaconMax_2:{
        timeNeed:4,
        require:{wood:500,iron:100},
        science:'beaconMax_1',
    },
    beaconMax_3:{
        timeNeed:4,
        require:{wood:1000,iron:500},
        science:'beaconMax_2',
    },
    beaconMax_4:{
        timeNeed:4,
        require:{gold:1000,iron:800,fur:10},
        science:'beaconMax_3',
    },
    magicWeapon:{
        timeNeed:4,
        require:{"crystal":10,'gem':10},
        building:'magicTable',
    },
    magicEquip:{
        timeNeed:4,
        require:{"crystal":10,'gem':10},
        science:'magicWeapon',
    },
    magicEquip_2:{
        timeNeed:4,
        require:{"dragonBone":10,'dragonScale':2},
        science:'magicEquip',
    },
    scrollScience:{
        timeNeed:4,
        require:{'paper':10,"gem":2},
        building:'magicTable',
    },
    dungeonRopeScience:{
        timeNeed:4,
        require:{'part':10,"wood":10},
        building:'magicTable',
    },

    upgradePlace:{
        timeNeed:4,
        require:{"wood":500,'iron':100},
        building:'magicTable',
    },
}
var MAGIC_DATA = {
    staff:{
        timeNeed:4,
        require:{"wood":4,'gem':2},
    },
    poizonStaff:{
        timeNeed:4,
        require:{"staff":1,'poizon':3,'snakeSkin':1},
    },
    fireStaff:{
        timeNeed:4,
        require:{"staff":1,'bumb':3,'fireHeart':1},
    },
    iceStaff:{
        timeNeed:4,
        require:{"staff":1,'gem':3,'iceHeart':1},
    },
    curseStaff:{
        timeNeed:4,
        require:{"staff":1,'soul':10,'darkDust':1},
    },
    knifeStaff:{
        timeNeed:4,
        require:{"staff":1,'flyKnife':8,'darkGold':1},
    },
    deadStaff:{
        timeNeed:4,
        require:{"staff":1,'humanMeat':8,'soul':8},
    },
    gem:{
        timeNeed:2,
        require:{"crystal":1,'dust':2},
    },
    darkGold:{
        timeNeed:2,
        require:{"crystal":1,'darkDust':2},
    },
    soulKnife:{
        timeNeed:4,
        require:{'knife':1,'soul':10,'darkGold':2},
        science:'magicWeapon',
    },
    fearKnife:{
        timeNeed:4,
        require:{'shortSword':1,"darkDust":4},
        science:'magicWeapon',
    },
    darkGoldAxe:{
        timeNeed:4,
        require:{"axe":1,"crystal":4,'darkGold':3},
        science:'magicWeapon',
    },
    frozenBow:{
        timeNeed:4,
        require:{"bow":1,"crystal":4,'iceHeart':2},
        science:'magicWeapon',
    },
    magicGun:{
        timeNeed:4,
        require:{'gun':1,"gem":4},
        science:'magicWeapon',
    },
    magicHat:{
        timeNeed:3,
        require:{"silk":8,'feather':2,"gem":1},
        science:'tailor_2',
    },
    darkGoldArm:{
        timeNeed:4,
        require:{"darkGold":4,'iron':20},
        science:'magicEquip',
    },
    coldArm:{
        timeNeed:4,
        require:{"iceHeart":1,'iron':20},
        science:'magicEquip',
    },
    dragonArm:{
        timeNeed:4,
        require:{"dragonBone":20,'darkGold':5},
        science:'magicEquip_2',
    },
    dragonOverHang:{
        timeNeed:4,
        require:{"dragonScale":1,'gem':20},
        science:'magicEquip_2',
    },
    elementOverhang:{
        timeNeed:4,
        require:{"fireHeart":3,'iceHeart':3},
        science:'magicEquip_2',
    },
    snakeOverhang:{
        timeNeed:4,
        require:{"snakeSkin":10,'teeth':10},
        science:'magicEquip_2',
    },
    
    magicJacket:{
        timeNeed:4,
        require:{"silk":8,'dust':8},
        science:'magicEquip',
    },
    iceJacket:{
        timeNeed:4,
        require:{"silk":8,'dust':8,'iceHeart':1},
        science:'magicEquip',
    },

    magicGlove:{
        timeNeed:3,
        require:{"soul":2,"silk":4,"bark":4},
        science:'magicEquip',
    },

    ghostStaff:{
        timeNeed:5,
        require:{'gem':15},
        event:'fireTownEvent_1',
    },
    ghostArm:{
        timeNeed:3,
        require:{'gem':15},
        event:'fireTownEvent_2',
    },
    ghostHat:{
        timeNeed:3,
        require:{'gem':15},
        event:'fireTownEvent_3',
    },

    smallOverhang:{
        timeNeed:3,
        require:{'gem':2,rope:1},
    },
    recOverhang:{
        timeNeed:3,
        require:{'fireHeart':1,rope:1},
    },
    
    forceBelt:{
        timeNeed:4,
        require:{fur:20,rope:4},
    },

    scroll:{
        timeNeed:1,
        require:{"paper":4},
        science:'scrollScience',
    },
    energyBall:{
        timeNeed:4,
        require:{"gem":1,'darkDust':1,'soul':10},
        science:'magicWeapon',
    },
    durableBall:{
        timeNeed:4,
        require:{"darkGold":1,'soul':8},
        science:'magicWeapon',
    },
}