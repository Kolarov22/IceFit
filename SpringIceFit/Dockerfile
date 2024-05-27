FROM openjdk:21
ADD target/SpringIceFit-0.0.1-SNAPSHOT.jar myapp.jar
RUN sh -c 'touch /myapp.jar'
ENTRYPOINT ["java","-jar","/myapp.jar"]