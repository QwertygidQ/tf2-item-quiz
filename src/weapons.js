export const weapons = [
    {
        name: "The Rocket Jumper",
        tfclass: "Soldier",
        img: require("./img/rocket_jumper.png"),
        level: "Level 1 Rocket Launcher",
        attrs: [
            {
                positive: true,
                text: "+200% max primary ammo on wearer"
            },
            {
                positive: true,
                text: "No self inflicted blast damage taken"
            },
            {
                positive: false,
                text: "-100% damage penalty"
            },
            {
                positive: false,
                text: "No random critical hits"
            },
            {
                positive: false,
                text: "Wearer cannot carry the intelligence briefcase \nor PASS Time JACK"
            }
        ]
    },
    {
        name: "The Direct Hit",
        tfclass: "Soldier",
        img: require("./img/direct_hit.png"),
        level: "Level 1 Rocket Launcher",
        attrs: [
            {
                positive: true,
                text: "+25% damage bonus"
            },
            {
                positive: true,
                text: "+80% projectile speed"
            },
            {
                positive: true,
                text: "Mini-crits targets launched airborne by \nexplosions, grapple hooks or rocket \npacks."
            },
            {
                positive: false,
                text: "-70% explosion radius"
            }
        ]
    },
    {
        name: "The Cow Mangler 5000",
        tfclass: "Soldier",
        img: require("./img/cow_mangler.png"),
        level: "Level 30 Focused Wave Projector",
        attrs: [
            {
                positive: true,
                text: "Does not require ammo"
            },
            {
                positive: true,
                text: "Alt-Fire: A charged shot that \nmini-crits players, sets them on fire \nand disables buildings for 4 sec"
            },
            {
                positive: false,
                text: "No random critical hits"
            },
            {
                positive: false,
                text: "Deals only 20% damage to buildings"
            },
            {
                positive: false,
                text: "Minicrits whenever it would normally \ncrit"
            }
        ]
    }
];