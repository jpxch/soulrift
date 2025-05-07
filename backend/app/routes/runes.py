from fastapi import APIRouter, Query
from app.services.runes import get_runes_for_champion

router = APIRouter()

@router.get("/")
def runes(champion: str = Query(...), vs: str = Query(...)):
    return get_runes_for_champion(champion, vs)
