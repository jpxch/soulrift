from fastapi import FastAPI
from app.routes import matchup, runes
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(matchup.router, prefix="/matchup")
app.include_router(runes.router, prefix="/runes")


@app.get("/")
def root():
    return {"massage": "Soulrift beackend is running"}
