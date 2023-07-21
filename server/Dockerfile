FROM mongo:latest

COPY [".", "/home/mongo"]

RUN mkdir -p /home/mongo/data/db01/
RUN mkdir -p /home/mongo/data/db02/
RUN mkdir -p /home/mongo/data/db03/

RUN chmod +x /home/mongo/rs-init.sh
CMD /home/mongo/rs-init.sh
