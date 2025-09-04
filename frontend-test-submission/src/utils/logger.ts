// src/utils/logger.ts
export async function Log(stack: string, level: string, packageName: string, message: string) {
  const AUTH_TOKEN = "yourAccessTokenHereeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzaGFsaW5pczIyY3NlQHNyaXNoYWt0aGkuYWMuaW4iLCJleHAiOjE3NTY5NzcyNDQsImlhdCI6MTc1Njk3NjM0NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjUxZGUyYmI2LWQ2NzktNDMwMS05NTlhLTBiNzRkM2RmNjBkNyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InNoYWxpbmkgcyIsInN1YiI6IjNkMTdjNzI5LTE4MmUtNGQ5Ny05YWZjLTMwMWYzMTZmMTM4ZSJ9LCJlbWFpbCI6InNoYWxpbmlzMjJjc2VAc3Jpc2hha3RoaS5hYy5pbiIsIm5hbWUiOiJzaGFsaW5pIHMiLCJyb2xsTm8iOiIyMmNzMTM0IiwiYWNjZXNzQ29kZSI6IkJVZVp1RCIsImNsaWVudElEIjoiM2QxN2M3MjktMTgyZS00ZDk3LTlhZmMtMzAxZjMxNmYxMzhlIiwiY2xpZW50U2VjcmV0IjoiQXRERmhtZGZjcnF5UnJKWCJ9.4BM7Z3YYhm5nuN5caN1wxWpXJrkSbrZ-_ChM83VNDC0"; 

  try {
    const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${AUTH_TOKEN}`
      },
      body: JSON.stringify({ stack, level, package: packageName, message })
    });

    const data = await response.json();
    console.log("Log Response:", data);
  } catch (error) {
    console.error("Log Error:", error);
  }
}