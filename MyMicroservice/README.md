# MyMicroservice

A minimal Node.js microservice that provides a profile endpoint.

## How to Run

To run this microservice on your computer, use the following command:

```bash
docker run -d -p 3000:3000 capak07/mymicroservice:latest
```

Once running, you can access the profile at:
`http://localhost:3000/me`

## Endpoint

- **GET /me**: Returns a JSON object containing name, role, and status.
