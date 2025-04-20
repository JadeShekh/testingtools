from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from tools.resize_image import resize_image

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/resize-image")
async def resize(file: UploadFile = File(...), width: int = Form(...), height: int = Form(...)):
    return await resize_image(file, width, height)
