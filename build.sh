# Build docker image
docker build --no-cache --add-host=radiozvezda.ru:79.137.221.91 --platform linux/amd64 -f ./Dockerfile -t cr.yandex/crp5pqb59lhrqtekuev4/tvz-radiozvezda-front:latest .

# Push Docker image
docker push cr.yandex/crp5pqb59lhrqtekuev4/tvz-radiozvezda-front:latest
