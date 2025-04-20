from fastapi import UploadFile
from fastapi.responses import StreamingResponse
from PIL import Image
import io

async def resize_image(file: UploadFile, width: int, height: int):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents))
    resized = image.resize((width, height))
    buf = io.BytesIO()
    resized.save(buf, format="PNG")
    buf.seek(0)
    return StreamingResponse(buf, media_type="image/png")
