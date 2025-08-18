package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/jackc/pgx/v5"
)

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello from Go Fiber backend!")
	})

	app.Get("/db", func(c *fiber.Ctx) error {
		conn, err := pgx.Connect(context.Background(), os.Getenv("DATABASE_URL"))
		if err != nil {
			return c.Status(500).SendString(fmt.Sprintf("DB connection error: %v", err))
		}
		defer conn.Close(context.Background())
		return c.SendString("Connected to PostgreSQL!")
	})

	if err := app.Listen(":3001"); err != nil {
		log.Fatalf("failed to start server: %v", err)
	}
}
