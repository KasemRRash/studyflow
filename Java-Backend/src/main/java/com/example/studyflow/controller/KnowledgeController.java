package com.example.studyflow.controller;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.*;

@RestController
public class KnowledgeController {
	
	private final List <String> categories = List.of(
			"Informatik"
	);
	//MediaWiki-API-Endpunkt
	//Beispiel URL um Seiten aus einer Wiki Kategorie zu holen: 
	//https://de.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Kategorie:Informatik&cmlimit=10&format=json

	//Template um Nachrichten von WikipediaAPI zu erhalten und auch senden zu können
	private final RestTemplate restTemplate = new RestTemplate();
	
	@GetMapping("/api/knowledge")
	public String getRandomFact() {
		
		Random random = new Random(); 
		
		String randomCategory = categories.get(random.nextInt(categories.size()));
		
		String categoryUrl = "https://de.wikipedia.org/w/api.php?action=query&list=categorymembers" +
                "&cmtitle=Kategorie:"+ randomCategory +"&cmlimit=50&format=json";
	
		try {
			Map<String, Object> response = restTemplate.exchange(
					categoryUrl, 
					org.springframework.http.HttpMethod.GET,
					null,
					new ParameterizedTypeReference<Map<String, Object>>() {}
			).getBody(); 
			
			Map<String, Object> query = (Map<String, Object>) response.get("query");
			List<Map<String, Object>> pages = (List<Map<String, Object>>) query.get("categorymembers"); 
			
			if (pages.isEmpty()) return "Keine Artikel gefunden.";
			
			Map<String, Object> randomPage = pages.get(new Random().nextInt(pages.size()));
			String title = (String) randomPage.get("title");  
			String encodedTitle = URLEncoder.encode(title.replace(" ", "_"), StandardCharsets.UTF_8); 
			String url = (String) "https://de.wikipedia.org/wiki/" + encodedTitle;
			String summaryUrl = "https://de.wikipedia.org/api/rest_v1/page/summary/" + encodedTitle;
			
			Map<String, Object> summary = restTemplate.exchange(
					summaryUrl, 
					org.springframework.http.HttpMethod.GET,
					null,
					new ParameterizedTypeReference<Map<String, Object>>() {}
			).getBody(); 
			
			System.out.println("Antwort der Zusammenfassung: " + summary);
			
			if (summary != null && summary.containsKey("extract")) {
				String extract = summary.get("extract").toString();
				return "<html><body>" + 
				"<a href='" + url + "' target='_blank'>" +
						"<h2>" + title + "</h2>" + 
						"<p>" + extract + "</p>" + 
						"</a>"+
						"</body></html>";
			} else {
				return "Keine Zusammenfassung für " + title; 
			}
		} catch (Exception e) {
			e.printStackTrace();
			return "Fehler: " + e.getMessage();
		}
	}

	/*
	// REST API: Wikipedia Seiten über /summary aufrufen
	// mithilfe von Begriffen aus einer Liste 

    private final List<String> facts = List.of(
    		"Java",
            "IT-Service",
            "Programmierschnittstelle",
            "Java Spring Boot",
            "Künstliche Intelligenz"
    );
    
    private final Random random = new Random(); 
    

    @GetMapping("/api/knowledge")
    public String getWikipedia() {
    	String topic = facts.get(random.nextInt(facts.size()));
    	String url = "https://de.wikipedia.org/api/rest_v1/page/summary/" + topic; 
    	
    	RestTemplate restTemplate = new RestTemplate(); 
    	
    	try {
    		Map response = restTemplate.getForObject(url, Map.class);
    		if ( response != null && response.containsKey("extract")) {
    			return "**" + topic.replace("_", " ") + "**: " + response.get("extract").toString();
      		}else {
      			return "Keine Informationen auf Wikipedia gefunden für " + topic;
      		}
    	} catch (Exception e) {
    		return "Fehler beim Abrufen von Wikipedia-Daten: " + e.getMessage();
    	}
    }
    */
	
    /*
     // Random facts aus einer Liste holen 
    @GetMapping("/api/knowledge")
    public String getRandomFact() {
        Random random = new Random();
        return facts.get(random.nextInt(facts.size()));
    }
    */
}
