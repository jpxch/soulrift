def get_runes_for_champion(champion: str, vs: str = None):
    return {
        "champion": champion,
        "vs": vs,
        "runes": [
            {
                "title": "Most Popular",
                "primary": ["Electrocute", "Sudden Impact", "Eyeball Collection" ],
                "secondary": ["Manaflow Band", "Scorch"],
                "winrate": "52.4%"
            },
            {
                "title": "Highest Win Rate",
                "primary": ["Summon Aery", "Manaflow Band", "Transendence"],
                "secondary": ["Scorch", "Nimbus Cloak"],
                "winrate": "54.8%"
            },
            {
                "title": "Anti-Lane Option",
                "primary": ["Fleet Footwork", "Overheal", "Legend: Alacrity"],
                "secondary": ["Bone Plating", "Revitalize"],
                "winrate": "49.1%"
            }
        ]
}
