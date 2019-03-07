FROM python:3-alpine

RUN apk --no-cache add make

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

WORKDIR /src
