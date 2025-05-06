def get_matchup_tip(champion: str, vs: str) -> str:
    tips = {
        ("Ahri", "Zed"): "Play safe until level 6, use charm when he ults.",
        ("Darius", "Teemo"): "Use bushes to avoid poke, go for all-in at 3.",
    }
    return tips.get((champion, vs), "No matchup top found yet.")
