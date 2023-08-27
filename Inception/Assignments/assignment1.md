# Assignment 1

### Qs 1. What is Emmet?
> ### Ans. Emmet is a powerful tool that enhances the efficiency of HTML and CSS coding. With Emmet, developers can write shorthand code snippets that expand into complete HTML and CSS structures, saving a significant amount of time and reducing repetitive typing. 
> ### For instance, if you want to create a list of navigation links in HTML, you can use an Emmet abbreviation like ul>li*5>a and then trigger the expansion command. Emmet will automatically generate the corresponding HTML code with five list items containing anchor tags.


### Qs 2. Difference between a Library and Framework?

> ### Ans. Library: A library is like a toolbox with specific tools that you can choose and use whenever you need them. You're in control of when and how you use these tools in your project.

> ### Framework: A framework is like a construction kit for building a specific type of building. It provides a structure and rules to follow, and you build your project within that framework's structure.

>### In essence, a library gives you tools to use, while a framework gives you a structure to follow.
>### React (Library): You use React to build UI components and control how you structure your application. You have the freedom to integrate additional libraries and tools as needed.

>### Angular (Framework): Angular provides a comprehensive set of tools and guidelines that dictate more aspects of your application's structure and behavior. It's a complete solution for building web applications, encompassing more than just UI components.

> ### Both React and Angular are powerful tools, and the choice between them depends on your project's requirements and your preferred level of control and structure.

### Qs.3 What is CDN? Why do we use it?
> Ans. CDN stands for Content Delivery Networks. These are servers distributed over various geographical locations which help fetch the required data from nearest server.

>CDNs offer several benefits that improve the performance and user experience of websites and web applications:

>Faster Load Times: CDNs reduce the distance between the user and the server delivering the content. This decreases latency and improves load times, especially for users located far from the origin server.

>Improved Scalability: CDNs handle a large portion of the web traffic, offloading requests from the origin server. This helps prevent overloading the origin server during traffic spikes.

>Global Reach: CDNs have servers spread across the world, allowing content to be delivered from nearby locations, reducing the distance data needs to travel.

>Load Balancing: CDNs distribute incoming traffic across multiple servers, preventing any one server from becoming overloaded and maintaining consistent performance.

>Caching: CDNs store copies of content on their servers. When a user requests content that's already cached, the CDN serves the cached copy, reducing the load on the origin server and speeding up content delivery.

>DDoS Mitigation: CDNs can provide protection against Distributed Denial of Service (DDoS) attacks by absorbing and filtering malicious traffic before it reaches the origin server.

>Reliability: CDNs often have redundant servers and failover mechanisms, ensuring that content is available even if some servers experience issues.

>To use a CDN, web developers typically include links to the CDN-hosted resources in their HTML, CSS, or JavaScript files. This way, when a user accesses the website, their browser automatically fetches content from the CDN server closest to them.

>In summary, CDNs enhance the performance, reliability, and scalability of websites and applications by distributing content across a network of servers, reducing latency, and improving load times for users worldwide.

Qs 4. Why is React known as React?

> Ans. The main principle behind React is its reactive nature, which means that when the underlying data changes, React automatically re-renders the affected parts of the user interface to reflect those changes. This reactivity is achieved through the concept of a "virtual DOM," where React maintains a lightweight representation of the actual DOM in memory. When data changes, React compares the virtual DOM with the real DOM and updates only the necessary parts, minimizing the need for full page re-renders.

Qs 5. What is crossorigin in script tag?

>Ans. The crossorigin attribute in a script tag is used to control how browsers handle cross-origin requests when loading external JavaScript files. Cross-origin requests occur when a web page hosted on one domain (or origin) tries to request resources from a different domain. Browsers enforce security policies to prevent potentially harmful interactions between different origins.

>The crossorigin attribute has two possible values:

>anonymous: This is the default value if the crossorigin attribute is not explicitly set. When crossorigin="anonymous" is used, the browser fetches the script from the external domain and doesn't include any credentials (such as cookies) in the request. This is suitable for public resources that don't require authentication.

>use-credentials: When crossorigin="use-credentials" is used, the browser sends credentials (such as cookies or HTTP authentication) along with the request for the script. This is useful when you're accessing resources that require authentication or authorization.

Qs 6. What is diference between React and ReactDOM?

>Ans. React is responsible for managing the component architecture, state, and rendering logic.
ReactDOM is responsible for interacting with the DOM, rendering React components into the browser, and managing their lifecycle.

Qs 7. 



