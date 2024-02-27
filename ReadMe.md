<h1 align="center" style="font-weight: bold;">API REST - Historic IPCA 💻</h1>

<p align="center">
 <a href="#tech">Technologies</a> • 
 <a href="#started">Getting Started</a>
</p>

<p align="center">
    <b>The API I've developed features a robust and flexible structure to meet diverse needs in the context of historical IPCA (Consumer Price Index for All Urban Consumers) information. Implemented with the REST (HTTP) communication protocol, the API offers four distinct routes, each tailored for different use cases:</b>
</p>

- Complete Collection: 
- Route : /historicIPCA<p align="start">This route returns the complete collection of historical IPCA data. It's useful when users need all available records without specific filters.</b>
</p>

- Filtered Collection by Year: 
- Route : /historicIPCA?year={year}<p align="start">By providing the "year" parameter in this route, users can obtain a filtered collection containing only records for the specified year. This facilitates obtaining specific information for more detailed temporal analyses.</b>
</p>

- Specific Record by ID: 
- Route : /historicIPCA/:{id}<p align="start">This route enables the retrieval of a single record from the collection, identified by its unique ID. It's useful when there's a need to access specific details of a particular IPCA data point.</b>
</p>

- Adjustment Calculation: 
- Route : /historicIPCA/calculo?valor={valor}&mesInicial={mesInicial}&anoInicial={anoInicial}&mesFinal={mesFinal}&anoFinal={anoFinal}<p align="start">The adjustment calculation route allows users to make adjustment projections based on available API data. By providing appropriate parameters such as initial value, adjustment rate, and period, users get an estimate of the adjusted value over time.</b>
</p>

<p align="center">
     <a href="https://github.com/Marcos-Monte/historicIPCA-API">📱Visit the Project repository</a>
</p>

<h2 id="tech">💻 Technologies</h2>

- Express
- Postman
- API RESTful
- NodeJS
- Git / Github


<h2 id="started">🚀 Getting started</h2>


<h3>Prerequisites</h3>

- JavaScript Development Environment: [NodeJS](https://nodejs.org/en)
- Versioning Control: [Git](https://git-scm.com/)

<h3>Cloning</h3>

How to clone the project

```bash
git clone https://github.com/Marcos-Monte/historicIPCA-API
```

<h3>Starting</h3>

How to start the project

```bash
cd historicIPCA-API
node index.js
```
<h3>Address</h3>

How to access the project in the browser

```bash
http://localhost:3333/historicIPCA
```