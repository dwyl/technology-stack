# Separation of Concerns Diagram

<img src="https://github.com/user-attachments/assets/cda3ec6a-c920-4192-bd6c-4e20837d9cd2" />

<!--
To Edit visit: 
https://docs.google.com/drawings/d/1ach2TPrH4Qhnvv1GjfU3lru-zT4ZpJEDjLdBliEm_9A/edit
-->

<hr />

I _attempted_ to create the
diagram using `Mermaid`:

```mermaid
---
config:
  theme: 'base'
  themeVariables:
    primaryColor: '#CEF4EE'
    primaryTextColor: '#556A72'
    lineColor: '#F8B229'
    secondaryColor: '#006100'
  flowchart:
    defaultRenderer: "elk"
---
graph BT

    WebClient["`<h3>Web Client</h3>(All Devices)`"]
    MobileApp["<h4>Native Mobile App</h4><br/>(iOS / Android)"]
    
    WebClient <--> WebApp
    MobileApp <--> WebApp
    
    WebApp["<h2>Phoenix Web App</h2><br /> Handles all Web/API requests involving <b>Business Logic</b>. Serves HTTP, JSON and WebSocket Requests<br/>"]
    
    WebApp --> Auth["<h2>Auth</h2><br />
  Handles Authentication, Authorization, Permissions via Role-based Access Control"]

	Auth --> authDb[(Auth DB)]
	authDb --> authDb2[(Auth Backup)]
  Auth <--> Comms

    WebApp <--> Comms["<h2>Comms Service</h2><br /><b>3<sup>rd</sup> Party Services Send Email, SMS & Notifications</b>. 
Tracks deliverability, open & click-through rate. Dashboards display stats + insights."]
		Comms <--> AWS["<h3>AWS SES/SNS</h3> Sends Email, SMS and Mobile Notifications"]
    Comms --> comDb[(Comms DB)]
		comDb --> backDb

		WebApp <--> Analytics["<h2>Analytics + Logs</h2> Captures anonymous web/mobile analytics events and logs. Renders metrics dashboards."]
		Analytics --> anaDb[(Analytics <br />+ Logs DB)]
		anaDb --> backDb

   WebApp --> mainDb[("<h2>Main DB</h2>")]
	 mainDb --> backDb[("<h2>Backup DB</h2> Read-only Replica")]
    
    classDef entryPoint stroke:#818cf8,fill:#eef2ff
    classDef WebApp stroke:#2dd4bf,fill:#f0fdfa
    classDef process stroke:#a78bfa,fill:#f5f3ff
    classDef tool stroke:#fb923c,fill:#fff7ed
		classDef db stroke:#336791,fill:#e3edf5
		classDef aws stroke:#252F3E,fill:#ffc267
		
    class WebClient,MobileApp entryPoint
    class WebApp WebApp
    class Auth process
    class Comms,Analytics tool
		class authDb,authDb2,mainDb,backDb,anaDb,comDb db
		class AWS, aws
```

But sadly the renderer is **_non-deterministic_**
(i.e. we can't control the layout or position of elements)
See:
[dwyl/technology-stack#172](https://github.com/dwyl/technology-stack/issues/172#issuecomment-5220721045)