# User Registration Endpoint Documentation

## Endpoint

`POST /users/register`

---

## Description

This endpoint registers a new user. It validates the input, hashes the password, creates the user, and returns a JWT token along with the user data.

---

## Request Body

Send a JSON object in the following format:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Field Requirements

- `fullname.firstname` (string, required): At least 3 characters.
- `fullname.lastname` (string, optional): At least 3 characters if provided.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): At least 6 characters.

---

## Responses

### Success

- **Status Code:** `201 Created`
- **Body:**
    ```json
    {
      "token": "<jwt_token>",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
    ```json
    {
      "errors": [
        {
          "msg": "Error message",
          "param": "field",
          "location": "body"
        }
      ]
    }
    ```

---

## Example Request

```bash
curl -X POST http://localhost:4000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }'
```

---

# User Login Endpoint Documentation

## Endpoint

`POST /users/login`

---

## Description

Authenticates a user and returns a JWT token and user data if credentials are valid.

---

## Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Field Requirements

- `email` (string, required): Must be a valid email address.
- `password` (string, required): At least 6 characters.

---

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
    ```json
    {
      "token": "<jwt_token>",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

### Error

- **Status Code:** `401 Unauthorized`
- **Body:**
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

---

# User Profile Endpoint Documentation

## Endpoint

`GET /users/profile`

---

## Description

Returns the authenticated user's profile information. Requires a valid JWT token in the cookie or `Authorization` header.

---

## Request Headers

- `Cookie: token=<jwt_token>`
- or
- `Authorization: Bearer <jwt_token>`

---

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
    ```json
    {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
    ```

### Error

- **Status Code:** `401 Unauthorized`
- **Body:**
    ```json
    {
      "message": "Unauthorized"
    }
    ```

---

# User Logout Endpoint Documentation

## Endpoint

`GET /users/logout`

---

## Description

Logs out the authenticated user by blacklisting the JWT token and clearing the cookie.

---

## Request Headers

- `Cookie: token=<jwt_token>`
- or
- `Authorization: Bearer <jwt_token>`

---

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
    ```json
    {
      "message": "Logged out successfully"
    }
    ```

### Error

- **Status Code:** `401 Unauthorized`
- **Body:**
    ```json
    {
      "message": "Unauthorized"
    }
    ```

---