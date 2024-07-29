#!/bin/sh

# Environment variable values in index.html
sed -i "s|__SERVER_URL__|${SERVER_URL}|g" /usr/share/nginx/html/index.html

# Start the main process (e.g., Nginx)
exec "$@"