# GDW_WS1920_Bomba_Zimmer_Nguyen

How to im lokalen Netzwerk:

1. Die Datei "index.js" im Source_Code Ordner in einer Entwicklungsumgebung der Wahl oeffnen.
2. Mit dem "npm install X" befehl folgende Module installieren: "moment", "express" und "request". X durch den Namen des Moduls austauschen.
3. Ein NodeJS Terminal oeffnen.
4. Den Server mit dem Befehl "node index.js" starten. 
5. Warten bis der Server gestartet ist (Es erscheint eine Rueckmeldung im Terminal).
6. Mit hilfe eines Webbrowsers oder einem REST API Client ein GET Request an die folgende URL: "http://localhost:3000/" senden.
7. Antwort im REST Client bzw. Browser entgegennehmen.

How to mit 2 Devices:

1. Die Datei "index.js" im Source_Code Ordner in einer Entwicklungsumgebung der Wahl oeffnen.
2. Mit dem "npm install X" befehl folgende Module installieren: "moment", "express" und "request". X durch den Namen des Moduls austauschen.
3. Im Code folgende aenderungen vornehmen: 
	3.1 "app.listen(PORT, () => console.log(`Server ist auf Port ${PORT} gestartet.`));" durch "(app.listen(3000, "XXX.XXX.XX.XX");)"
	3.2 Die Platzhalter IP4 Adresse (XXX.XXX.XX.XX) durch eigene austauschen.
4. Ein NodeJS Terminal oeffnen.
5. Den Server mit dem Befehl "node index.js" starten.
6. Warten bis der Server gestartet ist.
7. Ein zweites Geraet im selben Netzwerk nutzen zur Hand nehmen.
8. Mit hilfe eines Webbrowsers oder einem REST API Client ein GET Request an die folgende URL: "http://XXX.XXX.XX.XX:3000/" senden. Die bei 3.2 bereits verwendete IP4 Adresse einsetzen.
9. Antwort im REST Client bzw. Browser entgegennehmen. 
