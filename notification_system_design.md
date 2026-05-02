# Notification System Design

## Overview
Simple backend system to send and retrieve notifications.

## Components
- Express server
- Controller layer
- Logging middleware
- Vehicle maintenance scheduler

## Flow
Client → API → Controller → Data Store → Response

## Logging
All operations are logged using external logging API.

## API Output Screenshots

### POST API
![POST](./screenshots/post_api.png)

### GET API
![GET](./screenshots/get_api.png)