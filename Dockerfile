# Verwende OpenJDK-Image
FROM eclipse-temurin:17-jdk-alpine

# Arbeitsverzeichnis
WORKDIR /app

# Maven build aus lokalem Verzeichnis kopieren (JAR)
COPY target/studyflow-1.0.0.jar app.jar

# App starten
ENTRYPOINT ["java", "-jar", "app.jar"]
