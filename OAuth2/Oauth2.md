#Overview
    OAuth 2 is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service, such as Facebook, GitHub, and DigitalOcean. It works by delegating user authentication to the service that hosts the user account, and authorizing third-party applications to access the user account. OAuth 2 provides authorization flows for web and desktop applications, and mobile devices.

    This informational guide is geared towards application developers, and provides an overview of OAuth 2 roles, authorization grant types, use cases, and flows.

    Let's get started with OAuth Roles!

#OAuth Roles
    OAuth defines four roles:

    Resource Owner
    Client
    Resource Server
    Authorization Server
    We will detail each role in the following subsections.

#Registration
    Application Registration
    Before using OAuth with your application, you must register your application with the service. This is done through a registration form in the "developer" or "API" portion of the service's website, where you will provide the following information (and probably details about your application):
#Fields
    Application Name
    Application Website
    Redirect URI or Callback URL
    The redirect URI is where the service will redirect the user after they authorize (or deny) your application, and therefore the part of your application that will handle authorization codes or access tokens.

#Client ID and Client Secret
    Once your application is registered, the service will issue "client credentials" in the form of a client identifier and a client secret. The Client ID is a publicly exposed string that is used by the service API to identify the application, and is also used to build authorization URLs that are presented to users. The Client Secret is used to authenticate the identity of the application to the service API when the application requests to access a user's account, and must be kept private between the application and the API.

#Authorization Grant
    In the Abstract Protocol Flow above, the first four steps cover obtaining an authorization grant and access token. The authorization grant type depends on the method used by the application to request authorization, and the grant types supported by the API. OAuth 2 defines four grant types, each of which is useful in different cases:

    Authorization Code: used with server-side Applications
    Implicit: used with Mobile Apps or Web Applications (applications that run on the user's device)
    Resource Owner Password Credentials: used with trusted Applications, such as those owned by the service itself
    Client Credentials: used with Applications API access
    Now we will describe grant types in more detail, their use cases and flows, in the following sections.

#Access Token Response
    {"access_token":"ACCESS_TOKEN","token_type":"bearer","expires_in":2592000,"refresh_token":"REFRESH_TOKEN","scope":"read","uid":100101,"info":{"name":"Mark E. Mark","email":"mark@thefunkybunch.com"}}


#Access Token Usage
    curl -X POST -H "Authorization: Bearer ACCESS_TOKEN""https://api.digitalocean.com/v2/$OBJECT" 

#Refresh Token Flow

    https://cloud.digitalocean.com/v1/oauth/token?grant_type=refresh_token&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&refresh_token=REFRESH_TOKEN

#Complete Link
    https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2
