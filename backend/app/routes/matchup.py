from fastapi import APIRouter, Query
from app.services.riot import get_matchup_tip


router = APIRouter()


@router.get("/")
def matchup(champion: str = Query(...), vs: str = Query(...)):
    tip = get_matchup_tip(champion, vs)
    return {"tip": tip}
